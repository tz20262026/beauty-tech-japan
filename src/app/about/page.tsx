import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Beauty Tech Japan",
  description: "Beauty Tech Japan について — 海外美容・コスメトレンドを自動収集して日本語でお届けするサービスの紹介",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold bg-pink-500 text-white px-2 py-0.5 rounded">Beauty</span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Beauty Tech Japan とは</h1>
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">サービス概要</h2>
            <p>
              Beauty Tech Japan は、世界中の最新美容トレンド・コスメ・スキンケア情報を自動で収集し、
              日本語に翻訳してお届けするニュースサイトです。
              海外の美容情報をいち早くキャッチしたい方に向けて、
              毎日更新しています。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">仕組み</h2>
            <p className="mb-3">
              Allure・Byrdie・Vogue Beauty・Harper's Bazaar など
              <strong className="text-gray-900 dark:text-white"> 海外の人気美容メディア</strong>
              から情報を自動収集しています。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>海外メディアから美容・コスメ関連情報を自動収集</li>
              <li>AIが内容を解析し、注目トレンドを選別</li>
              <li>日本語に自動翻訳・解説記事として執筆</li>
              <li>カテゴリタグを付けてサイトに公開</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">カバーするメディア</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Allure", "Byrdie", "Vogue Beauty", "Harper's Bazaar",
                "Cosmopolitan", "InStyle", "Refinery29",
                "WWD Beauty", "その他多数"
              ].map((media) => (
                <span
                  key={media}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
                >
                  {media}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">更新頻度</h2>
            <p>毎日自動更新。新しい美容トレンドやコスメ情報が出るたびに追加されます。</p>
          </section>

          <section className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              掲載内容はすべて元の情報をもとにAIが要約・翻訳したものです。
              詳細は各記事ページの「原文を読む」リンクからご確認ください。
            </p>
          </section>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
        >
          記事一覧を見る
        </Link>
      </div>
    </div>
  );
}
