import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/perfume-guide" },
  title: "香水おすすめランキング2026年版【レディース・メンズ・プチプラ・デート向け】",
  description:
    "2026年版香水おすすめランキングを徹底解説。レディース・メンズ・プチプラ・デートに使える香水をシーン別・季節別・年代別に紹介。選び方・付け方のコツも解説。",
  openGraph: {
    title: "香水おすすめランキング2026年版【レディース・メンズ・プチプラ】",
    description: "2026年版人気香水をシーン別・季節別にランキング紹介。デート・仕事・普段使いの香水選びを完全ガイド。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "香水おすすめランキング2026年版",
    description: "レディース・メンズ・プチプラ香水をシーン別に完全ガイド。",
  },
};

interface Perfume {
  rank: number;
  name: string;
  brand: string;
  type: "レディース" | "メンズ" | "ユニセックス";
  priceRange: string;
  scene: string;
  season: string;
  notes: { top: string; middle: string; base: string };
  description: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const PERFUMES: Perfume[] = [
  {
    rank: 1,
    name: "La vie est belle",
    brand: "Lancôme（ランコム）",
    type: "レディース",
    priceRange: "¥8,000〜20,000",
    scene: "デート・オフィス",
    season: "春・秋",
    notes: { top: "ブラックカラント・ナシ", middle: "アイリス・ジャスミン", base: "パチュリ・バニラ・ムスク" },
    description: "甘くエレガントなフローラルゴルマン。日本でも絶大な人気を誇る定番の大人香水。甘すぎず上品な仕上がり。",
  },
  {
    rank: 2,
    name: "Coco Mademoiselle",
    brand: "Chanel（シャネル）",
    type: "レディース",
    priceRange: "¥15,000〜35,000",
    scene: "デート・特別な場面",
    season: "秋・冬",
    notes: { top: "オレンジ・ベルガモット", middle: "ローズ・ジャスミン", base: "パチュリ・ムスク・バニラ" },
    description: "シャネルを代表するモダンオリエンタル。フレッシュでありながら深みのあるフェミニンな香り。大人の女性らしさを演出。",
  },
  {
    rank: 3,
    name: "Bleu de Chanel",
    brand: "Chanel（シャネル）",
    type: "メンズ",
    priceRange: "¥15,000〜35,000",
    scene: "オフィス・デート",
    season: "オールシーズン",
    notes: { top: "グレープフルーツ・ミント", middle: "ジンジャー・ナツメグ", base: "シダー・サンダルウッド・ムスク" },
    description: "爽やかさと深みを兼ね備えたメンズの定番中の定番。清潔感があり好感度が高い香り。幅広い年代に人気。",
  },
  {
    rank: 4,
    name: "Flower by Kenzo",
    brand: "Kenzo（ケンゾー）",
    type: "レディース",
    priceRange: "¥6,000〜15,000",
    scene: "普段使い・オフィス",
    season: "春・秋",
    notes: { top: "レッドポピー", middle: "バイオレット・ローズ", base: "ムスク・バニラ・パチュリ" },
    description: "フルーティーフローラルのロングセラー香水。軽やかで清楚な印象で、普段使いにぴったりの上品な香り。",
  },
  {
    rank: 5,
    name: "AQUA ALLEGORIA Mandarine Basilic",
    brand: "Guerlain（ゲラン）",
    type: "ユニセックス",
    priceRange: "¥8,000〜18,000",
    scene: "春夏の普段使い",
    season: "春・夏",
    notes: { top: "マンダリン・バジル", middle: "シトラス", base: "グリーンティー・ウッディ" },
    description: "爽やかなシトラスハーバル。夏の暑い季節にも清涼感を演出。ユニセックスで男女問わず人気の軽快な香り。",
  },
  {
    rank: 6,
    name: "J'adore",
    brand: "Dior（ディオール）",
    type: "レディース",
    priceRange: "¥12,000〜30,000",
    scene: "特別な場面・デート",
    season: "春・秋",
    notes: { top: "カンタロープ・ピーチ", middle: "ダマスクローズ・ジャスミン", base: "ムスク・ブラックベリー" },
    description: "ディオールを代表するフローラルブーケ。華やかで大人の女性らしさを演出する贅沢な香り。",
  },
];

const HOW_TO_WEAR = [
  { title: "付け方の基本", tips: ["体温が高い場所に付ける（手首・首筋・デコルテ・耳裏）", "擦り込まない（香りの分子が壊れる）", "服に付けると取れにくくなる（布への色移りに注意）"] },
  { title: "シーン別の付け方", tips: ["デート：耳裏・首筋に1〜2プッシュ（控えめに）", "オフィス：手首に1プッシュ（香りを出しすぎない）", "パーティー：デコルテ・ウエストに追加（より華やかに）"] },
  { title: "季節別の選び方", tips: ["春・夏：フローラル・シトラス・フレッシュ系（軽い香り）", "秋・冬：ムスク・ウッディ・オリエンタル系（重めの香り）", "オールシーズン：ローズ・ジャスミン・ムスク単体の香り"] },
];

const FAQS: FaqItem[] = [
  {
    q: "香水の選び方のポイントは何ですか？",
    a: "①自分の肌に付けてテストする（試香紙だけでなく実際の体温と反応させて判断）②シーン・季節・年代に合ったものを選ぶ③好みの香調（フローラル・シトラス・ムスク・ウッディ等）を把握する④持続時間・拡散度合いを確認する（トワレ・パルファン・コロン等の種類）の4点が基本です。",
  },
  {
    q: "プチプラで良い香水はありますか？",
    a: "はい、1,000〜5,000円台でも品質の高い香水が増えています。特にJ-Scentシリーズ・ジルスチュアート（コスメブランド）・Zara・H&Mの香水ラインがコスパが高いと評判です。デパート・コスメブランドの香水は比較的安価なラインも展開しています。",
  },
  {
    q: "香水はどこで買うのが一番安いですか？",
    a: "Amazon・楽天市場・コスメ専門通販が価格を比較しやすく便利です。正規品を保証しているブランド公式サイトや百貨店が安心ですが、価格は高め。並行輸入品（正規輸入でない）は安いことが多いですが品質に差があることも。定番品はセール時期（バレンタイン・クリスマス）に狙うとお得です。",
  },
  {
    q: "香水の正しい保管方法は？",
    a: "直射日光・高温多湿・温度変化の大きい場所を避けることが重要です。理想の保管場所は暗所・室温（15〜20℃）・湿度の低い場所です。冷蔵庫での保管は結露で劣化する可能性があるためおすすめしません。一度開封したら1〜2年以内に使い切ることを目安にしてください。",
  },
  {
    q: "香水をつけすぎると嫌われますか？",
    a: "はい、つけすぎは嫌われる原因になります。特に密閉された空間（電車・オフィス・エレベーター）では香りが強すぎると周囲に不快感を与えます。基本は1〜2プッシュで十分。自分では慣れて感じにくくなっても他人には強く感じることがあります（嗅覚の慣れ）。オフィスでは特に控えめにするのがマナーです。",
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

const typeColor: Record<Perfume["type"], string> = {
  "レディース": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "メンズ": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "ユニセックス": "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function PerfumeGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-pink-500/20 text-pink-400 border border-pink-500/30 rounded-full px-4 py-1 mb-4">
            🌹 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            香水おすすめ<br />
            <span className="text-pink-400">ランキング2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【レディース・メンズ・プチプラ・デート向け】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            2026年に人気の香水をレディース・メンズ・プチプラ別に<br />
            シーン・季節・年代を考慮してランキング形式で紹介します。
          </p>
        </div>

        {/* ランキング */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-3">
            🌹 香水おすすめランキング TOP6
          </h2>
          <div className="space-y-5">
            {PERFUMES.map((p) => (
              <div key={p.rank} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex items-start gap-4 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${
                    p.rank === 1 ? "bg-yellow-400 text-black" : p.rank === 2 ? "bg-gray-300 text-black" : p.rank === 3 ? "bg-orange-400 text-black" : "bg-gray-700 text-gray-300"
                  }`}>
                    {p.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-white font-black text-base">{p.name}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${typeColor[p.type]}`}>
                        {p.type}
                      </span>
                    </div>
                    <p className="text-pink-400 text-xs font-semibold">{p.brand}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">{p.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3 text-xs">
                  <div className="bg-gray-800 rounded px-2 py-1.5">
                    <span className="text-gray-600 block mb-0.5">💰 価格帯</span>
                    <span className="text-white">{p.priceRange}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2 py-1.5">
                    <span className="text-gray-600 block mb-0.5">🎭 シーン</span>
                    <span className="text-white">{p.scene}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2 py-1.5">
                    <span className="text-gray-600 block mb-0.5">🌸 季節</span>
                    <span className="text-white">{p.season}</span>
                  </div>
                </div>

                <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg px-3 py-2 text-xs">
                  <p className="text-pink-300 font-bold mb-1">🌸 香りのノート</p>
                  <p className="text-gray-600">トップ: {p.notes.top}</p>
                  <p className="text-gray-600">ミドル: {p.notes.middle}</p>
                  <p className="text-gray-600">ベース: {p.notes.base}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 付け方ガイド */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-pink-500 pl-3">
            💡 香水の正しい付け方・選び方
          </h2>
          <div className="space-y-4">
            {HOW_TO_WEAR.map((h, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <h3 className="text-pink-400 font-bold text-sm mb-3">{h.title}</h3>
                <ul className="space-y-1.5">
                  {h.tips.map((tip, j) => (
                    <li key={j} className="text-gray-600 text-xs flex gap-2">
                      <span className="text-pink-400 flex-shrink-0">✓</span>{tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="perfume-guide" />

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-pink-900/20 to-amber-900/20 border border-pink-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            💄 スキンケアとトータルコーデしよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            香水と合わせてスキンケアルーティンを整えることで<br />
            美しさと香りで印象アップを狙えます。
          </p>
          <a
            href="/skincare-guide"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            スキンケア完全ガイドを見る →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-pink-500 pl-3">
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

        {/* アフィリエイト */}
        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
