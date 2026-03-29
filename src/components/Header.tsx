import Link from "next/link";
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
        <nav className="flex items-center gap-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">記事一覧</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
