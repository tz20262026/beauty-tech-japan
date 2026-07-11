"use client";

import { useEffect, useState } from "react";

// スマホ画面下に固定表示するアフィリエイトCTAバー（閉じるボタン付き）
// - 少しスクロールしてから表示（読み始めた読者にだけ見せる）
// - 閉じたらセッション中は再表示しない
const STORAGE_KEY = "btj-sticky-cta-closed";

const CTA_ITEMS = [
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B7USZ+G7GTMA+1USQ+2Z68LU",
    emoji: "🧴",
    title: "ORBIS Mr.",
    sub: "初回990円で試す",
    className: "bg-gradient-to-r from-pink-600 to-rose-500",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B7USZ+G8NOTU+8UW+69HA9",
    emoji: "💇",
    title: "ラサーナ",
    sub: "うるツヤ髪ケア",
    className: "bg-gradient-to-r from-teal-600 to-cyan-600",
  },
];

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    setClosed(false);
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClose() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setClosed(true);
  }

  if (closed || !visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden"
      role="complementary"
      aria-label="おすすめサービス（PR）"
    >
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur border-t border-pink-100 dark:border-gray-700 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-2 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-1.5">
          <span className="shrink-0 text-[9px] font-bold text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded px-1 py-0.5">
            PR
          </span>
          {CTA_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              rel="nofollow sponsored noopener"
              target="_blank"
              className={`flex-1 min-h-[44px] flex flex-col items-center justify-center rounded-xl text-white leading-tight px-2 py-1 ${item.className}`}
            >
              <span className="text-xs font-black">
                {item.emoji} {item.title}
              </span>
              <span className="text-[10px] font-semibold text-white/90">{item.sub} →</span>
            </a>
          ))}
          <button
            onClick={handleClose}
            aria-label="このバーを閉じる"
            className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 text-lg"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
