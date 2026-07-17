import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/pore-care-guide" },
  title: "毛穴ケア完全ガイド2026年版【開き・黒ずみ・たるみ毛穴の種類別対策】",
  description: "開き毛穴・黒ずみ毛穴・たるみ毛穴の原因と正しいケア方法を完全解説。ナイアシンアミド・サリチル酸・レチノールなどおすすめ成分も紹介。2026年最新の毛穴ケア情報。",
  keywords: ["毛穴 ケア", "毛穴 開き", "毛穴 黒ずみ", "たるみ毛穴", "毛穴 原因", "毛穴 対策", "毛穴 成分", "毛穴 美容液"],
  openGraph: {
    title: "毛穴ケア完全ガイド2026年版｜開き・黒ずみ・たるみ毛穴の種類別対策",
    description: "毛穴の種類（開き・黒ずみ・たるみ）別の原因と正しいケア方法を完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "毛穴ケア完全ガイド2026年版",
    description: "開き毛穴・黒ずみ毛穴・たるみ毛穴の種類別ケア方法を完全解説",
  },
};

interface PoreType {
  name: string;
  icon: string;
  cause: string;
  careMethods: string[];
  recommendedIngredients: string;
  color: string;
  ngAction: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const PORE_TYPES: PoreType[] = [
  {
    name: "開き毛穴",
    icon: "🌀",
    cause: "過剰な皮脂分泌・毛穴詰まり・Tゾーンに多い。皮脂が毛穴に溜まり物理的に押し広げられた状態。",
    careMethods: [
      "洗顔：夜は泡立てた洗顔料でTゾーンをしっかり洗う",
      "ダブル洗顔：メイクの日はクレンジング後に洗顔を行う",
      "化粧水：収れん成分（ウィッチヘーゼル等）入りをTゾーンに",
      "BHA（サリチル酸）：毛穴の皮脂詰まりを溶かして除去",
      "クレイパック：週1〜2回で皮脂・角栓をオフ",
    ],
    recommendedIngredients: "サリチル酸（BHA）、ナイアシンアミド、レチノール、AHA（グリコール酸）",
    color: "#f97316",
    ngAction: "毛穴パックの過剰使用（バリア破壊）・強力な洗顔料の使いすぎ（皮脂過剰分泌を招く）",
  },
  {
    name: "黒ずみ毛穴",
    icon: "⚫",
    cause: "毛穴に詰まった角栓（皮脂+古い角質）が空気に触れて酸化し黒くなったもの。鼻頭・あごに多い。",
    careMethods: [
      "酵素洗顔：週2〜3回で古い角質・皮脂をやさしく除去",
      "AHA（グリコール酸・乳酸）：角質をやわらかくして角栓を排出",
      "BHA（サリチル酸）：油溶性なので毛穴の皮脂詰まりに特に効果的",
      "レチノール：ターンオーバーを促進して角栓が詰まりにくい肌に",
      "クレイパック：吸着力で毛穴の汚れを引き出す",
    ],
    recommendedIngredients: "サリチル酸（BHA）、グリコール酸（AHA）、レチノール、酵素",
    color: "#64748b",
    ngAction: "毛穴パックで無理やり取る（毛穴が広がる）・スクラブの過剰使用・つまんで絞り出す",
  },
  {
    name: "たるみ毛穴",
    icon: "📐",
    cause: "コラーゲン・エラスチンの減少により肌のハリが失われ、毛穴が縦に引き伸ばされた状態。頬に多い。",
    careMethods: [
      "レチノール：コラーゲン産生を促進して肌のハリを回復",
      "ペプチド系美容液：エラスチン・コラーゲンの合成をサポート",
      "日焼け止め：光老化を防ぎコラーゲン分解を抑制する最重要ケア",
      "フェイシャルマッサージ：血行促進でハリを維持（こすりすぎ厳禁）",
      "保湿：十分な保湿でふっくらさせ毛穴を目立たなく",
    ],
    recommendedIngredients: "レチノール、ペプチド、ビタミンC誘導体、ナイアシンアミド",
    color: "#8b5cf6",
    ngAction: "引っ張るようなマッサージ・洗い過ぎによるバリア破壊・日焼け止めをサボる",
  },
];

const DAILY_CARE = [
  { step: 1, icon: "🫧", name: "洗顔（夜はW洗顔）", point: "毛穴ケアの基本。泡立てた洗顔料で、Tゾーンから円を描くように。すすぎは32〜34℃ぬるま湯で十分に。" },
  { step: 2, icon: "💧", name: "化粧水（収れん系）", point: "洗顔後すぐに補水。毛穴の引き締め効果が期待できる収れん化粧水をTゾーンに。" },
  { step: 3, icon: "✨", name: "BHA/AHA美容液（週2〜3回）", point: "角栓・皮脂詰まりを溶かして排出。最初は週1から慣らす。使用後は日焼け止め必須。" },
  { step: 4, icon: "💎", name: "ナイアシンアミド美容液", point: "皮脂分泌を抑制し毛穴を目立たなく。毎日使えて即効性もあり毛穴ケアの定番成分。" },
  { step: 5, icon: "🧴", name: "保湿（軽めのテクスチャー）", point: "オイリー肌はジェル・ローションタイプを選ぶ。重いクリームは毛穴詰まりを悪化させることも。" },
  { step: 6, icon: "☀️", name: "日焼け止め（朝）", point: "光老化によるたるみ毛穴を防ぐ最重要ステップ。SPF50+/PA++++を毎朝必ず。" },
];

const FAQ: FAQItem[] = [
  {
    q: "毛穴は完全になくすことができますか？",
    a: "毛穴は皮膚の構造上なくすことはできません。ただし、正しいケアで「目立ちにくくする」ことは可能です。開き毛穴はBHA・レチノールで縮小、黒ずみは角栓除去で薄くなり、たるみ毛穴はコラーゲンケアで改善が期待できます。",
  },
  {
    q: "毛穴パックは使っても大丈夫ですか？",
    a: "過剰使用は禁物です。物理的に角栓を剥がすと毛穴が広がり、バリア機能も低下します。使用するとしても月1〜2回以下にとどめ、使用後は必ず収れん化粧水＋保湿をセットで行ってください。",
  },
  {
    q: "ナイアシンアミドは毛穴に効きますか？",
    a: "はい、科学的根拠があります。ナイアシンアミド（5〜10%濃度）は皮脂分泌の抑制、毛穴の目立ち軽減、バリア機能強化の3つの効果が複数の臨床試験で確認されています。毛穴ケアの中心的な成分として非常におすすめです。",
  },
  {
    q: "鼻の黒ずみが消えないのはなぜですか？",
    a: "鼻の黒ずみは毛穴の中の角栓が酸化したものです。表面から見える黒ずみは除去できても、毛穴自体の大きさを変えないと再発します。BHA（サリチル酸）を週2〜3回継続使用し、レチノールでターンオーバーを正常化することが長期的な解決策です。",
  },
  {
    q: "毛穴ケアに最も効果的な成分は何ですか？",
    a: "開き毛穴・黒ずみにはBHA（サリチル酸）が最も効果的です。ナイアシンアミドは皮脂抑制・毛穴縮小両方に効き汎用性が高いです。たるみ毛穴にはレチノールとペプチドが王道です。まず自分の毛穴タイプを見極めて成分を選ぶのが近道です。",
  },
];

export default function PoreCareGuidePage() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-rose-50 text-rose-600 border border-rose-200">
          🔍 毛穴ケアガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          毛穴ケア完全ガイド<br className="sm:hidden" />
          <span className="text-rose-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          開き毛穴・黒ずみ毛穴・たるみ毛穴の種類別に原因と正しいケア方法を徹底解説。ナイアシンアミド・BHA・レチノールなどおすすめ成分も詳しくご紹介します。
        </p>
      </section>

      {/* 毛穴タイプ診断ガイド */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔍 あなたの毛穴タイプはどれ？</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {PORE_TYPES.map((pore) => (
            <div
              key={pore.name}
              className="rounded-2xl border p-4 text-center space-y-2"
              style={{ borderColor: `${pore.color}35`, background: `${pore.color}08` }}
            >
              <div className="text-3xl">{pore.icon}</div>
              <p className="font-black text-gray-900">{pore.name}</p>
              <p
                className="text-xs px-2 py-1 rounded-full font-bold inline-block"
                style={{ background: `${pore.color}15`, color: pore.color }}
              >
                おすすめ: {pore.recommendedIngredients.split("、")[0]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
      <ArticleAffiliateCard tags={[]} articleId="pore-care-guide" />

      {/* 毛穴タイプ別ケア詳細 */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-gray-900">💡 毛穴タイプ別ケア方法を詳しく解説</h2>
        {PORE_TYPES.map((pore) => (
          <div
            key={pore.name}
            className="rounded-2xl border p-6 space-y-4"
            style={{ borderColor: `${pore.color}35`, background: `${pore.color}05` }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{pore.icon}</span>
              <h3 className="text-xl font-black text-gray-900">{pore.name}</h3>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-xs font-bold text-gray-600 mb-1">原因</p>
              <p className="text-sm text-gray-700 leading-relaxed">{pore.cause}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">ケア方法</p>
              <ul className="space-y-2">
                {pore.careMethods.map((method) => (
                  <li key={method} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: pore.color }}>→</span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <p className="text-xs font-bold mb-1" style={{ color: pore.color }}>おすすめ成分</p>
                <p className="text-sm text-gray-600">{pore.recommendedIngredients}</p>
              </div>
              <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                <p className="text-xs font-bold text-red-500 mb-1">⚠️ やってはいけないこと</p>
                <p className="text-sm text-gray-600 leading-relaxed">{pore.ngAction}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 日常ケアルーティン */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">📋 毛穴ケアの日常ルーティン</h2>
        <div className="space-y-3">
          {DAILY_CARE.map((s) => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-rose-50 border border-rose-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm">
                  {s.step}
                </div>
                <span className="text-lg">{s.icon}</span>
              </div>
              <div>
                <div className="font-black text-gray-900 mb-1">{s.name}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.point}</p>
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
      <section className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/serum-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}
          >
            美容液の選び方ガイド →
          </Link>
          <Link
            href="/anti-aging-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            エイジングケアガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
