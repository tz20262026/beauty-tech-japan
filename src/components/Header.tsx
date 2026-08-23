import Link from "next/link";
import { Bookmark } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="bg-gray-950 text-white sticky top-0 z-10 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xs font-bold bg-pink-500 text-white px-2 py-0.5 rounded">Beauty</span>
          <span className="text-lg font-bold tracking-tight group-hover:text-pink-400 transition-colors">
            Tech Japan
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-sm text-gray-300">
          <Link href="/skin-type-diagnosis" className="flex items-center gap-1 min-h-[44px] px-2.5 py-1 rounded-full bg-pink-500 text-white font-bold text-xs hover:bg-pink-400 transition-colors">
            🧴 肌タイプ診断
          </Link>
          <Link href="/" className="hover:text-white transition-colors hidden sm:block">記事一覧</Link>
          <Link href="/about" className="hover:text-white transition-colors hidden sm:block">About</Link>
          {/* タップ領域44px確保: アイコン自体は18pxのまま、疑似要素で見た目を変えずに当たり判定だけ拡張する */}
          <Link
            href="/bookmarks"
            aria-label="保存した記事"
            className="relative flex items-center justify-center hover:text-pink-400 transition-colors after:content-[''] after:absolute after:-inset-[13px]"
          >
            <Bookmark size={18} />
          </Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
