import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "image.pollinations.ai" },
      { protocol: "https", hostname: "images.unsplash.com" },
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
};

export default nextConfig;
