import type { Metadata } from "next";
import ArticleList from "@/components/ArticleList";
import RandomArticleButton from "@/components/RandomArticleButton";

import { getAllArticles, adaptMicroCMSArticle } from "@/lib/microcms";
import { allArticles as localArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Beauty Tech Japan — 海外美容・コスメ最新情報を日本語で",
  description:
    "Allure・Byrdie・Vogue Beautyなど海外の人気美容メディアから、スキンケア・メイク・ヘアケアの最新トレンドを日本語でお届け。3日おきに新記事を自動更新。",
  alternates: { canonical: "https://beauty-tech-japan.vercel.app" },
  openGraph: {
    title: "Beauty Tech Japan — 海外美容・コスメ最新情報を日本語で",
    description: "Allure・Byrdie・Vogue Beautyなど海外美容メディアから最新トレンドを日本語でお届け。",
    type: "website",
  },
};

export const revalidate = 300;

const SITE_URL = "https://beauty-tech-japan.vercel.app";

async function fetchArticles() {
  try {
    const remote = await getAllArticles();
    if (remote.length > 0) return remote.map(adaptMicroCMSArticle);
  } catch (e) {
    console.warn("[page] microCMS 取得失敗、ローカルデータを使用:", e);
  }
  return localArticles;
}

export default async function Home() {
  const articles = await fetchArticles();
  const latestDate = articles.map((a) => a.publishedAt).sort().at(-1) ?? "";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Beauty Tech Japan",
      url: SITE_URL,
      description: "海外美容・コスメ最新情報を日本語でお届けするメディア",
      inLanguage: "ja",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Beauty Tech Japan",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
        width: 512,
        height: 512,
      },
      description: "海外の最新美容トレンド・コスメ・スキンケア情報をAIが日本語でお届けするメディア",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "最新の美容記事一覧",
      url: SITE_URL,
      numberOfItems: articles.length,
      itemListElement: articles.slice(0, 10).map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/articles/${a.id}`,
        name: a.title,
      })),
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーローバナー */}
      <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80%" cy="20%" r="180" fill="white" />
            <circle cx="10%" cy="80%" r="120" fill="white" />
            <circle cx="60%" cy="110%" r="100" fill="white" />
          </svg>
        </div>
        <div className="relative px-6 py-8 sm:px-10 sm:py-10 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            海外美容情報を日本語でお届け
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 leading-tight">
            Beauty Tech Japan
          </h1>
          <p className="text-white/80 text-xs sm:text-sm mb-6 max-w-md">
            Allure・Vogue Beauty・Byrdieなど世界の美容メディアから最新トレンドを厳選してお届け
          </p>
          <div className="flex items-center gap-5 mb-5">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">{articles.length}</div>
              <div className="text-xs text-white/70">記事</div>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">9</div>
              <div className="text-xs text-white/70">カテゴリ</div>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">3日</div>
              <div className="text-xs text-white/70">おき更新</div>
            </div>
            {latestDate && (
              <>
                <div className="w-px h-8 bg-white/30 hidden sm:block" />
                <div className="text-center hidden sm:block">
                  <div className="text-sm font-semibold">{latestDate.slice(0, 10)}</div>
                  <div className="text-xs text-white/70">最終更新</div>
                </div>
              </>
            )}
          </div>
          <RandomArticleButton ids={articles.map((a) => a.id)} />
        </div>
      </div>

      <ArticleList articles={articles} />
    </div>
  );
}
