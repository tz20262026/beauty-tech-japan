import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Cpu, BookOpen, Tag, RefreshCw, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Beauty Tech Japanとは｜海外美容メディアの最新情報を日本語で",
  description: "Beauty Tech Japan について — 海外美容・コスメトレンドを自動収集して日本語でお届けするサービスの紹介",
  openGraph: {
    title: "Beauty Tech Japanとは｜海外美容メディアの最新情報を日本語で",
    description: "Beauty Tech Japan について — 海外美容・コスメトレンドを自動収集して日本語でお届けするサービスの紹介",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Tech Japanとは｜海外美容メディアの最新情報を日本語で",
    description: "Beauty Tech Japan について — 海外美容・コスメトレンドを自動収集して日本語でお届けするサービスの紹介",
  },
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/about" },
};

const MEDIA_LIST = [
  "Allure", "Byrdie", "Vogue Beauty", "Harper's Bazaar",
  "Cosmopolitan", "InStyle", "Refinery29", "WWD Beauty", "その他多数",
];

const STEPS = [
  { icon: Globe,     text: "海外メディアから美容・コスメ関連情報を自動収集" },
  { icon: Cpu,       text: "AIが内容を解析し、注目トレンドを選別" },
  { icon: BookOpen,  text: "日本語に自動翻訳・解説記事として執筆" },
  { icon: Tag,       text: "カテゴリタグを付けてサイトに公開" },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>

      {/* ヒーローバナー */}
      <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 px-8 py-10 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90%" cy="10%" r="160" fill="white" />
            <circle cx="5%"  cy="90%" r="100" fill="white" />
          </svg>
        </div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium mb-3">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            海外美容情報を日本語でお届け
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight">Beauty Tech Japan とは</h1>
          <p className="text-white/80 text-sm max-w-lg">
            世界の美容メディアから最新トレンドを自動収集し、AIが日本語でわかりやすくお届けするニュースサイトです。
          </p>
          <div className="flex flex-wrap gap-5 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-xs text-white/70">提携メディア</div>
            </div>
            <div className="w-px h-10 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold">3日</div>
              <div className="text-xs text-white/70">おきに更新</div>
            </div>
            <div className="w-px h-10 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold">9</div>
              <div className="text-xs text-white/70">カテゴリ</div>
            </div>
          </div>
        </div>
      </div>

      {/* 仕組みセクション */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5">仕組み</h2>
        <div className="space-y-4">
          {STEPS.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-pink-500" />
              </div>
              <div className="flex items-center gap-3 flex-1 pt-1.5">
                <span className="text-xs font-bold text-pink-500 bg-pink-50 dark:bg-pink-900/30 px-2 py-0.5 rounded-full">
                  Step {i + 1}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* カバーするメディア */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">カバーするメディア</h2>
        <div className="flex flex-wrap gap-2">
          {MEDIA_LIST.map((media) => (
            <span
              key={media}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full font-medium"
            >
              {media}
            </span>
          ))}
        </div>
      </div>

      {/* 更新頻度・免責 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <RefreshCw size={18} className="text-pink-500" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">更新頻度</h2>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-5">
          3日おきに自動更新。新しい美容トレンドやコスメ情報が定期的に追加されます。
        </p>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-start gap-2">
          <ExternalLink size={14} className="text-gray-600 mt-0.5 shrink-0" />
          <p className="text-xs text-gray-600 dark:text-gray-300">
            掲載内容はすべて元の情報をもとにAIが要約・翻訳したものです。
            詳細は各記事ページの「原文を読む」リンクからご確認ください。
          </p>
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
