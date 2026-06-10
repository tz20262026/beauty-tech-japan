"use client";

import { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";

export default function BookmarkButton({ articleId }: { articleId: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const bookmarks: string[] = JSON.parse(localStorage.getItem("btj_bookmarks") ?? "[]");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaved(bookmarks.includes(articleId));
  }, [articleId]);

  const toggle = () => {
    const bookmarks: string[] = JSON.parse(localStorage.getItem("btj_bookmarks") ?? "[]");
    const next = saved
      ? bookmarks.filter((id) => id !== articleId)
      : [...bookmarks, articleId];
    localStorage.setItem("btj_bookmarks", JSON.stringify(next));
    setSaved(!saved);
  };

  return (
    <button
      onClick={toggle}
      aria-label={saved ? "ブックマーク解除" : "ブックマーク"}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
        saved
          ? "bg-pink-500 text-white border-pink-500"
          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-pink-400 hover:text-pink-500"
      }`}
    >
      <Bookmark size={13} className={saved ? "fill-white" : ""} />
      {saved ? "保存済み" : "保存"}
    </button>
  );
}
