import { NextRequest, NextResponse } from "next/server";
import { generateBeautyArticleFromTopic, generateBeautyArticleFree } from "@/lib/gemini";
import { createArticle, getAllArticles } from "@/lib/microcms";
import topicsData from "@/data/beauty_topics.json";

export const maxDuration = 60;

type Topic = {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  source: string;
};

const topics = topicsData as Topic[];

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = req.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 既存記事のsource_urlを収集して重複投稿を防ぐ
  const postedUrls = new Set<string>();
  try {
    const existing = await getAllArticles();
    existing.forEach((a) => {
      if (a.source_url) postedUrls.add(a.source_url);
    });
  } catch (e) {
    console.warn("[cron] 既存記事取得失敗:", e);
  }

  // まだ投稿していないトピックを選ぶ
  const unposted = topics.filter((t) => !postedUrls.has(t.url));

  let articlePayload;
  let topicUsed: string;

  try {
    if (unposted.length > 0) {
      const topic = unposted[Math.floor(Math.random() * unposted.length)];
      topicUsed = topic.name;
      articlePayload = await generateBeautyArticleFromTopic(topic);
    } else {
      // 全トピック投稿済みなら自由生成
      topicUsed = "AI自由生成";
      articlePayload = await generateBeautyArticleFree();
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: `Gemini生成エラー: ${message}` }, { status: 500 });
  }

  let result;
  try {
    result = await createArticle(articlePayload);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: `microCMS投稿エラー: ${message}` }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    id: result.id,
    title: articlePayload.title,
    topic: topicUsed,
    remaining: Math.max(0, unposted.length - 1),
  });
}
