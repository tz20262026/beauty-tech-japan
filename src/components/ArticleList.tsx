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
  { key: "old",   label: "さかのぼる順",    icon: TrendingUp },
  { key: "short", label: "短い順",         icon: Clock },
];

// 記事IDごとに異なるフォールバック画像（同じ画像が並ばないよう50種類）
const FALLBACK_POOL = [
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1571781565036-d3f759be73e4?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1525904097878-94fb15835963?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80&fit=crop",
];
function getFallbackImage(articleId: string): string {
  let h = 5381;
  for (let i = 0; i < articleId.length; i++) {
    h = ((h << 5) + h) + articleId.charCodeAt(i);
    h = h & h;
  }
  return FALLBACK_POOL[Math.abs(h) % FALLBACK_POOL.length];
}

// 人気記事ピックアップ（直近記事から多様なカテゴリで5件選定）
function getPickupArticles(articles: Article[], count = 5): Article[] {
  if (articles.length === 0) return [];
  const sorted = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const selected: Article[] = [];
  const usedTags = new Set<string>();
  for (const a of sorted) {
    if (selected.length >= count) break;
    const primaryTag = a.tags[0];
    if (!primaryTag || !usedTags.has(primaryTag)) {
      selected.push(a);
      if (primaryTag) usedTags.add(primaryTag);
    }
  }
  if (selected.length < count) {
    for (const a of sorted) {
      if (selected.length >= count) break;
      if (!selected.includes(a)) selected.push(a);
    }
  }
  return selected;
}

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("new");
  const [page, setPage] = useState(1);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const handleImageError = useCallback((src: string) => {
    setBrokenImages((prev) => new Set(prev).add(src));
  }, []);

  const getSrc = useCallback((src: string, articleId: string) => brokenImages.has(src) ? getFallbackImage(articleId) : src, [brokenImages]);

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
  const pickupArticles = useMemo(() => getPickupArticles(articles), [articles]);

  return (
    <div>
      {/* 人気記事ピックアップ（検索・フィルター未使用時のみ表示） */}
      {!search && !selectedTag && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={16} className="text-pink-500" />
            <h2 className="text-sm font-bold text-gray-800 dark:text-gray-200">今週のピックアップ</h2>
          </div>
          {/* モバイル: 横スクロール / PC: 横並び */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-5 sm:overflow-visible">
            {pickupArticles.map((a) => (
              <a
                key={a.id}
                href={`/articles/${a.id}`}
                className="flex-none w-[160px] sm:w-auto snap-start block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md hover:border-pink-300 dark:hover:border-pink-700 transition-all group"
              >
                <div className="relative w-full h-24 overflow-hidden">
                  <Image
                    src={brokenImages.has(getArticleImageUrl(a, articles)) ? getFallbackImage(a.id) : getArticleImageUrl(a, articles)}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 160px, 200px"
                    onError={() => handleImageError(getArticleImageUrl(a, articles))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {a.tags[0] && (
                    <span className={`absolute bottom-2 left-2 text-xs px-1.5 py-0.5 rounded font-medium ${tagColor(a.tags[0])}`}>
                      {a.tags[0]}
                    </span>
                  )}
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {a.title}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{getRelativeTime(a.publishedAt)}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 検索ボックス */}
      <div className="mb-4">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7 7 0 1010 17a7 7 0 006.65-4.35z" />
          </svg>
          <input
            type="text"
            placeholder="キーワードで検索..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); resetPage(); }}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white dark:bg-gray-800 dark:text-white"
          />
          {search && (
            <button
              onClick={() => { setSearch(""); resetPage(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* カテゴリフィルター（モバイル: 横スクロール） */}
      <div className="mb-4">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          <button
            onClick={() => { setSelectedTag(null); resetPage(); }}
            className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-full font-medium whitespace-nowrap transition-colors flex-none ${
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
              className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-full font-medium whitespace-nowrap transition-colors flex-none ${
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
        <span className="text-xs text-gray-600 dark:text-gray-300 shrink-0">並び替え:</span>
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
        <span className="text-xs text-gray-600 dark:text-gray-300 ml-auto">{filtered.length} 件</span>
      </div>

      {/* 検索結果なし */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-600">
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
          <div className="relative w-full h-56 sm:h-72 lg:h-96 overflow-hidden">
            <Image
              src={getSrc(getArticleImageUrl(featured, articles), featured.id)}
              alt={featured.title}
              fill
              priority
              className="object-cover article-image"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) calc(100vw - 32px), 992px"
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
              <span className="text-xs text-gray-600 dark:text-gray-300">
                {getReadTime(featured.body)}分で読める
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((article, i) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={getSrc(getArticleImageUrl(article, articles), article.id)}
                alt={article.title}
                fill
                className="object-cover article-image"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
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
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300 mb-1.5">
                <span>
                  {getRelativeTime(article.publishedAt)} · {article.source}
                </span>
                <span>{getReadTime(article.body)}分</span>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-1.5 group-hover:text-pink-600 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
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
