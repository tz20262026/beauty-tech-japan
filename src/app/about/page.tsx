import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | AI News Japan",
  description: "AI News Japan について — 海外AIツール・ニュースを自動収集して日本語でお届けするサービスの紹介",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold bg-blue-500 text-white px-2 py-0.5 rounded">AI</span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI News Japan とは</h1>
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">サービス概要</h2>
            <p>
              AI News Japan は、世界中の最新 AI ツール・ニュースを自動で収集し、
              日本語に翻訳してお届けするニュースサイトです。
              海外のテック情報をいち早くキャッチしたい方に向けて、
              毎日更新しています。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">仕組み</h2>
            <p className="mb-3">
              TechCrunch・VentureBeat・Product Hunt・Wired など
              <strong className="text-gray-900 dark:text-white"> 海外100媒体以上</strong>
              から記事を自動収集しています。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>世界中のメディアから AI 関連記事を自動スクレイピング</li>
              <li>AI が内容を解析し、重要度の高い記事を選別</li>
              <li>日本語に自動翻訳・要約</li>
              <li>カテゴリタグを付けてサイトに公開</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">カバーするメディア</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "TechCrunch", "VentureBeat", "Product Hunt", "Wired",
                "The Verge", "Ars Technica", "MIT Technology Review",
                "AI News", "Hacker News", "その他90媒体以上"
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
            <p>毎日自動更新。新しい AI ツールやニュースが出るたびに追加されます。</p>
          </section>

          <section className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              掲載内容はすべて元の記事をもとに AI が要約・翻訳したものです。
              詳細は各記事ページの「原文を読む」リンクからご確認ください。
            </p>
          </section>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
        >
          記事一覧を見る
        </Link>
      </div>
    </div>
  );
}
