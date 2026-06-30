"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allArticles, getArticleImageUrl, getReadTime, getRelativeTime } from "@/lib/articles";
import { Bookmark } from "lucide-react";

export default function BookmarksPage() {
  const [ids, setIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved: string[] = JSON.parse(localStorage.getItem("btj_bookmarks") ?? "[]");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIds(saved);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const bookmarked = allArticles.filter((a) => ids.includes(a.id));

  if (!mounted) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Bookmark size={22} className="text-pink-500 fill-pink-100" />
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">保存した記事</h1>
          <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">{bookmarked.length} 件</p>
        </div>
      </div>

      {bookmarked.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🔖</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            まだ保存した記事がありません。
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold transition-colors"
          >
            記事を探す
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {bookmarked.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="flex gap-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md hover:border-pink-300 dark:hover:border-pink-800 transition-all group"
            >
              <div className="relative w-24 sm:w-32 shrink-0">
                <Image
                  src={getArticleImageUrl(article, allArticles)}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div className="py-3 pr-4 flex flex-col justify-center min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 text-xs text-gray-600 dark:text-gray-300 mb-1">
                  <span>{getRelativeTime(article.publishedAt)}</span>
                  <span>·</span>
                  <span>{article.source}</span>
                  <span>·</span>
                  <span>{getReadTime(article.body)}分</span>
                </div>
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-pink-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-1">
                  {article.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}
