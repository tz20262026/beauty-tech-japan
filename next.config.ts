import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "image.pollinations.ai" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "thumbnail.image.rakuten.co.jp" },
    ],
    deviceSizes: [375, 640, 768, 1024, 1280],
    imageSizes: [32, 64, 128, 256, 400],
  },
  // 重複コンテンツの統合（301リダイレクト）
  // /suncare-guide は /sunscreen-guide とほぼ同一内容で検索評価が分散していたため、
  // 情報量の多い /sunscreen-guide に一本化する。
  async redirects() {
    return [
      {
        source: "/suncare-guide",
        destination: "/sunscreen-guide",
        permanent: true, // 301
      },
    ];
  },
  // セキュリティヘッダー。
  // /widget/ingredient.html は他サイトへのiframe埋め込みを前提とした静的パーツなので
  // X-Frame-Options の対象から除外し、それ以外の全ページに適用する。
  async headers() {
    return [
      {
        source: "/((?!widget/ingredient.html).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Vercel は常時HTTPSのためHSTSを有効化（preload込み・2年）
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // カメラ/マイク/位置情報は当サイトで未使用のため明示的に無効化。
          // 広告の関心事API(browsing-topics)はAdSense収益に影響するため制限しない。
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
