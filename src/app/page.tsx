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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">最新の美容ニュース</h1>
        <div className="flex items-center gap-3 mt-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            海外メディアから厳選した {articles.length} 件の記事
          </p>
          {latestDate && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              最終更新: {latestDate}
            </p>
          )}
        </div>
      </div>

      <ArticleList articles={articles} />
    </div>
  );
}
