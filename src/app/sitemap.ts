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
    {
      url: `${BASE_URL}/skincare-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/josei-usuge-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/k-beauty-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cosme-ranking`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/haircare-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/perfume-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nail-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/makeup-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/diet-beauty-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mens-beauty-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/bodycare-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/eye-makeup-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/lip-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/foundation-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/anti-aging-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/serum-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/biyou-monitor-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pore-care-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/whitening-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/bb-cc-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/concealer-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/beauty-tools-guide`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/skincare-ai-guide`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/korean-beauty-guide`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // 2026-07-14 追加：公開済みなのにサイトマップから漏れていたガイド群
    // （検索需要の大きい成分ガイドが未登録のままだったため流入機会を損失していた）
    {
      url: `${BASE_URL}/retinol-guide`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/vitamin-c-serum-guide`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/niacinamide-guide`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/eyeshadow-guide`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/beauty-devices`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/beauty-supplements`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sunscreen-guide`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // 2026-07-14 新規追加：ニキビケア完全ガイド
    {
      url: `${BASE_URL}/acne-care-guide`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // 2026-07-19 新規追加：夏のメイク崩れ防止ガイド（季節需要ページ）
    {
      url: `${BASE_URL}/summer-makeup-guide`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // 2026-07-23 新規追加：敏感肌スキンケア完全ガイド
    {
      url: `${BASE_URL}/sensitive-skin-guide`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // 2026-07-23 新規追加：肌のくすみ対策完全ガイド
    {
      url: `${BASE_URL}/kusumi-care-guide`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // 2026-08-11 新規追加：肌タイプ診断ツール（滞在時間・再訪・シェア向上のためのインタラクティブ機能）
    {
      url: `${BASE_URL}/skin-type-diagnosis`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    // 2026-08-13 技術SEO監査で発見：公開済み（2026-07-25公開）なのにサイトマップ登録漏れだったガイド2件を追加
    {
      url: `${BASE_URL}/after-sun-care-guide`,
      lastModified: new Date("2026-07-25"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ase-taisaku-guide`,
      lastModified: new Date("2026-07-25"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // 2026-08-13 新規追加：夏ダメージ肌の秋リセットガイド（季節先取りの需要ページ）
    {
      url: `${BASE_URL}/autumn-skin-reset-guide`,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...tagUrls,
    ...articleUrls,
  ];
}
