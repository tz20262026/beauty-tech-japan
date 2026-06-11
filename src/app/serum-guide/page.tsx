import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "美容液の選び方完全ガイド2026年版【悩み別・成分別・タイプ別】| Beauty Tech Japan",
  description: "保湿系・ビタミンC系・レチノール系・美白系・鎮静系など美容液の種類を徹底解説。乾燥・シミ・毛穴・シワなど悩み別に最適な美容液の選び方を2026年最新情報でご紹介。",
  keywords: ["美容液 選び方", "美容液 種類", "セラム おすすめ", "美容液 成分", "美容液 比較", "ビタミンC 美容液", "レチノール 美容液", "美白 美容液"],
  openGraph: {
    title: "美容液の選び方完全ガイド2026年版｜悩み別・成分別・タイプ別",
    description: "保湿・ビタミンC・レチノール・美白・鎮静など美容液の種類と選び方を完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "美容液の選び方完全ガイド2026年版",
    description: "悩み別・成分別・タイプ別の美容液選びを完全解説",
  },
};

interface SerumType {
  name: string;
  icon: string;
  mainIngredients: string;
  effect: string;
  bestFor: string;
  color: string;
  timing: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const SERUM_TYPES: SerumType[] = [
  {
    name: "保湿系美容液",
    icon: "💧",
    mainIngredients: "ヒアルロン酸、セラミド、グリセリン、スクワラン",
    effect: "水分を抱え込み、バリア機能を強化。肌のカサつき・乾燥小じわを素早く改善する。",
    bestFor: "乾燥肌・敏感肌・乾燥小じわ・バリア機能の低下",
    color: "#06b6d4",
    timing: "朝晩どちらでも使用可。化粧水の直後に使うのがベスト。",
  },
  {
    name: "ビタミンC系美容液",
    icon: "🍋",
    mainIngredients: "ビタミンC誘導体（アスコルビルグルコシド等）、ナイアシンアミド",
    effect: "メラニン生成を抑制してシミ・くすみを予防・改善。コラーゲン合成を促しハリをサポート。",
    bestFor: "シミ・くすみ・ハリ不足・毛穴の開き",
    color: "#f97316",
    timing: "朝の使用が特に効果的（抗酸化作用で紫外線ダメージを軽減）。安定型なら夜も可。",
  },
  {
    name: "レチノール系美容液",
    icon: "🔬",
    mainIngredients: "レチノール、レチナール、レチノイン酸（処方薬）",
    effect: "コラーゲン産生を促進し、シワを改善。ターンオーバーを正常化して毛穴・ニキビ跡も改善。",
    bestFor: "シワ・たるみ・毛穴・ニキビ跡・ターンオーバーの乱れ",
    color: "#f59e0b",
    timing: "夜のみ使用。低濃度から始め、翌朝は日焼け止め必須。",
  },
  {
    name: "美白（ブライトニング）系美容液",
    icon: "⭐",
    mainIngredients: "アルブチン、コウジ酸、トランサミン、プラセンタ",
    effect: "メラニン生成を阻害し、既存のシミを薄くする。くすみをトーンアップして肌の透明感を高める。",
    bestFor: "シミ・くすみ・肌の黄ばみ・日焼け後のケア",
    color: "#d946ef",
    timing: "朝晩使用可。日中使用後は日焼け止めを必ずプラスする。",
  },
  {
    name: "鎮静（カーミング）系美容液",
    icon: "🌿",
    mainIngredients: "ツボクサエキス（センテラ）、アゼライン酸、アロエベラ、緑茶エキス",
    effect: "赤みや炎症を鎮め、敏感になった肌を落ち着かせる。ニキビの炎症にも有効。",
    bestFor: "敏感肌・赤み・ニキビ・肌荒れ・刺激を受けた肌",
    color: "#10b981",
    timing: "朝晩使用可。肌荒れ時に積極的に活用。他の刺激成分との組み合わせ時に緩衝材になる。",
  },
  {
    name: "ペプチド系美容液",
    icon: "🧬",
    mainIngredients: "マトリキシル、アルジルリン、コッパーペプチド",
    effect: "コラーゲン・エラスチンの産生を促進し、肌のハリ・弾力を回復。刺激が少なく扱いやすい。",
    bestFor: "ハリ・弾力不足・たるみ・目元のシワ",
    color: "#8b5cf6",
    timing: "朝晩使用可。レチノールと組み合わせで相乗効果。肌負担が少ない優秀成分。",
  },
];

const WORRY_GUIDE = [
  { worry: "🏜️ 乾燥・ぷるぷる感が欲しい", type: "保湿系", color: "#06b6d4" },
  { worry: "🌑 シミ・くすみを薄くしたい", type: "ビタミンC系 + 美白系", color: "#f97316" },
  { worry: "📏 シワ・たるみが気になる", type: "レチノール系 + ペプチド系", color: "#f59e0b" },
  { worry: "🔴 赤みや肌荒れが続く", type: "鎮静系", color: "#10b981" },
  { worry: "🔵 毛穴・凹凸が気になる", type: "ビタミンC系 + レチノール系", color: "#8b5cf6" },
  { worry: "✨ ハリ・弾力が欲しい", type: "ペプチド系 + レチノール系", color: "#d946ef" },
];

const FAQ: FAQItem[] = [
  {
    q: "美容液は何歳から使い始めるべきですか？",
    a: "保湿系・ビタミンC系は20代前半から使い始めても問題ありません。レチノール系は30代からが一般的な推奨です。早期からの保湿とUVケアが長期的に最も効果的なエイジングケアになります。",
  },
  {
    q: "美容液は複数重ねて使えますか？",
    a: "はい。一般的に「水っぽいテクスチャー→とろみのあるもの」の順番で重ねます。ただし、レチノール×AHAなど刺激が強い成分の組み合わせは初心者には不向きです。2〜3種類以内にとどめるのがおすすめです。",
  },
  {
    q: "高価な美容液ほど効果が高いですか？",
    a: "必ずしもそうではありません。The Ordinary（ジ・オーディナリー）や一部の韓国コスメは、高濃度の有効成分を低価格で提供しています。成分と濃度を確認することがコスパ良く選ぶポイントです。",
  },
  {
    q: "美容液の使用量の目安はどのくらいですか？",
    a: "製品によりますが、一般的にセラムは「米粒大〜パール1粒分（0.5〜1ml程度）」が1回の使用量です。レチノール系は特に少量（米粒大）から始め、刺激に慣れながら量を調整します。",
  },
  {
    q: "美容液と乳液・クリームの違いは何ですか？",
    a: "美容液（セラム）は有効成分が高濃度に配合され、特定の悩みにアプローチするのが目的です。乳液・クリームはその成分にフタをして保湿を維持するのが主な役割です。「美容液＝ターゲットケア」「クリーム＝フタ」と覚えると分かりやすいです。",
  },
];

export default function SerumGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-12">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      {/* ヘッダー */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-orange-50 text-orange-600 border border-orange-200">
          ✨ 美容液ガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          美容液の選び方<br className="sm:hidden" />
          <span className="text-orange-500">完全ガイド</span>
          <span className="text-lg ml-2 text-gray-500">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          保湿系・ビタミンC系・レチノール系・美白系・鎮静系など美容液の種類を徹底解説。乾燥・シミ・毛穴・シワなどお悩み別に最適な美容液の選び方をご紹介します。
        </p>
      </section>

      {/* 悩み別早見表 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔍 悩み別おすすめ美容液タイプ</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {WORRY_GUIDE.map(({ worry, type, color }) => (
            <div
              key={worry}
              className="flex items-start gap-3 p-4 rounded-2xl border bg-white"
              style={{ borderColor: `${color}30` }}
            >
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-sm">{worry}</p>
                <p className="text-xs mt-1 font-bold" style={{ color }}>{type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 美容液タイプ詳細 */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">💎 美容液の種類・成分・効果を詳しく解説</h2>
        <div className="space-y-5">
          {SERUM_TYPES.map((serum) => (
            <div
              key={serum.name}
              className="rounded-2xl border p-5 space-y-4"
              style={{ borderColor: `${serum.color}35`, background: `${serum.color}06` }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-2xl">{serum.icon}</span>
                <h3 className="font-black text-xl text-gray-900">{serum.name}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3 border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 mb-1">主な成分</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{serum.mainIngredients}</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 mb-1">おすすめ悩み</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{serum.bestFor}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{serum.effect}</p>
              <div className="flex items-start gap-2 bg-white rounded-xl p-3 border border-gray-100">
                <span className="font-bold text-xs flex-shrink-0 mt-0.5" style={{ color: serum.color }}>使用タイミング</span>
                <p className="text-sm text-gray-600 leading-relaxed">{serum.timing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">よくある質問</h2>
        <div className="space-y-3">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-900 text-sm mb-2">Q. {q}</p>
              <p className="text-gray-600 text-sm leading-relaxed">A. {a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 関連ガイドへ誘導 */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/anti-aging-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            エイジングケアガイド →
          </Link>
          <Link
            href="/skincare-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
          >
            スキンケア基本ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
