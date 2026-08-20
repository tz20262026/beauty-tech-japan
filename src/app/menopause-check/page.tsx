import type { Metadata } from "next";
import Link from "next/link";
import MenopauseCheckQuiz from "@/components/MenopauseCheckQuiz";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import NewsletterForm from "@/components/NewsletterForm";
import AdUnit from "@/components/AdUnit";

const TITLE = "更年期セルフチェック【無料1分診断】4つのタイプでわかる今のあなた";
const DESC = "ホットフラッシュ、イライラ、不眠、原因不明の不調──7つの質問に答えるだけで、あなたの今の不調タイプと今日からできるセルフケア・病院に相談すべきサインがわかる無料診断です。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["更年期 セルフチェック", "更年期 診断", "ホットフラッシュ", "更年期 症状 チェック", "更年期 イライラ", "隠れ更年期"],
  openGraph: {
    images: [{ url: "https://beauty-tech-japan.vercel.app/api/og?title=" + encodeURIComponent(TITLE) + "&tag=" + encodeURIComponent("無料診断ツール"), width: 1200, height: 630, alt: "Beauty Tech Japan 更年期セルフチェック" }],
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
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/menopause-check" },
};

const FAQ = [
  {
    q: "この更年期セルフチェックは本当に無料ですか？",
    a: "はい、完全無料でご利用いただけます。会員登録やメールアドレスの入力も不要で、何度でも診断できます。",
  },
  {
    q: "診断結果は医学的な診断ですか？",
    a: "いいえ。この診断は一般的な更年期症状の傾向をもとにしたセルフチェックであり、医学的な診断ではありません。症状が続く場合や不安がある場合は、婦人科・更年期外来などの医療機関にご相談ください。",
  },
  {
    q: "何歳から更年期の症状は出ますか？",
    a: "個人差が大きいですが、一般的には45〜55歳頃に症状が出やすいとされています。ただし40代前半でも「プレ更年期」として同じような不調を感じる方は少なくありません。",
  },
  {
    q: "周りに理解されないのがつらいです。どうすればいいですか？",
    a: "更年期の不調は見た目にわかりにくいため、周囲の理解を得にくいのはとても多い悩みです。無理に家族や職場に説明しようとせず、同じ経験をした人のコミュニティや、婦人科・更年期外来の専門家を頼ることも一つの方法です。",
  },
];

export default function MenopauseCheckPage() {
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
      name: "更年期セルフチェック | Beauty Tech Japan",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
      description: DESC,
      url: "https://beauty-tech-japan.vercel.app/menopause-check",
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
            🌿 無料・1分で完了
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight">
            <span className="text-pink-600 dark:text-pink-400">更年期</span>セルフチェック
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            ホットフラッシュ、イライラ、不眠、原因不明の不調──7つの質問で、今のあなたの不調タイプと今日からできるセルフケアがわかります。
          </p>
        </section>

        {/* 導入文 */}
        <section className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            急に顔が熱くなる、理由もなくイライラする、夜中に目が覚める、体のあちこちが不調なのに病院では「異常なし」と言われる──。そんな症状を、誰にも本音で話せずに一人で抱えていませんか。更年期の不調は見た目にわかりにくく、周囲の理解を得にくいことも大きなつらさの一つです。まずは今のご自身のタイプを知ることから始めてみましょう。
          </p>
        </section>

        {/* 診断本体 */}
        <MenopauseCheckQuiz />

        {/* 中間CTA */}
        <ArticleAffiliateCard tags={["更年期", "サプリメント"]} articleId="menopause-check" />

        {/* AdSense枠 */}
        <AdUnit slot="1234567890" />

        {/* メルマガ登録 */}
        <NewsletterForm />

        {/* 内部リンク */}
        <section className="rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-8 text-center space-y-4">
          <h2 className="font-black text-white text-xl">今の自分に合ったケアをもっと詳しく</h2>
          <p className="text-pink-100 text-sm">診断結果を踏まえて、より具体的なケア方法をチェックしましょう。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/beauty-supplements"
              className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl font-black text-pink-700 text-sm transition-all hover:opacity-90 bg-white">
              更年期ケアサプリ特集を見る →
            </Link>
            <Link href="/skin-type-diagnosis"
              className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-90 bg-white/20 text-white border border-white/40">
              肌タイプ診断もやってみる →
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
