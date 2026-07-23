#!/usr/bin/env python3
"""
scripts/backfill_headings.py
過去の自動生成記事(##見出しが無いもの)にGeminiで見出しを後付けする。
本文の内容・文字数・事実関係は一切変えず、論理的な区切りに"## 見出し"を挿入するだけ。
"""

import json
import logging
import os
import sys
import time
from pathlib import Path

from google import genai

BASE_DIR = Path(__file__).parent.parent
EXTRA_ARTICLES_PATH = BASE_DIR / "src" / "data" / "extra_articles.json"

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
MODEL_NAME = "gemini-2.5-flash"

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s", datefmt="%H:%M:%S")
logger = logging.getLogger(__name__)

PROMPT = """\
以下は美容・スキンケア系メディアの記事本文です。内容・文字数・事実関係・文体は一切変えず、
論理的な区切りに Markdown の "## 見出し" を2〜4個挿入してください。

【ルール】
1. 元の文章は一字一句変えない(語尾や言い回しの書き換え禁止)。見出し行を追加するだけ。
2. 見出しは元の段落の内容を的確に要約した8〜18文字程度の日本語にすること。
3. 見出しは独立した行にし、前後に空行を入れること(## 見出し\\n\\n本文...)。
4. 最初の導入段落(1〜2文程度)には見出しをつけない。
5. 出力は見出しを挿入した本文全体のみ。前置き・説明・コードブロック記号は一切不要。

--- 元の本文 ---
{body}
--- ここまで ---
"""


def main():
    if not GEMINI_API_KEY:
        logger.error("GEMINI_API_KEY未設定")
        sys.exit(1)

    client = genai.Client(api_key=GEMINI_API_KEY)
    articles = json.loads(EXTRA_ARTICLES_PATH.read_text(encoding="utf-8"))

    targets = [a for a in articles if "## " not in (a.get("body") or "")]
    logger.info(f"対象記事: {len(targets)}件 / 全{len(articles)}件")

    limit = int(sys.argv[1]) if len(sys.argv) > 1 else len(targets)
    done = 0
    for a in targets[:limit]:
        try:
            resp = client.models.generate_content(
                model=MODEL_NAME,
                contents=PROMPT.format(body=a["body"]),
            )
            new_body = (resp.text or "").strip()
            # 安全装置: 大幅に文字数が変わっていたら(生成失敗/要約されすぎ等)採用しない
            if new_body and abs(len(new_body) - len(a["body"])) < len(a["body"]) * 0.25 and "## " in new_body:
                a["body"] = new_body
                done += 1
                logger.info(f"[OK] {a['id']} ({done}/{min(limit,len(targets))})")
            else:
                logger.warning(f"[SKIP] {a['id']} 差分が大きすぎるため見送り")
        except Exception as e:
            logger.warning(f"[ERROR] {a['id']}: {e}")
        time.sleep(1.2)

        if done % 20 == 0 and done > 0:
            EXTRA_ARTICLES_PATH.write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8")
            logger.info(f"中間保存: {done}件処理済み")

    EXTRA_ARTICLES_PATH.write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8")
    logger.info(f"完了: {done}件を見出し付きに更新")


if __name__ == "__main__":
    main()
