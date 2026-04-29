import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import topicsData from "@/data/beauty_topics.json";
import articlesData from "@/data/extra_articles.json";

export const maxDuration = 60;

type Topic = {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  source: string;
};

const SOURCE_NAMES: Record<string, string> = {
  allure: "Allure",
  byrdie: "Byrdie",
  vogue_beauty: "Vogue Beauty",
  cosmopolitan: "Cosmopolitan",
  harpers_bazaar: "Harper's Bazaar",
  instyle: "InStyle",
  refinery29: "Refinery29",
};

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = req.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

async function generateArticle(topic: Topic): Promise<{
  id: string;
  title: string;
  summary: string;
  body: string;
  source: string;
  sourceUrl: string;
  tags: string[];
  publishedAt: string;
  imageUrl: string;
}> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY が未設定");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `あなたは人気美容・コスメメディアの編集長です。読者が「今すぐ試したい！」と思うような文章を書いてください。

以下の海外美容トレンド・コスメ情報について記事を作成してください。

トピック名: ${topic.name}
英語概要: ${topic.description}
カテゴリ: ${topic.tags.join(", ")}

【出力フォーマット（ラベルをそのまま使うこと）】

[キャッチコピー]
日本人読者が「気になる！」と思う一文タイトル。

[本文]
導入・詳細解説・活用シーン・まとめの流れで合計800〜1000文字の解説文。箇条書き不可。

---
すべて日本語のみ。余計な前置き不要。`;

  const result = await model.generateContent(prompt);
  const raw = result.response.text().trim();

  const catchMatch = raw.match(/\[キャッチコピー\]\s*\n([\s\S]*?)(?=\n\[)/);
  const bodyMatch = raw.match(/\[本文\]\s*\n([\s\S]*?)(?=\n---|$)/);

  const catchcopy = catchMatch?.[1]?.trim() ?? "";
  const body = bodyMatch?.[1]?.trim() ?? raw;
  const title = catchcopy || topic.name;
  const summary = catchcopy.length > 120 ? catchcopy.slice(0, 120) + "…" : catchcopy || body.slice(0, 120) + "…";

  return {
    id: `b_${topic.id.slice(0, 12)}_${Date.now()}`,
    title,
    summary,
    body,
    source: SOURCE_NAMES[topic.source] ?? topic.source,
    sourceUrl: topic.url,
    tags: topic.tags.slice(0, 5),
    publishedAt: new Date().toISOString().slice(0, 10),
    imageUrl: "",
  };
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const topics = topicsData as Topic[];
  const existing = articlesData as Array<{ sourceUrl: string }>;
  const postedUrls = new Set(existing.map((a) => a.sourceUrl).filter(Boolean));

  const unposted = topics.filter((t) => !postedUrls.has(t.url));
  if (unposted.length === 0) {
    return NextResponse.json({ message: "全トピック投稿済み" });
  }

  const topic = unposted[Math.floor(Math.random() * unposted.length)];

  let article;
  try {
    article = await generateArticle(topic);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: `生成エラー: ${message}` }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    title: article.title,
    topic: topic.name,
    remaining: unposted.length - 1,
    note: "記事を生成しました（静的JSONへの書き込みはCIで対応）",
  });
}
