#!/usr/bin/env python3
"""
scripts/post_one_article.py
未掲載の美容トピック1件を900〜1000字の日本語記事に生成し、
Gemini で記事専用画像を生成して public/images/articles/ に保存、
src/data/extra_articles.json に追加する。
"""

import base64
import json
import logging
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path
from urllib.parse import quote

from google import genai
from google.genai import types

# ---------------------------------------------------------------------------
# パス設定
# ---------------------------------------------------------------------------
BASE_DIR            = Path(__file__).parent.parent
EXTRA_ARTICLES_PATH = BASE_DIR / "src" / "data" / "extra_articles.json"
IMAGES_DIR          = BASE_DIR / "public" / "images" / "articles"
DATA_DIR            = Path(__file__).parent / "data"
BEAUTY_TOPICS_PATH  = DATA_DIR / "beauty_topics.json"
POSTED_LOG          = DATA_DIR / "posted_ids.log"

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
MODEL_NAME     = "gemini-2.5-flash"
IMAGE_MODEL    = "gemini-2.5-flash-image"

# ---------------------------------------------------------------------------
# API コスト追跡
# ---------------------------------------------------------------------------
COST_LOG_PATH   = DATA_DIR / "api_cost_log.json"
BUDGET_WARN_USD = 8.0   # この金額を超えたら警告
BUDGET_STOP_USD = 10.0  # この金額を超えたら停止

# Gemini 2.5 Flash の推定単価（概算）
COST_PER_TEXT_RUN  = 0.002   # テキスト生成1回あたり（入出力合計）
COST_PER_IMAGE_RUN = 0.015   # 画像生成1回あたり（概算）

def load_cost_log() -> dict:
    if not COST_LOG_PATH.exists():
        return {"total_usd": 0.0, "runs": []}
    try:
        return json.loads(COST_LOG_PATH.read_text(encoding="utf-8"))
    except Exception:
        return {"total_usd": 0.0, "runs": []}

def save_cost_log(log: dict) -> None:
    COST_LOG_PATH.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")

def check_budget() -> tuple[float, bool]:
    """現在の累計コストを返す。予算超過なら (total, True) を返す。"""
    log = load_cost_log()
    total = log.get("total_usd", 0.0)
    if total >= BUDGET_STOP_USD:
        logger.error(f"🚨 API予算上限（${BUDGET_STOP_USD}）に達しました！現在の累計: ${total:.3f}")
        logger.error("記事生成を停止します。Google Cloud Consoleで請求を確認してください。")
        return total, True
    if total >= BUDGET_WARN_USD:
        logger.warning(f"⚠️  API予算警告: 累計${total:.3f} / 上限${BUDGET_STOP_USD} に近づいています！")
    return total, False

def record_cost(cost_usd: float, article_title: str) -> float:
    """コストを記録し、新しい累計を返す。"""
    log = load_cost_log()
    log["total_usd"] = round(log.get("total_usd", 0.0) + cost_usd, 4)
    log.setdefault("runs", []).append({
        "date": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "article": article_title[:40],
        "cost_usd": round(cost_usd, 4),
        "cumulative_usd": log["total_usd"],
    })
    save_cost_log(log)
    return log["total_usd"]

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

SYSTEM_INSTRUCTION = (
    "あなたは人気美容・コスメメディアの編集長です。"
    "読者が「今すぐ試したい！」と思うような、わかりやすく魅力的な文章を書いてください。"
    "\n\n"
    "【絶対ルール】\n"
    "1. ソースが英語であっても、出力はすべて自然な日本語のみで行うこと。英語を一切混入させないこと。\n"
    "2. 記事本文の合計文字数は1000〜1400文字を厳守すること。\n"
    "3. 箇条書きを一切使わず、読み物として深掘りした「解説文」形式で書くこと。\n"
    "4. 本文には必ず3〜4個のセクション見出しをMarkdownの「## 見出しテキスト」形式で入れること。"
    "見出しは検索キーワードを意識した具体的な文言にすること。\n"
)

ARTICLE_PROMPT = """\
以下の海外美容トレンド・コスメ情報について、指定のフォーマットで出力してください。

## トピック情報
- トピック名: {name}
- 参照URL: {url}
- 英語概要: {description}
- カテゴリ: {tags}

## 出力フォーマット（この順番で、ラベルをそのまま使って出力すること）

[キャッチコピー]
日本人読者が「気になる！」と思う魅力的な一文タイトル。

[本文]
以下の構成で合計1000〜1400文字の解説文を書くこと。箇条書き不可。流れるような文章で。
導入以外の各セクションの先頭にはMarkdownの「## 見出しテキスト」形式の見出しを必ず入れること。
見出しは検索キーワードを意識した具体的な文言にすること。
・導入（約150字・見出しなし）：このトレンドや成分が注目される背景や課題を引き込む書き出しで。
・詳細解説（約450字）：見出し例「## {name}の特徴と仕組み」。特徴・仕組み・他のアプローチとの違いを深掘り解説。
・活用シーン（約250字）：見出し例「## どんな肌質・悩みに向いているか」。どんな肌タイプ・悩み・シーンに向いているか具体的に。
・入手方法・価格帯（約200字）：見出し例「## 価格帯とおすすめの選び方」。おすすめブランド例、価格帯、購入できる場所を簡潔に。
・まとめ（約100字）：見出し例「## まとめ」。魅力を一言で締め、読者の行動を促す一文で終わる。

---
出力はすべて日本語のみ。余計な前置き不要。
"""

SOURCE_NAMES = {
    "allure":            "Allure",
    "byrdie":            "Byrdie",
    "vogue_beauty":      "Vogue Beauty",
    "cosmopolitan":      "Cosmopolitan",
    "harpers_bazaar":    "Harper's Bazaar",
    "techcrunch_beauty": "TechCrunch",
    "instyle":           "InStyle",
    "refinery29":        "Refinery29",
}

def source_name(s: str) -> str:
    return SOURCE_NAMES.get(s.lower(), s.replace("_", " ").title())

def load_posted() -> set:
    if not POSTED_LOG.exists():
        return set()
    return {l.strip() for l in POSTED_LOG.read_text(encoding="utf-8").splitlines() if l.strip()}

def append_posted(topic_id: str) -> None:
    with open(POSTED_LOG, "a", encoding="utf-8") as f:
        f.write(topic_id + "\n")

def generate_image(client, article_id: str, title: str, tags: list) -> str:
    """Gemini で画像生成し public/images/articles/ に保存。失敗時は空文字を返す。"""
    prompt = (
        f"美容雑誌のプロフェッショナルな広告写真。テーマ: {title}。"
        f"キーワード: {', '.join(tags[:3])}。"
        "高品質スタジオ撮影、清潔感のある白背景またはパステルカラー、"
        "コスメ・スキンケア製品が主役。人物の顔なし。"
    )
    try:
        response = client.models.generate_content(
            model=IMAGE_MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE"],
            ),
        )
        for part in response.candidates[0].content.parts:
            inline = getattr(part, "inline_data", None)
            if inline is not None:
                raw = inline.data
                image_bytes = raw if isinstance(raw, (bytes, bytearray)) else base64.b64decode(raw)
                mime = getattr(inline, "mime_type", "image/png")
                ext = "jpg" if "jpeg" in mime or "jpg" in mime else "png"
                IMAGES_DIR.mkdir(parents=True, exist_ok=True)
                out_path = IMAGES_DIR / f"{article_id}.{ext}"
                out_path.write_bytes(image_bytes)
                logger.info(f"画像保存: {out_path} ({len(image_bytes):,} bytes)")
                return f"/images/articles/{article_id}.{ext}"
        logger.warning("画像データが返されませんでした")
        return ""
    except Exception as e:
        logger.warning(f"Gemini画像生成失敗（フォールバックなし）: {e}")
        return ""

def main() -> int:
    if not GEMINI_API_KEY:
        logger.error("GEMINI_API_KEY が未設定です。")
        return 1

    if not BEAUTY_TOPICS_PATH.exists():
        logger.error(f"データファイルが見つかりません: {BEAUTY_TOPICS_PATH}")
        return 1

    # 予算チェック（開始前）
    current_total, over_budget = check_budget()
    if over_budget:
        return 1
    logger.info(f"💰 API累計コスト: ${current_total:.3f} / 上限${BUDGET_STOP_USD}")

    topics  = json.loads(BEAUTY_TOPICS_PATH.read_text(encoding="utf-8"))
    posted  = load_posted()
    pending = [t for t in topics if t.get("id") not in posted and t.get("name")]

    if not pending:
        logger.info("未掲載のトピックがありません。")
        return 0

    # 残量チェック・警告
    remaining = len(pending)
    if remaining <= 10:
        logger.warning(f"🚨 緊急: トピック残量が{remaining}件です！今すぐ補充が必要です。")
    elif remaining <= 30:
        logger.warning(f"⚠️  トピック残量が{remaining}件です（30件以下）。近いうちに補充してください。")
    else:
        logger.info(f"トピック残量: {remaining}件")

    topic = pending[0]
    logger.info(f"対象: {topic['name']}")

    client = genai.Client(api_key=GEMINI_API_KEY)

    # 記事テキスト生成
    prompt = ARTICLE_PROMPT.format(
        name=topic.get("name", ""),
        url=topic.get("url", ""),
        description=topic.get("description", "（概要なし）"),
        tags=", ".join(topic.get("tags", [])) or "美容",
    )
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_INSTRUCTION,
            temperature=0.8,
            max_output_tokens=8192,
        ),
    )
    raw_text = response.text.strip()
    logger.info(f"生成文字数: {len(raw_text)}字")

    # セクション抽出
    def extract_section(label: str, text: str) -> str:
        m = re.search(rf"\[{label}\]\s*\n(.*?)(?=\n\[|\Z)", text, re.DOTALL)
        return m.group(1).strip() if m else ""

    catchcopy = extract_section("キャッチコピー", raw_text)
    body      = extract_section("本文", raw_text)

    if not body:
        body = raw_text

    # 品質チェック：本文400字未満またはタイトル空の場合は再生成
    MIN_BODY_CHARS = 400
    if len(body) < MIN_BODY_CHARS or not catchcopy:
        logger.warning(f"品質不足（本文{len(body)}字、タイトル={'あり' if catchcopy else 'なし'}）→ 再生成します")
        response2 = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_INSTRUCTION,
                temperature=0.9,
                max_output_tokens=8192,
            ),
        )
        raw_text2 = response2.text.strip()
        catchcopy2 = extract_section("キャッチコピー", raw_text2)
        body2      = extract_section("本文", raw_text2)
        if not body2:
            body2 = raw_text2
        if len(body2) >= MIN_BODY_CHARS:
            logger.info(f"再生成成功（本文{len(body2)}字）")
            catchcopy, body = catchcopy2, body2
        else:
            logger.warning(f"再生成後も品質不足（{len(body2)}字）→ 元のテキストを使用")

    title   = catchcopy if catchcopy else topic["name"]
    summary = catchcopy[:150] + "…" if len(catchcopy) > 150 else catchcopy
    if not summary:
        summary = body[:150] + "…" if len(body) > 150 else body

    logger.info(f"キャッチコピー: {catchcopy[:40]}…" if catchcopy else "キャッチコピー: (なし)")
    logger.info(f"本文文字数: {len(body)}字")

    # 記事ID確定
    article_id   = f"b_{topic.get('id', '')[:12]}_{int(time.time())}"
    published_at = datetime.now().strftime("%Y-%m-%d")
    tags         = topic.get("tags") or ["美容"]

    # 画像生成
    logger.info("記事専用画像を生成中...")
    image_url = generate_image(client, article_id, title, tags)
    if image_url:
        logger.info(f"画像URL: {image_url}")
    else:
        logger.warning("画像生成スキップ（imageUrlなし）")

    # extra_articles.json 更新
    existing = json.loads(EXTRA_ARTICLES_PATH.read_text(encoding="utf-8")) if EXTRA_ARTICLES_PATH.exists() else []

    new_article = {
        "id":          article_id,
        "title":       title,
        "summary":     summary,
        "body":        body,
        "source":      source_name(topic.get("source", "")),
        "sourceUrl":   topic.get("url", ""),
        "tags":        tags[:5],
        "publishedAt": published_at,
        "imageUrl":    image_url,
    }

    updated = [new_article] + existing
    EXTRA_ARTICLES_PATH.write_text(json.dumps(updated, ensure_ascii=False, indent=2), encoding="utf-8")
    logger.info(f"extra_articles.json 更新: 合計{len(updated)}件")

    append_posted(topic.get("id", ""))

    # コスト記録
    run_cost = COST_PER_TEXT_RUN + (COST_PER_IMAGE_RUN if image_url else 0)
    new_total = record_cost(run_cost, title)
    logger.info(f"💰 今回のコスト: ${run_cost:.3f} / 累計: ${new_total:.3f} / 上限: ${BUDGET_STOP_USD}")
    if new_total >= BUDGET_WARN_USD:
        logger.warning(f"⚠️  累計コストが${BUDGET_WARN_USD}を超えました。Google Cloud Consoleで確認してください。")

    logger.info(f"完了: {topic['name']}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
