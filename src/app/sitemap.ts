import type { MetadataRoute } from "next";
import { allArticles } from "@/lib/articles";

const BASE_URL = "https://beauty-tech-japan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls = allArticles.map((article) => ({
    url: `${BASE_URL}/articles/${article.id}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 全タグを収集してタグページも登録
  const allTags = Array.from(new Set(allArticles.flatMap((a) => a.tags)));
  const tagUrls = allTags.map((tag) => ({
    url: `${BASE_URL}/tags/${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/bookmarks`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    ...tagUrls,
    ...articleUrls,
  ];
}
