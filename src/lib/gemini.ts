import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ArticleWritePayload } from "@/lib/microcms";

const API_KEY = process.env.GEMINI_API_KEY;

function getModel() {
  if (!API_KEY) throw new Error("GEMINI_API_KEY が設定されていません");
  return new GoogleGenerativeAI(API_KEY).getGenerativeModel({ model: "gemini-2.5-flash" });
}

export type SummarizeResult = {
  title: string;
  summary: string;
  body: string;
  tags: string;
};

const JSON_FORMAT = `{
  "title": "キャッチーで検索されやすい日本語タイトル（40文字以内）",
  "summary": "3行以内のリード文。読者が続きを読みたくなるように書く",
  "body": "本文（Markdownで300〜500文字。**太字**でポイントを強調し、箇条書きを活用）",
  "tags": "関連タグ5つをカンマ区切りで（例: スキンケア,美容機器,AI,トレンド,成分）"
}`;

function parseJson(text: string): SummarizeResult {
  const json = text.trim().replace(/^```json?\s*/i, "").replace(/\s*```$/, "");
  return JSON.parse(json) as SummarizeResult;
}

/** 英語記事テキストを日本語に要約・変換 */
export async function summarizeArticle(
  rawText: string,
  sourceName: string = "Unknown"
): Promise<SummarizeResult> {
  const model = getModel();
  const prompt = `あなたは海外美容・コスメ専門の日本語メディア「Beauty Tech Japan」の編集者です。
以下の英語記事を日本語に変換し、JSON形式で出力してください。

【出力形式（必ずこのJSONのみ出力）】
${JSON_FORMAT}

【元記事（情報元: ${sourceName}）】
${rawText.slice(0, 4000)}

JSON のみを出力してください。コードブロックや説明文は不要です。`;

  const result = await model.generateContent(prompt);
  return parseJson(result.response.text());
}

/** URLから記事を取得して要約 */
export async function summarizeFromUrl(
  url: string,
  sourceName: string
): Promise<SummarizeResult & { source_url: string; source_name: string }> {
  const model = getModel();
  const prompt = `あなたは海外美容・コスメ専門の日本語メディア「Beauty Tech Japan」の編集者です。
以下のURLの記事を要約し、JSON形式で出力してください。

URL: ${url}
情報元: ${sourceName}

【出力形式（必ずこのJSONのみ出力）】
${JSON_FORMAT}

JSON のみを出力してください。`;

  const result = await model.generateContent(prompt);
  const parsed = parseJson(result.response.text());
  return { ...parsed, source_url: url, source_name: sourceName };
}

/** beauty_topics.json のトピックから記事を生成してmicroCMS投稿用ペイロードを返す */
export async function generateBeautyArticleFromTopic(topic: {
  name: string;
  description: string;
  tags: string[];
  source: string;
  url: string;
}): Promise<ArticleWritePayload> {
  const model = getModel();
  const prompt = `あなたは海外美容・コスメ専門の日本語メディア「Beauty Tech Japan」の編集者です。
以下のビューティートピックについて、日本の読者向けの魅力的な記事を作成してください。

【トピック名】${topic.name}
【英語説明】${topic.description}
【関連タグ】${topic.tags.join(", ")}
【情報元】${topic.source}

【出力形式（必ずこのJSONのみ出力）】
${JSON_FORMAT}

JSON のみを出力してください。コードブロックや説明文は不要です。`;

  const result = await model.generateContent(prompt);
  const parsed = parseJson(result.response.text());

  return {
    title: parsed.title,
    summary: parsed.summary,
    content: parsed.body,
    source_name: topic.source,
    source_url: topic.url,
    tags: parsed.tags,
  };
}

// 毎日ローテーションするトピックリスト（全トピック投稿済み後の自由生成用）
const FREE_TOPICS = [
  "最新スキンケア成分の科学的効果と使い方",
  "AIが変える美容業界のトレンド2026",
  "韓国コスメが世界で人気の理由と最新ヒット製品",
  "日本の美容テクノロジー最前線",
  "サステナブルビューティーの最新動向",
  "美容医療とホームケアの融合トレンド",
  "ヘアケア革命：頭皮科学の新常識",
  "メンズビューティー市場の急成長",
  "インナービューティーと腸内環境の関係",
  "ウェルネスと美容の融合：ホリスティックビューティー",
  "クリーンビューティーの定義と選び方",
  "スキンケアルーティンの科学的最適化",
  "美容デバイス自宅使用の最新トレンド",
  "アンチエイジング成分の最新研究",
  "グローバル美容トレンドの日本上陸情報",
];

/** 全トピック投稿後にAIが自由に記事を生成 */
export async function generateBeautyArticleFree(): Promise<ArticleWritePayload> {
  const model = getModel();
  const topic = FREE_TOPICS[new Date().getDate() % FREE_TOPICS.length];
  const today = new Date().toISOString().slice(0, 10);

  const prompt = `あなたは海外美容・コスメ専門の日本語メディア「Beauty Tech Japan」の編集者です。
今日（${today}）の美容・コスメトレンドとして「${topic}」について、
最新情報を盛り込んだ魅力的な記事を作成してください。

【出力形式（必ずこのJSONのみ出力）】
${JSON_FORMAT}

JSON のみを出力してください。コードブロックや説明文は不要です。`;

  const result = await model.generateContent(prompt);
  const parsed = parseJson(result.response.text());

  return {
    title: parsed.title,
    summary: parsed.summary,
    content: parsed.body,
    source_name: "Beauty Tech Japan",
    source_url: `https://beauty-tech-japan.vercel.app/ai/${Date.now()}`,
    tags: parsed.tags,
  };
}
