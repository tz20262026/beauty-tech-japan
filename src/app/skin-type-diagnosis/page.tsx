import type { Metadata } from "next";
import Link from "next/link";
import SkinTypeQuiz from "@/components/SkinTypeQuiz";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import NewsletterForm from "@/components/NewsletterForm";
import AdUnit from "@/components/AdUnit";

const TITLE = "肌タイプ診断【30秒で無料】乾燥肌・脂性肌・混合肌・敏感肌";
const DESC = "7つの質問に答えるだけで、あなたの肌タイプ（乾燥肌・脂性肌・混合肌・敏感肌・普通肌）を無料診断。朝晩のルーティン・おすすめ成分・避けるべき成分まで結果ページで解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["肌タイプ診断", "肌質診断", "乾燥肌 診断", "脂性肌 診断", "混合肌", "敏感肌 診断", "スキンケア 診断"],
  openGraph: {
    images: [{ url: "https://beauty-tech-japan.vercel.app/api/og?title=" + encodeURIComponent(TITLE) + "&tag=" + encodeURIComponent("無料診断ツール"), width: 1200, height: 630, alt: "Beauty Tech Japan 肌タイプ診断" }],
    title: TITLE,
    description: DESC,
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    images: ["https://beauty-tech-japan.vercel.app/api/og?title=" + encodeURIComponent(TITLE) + "&tag=" + encodeURIComponent("無料診断ツール")],
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/skin-type-diagnosis" },
};

const FAQ = [
  {
    q: "この肌タイプ診断は本当に無料ですか？",
    a: "はい、完全無料でご利用いただけます。会員登録やメールアドレスの入力も不要で、何度でも診断できます。",
  },
  {
    q: "診断結果はどのくらい正確ですか？",
    a: "7つの質問はスキンケア分野で一般的に使われる肌質判定の考え方（皮脂量・水分保持力・刺激への反応）をもとに設計しています。ただしあくまでセルフチェックの参考です。肌トラブルが続く場合は皮膚科医にご相談ください。",
  },
  {
    q: "季節によって肌タイプが変わることはありますか？",
    a: "はい、よくあります。特に混合肌の方は夏と冬で皮脂量が大きく変わりやすいので、季節の変わり目に再診断することをおすすめします。",
  },
  {
    q: "診断結果を保存したりシェアしたりできますか？",
    a: "結果ページ下部のシェアボタンからLINE・X（Twitter）・Facebookで結果をシェアできます。リンクをコピーして後で見返すことも可能です。",
  },
];

export default function SkinTypeDiagnosisPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "肌タイプ診断 | Beauty Tech Japan",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
      description: DESC,
      url: "https://beauty-tech-japan.vercel.app/skin-type-diagnosis",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50/60 to-white dark:from-gray-950 dark:to-gray-950">
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}

      <div className="max-w-2xl mx-auto px-4 py-10 space-y-12">
        {/* ヘッダー */}
        <section className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-900">
            🧴 無料・30秒で完了
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight">
            <span className="text-pink-600 dark:text-pink-400">肌タイプ</span>診断
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            7つの質問に答えるだけで、あなたの肌タイプと今すぐ始められる朝晩のスキンケアルーティンがわかります。
          </p>
        </section>

        {/* 診断本体 */}
        <SkinTypeQuiz />

        {/* 中間CTA */}
        <ArticleAffiliateCard tags={["肌タイプ診断", "スキンケア"]} articleId="skin-type-diagnosis" />

        {/* AdSense枠 */}
        <AdUnit slot="1234567890" />

        {/* メルマガ登録 */}
        <NewsletterForm />

        {/* 内部リンク */}
        <section className="rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-8 text-center space-y-4">
          <h2 className="font-black text-white text-xl">肌質に合わせたケアをもっと詳しく</h2>
          <p className="text-pink-100 text-sm">診断結果を踏まえて、より具体的なスキンケア方法をチェックしましょう。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/skincare-guide"
              className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl font-black text-pink-700 text-sm transition-all hover:opacity-90 bg-white">
              スキンケア完全ガイドを見る →
            </Link>
            <Link href="/skincare-ai-guide"
              className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-90 bg-white/20 text-white border border-white/40">
              AIスキンケアガイドを見る →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-gray-900 dark:text-white">よくある質問</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-pink-50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900 rounded-xl p-5">
                <p className="font-bold text-gray-900 dark:text-white text-sm mb-2">Q. {q}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
