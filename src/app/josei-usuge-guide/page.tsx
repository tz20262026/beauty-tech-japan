import type { Metadata } from "next";
import Link from "next/link";
import AtSectionBeauty from "@/components/AtSectionBeauty";

export const metadata: Metadata = {
  title: "産後・更年期の抜け毛が気になったら【2026年版 女性の薄毛対策ガイド】",
  description:
    "産後や更年期に増える抜け毛の原因と、自宅でできるケア・専門クリニックへの相談タイミングを解説。女性特有の薄毛悩みに向き合うための完全ガイド。",
  keywords: ["女性 薄毛", "産後 抜け毛", "更年期 抜け毛", "女性 AGA", "分け目 薄い 女性 対策"],
  openGraph: {
    title: "産後・更年期の抜け毛が気になったら【2026年版】",
    description: "女性特有の抜け毛の原因と、自宅ケア・専門クリニック相談のタイミングを解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "産後・更年期の抜け毛が気になったら【2026年版】",
    description: "女性特有の抜け毛の原因と、自宅ケア・専門クリニック相談のタイミングを解説。",
  },
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/josei-usuge-guide" },
};

const CAUSES = [
  { name: "産後の女性ホルモン変化", icon: "🤱", desc: "妊娠中に増えていたエストロゲンが出産後に急減し、髪の成長期が一斉に終わって抜け毛が増える「分娩後脱毛症」。産後2〜6ヶ月がピークで、多くは1年程度で自然に落ち着きます。" },
  { name: "更年期のホルモンバランス変化", icon: "🌸", desc: "40代後半〜50代にかけてエストロゲンが減少し、髪のハリ・コシ・ボリュームが低下しやすくなる時期。分け目が目立つ、全体的に薄く感じるといった変化が起こりやすくなります。" },
  { name: "ストレス・生活習慣", icon: "😔", desc: "睡眠不足・偏った食生活・過度なストレスは、原因を問わず抜け毛を悪化させる要因になります。育児や更年期の体調変化と重なると、負担が大きくなりがちです。" },
  { name: "牽引性脱毛・ヘアスタイルの負担", icon: "💇‍♀️", desc: "同じ分け目を続ける、きつく結ぶ習慣が長期間続くと、その部分の毛根に負担がかかり続けます。分け目を時々変えるだけでも予防になります。" },
];

const SELF_CARE = [
  "睡眠時間を確保する（髪の成長ホルモンは主に睡眠中に分泌される）",
  "たんぱく質・鉄分・亜鉛を意識した食事（髪は主にケラチンというたんぱく質でできている）",
  "頭皮マッサージで血行を促す（1日3〜5分、就寝前の習慣化がおすすめ）",
  "分け目を定期的に変えて特定部位への負担を分散する",
  "紫外線対策（頭皮も肌と同様に日焼けダメージを受ける）",
];

const FAQ = [
  { q: "産後の抜け毛はいつまで続きますか？", a: "個人差はありますが、産後2〜6ヶ月がピークで、多くの場合は出産から1年前後で徐々に落ち着いていきます。1年以上経っても改善しない、範囲が広がっている場合は専門クリニックへの相談を検討してください。" },
  { q: "女性の薄毛は男性と同じ治療が受けられますか？", a: "女性特有のホルモンバランスやライフステージ（産後・更年期等）を踏まえた診療が必要なため、女性専門の薄毛外来を選ぶことが推奨されます。多くのクリニックが無料カウンセリングを実施しているので、まず相談してみるのが第一歩です。" },
  { q: "市販の育毛剤だけで様子を見てもいいですか？", a: "軽度であれば市販品や生活習慣の改善で経過を見ても問題ないケースが多いですが、進行を感じる場合や不安が強い場合は、自己判断で長期化させず、早めに専門家に相談することをおすすめします。" },
];

export default function JoseiUsugeGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "産後・更年期の抜け毛が気になったら【2026年版 女性の薄毛対策ガイド】",
        author: { "@type": "Organization", name: "Beauty Tech Japan" },
        datePublished: "2026-07-22",
        dateModified: "2026-07-22",
        url: "https://beauty-tech-japan.vercel.app/josei-usuge-guide",
      })}} />

      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-pink-50 text-pink-600 border border-pink-200">
          🌸 女性の薄毛対策ガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          産後・更年期の抜け毛が<br className="sm:hidden" />
          <span className="text-pink-600">気になったら</span>
          <span className="text-lg ml-2 text-gray-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          「最近、分け目が目立つ気がする」「シャンプーの時の抜け毛が増えた」——そう感じたら、まず原因を知ることが第一歩です。産後・更年期に起こりやすい抜け毛の仕組みと、今日からできるケア、専門家に相談すべきタイミングを整理しました。
        </p>
        <p className="text-xs text-gray-500">公開日：2026年7月22日</p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">🔍 女性の抜け毛、主な原因4つ</h2>
        <div className="space-y-3">
          {CAUSES.map((c) => (
            <div key={c.name} className="flex gap-4 p-4 rounded-2xl bg-pink-50 border border-pink-100">
              <span className="text-2xl flex-shrink-0">{c.icon}</span>
              <div>
                <p className="font-black text-gray-900 mb-1">{c.name}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">🏠 自宅でできるセルフケア</h2>
        <ul className="space-y-2">
          {SELF_CARE.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700 bg-purple-50 border border-purple-100 rounded-xl p-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-black">{i + 1}</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-xl font-black text-gray-900">🏥 専門クリニックへの相談を考えるタイミング</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          セルフケアを続けても改善が見られない、範囲が広がっている、精神的な負担が大きい——こうしたサインがあれば、一人で抱え込まず専門クリニックに相談するタイミングです。女性専門の薄毛外来では、ホルモンバランスや生活背景を踏まえた診療が受けられます。多くは無料カウンセリングから始められるので、治療を決める前にまず話を聞いてもらうだけでも状況が整理しやすくなります。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">❓ よくある質問</h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <div key={item.q} className="rounded-xl border border-gray-200 p-4">
              <p className="font-bold text-gray-900 mb-1">Q. {item.q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">A. {item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-pink-50 border border-amber-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/skincare-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            スキンケア完全ガイド →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
          >
            最新記事を読む →
          </Link>
        </div>
      </section>

      <AtSectionBeauty />
    </div>
  );
}
