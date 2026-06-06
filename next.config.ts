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
};

export default nextConfig;
