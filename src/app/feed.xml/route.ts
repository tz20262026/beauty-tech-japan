import { allArticles } from "@/lib/articles";

const SITE_URL = "https://ai-news-site-wheat.vercel.app";

export async function GET() {
  const items = allArticles
    .slice(0, 30) // 最新30件
    .map(
      (a) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <description><![CDATA[${a.summary}]]></description>
      <link>${SITE_URL}/articles/${a.id}</link>
      <guid>${SITE_URL}/articles/${a.id}</guid>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AI News Japan</title>
    <link>${SITE_URL}</link>
    <description>海外AIツール・最新ニュースを日本語で毎日お届け</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
