import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "ボディケア・全身美容 完全ガイド2026年版【保湿・ボディスクラブ・脱毛・むくみ対策・おすすめアイテム】",
  description:
    "ボディケア・全身美容の方法を2026年版で完全解説。保湿・ボディスクラブ・バスケア・脱毛・むくみ対策・セルライトケアのおすすめアイテムと方法を初心者向けに解説します。",
  openGraph: {
    title: "ボディケア・全身美容 完全ガイド2026年版",
    description: "保湿・ボディスクラブ・バスケア・脱毛・むくみ対策を解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ボディケア完全ガイド2026年版",
    description: "保湿・スクラブ・バスケア・脱毛・むくみ対策を解説。",
  },
};

interface CareStep {
  name: string;
  icon: string;
  timing: string;
  product: string;
  method: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const CARE_STEPS: CareStep[] = [
  {
    name: "ボディスクラブ（週1〜2回）",
    icon: "🧴",
    timing: "入浴中",
    product: "ボディスクラブ・泥パック・砂糖スクラブ",
    method: "ぬれた肌に円を描くようにやさしくマッサージ→ぬるま湯で流す。やりすぎは肌を傷めるので週2回程度が適切。",
  },
  {
    name: "ボディ保湿（毎日）",
    icon: "💧",
    timing: "入浴後3〜5分以内",
    product: "ボディミルク・ボディクリーム・ボディオイル",
    method: "タオルで水分を軽く拭き取ったらすぐに全身に塗る。特に肘・膝・かかと・脛は乾燥しやすいので重点的に。",
  },
  {
    name: "バスタイムケア",
    icon: "🛁",
    timing: "入浴中",
    product: "入浴剤・バスソルト・ミルクバス",
    method: "38〜40度のぬるめのお湯に15〜20分浸かる。熱すぎるお湯は肌の乾燥を促進するのでNG。バスソルトは発汗・デトックス効果も。",
  },
  {
    name: "むくみ・セルライトケア",
    icon: "🦵",
    timing: "夜のお風呂後",
    product: "スリミングジェル・カッサ・電動マッサージャー",
    method: "足首→ふくらはぎ→ひざ→太ももの順に心臓に向けてマッサージ。リンパの流れを促すことが重要。",
  },
  {
    name: "日焼け止め（ボディ用）",
    icon: "☀️",
    timing: "外出前",
    product: "ボディ用日焼け止めSPF30以上・PA+++以上",
    method: "腕・脚など露出する部位に均一に塗る。2〜3時間おきに塗り直すと効果が持続。夏は特にUVカット手袋・長袖での物理的防御も有効。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "ボディケアは毎日やる必要がありますか？",
    a: "保湿（ボディクリーム・ボディミルク）は毎日行うことを推奨します。特に入浴後すぐの3〜5分以内が最も効果的です。スクラブ（角質ケア）は週1〜2回で十分で、頻繁すぎると肌バリアを損ないます。忙しい場合は「お風呂上がりの保湿」だけでも継続することが大切です。",
  },
  {
    q: "ボディ保湿のおすすめ商品を教えてください（プチプラ・デパコス別）",
    a: "プチプラ（1,000〜3,000円）では①ニベア（敏感肌OKでコスパ最強）②サボン シャワーオイル③ル・プチマルセイユ（欧州ブランドで香りが良い）。デパコス（3,000円以上）では①キールズ クレム ドゥ コール②クラランス ハイドラ エクラ ボディ ローション③ランコム エクレール エクラ ボディクリーム、がおすすめです。乾燥が強い場合はオイルタイプ・敏感肌の方は無香料・ノンアルコールを選びましょう。",
  },
  {
    q: "むくみを解消するセルフケアの方法を教えてください。",
    a: "むくみ解消に効果的な方法は①リンパマッサージ（足首→ひざ→太ももの順に心臓方向へ）②着圧ソックス（日中着用で足のむくみを予防）③足を上げる（就寝時に枕などを使って足を心臓より高くする）④塩分制限（塩分を摂りすぎると体内に水分を溜めやすくなる）⑤ウォーキング（ふくらはぎのポンプ機能を活用）の5つです。",
  },
  {
    q: "ボディスクラブの正しい使い方と頻度を教えてください。",
    a: "スクラブの正しい使い方：①シャワーや入浴で肌をよく濡らす②スクラブを適量取り円を描くようにやさしくマッサージ③冷水or温水でしっかりすすぐ④スクラブ後は必ず保湿を行う。頻度は週1〜2回が適切です（毎日はNG・バリア機能を壊す）。肌が敏感な方・乾燥がひどい方は月2〜4回程度にして様子を見ながら増やすことをおすすめします。",
  },
  {
    q: "ボディオイルとボディクリームはどちらが効果的ですか？",
    a: "どちらが効果的かは肌の状態と好みによります。ボディクリームは保湿力が高く乾燥・かさつきに向いています。ボディオイルは肌なじみが良くツヤ感が出やすく、肌の上に薄い膜を作って水分を閉じ込めます。最も効果的な使い方は「ボディクリームで保湿→その上からボディオイルを重ね塗りして蓋をする」二層使いです。特に冬・乾燥が強い部位（ひじ・膝・かかと）に効果的です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BodycareGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full px-4 py-1 mb-4">
            💆 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            ボディケア・全身美容<br />
            <span className="text-teal-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【保湿・スクラブ・むくみ・脱毛ケア】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            全身ボディケアの正しい方法・おすすめアイテムを<br />
            2026年版で完全解説します。
          </p>
        </div>

        {/* ケアステップ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-teal-500 pl-3">
            💆 ボディケア基本ステップ5選
          </h2>
          <div className="space-y-4">
            {CARE_STEPS.map((step, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-white font-black text-sm">{step.name}</h3>
                  <span className="text-xs bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded-full">{step.timing}</span>
                </div>
                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs mb-3">
                  <span className="text-gray-600">🧴 おすすめアイテム：</span>
                  <span className="text-gray-200">{step.product}</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{step.method}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-teal-900/20 to-green-900/20 border border-teal-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🌸 フェイスケアも合わせて取り組もう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ボディケアと合わせてスキンケアを取り入れることで<br />
            頭の先から爪先まで美しい肌を実現できます。
          </p>
          <a
            href="/skincare-guide"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            スキンケア完全ガイドを見る →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-teal-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
