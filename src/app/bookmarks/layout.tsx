import type { Metadata } from "next";

// bookmarks はブラウザのlocalStorageに依存するクライアント専用ページで、
// クローラーには常に「保存した記事がありません」という空の状態しか見えず、
// 検索結果に出しても価値がないため noindex にする（内部リンクは follow で辿らせる）。
export const metadata: Metadata = {
  title: "保存した記事",
  description: "あなたがブックマークした Beauty Tech Japan の記事一覧。",
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/bookmarks" },
  robots: { index: false, follow: true },
};

export default function BookmarksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
