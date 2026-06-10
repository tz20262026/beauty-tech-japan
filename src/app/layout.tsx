import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const OG_IMAGE = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80&fit=crop";

export const metadata: Metadata = {
  verification: {
    google: "uc1EpOPB8-ZZ_x-_mTNsSRgzG9qJlOSV7T7HbxcJ0UI",
  },
  title: {
    default: "Beauty Tech Japan — 海外美容・コスメ最新情報を日本語で",
    template: "%s | Beauty Tech Japan",
  },
  description: "Allure・Vogue Beauty・Byrdieなど海外人気美容メディアからスキンケア・メイク・ヘアケアの最新トレンドを日本語でお届け。韓国コスメ・プチプラ・成分解析など3日おきに自動更新。",
  metadataBase: new URL("https://beauty-tech-japan.vercel.app"),
  keywords: ["美容", "コスメ", "スキンケア", "メイク", "ヘアケア", "海外美容", "トレンド", "ビューティー"],
  authors: [{ name: "Beauty Tech Japan" }],
  creator: "Beauty Tech Japan",
  publisher: "Beauty Tech Japan",
  alternates: {
    canonical: "https://beauty-tech-japan.vercel.app",
    types: {
      "application/rss+xml": "https://beauty-tech-japan.vercel.app/feed.xml",
    },
  },
  openGraph: {
    siteName: "Beauty Tech Japan",
    title: "Beauty Tech Japan — 海外美容・コスメ最新情報を日本語で",
    description: "Allure・Vogue Beauty・Byrdieなど海外の人気美容メディアから最新トレンドを日本語でお届け。",
    type: "website",
    locale: "ja_JP",
    url: "https://beauty-tech-japan.vercel.app",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Beauty Tech Japan — 海外美容・コスメ最新情報" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Tech Japan — 海外美容・コスメ最新情報を日本語で",
    description: "Allure・Vogue Beauty・Byrdieなど海外の人気美容メディアから最新トレンドを日本語でお届け。",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors">
        {/* ─── Google Analytics 4 ─────────────────────────── */}
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
