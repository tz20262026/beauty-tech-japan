import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { allArticles } from "@/lib/articles";

const BASE_URL = "https://beauty-tech-japan.vercel.app";

// src/app 直下のディレクトリを自動走査してガイドページを検出する。
// 手動リストだと新規ページの登録漏れが繰り返し発生していたため（2026-07-14, 2026-08-13の2回）、
// ページを作れば自動的にサイトマップへ載る方式に切り替えて漏れを構造的に防ぐ。
const NON_GUIDE_DIRS = new Set([
  "api",
  "articles",
  "bookmarks",
  "feed.xml",
  "rss",
  "tags",
  "widget",
  "about",
]);

function discoverGuidePages(): { slug: string; lastModified: Date }[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const entries = fs.readdirSync(appDir, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => !NON_GUIDE_DIRS.has(name) && !name.startsWith("[") && !name.startsWith("_"))
    .filter((name) => fs.existsSync(path.join(appDir, name, "page.tsx")))
    .map((slug) => {
      const stat = fs.statSync(path.join(appDir, slug, "page.tsx"));
      return { slug, lastModified: stat.mtime };
    });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const guideUrls = discoverGuidePages().map((g) => ({
    url: `${BASE_URL}/${g.slug}`,
    lastModified: g.lastModified,
    changeFrequency: "monthly" as const,
    priority: g.slug === "skin-type-diagnosis" ? 0.95 : 0.9,
  }));

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
    ...guideUrls,
    ...tagUrls,
    ...articleUrls,
  ];
}
