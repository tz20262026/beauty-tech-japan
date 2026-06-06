import type { Metadata } from "next";
import ArticleList from "@/components/ArticleList";

import { getAllArticles, adaptMicroCMSArticle } from "@/lib/microcms";
import { allArticles as localArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Beauty Tech Japan — 海外美容・コスメ最新情報を日本語で",
  description:
    "Allure・Byrdie・Vogue Beautyなど海外の人気美容メディアから最新のコスメ・スキンケア情報を毎日日本語でお届けします。",
  openGraph: {
    title: "Beauty Tech Japan",
    description: "海外美容・コスメ最新情報を日本語で毎日お届け",
    type: "website",
  },
};

export const revalidate = 300;

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

  return (
    <div>
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
          <div className="flex items-center gap-5">
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
        </div>
      </div>

      <ArticleList articles={articles} />
    </div>
  );
}
