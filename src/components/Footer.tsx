import Link from "next/link";

const CATEGORIES = [
  { label: "スキンケア", tag: "スキンケア" },
  { label: "メイクアップ", tag: "メイクアップ" },
  { label: "ヘアケア", tag: "ヘアケア" },
  { label: "ネイル", tag: "ネイル" },
  { label: "インナービューティー", tag: "インナービューティー" },
  { label: "美容テック", tag: "美容テック" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 mt-16">
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
          {/* ブランド */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold bg-pink-500 text-white px-2 py-0.5 rounded">Beauty</span>
              <span className="text-white font-semibold">Tech Japan</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              海外の最新美容トレンド・コスメ・スキンケア情報をAIが日本語でお届けするメディアです。
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="/rss"
                className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
                </svg>
                RSS購読
              </Link>
            </div>
          </div>

          {/* カテゴリ */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-3 uppercase tracking-wide">カテゴリ</h3>
            <ul className="space-y-2">
              {CATEGORIES.map(({ label, tag }) => (
                <li key={tag}>
                  <Link
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="text-xs hover:text-pink-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-3 uppercase tracking-wide">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-xs hover:text-pink-400 transition-colors">記事一覧</Link>
              </li>
              <li>
                <Link href="/skincare-guide" className="text-xs hover:text-pink-400 transition-colors font-semibold text-pink-400">スキンケア完全ガイド</Link>
              </li>
              <li>
                <Link href="/k-beauty-guide" className="text-xs hover:text-pink-400 transition-colors font-semibold text-pink-300">K-Beautyガイド</Link>
              </li>
              <li>
                <Link href="/cosme-ranking" className="text-xs hover:text-pink-400 transition-colors font-semibold text-yellow-400">プチプラコスメランキング</Link>
              </li>
              <li>
                <Link href="/haircare-guide" className="text-xs hover:text-pink-400 transition-colors font-semibold text-amber-400">ヘアケア完全ガイド</Link>
              </li>
              <li>
                <Link href="/about" className="text-xs hover:text-pink-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/rss" className="text-xs hover:text-pink-400 transition-colors">
                  RSSフィード
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xs font-semibold text-white mb-2 uppercase tracking-wide">情報源</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Allure / Byrdie / Vogue Beauty<br />
                Harper&apos;s Bazaar / Refinery29
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Beauty Tech Japan. All rights reserved.</p>
          <p className="text-gray-700">掲載内容はAIによる要約・翻訳です</p>
        </div>
      </div>
    </footer>
  );
}
