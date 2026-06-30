import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません",
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
    </div>
  );
}
