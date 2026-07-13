import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleList from "@/components/ArticleList";
import RandomArticleButton from "@/components/RandomArticleButton";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import MoshimoSectionBeauty from "@/components/MoshimoSectionBeauty";

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
        url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=512&q=80&fit=crop",
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
      <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-pink-500 via-rose-400 to-purple-600 min-h-[220px] sm:min-h-[340px] lg:min-h-[460px]">
        {/* 背景装飾：浮かぶサークル */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-0 -left-16 w-80 h-80 bg-purple-400/20 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-lg" />
          {/* キラキラ装飾（SVG）*/}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80%" cy="15%" r="160" fill="white" />
            <circle cx="5%" cy="85%" r="100" fill="white" />
            <circle cx="55%" cy="105%" r="90" fill="white" />
            <circle cx="30%" cy="30%" r="40" fill="white" />
          </svg>
        </div>

        {/* PC: 2カラム / スマホ: 1カラム */}
        <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_340px] lg:grid-cols-[1fr_420px]">
          {/* 左: テキストコンテンツ */}
          <div className="px-6 py-8 sm:px-10 sm:py-12 sm:min-h-[340px] lg:min-h-[460px] text-white flex flex-col justify-center">
            {/* 上部バッジ */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                毎週新記事を自動更新中
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                🌏 海外5メディア厳選
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
              Beauty Tech Japan
            </h1>
            <p className="text-white/90 text-sm sm:text-base font-medium mb-1">
              海外の最新コスメ・美容トレンドを日本語でチェック
            </p>
            <p className="text-white/70 text-xs sm:text-sm mb-6 max-w-md">
              Allure・Vogue Beauty・Byrdieなど世界の美容メディアから最新トレンドを厳選してお届け
            </p>

            {/* 統計 */}
            <div className="flex items-center gap-4 sm:gap-6 mb-6 flex-wrap">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">{articles.length}<span className="text-base font-normal">+</span></div>
                <div className="text-xs text-white/70">記事</div>
              </div>
              <div className="w-px h-10 bg-white/30" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">9</div>
                <div className="text-xs text-white/70">カテゴリ</div>
              </div>
              <div className="w-px h-10 bg-white/30" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">5</div>
                <div className="text-xs text-white/70">メディア</div>
              </div>
              {latestDate && (
                <>
                  <div className="w-px h-10 bg-white/30 hidden sm:block" />
                  <div className="text-center hidden sm:block">
                    <div className="text-sm font-semibold">{latestDate.slice(0, 10)}</div>
                    <div className="text-xs text-white/70">最終更新</div>
                  </div>
                </>
              )}
            </div>

            {/* CTA ボタン群 */}
            <div className="flex flex-wrap gap-3 items-center">
              <RandomArticleButton ids={articles.map((a) => a.id)} />
              <Link
                href="/skincare-guide"
                className="inline-flex items-center gap-2 min-h-[44px] bg-white/90 hover:bg-white text-pink-700 text-xs sm:text-sm font-black px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                ✨ ガイドを読む
              </Link>
              <a
                href="#latest-articles"
                className="inline-flex items-center gap-2 min-h-[44px] bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all border border-white/30 hover:border-white/50"
              >
                📰 最新記事を見る
              </a>
              {/* X シェアボタン */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Beauty Tech Japan — 海外コスメ・美容の最新情報を日本語でチェック🌸")}&url=${encodeURIComponent(SITE_URL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all border border-white/20 hover:border-white/40"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white shrink-0">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Xでシェア
              </a>
            </div>
          </div>

          {/* 右: 女性画像（PCのみ） */}
          <div className="hidden sm:block relative sm:min-h-[340px] lg:min-h-[460px]">
            <Image
              src="/images/hero-woman.png"
              alt="Beauty Tech Japan — 日本人女性・海外最新美容情報"
              fill
              className="object-cover object-center"
              priority
              sizes="420px"
            />
            {/* 左側グラデーション（テキストエリアとのブレンド） */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-rose-400/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* 人気ガイドリンクセクション */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">人気ガイド記事</h2>
            <p className="text-gray-500 text-sm">スキンケア・コスメ・美容テックの基礎から最新トレンドまで</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/beauty-tools-guide",
                emoji: "🤖",
                color: "#8b5cf6",
                bg: "from-purple-50 to-purple-100",
                border: "border-purple-200",
                label: "NEW",
                title: "ビューティーテック15選",
                desc: "AI肌診断・ARメイク・美容デバイスを徹底比較",
              },
              {
                href: "/skincare-ai-guide",
                emoji: "📱",
                color: "#3b82f6",
                bg: "from-blue-50 to-blue-100",
                border: "border-blue-200",
                label: "NEW",
                title: "AIスキンケアガイド",
                desc: "AI肌診断の仕組み・おすすめアプリ完全解説",
              },
              {
                href: "/korean-beauty-guide",
                emoji: "🇰🇷",
                color: "#ec4899",
                bg: "from-pink-50 to-rose-100",
                border: "border-pink-200",
                label: "NEW",
                title: "韓国コスメガイド2026",
                desc: "最新トレンド・人気ブランド・購入方法",
              },
              {
                href: "/skincare-guide",
                emoji: "✨",
                color: "#f59e0b",
                bg: "from-orange-50 to-amber-100",
                border: "border-orange-200",
                label: "人気",
                title: "スキンケア完全ガイド",
                desc: "朝晩のルーティン・肌質別の選び方",
              },
              {
                href: "/k-beauty-guide",
                emoji: "💄",
                color: "#10b981",
                bg: "from-emerald-50 to-teal-100",
                border: "border-emerald-200",
                label: "人気",
                title: "K-Beautyルーティン",
                desc: "韓国美容10ステップを完全解説",
              },
              {
                href: "/anti-aging-guide",
                emoji: "🌸",
                color: "#d946ef",
                bg: "from-fuchsia-50 to-pink-100",
                border: "border-fuchsia-200",
                label: "おすすめ",
                title: "エイジングケアガイド",
                desc: "年齢肌に効く成分・ルーティン解説",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex gap-4 items-start p-5 rounded-2xl bg-gradient-to-br ${item.bg} border ${item.border} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
              >
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-black px-2 py-0.5 rounded-full text-white"
                      style={{ background: item.color }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p className="font-black text-gray-900 text-sm leading-tight mb-0.5">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AffiliateSectionBeauty />

      <MoshimoSectionBeauty />

      <div id="latest-articles" className="scroll-mt-20">
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}
