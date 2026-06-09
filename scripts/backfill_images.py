#!/usr/bin/env python3
"""
imageUrlが空または壊れた記事に Gemini 画像を一括生成して補完する
"""
import json
import os
import time
from pathlib import Path

env_path = Path(__file__).parent.parent / ".env.local"
if env_path.exists():
    for line in env_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("GEMINI_API_KEY="):
            os.environ["GEMINI_API_KEY"] = line.split("=", 1)[1].strip().strip('"').strip("'")

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
if not GEMINI_API_KEY:
    print("ERROR: GEMINI_API_KEY が見つかりません")
    import sys; sys.exit(1)

from google import genai
from google.genai import types

BASE_DIR   = Path(__file__).parent.parent
ARTICLES_PATH = BASE_DIR / "src" / "data" / "extra_articles.json"
IMAGES_DIR    = BASE_DIR / "public" / "images" / "articles"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

IMAGE_MODEL = "gemini-2.5-flash-image"

def is_corrupt(path: Path) -> bool:
    if not path.exists():
        return False
    return path.stat().st_size < 1000

def generate_image(client, article_id: str, title: str, tags: list) -> str:
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
            config=types.GenerateContentConfig(response_modalities=["IMAGE"]),
        )
        for part in response.candidates[0].content.parts:
            inline = getattr(part, "inline_data", None)
            if inline is not None:
                raw = inline.data
                image_bytes = raw if isinstance(raw, (bytes, bytearray)) else __import__('base64').b64decode(raw)
                mime = getattr(inline, "mime_type", "image/png")
                ext = "jpg" if "jpeg" in mime or "jpg" in mime else "png"
                out_path = IMAGES_DIR / f"{article_id}.{ext}"
                out_path.write_bytes(image_bytes)
                return f"/images/articles/{article_id}.{ext}"
        return ""
    except Exception as e:
        print(f"  画像生成失敗: {e}")
        return ""

def log(msg: str):
    import sys
    sys.stdout.buffer.write((msg + "\n").encode("utf-8", errors="replace"))
    sys.stdout.buffer.flush()

def main():
    articles = json.loads(ARTICLES_PATH.read_text(encoding="utf-8"))
    client = genai.Client(api_key=GEMINI_API_KEY)

    targets = []
    for a in articles:
        img_url = a.get("imageUrl", "")
        if not img_url:
            targets.append(a)
        elif img_url.startswith("/images/articles/"):
            fname = img_url.lstrip("/")
            fpath = BASE_DIR / "public" / fname
            if is_corrupt(fpath):
                targets.append(a)

    log(f"処理対象: {len(targets)}件（画像なし・壊れた記事）")

    updated = 0
    for i, article in enumerate(targets):
        title = article.get("title", "美容トレンド")
        tags  = article.get("tags", ["スキンケア"])
        old_url = article.get("imageUrl", "")
        article_id = article["id"]

        log(f"[{i+1}/{len(targets)}] {title[:30]}...")

        # 既存の壊れたファイルを削除
        if old_url and old_url.startswith("/images/articles/"):
            old_path = BASE_DIR / "public" / old_url.lstrip("/")
            if is_corrupt(old_path):
                old_path.unlink(missing_ok=True)

        # すでに有効な画像ファイルが存在する場合はスキップ（JSONだけ更新）
        existing_file = next(IMAGES_DIR.glob(f"{article_id}.*"), None)
        if existing_file and not is_corrupt(existing_file):
            new_url = f"/images/articles/{existing_file.name}"
            log(f"  既存ファイル使用: {new_url}")
        else:
            new_url = generate_image(client, article_id, title, tags)
            if new_url:
                log(f"  生成完了: {new_url}")
            else:
                log(f"  スキップ（生成失敗）")
            time.sleep(1)

        if new_url:
            for a in articles:
                if a["id"] == article_id:
                    a["imageUrl"] = new_url
                    break
            updated += 1

        # 10件ごとに中間保存
        if (i + 1) % 10 == 0:
            ARTICLES_PATH.write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8")
            log(f"  [中間保存: {i+1}件処理済み]")

    ARTICLES_PATH.write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8")
    log(f"\n完了: {updated}件の画像URLを設定しました")
    log(f"extra_articles.json を更新しました（全{len(articles)}件）")

if __name__ == "__main__":
    main()
