import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "エイジングケア完全ガイド2026年版【年齢肌対策・成分・ルーティン】",
  description: "レチノール・ナイアシンアミド・ビタミンC誘導体・ペプチドなど、エイジングケアに効く成分を徹底解説。年齢肌のお悩み別おすすめ成分と正しいルーティンを2026年最新情報でご紹介。",
  keywords: ["エイジングケア", "年齢肌", "レチノール", "ナイアシンアミド", "ビタミンC誘導体", "ペプチド", "アンチエイジング", "シワ 対策", "シミ 対策"],
  openGraph: {
    title: "エイジングケア完全ガイド2026年版｜年齢肌対策・成分・ルーティン",
    description: "レチノール・ナイアシンアミド・ペプチドなどエイジングケア成分を徹底解説。正しいルーティンで年齢肌に効果的にアプローチ",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "エイジングケア完全ガイド2026年版",
    description: "年齢肌対策・エイジングケア成分・ルーティンを完全解説",
  },
};

interface Ingredient {
  name: string;
  icon: string;
  effect: string;
  recommendedAge: string;
  howToUse: string;
  color: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    name: "レチノール（ビタミンA）",
    icon: "🔬",
    effect: "コラーゲン生成を促進し、シワ・毛穴・ニキビ跡を改善。肌のターンオーバーを正常化する最強成分。",
    recommendedAge: "30代〜",
    howToUse: "夜のみ使用。低濃度（0.01〜0.03%）から始め、週2〜3回から慣らす。必ず日焼け止めを併用する。",
    color: "#f59e0b",
  },
  {
    name: "ナイアシンアミド（ビタミンB3）",
    icon: "💎",
    effect: "シミ・くすみを抑制し、毛穴を目立たなくする。バリア機能を強化し、肌の保水力を高める万能成分。",
    recommendedAge: "20代〜",
    howToUse: "朝晩使用可。5〜10%濃度が最も効果的。敏感肌でも比較的使いやすい。他の成分との相性も良好。",
    color: "#ec4899",
  },
  {
    name: "ビタミンC誘導体",
    icon: "🍋",
    effect: "メラニン生成を抑制してシミ・くすみを予防。コラーゲン合成を促し、ハリ・弾力をサポートする。",
    recommendedAge: "20代〜",
    howToUse: "朝の使用が特に効果的（抗酸化作用で紫外線ダメージを軽減）。安定型ビタミンC誘導体は夜も使用可。",
    color: "#f97316",
  },
  {
    name: "ペプチド",
    icon: "🧬",
    effect: "コラーゲン・エラスチンの産生を促し、ハリ・弾力を回復。刺激が少なくあらゆる肌タイプに適する。",
    recommendedAge: "30代〜",
    howToUse: "朝晩使用可。美容液やクリームで取り入れるのが一般的。レチノールと組み合わせると相乗効果あり。",
    color: "#8b5cf6",
  },
  {
    name: "ヒアルロン酸",
    icon: "💧",
    effect: "1gで6Lの水分を保持する保湿の王様。肌表面のふっくら感・ハリを即効でキープ。乾燥小じわに効果的。",
    recommendedAge: "10代〜",
    howToUse: "朝晩使用可。化粧水・美容液・クリームあらゆるステップで活用できる。低分子タイプは角質層まで届く。",
    color: "#06b6d4",
  },
  {
    name: "AHA（グリコール酸・乳酸）",
    icon: "⚗️",
    effect: "古い角質を穏やかに除去してターンオーバーを促進。くすみ解消・毛穴詰まりの改善・美白効果がある。",
    recommendedAge: "25代〜",
    howToUse: "夜のみ使用推奨。週1〜2回から始める。使用後は日焼け止め必須。敏感肌は低濃度（1〜5%）から。",
    color: "#10b981",
  },
];

const MORNING_ROUTINE = [
  { step: 1, name: "洗顔", point: "ぬるま湯でやさしく。朝は水洗いでも可。摩擦ゼロが鉄則。" },
  { step: 2, name: "ビタミンC美容液", point: "抗酸化作用で紫外線ダメージを事前に軽減。シミ予防に最も効果的なタイミング。" },
  { step: 3, name: "ナイアシンアミド美容液", point: "くすみ・毛穴をカバー。ビタミンCと組み合わせで相乗効果。" },
  { step: 4, name: "保湿クリーム（ヒアルロン酸入り）", point: "水分を閉じ込める。軽めのテクスチャーが朝向き。" },
  { step: 5, name: "日焼け止め（SPF50+/PA++++）", point: "エイジングケアで最も重要なステップ。紫外線が老化の最大要因。" },
];

const NIGHT_ROUTINE = [
  { step: 1, name: "クレンジング→洗顔", point: "日中の汚れ・日焼け止めをW洗顔でしっかりオフ。" },
  { step: 2, name: "化粧水", point: "保湿力の高いタイプをたっぷり。肌を整えて次のステップへ。" },
  { step: 3, name: "レチノール美容液（週2〜3回）", point: "夜のみ使用。量は米粒大。ターンオーバー促進・コラーゲン増産の最強成分。" },
  { step: 4, name: "ペプチド美容液 or ナイアシンアミド", point: "レチノールのない日に使用。ハリ・弾力・バリア機能を補う。" },
  { step: 5, name: "リッチな保湿クリーム", point: "就寝中の修復を最大化。セラミド・スクワラン入りがおすすめ。" },
];

const FAQ: FAQItem[] = [
  {
    q: "エイジングケアは何歳から始めるべきですか？",
    a: "20代からの日焼け止めと保湿が最強のエイジングケアです。シワ・シミの約80%は紫外線が原因（光老化）とされており、早期からのUVケアが最も効果的です。30代以降はレチノールやペプチドなどの成分をプラスしていくのが効果的です。",
  },
  {
    q: "レチノールはどれくらいで効果が出ますか？",
    a: "肌への慣れに4〜6週、目に見える変化は3〜6ヶ月が目安です。最初の2〜4週は「レチノール反応」として一時的な乾燥・赤み・ピーリングが起こることがありますが、これは正常な反応です。低濃度からゆっくり始めることが大切です。",
  },
  {
    q: "ナイアシンアミドとビタミンCは一緒に使えますか？",
    a: "現代の安定型ビタミンC誘導体ならナイアシンアミドと同時使用が可能です。かつては「ニコチン酸を生成する」という説がありましたが、現在の研究ではほぼ否定されています。一緒に使うことでシミ・くすみへの相乗効果が期待できます。",
  },
  {
    q: "50代以降でも効果はありますか？",
    a: "はい。肌の再生能力は年齢を問わず継続しています。50代以降でもレチノールやペプチドの使用でシワの改善が科学的に証明されています。ただし、刺激に敏感になっている場合があるため、低濃度からゆっくり始めることをおすすめします。",
  },
  {
    q: "コスパが良いエイジングケア成分はどれですか？",
    a: "ナイアシンアミドとヒアルロン酸が圧倒的なコスパを誇ります。The Ordinary（ジ・オーディナリー）や一部の韓国コスメは高品質・低価格で人気です。また、日焼け止めは最も費用対効果が高いエイジングケアです。",
  },
];

export default function AntiAgingGuidePage() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-amber-50 text-amber-600 border border-amber-200">
          🔬 エイジングケアガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          エイジングケア完全ガイド<br className="sm:hidden" />
          <span className="text-amber-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          年齢肌に効くエイジングケア成分（レチノール・ナイアシンアミド・ビタミンC誘導体・ペプチド・ヒアルロン酸）を科学的根拠をもとに徹底解説。正しいルーティンでシワ・シミ・ハリ不足を改善しましょう。
        </p>
      </section>

      {/* エイジングケア成分一覧 */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">✨ エイジングケアに効く成分ガイド</h2>
        <div className="space-y-4">
          {INGREDIENTS.map((ing) => (
            <div
              key={ing.name}
              className="rounded-2xl border p-5 space-y-3"
              style={{ borderColor: `${ing.color}35`, background: `${ing.color}06` }}
            >
              <div className="flex items-start gap-3 flex-wrap">
                <span className="text-2xl">{ing.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-black text-gray-900 text-lg">{ing.name}</span>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${ing.color}15`, color: ing.color, border: `1px solid ${ing.color}30` }}
                    >
                      おすすめ年齢: {ing.recommendedAge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">{ing.effect}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white rounded-xl p-3 border border-gray-100">
                <span className="font-bold text-xs flex-shrink-0" style={{ color: ing.color }}>使い方</span>
                <p className="text-sm text-gray-600 leading-relaxed">{ing.howToUse}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 朝のルーティン */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">☀️ 朝のエイジングケアルーティン</h2>
        <div className="space-y-3">
          {MORNING_ROUTINE.map((s) => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm">
                  {s.step}
                </div>
              </div>
              <div>
                <div className="font-black text-gray-900 mb-1">{s.name}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.point}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 夜のルーティン */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">🌙 夜のエイジングケアルーティン</h2>
        <div className="space-y-3">
          {NIGHT_ROUTINE.map((s) => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm">
                  {s.step}
                </div>
              </div>
              <div>
                <div className="font-black text-gray-900 mb-1">{s.name}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.point}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 成分早見表 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">📋 悩み別おすすめ成分まとめ</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 font-bold text-gray-700">お悩み</th>
                <th className="px-4 py-3 font-bold text-gray-700">おすすめ成分</th>
              </tr>
            </thead>
            <tbody>
              {[
                { worry: "シワ・ハリ不足", ingredient: "レチノール、ペプチド" },
                { worry: "シミ・くすみ", ingredient: "ビタミンC誘導体、ナイアシンアミド" },
                { worry: "毛穴・凹凸", ingredient: "ナイアシンアミド、レチノール、AHA" },
                { worry: "乾燥・小じわ", ingredient: "ヒアルロン酸、セラミド" },
                { worry: "たるみ・リフトアップ", ingredient: "ペプチド、レチノール" },
              ].map((row, i) => (
                <tr key={row.worry} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-700">{row.worry}</td>
                  <td className="px-4 py-3 text-gray-600">{row.ingredient}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
      <section className="bg-gradient-to-br from-amber-50 to-pink-50 border border-amber-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/skincare-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
          >
            スキンケア基本ガイド →
          </Link>
          <Link
            href="/serum-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            美容液の選び方ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
