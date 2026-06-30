import type { Metadata } from "next";
import Link from "next/link";
import { allArticles as localArticles } from "@/lib/articles";
import { getAllArticles, adaptMicroCMSArticle } from "@/lib/microcms";
import { getArticleImageUrl } from "@/lib/articles";
import { Rss, ExternalLink, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "RSSフィード",
  description: "Beauty Tech Japan の最新記事をRSSリーダーで購読する方法と、最新記事一覧。",
};

export const revalidate = 300;

const SITE_URL = "https://beauty-tech-japan.vercel.app";
const FEED_URL = `${SITE_URL}/feed.xml`;

async function fetchArticles() {
  try {
    const remote = await getAllArticles();
    if (remote.length > 0) return remote.map(adaptMicroCMSArticle);
  } catch {
    // ローカルデータにフォールバック
  }
  return localArticles;
}

const RSS_READERS = [
  { name: "Feedly",   url: `https://feedly.com/i/subscription/feed/${encodeURIComponent(FEED_URL)}`,   color: "bg-green-500" },
  { name: "Inoreader", url: `https://www.inoreader.com/feed/${encodeURIComponent(FEED_URL)}`,           color: "bg-blue-500" },
];

export default async function RssPage() {
  const articles = await fetchArticles();
  const latest = articles.slice(0, 20);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>

      {/* ヒーロー */}
      <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500 px-8 py-10 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90%" cy="10%" r="150" fill="white" />
            <circle cx="5%"  cy="90%" r="100" fill="white" />
          </svg>
        </div>
        <div className="relative flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Rss size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">RSSフィード</h1>
            <p className="text-white/80 text-sm">Beauty Tech Japan の最新記事を自動受信できます</p>
          </div>
        </div>
      </div>

      {/* フィードURL */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-4">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3">フィードURL</h2>
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 text-sm font-mono text-gray-600 dark:text-gray-300 break-all">
          <span className="flex-1">{FEED_URL}</span>
          <a
            href={FEED_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600 shrink-0"
            aria-label="RSSフィードを開く"
          >
            <ExternalLink size={16} />
          </a>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
          上記URLをRSSリーダーにコピー&amp;ペーストして登録してください
        </p>
      </div>

      {/* RSSリーダーボタン */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-4">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3">ワンクリックで購読</h2>
        <div className="flex flex-wrap gap-3">
          {RSS_READERS.map(({ name, url, color }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-full ${color} hover:opacity-90 transition-opacity`}
            >
              <Rss size={14} />
              {name} で購読
            </a>
          ))}
        </div>
      </div>

      {/* 最新記事一覧 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">最新記事（{latest.length}件）</h2>
        <div className="space-y-3">
          {latest.map((a) => (
            <Link
              key={a.id}
              href={`/articles/${a.id}`}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-pink-400 mt-2" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2 leading-snug">
                  {a.title}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  {a.publishedAt?.slice(0, 10)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-pink-500/30"
        >
          記事一覧を見る
        </Link>
      </div>
    </div>
  );
}
