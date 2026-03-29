/**
 * microCMS 一括移行スクリプト
 * 既存の全記事（articles.ts + extra_articles.json）を microCMS に投稿します。
 *
 * 実行方法:
 *   node scripts/migrate-to-microcms.mjs
 *
 * 注意:
 *   - .env.local の MICROCMS_API_KEY / MICROCMS_SERVICE_DOMAIN が設定済みであること
 *   - microCMS 管理画面でコンテンツAPI（エンドポイント名: news）を作成済みであること
 *   - Write APIキーが有効であること
 *   - 重複を防ぐため、すでに投稿済みの記事は手動で削除するか本スクリプトの冪等性オプションを使用
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ─── 環境変数の読み込み（.env.local） ────────────────────
function loadEnv() {
  try {
    const envContent = readFileSync(join(ROOT, ".env.local"), "utf-8");
    for (const line of envContent.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const [key, ...rest] = trimmed.split("=");
      if (key && rest.length) process.env[key] = rest.join("=");
    }
  } catch {
    console.log(".env.local not found, using process.env");
  }
}

loadEnv();

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;
const ENDPOINT = process.env.MICROCMS_ENDPOINT ?? "news";

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error("❌ MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を .env.local に設定してください");
  process.exit(1);
}

// ─── 既存記事データの読み込み ─────────────────────────────

// 1. extra_articles.json（pipeline生成分）
const extraRaw = readFileSync(join(ROOT, "src/data/extra_articles.json"), "utf-8");
const extraArticles = JSON.parse(extraRaw);

// 2. articles.ts のデータを articles-static.json から読み込む
//    （事前に node scripts/export-articles.mjs で生成）
let staticArticles = [];
try {
  const staticRaw = readFileSync(join(ROOT, "src/data/articles-static.json"), "utf-8");
  staticArticles = JSON.parse(staticRaw);
  console.log(`📦 静的記事: ${staticArticles.length} 件`);
} catch {
  console.warn("⚠️  src/data/articles-static.json が見つかりません（extra_articles.json のみ移行します）");
  console.warn("   scripts/export-articles.mjs を先に実行してすべての記事を移行してください");
}

const allArticles = [
  ...extraArticles.map(normalizeExtra),
  ...staticArticles,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

console.log(`📰 移行対象: 合計 ${allArticles.length} 件`);

/** extra_articles.json のフォーマットを正規化 */
function normalizeExtra(a) {
  return {
    id: a.id,
    title: a.title,
    summary: a.summary,
    body: a.body,
    source: a.source,
    sourceUrl: a.sourceUrl,
    tags: Array.isArray(a.tags) ? a.tags : [],
    publishedAt: a.publishedAt,
    imageUrl: a.imageUrl,
  };
}

// ─── microCMS Write API ───────────────────────────────────

const BASE_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${ENDPOINT}`;

async function postArticle(article) {
  const payload = {
    title: article.title,
    summary: article.summary ?? "",
    content: article.body ?? "",
    source_name: article.source ?? "",
    source_url: article.sourceUrl ?? "",
    tags: Array.isArray(article.tags) ? article.tags.join(",") : (article.tags ?? ""),
    ...(article.imageUrl ? { eyecatch: article.imageUrl } : {}),
  };

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`POST 失敗 (${res.status}): ${body}`);
  }
  return res.json();
}

// ─── 一括投稿（レート制限対策：500ms ごとに投稿） ──────────

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function migrate() {
  let success = 0;
  let failed = 0;
  const errors = [];

  console.log(`\n🚀 microCMS への移行を開始します...\n`);

  for (let i = 0; i < allArticles.length; i++) {
    const article = allArticles[i];
    const label = `[${i + 1}/${allArticles.length}] ${article.title.slice(0, 40)}`;

    try {
      const result = await postArticle(article);
      console.log(`  ✅ ${label} → ID: ${result.id}`);
      success++;
    } catch (err) {
      console.error(`  ❌ ${label}`);
      console.error(`     ${err.message}`);
      errors.push({ title: article.title, error: err.message });
      failed++;
    }

    // レート制限対策
    if (i < allArticles.length - 1) await sleep(500);
  }

  console.log(`\n─────────────────────────────────────`);
  console.log(`✅ 成功: ${success} 件`);
  console.log(`❌ 失敗: ${failed} 件`);

  if (errors.length > 0) {
    console.log("\n失敗した記事:");
    errors.forEach((e) => console.log(`  - ${e.title}: ${e.error}`));
  }

  console.log(`\n🎉 移行完了！microCMS 管理画面で確認してください。`);
  console.log(`   https://${SERVICE_DOMAIN}.microcms.io\n`);
}

migrate().catch((err) => {
  console.error("移行スクリプトでエラーが発生しました:", err);
  process.exit(1);
});
