"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import { getArticleImageUrl, getReadTime, getRelativeTime, isNew } from "@/lib/articles";

const TAG_COLORS: Record<string, string> = {
  OpenAI:         "bg-emerald-100 text-emerald-700",
  Anthropic:      "bg-orange-100 text-orange-700",
  Google:         "bg-blue-100 text-blue-700",
  Meta:           "bg-indigo-100 text-indigo-700",
  Microsoft:      "bg-sky-100 text-sky-700",
  画像生成:       "bg-pink-100 text-pink-700",
  動画生成:       "bg-rose-100 text-rose-700",
  音声AI:         "bg-yellow-100 text-yellow-700",
  LLM:            "bg-teal-100 text-teal-700",
  生産性:         "bg-emerald-100 text-emerald-700",
  オープンソース: "bg-purple-100 text-purple-700",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600";
}

function getTopTags(articles: Article[]): { tag: string; count: number }[] {
  const count: Record<string, number> = {};
  articles.forEach((a) => a.tags.forEach((t) => { count[t] = (count[t] || 0) + 1; }));
  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }));
}

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const topTags = useMemo(() => getTopTags(articles), [articles]);

  const filtered = useMemo(() => {
    // ひらがな→カタカナに統一して比較（例：「おーぷん」でも「オープン」を検索できる）
    const normalize = (str: string) =>
      str
        .toLowerCase()
        .replace(/[\u3041-\u3096]/g, (ch) =>
          String.fromCharCode(ch.charCodeAt(0) + 0x60)
        );
    const q = normalize(search);
    return articles.filter((a) => {
      const matchSearch =
        !search ||
        normalize(a.title).includes(q) ||
        normalize(a.summary).includes(q) ||
        a.tags.some((t) => normalize(t).includes(q));
      const matchTag = !selectedTag || a.tags.includes(selectedTag);
      return matchSearch && matchTag;
    });
  }, [articles, search, selectedTag]);

  const [featured, ...rest] = filtered;

  return (
    <div>
      {/* 検索ボックス */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="キーワードで検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
        />
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
            !selectedTag
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          すべて ({articles.length})
        </button>
        {topTags.map(({ tag, count }) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tag} ({count})
          </button>
        ))}
      </div>

      {/* 検索結果なし */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p>「{search}」に一致する記事が見つかりませんでした</p>
        </div>
      )}

      {/* 注目記事（一番上の大きいカード） */}
      {featured && (
        <Link
          href={`/articles/${featured.id}`}
          className="block bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6 hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative w-full h-56 sm:h-72 overflow-hidden">
            <Image
              src={getArticleImageUrl(featured)}
              alt={featured.title}
              fill
              className="object-cover article-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-blue-500 text-white px-2 py-0.5 rounded">
                  注目
                </span>
                {isNew(featured.publishedAt) && (
                  <span className="text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded animate-pulse">
                    NEW
                  </span>
                )}
                <span className="text-xs text-white/80">
                  {getRelativeTime(featured.publishedAt)} · {featured.source}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
                {featured.title}
              </h2>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
              {featured.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-400">
                {getReadTime(featured.body)}分で読める
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {rest.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={getArticleImageUrl(article)}
                alt={article.title}
                fill
                className="object-cover article-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {isNew(article.publishedAt) && (
                <span className="absolute top-2 right-2 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded animate-pulse z-10">
                  NEW
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-medium border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                <span>
                  {getRelativeTime(article.publishedAt)} · {article.source}
                </span>
                <span>{getReadTime(article.body)}分</span>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 leading-snug mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                {article.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
