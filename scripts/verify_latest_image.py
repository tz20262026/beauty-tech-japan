#!/usr/bin/env python3
"""
post_one_article.py が追加した最新記事の imageUrl が、
実在しGit管理下に置けるファイルを指しているかを検証する。

過去に .gitignore の `*.png` が public/images/articles/ の画像を
無言でコミット対象外にしていたため、記事メタデータに存在しない画像
パスが残り、フロントで404→フォールバック画像の重複表示が発生した。
同じ事故を二度と起こさないための安全弁。
"""
import json
import subprocess
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
ARTICLES_PATH = BASE_DIR / "src" / "data" / "extra_articles.json"


def main() -> int:
    articles = json.loads(ARTICLES_PATH.read_text(encoding="utf-8"))
    if not articles:
        return 0

    latest = articles[0]
    image_url = latest.get("imageUrl", "").strip()
    if not image_url:
        print("警告: 最新記事に imageUrl がありません（画像生成失敗）。記事メタデータのみ投稿されます。")
        return 0

    if not image_url.startswith("/images/articles/"):
        return 0

    rel_path = "public" + image_url
    file_path = BASE_DIR / rel_path

    if not file_path.exists():
        print(f"エラー: {image_url} が imageUrl に設定されていますが、ファイルが存在しません: {file_path}")
        return 1

    if file_path.stat().st_size < 1000:
        print(f"エラー: {image_url} のファイルサイズが小さすぎます（壊れている可能性）: {file_path.stat().st_size} bytes")
        return 1

    result = subprocess.run(
        ["git", "check-ignore", "-q", str(file_path)],
        cwd=BASE_DIR,
    )
    if result.returncode == 0:
        print(f"エラー: {rel_path} は .gitignore によって無視されるため、コミットされません。"
              " .gitignore を確認してください。")
        return 1

    print(f"OK: {image_url} は正しくコミット可能です。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
