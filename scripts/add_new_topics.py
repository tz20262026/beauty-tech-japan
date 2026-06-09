#!/usr/bin/env python3
"""
新しい美容トピックを100件生成してbeauty_topics.jsonに追加する
"""
import json
import os
import sys
from pathlib import Path

# .env.localからAPIキーを読み込む
env_path = Path(__file__).parent.parent / ".env.local"
if env_path.exists():
    for line in env_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("GEMINI_API_KEY="):
            os.environ["GEMINI_API_KEY"] = line.split("=", 1)[1].strip().strip('"').strip("'")

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
if not GEMINI_API_KEY:
    print("ERROR: GEMINI_API_KEY が見つかりません")
    sys.exit(1)

from google import genai
from google.genai import types

BASE_DIR   = Path(__file__).parent.parent
TOPICS_PATH = Path(__file__).parent / "data" / "beauty_topics.json"

existing = json.loads(TOPICS_PATH.read_text(encoding="utf-8"))
existing_names = {t["name"] for t in existing}
last_num = len(existing)  # 90

PROMPT = """
あなたは美容・コスメ業界の最新トレンドに詳しいリサーチャーです。
2025〜2026年の最新美容トレンドについて、100件のトピックをJSONリストで出力してください。

以下のルールに従ってください:
1. 既存のトピックと重複しないこと（エクソソーム、ニューロコスメ、幹細胞、サーカディアン等はNG）
2. 各トピックはユニークで具体的なテーマであること
3. 幅広いカテゴリをカバーすること（メイク、スキンケア、ヘアケア、ボディケア、ネイル、香水、美容テクノロジー等）
4. descriptionは必ず英語で50〜100語で書くこと
5. tagsは3〜5個の日本語タグ
6. sourceは以下のいずれか: allure, byrdie, vogue_beauty, cosmopolitan, harpers_bazaar, instyle, refinery29

出力形式（JSONリストのみ、前置き不要）:
[
  {
    "id": "btj2026_091",
    "name": "日本語のトピック名（30字以内）",
    "url": "https://実在しそうな美容メディアURL",
    "description": "English description of the topic (50-100 words)",
    "tags": ["タグ1", "タグ2", "タグ3"],
    "source": "allure"
  },
  ...
]

IDは btj2026_091 から btj2026_190 まで連番で。
"""

client = genai.Client(api_key=GEMINI_API_KEY)
print("Geminiでトピックを生成中...")

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=PROMPT,
    config=types.GenerateContentConfig(
        temperature=0.9,
        max_output_tokens=16384,
    ),
)

raw = response.text.strip()

# JSONブロックを抽出（コードブロックも対応）
import re
# JSONブロックを抽出（コードブロック内の [ から最後の ] まで）
m = re.search(r'```(?:json)?\s*(\[[\s\S]*\])\s*```', raw)
if m:
    json_str = m.group(1)
else:
    # コードブロックなし: [ から最後の ] まで
    start = raw.find('[')
    end   = raw.rfind(']')
    if start == -1 or end == -1:
        print("ERROR: JSONが見つかりませんでした")
        print(raw[:500])
        sys.exit(1)
    json_str = raw[start:end+1]

new_topics = json.loads(json_str)
print(f"生成されたトピック: {len(new_topics)}件")

# 重複チェック
added = 0
for t in new_topics:
    if t.get("name") not in existing_names:
        existing.append(t)
        existing_names.add(t["name"])
        added += 1

TOPICS_PATH.write_text(json.dumps(existing, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"beauty_topics.json 更新完了: {len(existing)}件（+{added}件追加）")
