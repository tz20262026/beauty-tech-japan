/**
 * 自動記事生成 API
 * POST /api/generate
 *
 * Vercel Cron Jobs や外部スケジューラーから呼び出し、
 * 最新の英語記事を Gemini で要約して microCMS に自動投稿します。
 *
 * 呼び出し例（curl）:
 *   curl -X POST https://your-domain/api/generate \
 *     -H "Authorization: Bearer your_cron_secret_here" \
 *     -H "Content-Type: application/json" \
 *     -d '{"url":"https://techcrunch.com/...", "source":"TechCrunch", "rawText":"..."}'
 */

import { NextRequest, NextResponse } from "next/server";
import { summarizeArticle } from "@/lib/gemini";
import { createArticle } from "@/lib/microcms";

// Vercel の最大実行時間（60秒）
export const maxDuration = 60;

/** CRON_SECRET で認証チェック */
function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = req.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { url?: string; source?: string; rawText?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { url, source = "Unknown", rawText } = body;

  if (!rawText && !url) {
    return NextResponse.json(
      { error: "url または rawText が必要です" },
      { status: 400 }
    );
  }

  // Gemini で要約
  const textToSummarize = rawText ?? `記事URL: ${url}\n（URLから内容を推測して要約してください）`;
  let summarized;
  try {
    summarized = await summarizeArticle(textToSummarize, source);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `Gemini 要約エラー: ${message}` },
      { status: 500 }
    );
  }

  // microCMS に投稿
  let result;
  try {
    result = await createArticle({
      title: summarized.title,
      summary: summarized.summary,
      content: summarized.body,
      source_name: source,
      source_url: url ?? "",
      tags: summarized.tags,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `microCMS 投稿エラー: ${message}` },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    id: result.id,
    title: summarized.title,
    message: "記事を microCMS に自動投稿しました",
  });
}

/** ヘルスチェック */
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({
    status: "ok",
    gemini: !!process.env.GEMINI_API_KEY,
    microcms: !!process.env.MICROCMS_API_KEY,
    endpoint: process.env.MICROCMS_ENDPOINT ?? "news",
  });
}
