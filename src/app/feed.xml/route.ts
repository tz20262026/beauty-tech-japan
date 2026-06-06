import { allArticles } from "@/lib/articles";
import { getArticleImageUrl } from "@/lib/articles";

const SITE_URL = "https://beauty-tech-japan.vercel.app";

export async function GET() {
  const items = allArticles
    .slice(0, 30)
    .map((a) => {
      const imageUrl = getArticleImageUrl(a);
      const categories = a.tags.map((t) => `<category><![CDATA[${t}]]></category>`).join("\n      ");
      return `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <description><![CDATA[${a.summary}]]></description>
      <link>${SITE_URL}/articles/${a.id}</link>
      <guid isPermaLink="true">${SITE_URL}/articles/${a.id}</guid>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      ${categories}
      <media:content url="${imageUrl}" medium="image" />
      <enclosure url="${imageUrl}" type="image/jpeg" length="0" />
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Beauty Tech Japan</title>
    <link>${SITE_URL}</link>
    <description>海外美容・コスメ最新情報を日本語で3日おきにお届け</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/icon.png</url>
      <title>Beauty Tech Japan</title>
      <link>${SITE_URL}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
