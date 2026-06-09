"use client";

import { useState } from "react";

type Props = {
  title: string;
  url: string;
};

export default function ShareButtons({ title, url }: Props) {
  const [copied, setCopied] = useState(false);
  const [titleCopied, setTitleCopied] = useState(false);

  const copyTitle = async () => {
    await navigator.clipboard.writeText(title);
    setTitleCopied(true);
    setTimeout(() => setTitleCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title}\n`);

  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">この記事をシェア</p>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 [&>*]:justify-center">
        {/* LINE */}
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#06C755" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M12 2C6.48 2 2 6.02 2 11c0 3.53 2.06 6.6 5.14 8.37-.2.73-.74 2.63-.85 3.04-.14.52.19.51.4.37.16-.1 2.57-1.74 3.61-2.44.54.08 1.1.12 1.7.12 5.52 0 10-4.02 10-9S17.52 2 12 2z" />
          </svg>
          LINEで送る
        </a>

        {/* X (Twitter) */}
        <a
          href={xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-black transition-opacity hover:opacity-80"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Xでポスト
        </a>

        {/* Facebook */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#1877F2" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebookでシェア
        </a>

        {/* リンクコピー */}
        <button
          onClick={copyLink}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 bg-gray-100 transition-colors hover:bg-gray-200"
        >
          {copied ? <>✅ コピーしました！</> : (
            <>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              リンクをコピー
            </>
          )}
        </button>

        {/* タイトルコピー */}
        <button
          onClick={copyTitle}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 bg-gray-100 transition-colors hover:bg-gray-200"
        >
          {titleCopied ? <>✅ タイトルをコピーしました！</> : (
            <>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              タイトルをコピー
            </>
          )}
        </button>
      </div>
    </div>
  );
}
