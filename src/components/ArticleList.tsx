"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scissors,
  Droplets,
  Palette,
  Wind,
  Leaf,
  Sparkles,
  Stethoscope,
  Sprout,
  Gem,
  Clock,
  TrendingUp,
  CalendarDays,
} from "lucide-react";
import type { Article } from "@/lib/articles";
import { getArticleImageUrl, getReadTime, getRelativeTime, isNew } from "@/lib/articles";

const BEAUTY_CATEGORIES = [
  { id: "ヘアケア",                     label: "ヘアケア",                     icon: Scissors },
  { id: "ボディケア",                   label: "ボディケア",                   icon: Droplets },
  { id: "メイクアップ",                 label: "メイクアップ",                 icon: Palette },
  { id: "フレグランス",                 label: "フレグランス",                 icon: Wind },
  { id: "インナービューティー",         label: "インナービューティー",         icon: Leaf },
  { id: "エイジングケア・再生美容",     label: "エイジングケア・再生美容",     icon: Sparkles },
  { id: "美容医療",                     label: "美容医療",                     icon: Stethoscope },
  { id: "オーガニック・クリーンビューティー", label: "オーガニック・クリーンビューティー", icon: Sprout },
  { id: "ネイルケア",                   label: "ネイルケア",                   icon: Gem },
] as const;

// 旧タグ → 新カテゴリID のマッピング（記事データを変更せず吸収する）
const CATEGORY_TAG_MAP: Record<string, string[]> = {
  ヘアケア:                         ["ヘアケア"],
  ボディケア:                       ["スキンケア", "ルーティン", "ボディケア"],
  メイクアップ:                     ["メイク", "メイクアップ", "Kビューティー"],
  フレグランス:                     ["フレグランス"],
  インナービューティー:             ["インナービューティー", "ウェルネス", "サプリメント", "メンタルヘルス"],
  "エイジングケア・再生美容":       ["アンチエイジング", "最先端成分", "成分", "ビューティーサイエンス", "パーソナライズ"],
  美容医療:                         ["美容医療", "美容機器", "ビューティーテック"],
  "オーガニック・クリーンビューティー": ["マイクロバイオーム", "Jビューティー", "サステナビリティ", "オーガニック", "クリーンビューティー"],
  ネイルケア:                       ["ネイル", "ネイルケア"],
};

const TAG_COLORS: Record<string, string> = {
  ヘアケア:                         "bg-amber-100 text-amber-700",
  ボディケア:                       "bg-sky-100 text-sky-700",
  メイクアップ:                     "bg-red-100 text-red-700",
  フレグランス:                     "bg-purple-100 text-purple-700",
  インナービューティー:             "bg-lime-100 text-lime-700",
  "エイジングケア・再生美容":       "bg-rose-100 text-rose-700",
  美容医療:                         "bg-indigo-100 text-indigo-700",
  "オーガニック・クリーンビューティー": "bg-green-100 text-green-700",
  ネイルケア:                       "bg-fuchsia-100 text-fuchsia-700",
  // 既存タグ
  スキンケア:         "bg-pink-100 text-pink-700",
  アンチエイジング:   "bg-rose-100 text-rose-700",
  ウェルネス:         "bg-green-100 text-green-700",
  成分:               "bg-fuchsia-100 text-fuchsia-700",
  最先端成分:         "bg-fuchsia-100 text-fuchsia-700",
  ビューティーサイエンス: "bg-purple-100 text-purple-700",
  ビューティーテック: "bg-violet-100 text-violet-700",
  美容機器:           "bg-indigo-100 text-indigo-700",
  サプリメント:       "bg-teal-100 text-teal-700",
  Kビューティー:      "bg-pink-100 text-pink-700",
  Jビューティー:      "bg-rose-100 text-rose-700",
  マイクロバイオーム: "bg-emerald-100 text-emerald-700",
  ルーティン:         "bg-orange-100 text-orange-700",
  パーソナライズ:     "bg-sky-100 text-sky-700",
  メイク:             "bg-red-100 text-red-700",
  サステナビリティ:   "bg-green-100 text-green-700",
  テクノロジー:       "bg-blue-100 text-blue-700",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600";
}

const PAGE_SIZE = 12;

type SortKey = "new" | "old" | "short";
const SORT_OPTIONS: { key: SortKey; label: string; icon: typeof Clock }[] = [
  { key: "new",   label: "新着順",         icon: CalendarDays },
  { key: "old",   label: "人気順",         icon: TrendingUp },
  { key: "short", label: "短い順",         icon: Clock },
];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&fit=crop";

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("new");
  const [page, setPage] = useState(1);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const handleImageError = useCallback((src: string) => {
    setBrokenImages((prev) => new Set(prev).add(src));
  }, []);

  const getSrc = useCallback((src: string) => brokenImages.has(src) ? FALLBACK_IMAGE : src, [brokenImages]);

  const filtered = useMemo(() => {
    const normalize = (str: string) =>
      str
        .toLowerCase()
        .replace(/[\u3041-\u3096]/g, (ch) =>
          String.fromCharCode(ch.charCodeAt(0) + 0x60)
        );
    const q = normalize(search);
    let result = articles.filter((a) => {
      const matchSearch =
        !search ||
        normalize(a.title).includes(q) ||
        normalize(a.summary).includes(q) ||
        a.tags.some((t) => normalize(t).includes(q));
      const allowedTags = selectedTag ? (CATEGORY_TAG_MAP[selectedTag] ?? [selectedTag]) : null;
      const matchTag = !allowedTags || a.tags.some((t) => allowedTags.includes(t));
      return matchSearch && matchTag;
    });

    if (sort === "new") result = [...result].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
    else if (sort === "old") result = [...result].sort((a, b) => a.publishedAt.localeCompare(b.publishedAt));
    else if (sort === "short") result = [...result].sort((a, b) => getReadTime(a.body) - getReadTime(b.body));

    return result;
  }, [articles, search, selectedTag, sort]);

  // フィルターが変わったらページをリセット
  const resetPage = () => setPage(1);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const [featured, ...rest] = paginated;

  return (
    <div>
      {/* 検索ボックス */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="キーワードで検索..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); resetPage(); }}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* カテゴリフィルター */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setSelectedTag(null); resetPage(); }}
            className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
              !selectedTag
                ? "bg-pink-500 text-white shadow-sm"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            すべて
          </button>
          {BEAUTY_CATEGORIES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { setSelectedTag(id === selectedTag ? null : id); resetPage(); }}
              className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                selectedTag === id
                  ? "bg-pink-500 text-white shadow-sm"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ソート切り替え */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">並び替え:</span>
        <div className="flex gap-1.5">
          {SORT_OPTIONS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => { setSort(key); resetPage(); }}
              className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                sort === key
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <Icon size={11} />
              {label}
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">{filtered.length} 件</span>
      </div>

      {/* 検索結果なし */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p>「{search}」に一致する記事が見つかりませんでした</p>
        </div>
      )}

      {/* 注目記事 */}
      {featured && (
        <Link
          href={`/articles/${featured.id}`}
          className="block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6 hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative w-full h-56 sm:h-72 overflow-hidden">
            <Image
              src={getSrc(getArticleImageUrl(featured, articles))}
              alt={featured.title}
              fill
              className="object-cover article-image"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => handleImageError(getArticleImageUrl(featured, articles))}
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
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-2">
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
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {getReadTime(featured.body)}分で読める
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {rest.map((article, i) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={getSrc(getArticleImageUrl(article, articles))}
                alt={article.title}
                fill
                className="object-cover article-image"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => handleImageError(getArticleImageUrl(article, articles))}
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
              <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-1.5">
                <span>
                  {getRelativeTime(article.publishedAt)} · {article.source}
                </span>
                <span>{getReadTime(article.body)}分</span>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-1.5 group-hover:text-pink-600 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                {article.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ページネーション */}
      {totalPages > 1 && page < totalPages && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-6 py-3 rounded-xl bg-pink-500 text-white text-sm font-bold hover:bg-pink-600 transition-colors"
          >
            もっと見る ({filtered.length - page * PAGE_SIZE} 件)
          </button>
        </div>
      )}
    </div>
  );
}
