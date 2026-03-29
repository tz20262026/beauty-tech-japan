/**
 * articles.ts のハードコードされたデータを articles-static.json に書き出す
 *
 * 実行方法:
 *   node scripts/export-articles.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const content = readFileSync(join(ROOT, "src/lib/articles.ts"), "utf-8");

// "export const articles: Article[] = [" の末尾の [ から配列を抽出
const marker = "export const articles: Article[] = [";
const markerPos = content.indexOf(marker);
const arrayStart = markerPos + marker.length - 1; // marker の末尾の [ を含む位置

// 対応する ] を見つける（ネストを考慮）
let depth = 0;
let arrayEnd = -1;
for (let i = arrayStart; i < content.length; i++) {
  if (content[i] === "[") depth++;
  else if (content[i] === "]") {
    depth--;
    if (depth === 0) { arrayEnd = i; break; }
  }
}

const arraySource = content.slice(arrayStart, arrayEnd + 1);

// TypeScript テンプレートリテラルを通常の文字列に変換
const jsSource = arraySource
  .replace(/`([\s\S]*?)`/g, (_, inner) => {
    const escaped = inner
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\r?\n/g, "\\n");
    return `"${escaped}"`;
  })
  // trailing comma の除去
  .replace(/,(\s*[\]}])/g, "$1");

let articles;
try {
  // Node.js の Function コンストラクタで安全に評価
  articles = new Function(`return ${jsSource}`)();
} catch (err) {
  console.error("パースエラー:", err.message);
  console.error("手動で src/data/articles-static.json を作成してください");
  process.exit(1);
}

const output = JSON.stringify(articles, null, 2);
writeFileSync(join(ROOT, "src/data/articles-static.json"), output, "utf-8");

console.log(`✅ ${articles.length} 件のデータを src/data/articles-static.json に書き出しました`);
console.log(`\n次のステップ: node scripts/migrate-to-microcms.mjs を実行してください`);
