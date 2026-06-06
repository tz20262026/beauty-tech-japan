import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://beauty-tech-japan.vercel.app/sitemap.xml",
    host: "https://beauty-tech-japan.vercel.app",
  };
}
