import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  // 404ページは検索結果に出す価値がないためインデックス対象から除外する
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="mb-6">
        <span className="text-8xl font-black bg-gradient-to-br from-pink-400 to-purple-500 bg-clip-text text-transparent select-none">
          404
        </span>
      </div>
      <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        ページが見つかりません
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-8 max-w-sm">
        お探しのページは移動したか、URLが変更された可能性があります。
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold transition-colors"
        >
          トップページへ戻る
        </Link>
        <Link
          href="/about"
          className="px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:border-pink-400 hover:text-pink-500 transition-colors"
        >
          Beauty Tech Japan とは
        </Link>
      </div>

      {/* 人気ガイドへの回遊導線。行き止まりにせず、ユーザーとクローラーを実在ページへ誘導する */}
      <div className="mt-10">
        <p className="text-xs text-gray-400 mb-2">人気のガイド</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <Link href="/skin-type-diagnosis" className="text-xs text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors">
            肌タイプ診断
          </Link>
          <Link href="/skincare-guide" className="text-xs text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors">
            スキンケア完全ガイド
          </Link>
          <Link href="/korean-beauty-guide" className="text-xs text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors">
            韓国コスメガイド
          </Link>
          <Link href="/haircare-guide" className="text-xs text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors">
            ヘアケア完全ガイド
          </Link>
        </div>
      </div>
    </div>
  );
}
