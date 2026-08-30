import type { MetadataRoute } from "next";

// PWA マニフェスト（/manifest.webmanifest として配信）。
// スマホの「ホーム画面に追加」対応と、モバイル/検索エンジンへのサイト情報提供のため。
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beauty Tech Japan — 海外美容・コスメ最新情報を日本語で",
    short_name: "Beauty Tech",
    description:
      "Allure・Vogue Beauty・Byrdieなど海外人気美容メディアからスキンケア・メイク・ヘアケアの最新トレンドを日本語でお届け。",
    start_url: "/",
    id: "/", // PWAの識別子を固定し、インストール済みアプリとの同一性を安定させる
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec4899",
    lang: "ja",
    categories: ["lifestyle", "news", "beauty"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
