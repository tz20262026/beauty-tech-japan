import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/foundation-guide" },
  title: "ファンデーション選び方完全ガイド2026年版【種類・肌タイプ別おすすめ・塗り方・崩れない方法】",
  description:
    "ファンデーションの選び方を2026年版で完全解説。リキッド・パウダー・クッション・スティックの違い・肌タイプ別おすすめ・正しい塗り方・崩れない方法・プチプラ〜デパコス比較を詳しく解説します。",
  keywords: [
    "ファンデーション 選び方", "ファンデーション 種類", "リキッドファンデ", "パウダーファンデ",
    "ファンデーション 崩れない", "ファンデーション 塗り方", "ファンデーション 肌タイプ",
    "ファンデーション プチプラ", "ファンデーション 2026"
  ],
  openGraph: {
    title: "ファンデーション選び方完全ガイド2026年版【種類・肌タイプ別・崩れない方法】",
    description: "ファンデーションの種類・肌タイプ別おすすめ・正しい塗り方・崩れない方法・プチプラ〜デパコス比較を完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ファンデーション選び方完全ガイド2026年版",
    description: "種類・肌タイプ別おすすめ・塗り方・崩れない方法・プチプラ〜デパコス比較を完全解説",
  },
};

interface FoundationType {
  name: string;
  icon: string;
  coverage: "薄め" | "中程度" | "しっかり";
  finish: string;
  bestFor: string;
  notFor: string;
  longevity: string;
  color: string;
}

interface SkinTypeRec {
  type: string;
  icon: string;
  bestType: string;
  rec: string;
  avoid: string;
  color: string;
}

interface ApplyStep {
  step: number;
  name: string;
  detail: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const FOUNDATION_TYPES: FoundationType[] = [
  {
    name: "リキッドファンデーション",
    icon: "💧",
    coverage: "中程度",
    finish: "自然〜セミマット",
    bestFor: "普通肌・乾燥肌・混合肌。カバー力と自然な仕上がりを両立したい方。保湿成分入りも多くスキンケアしながらメイクできる。最も定番の人気タイプ。",
    notFor: "オイリー肌の方（テカリが出やすい）・素早くメイクしたい方",
    longevity: "◎（下地との組み合わせで長時間持続）",
    color: "#06b6d4",
  },
  {
    name: "パウダーファンデーション",
    icon: "✨",
    coverage: "薄め",
    finish: "マット〜ナチュラル",
    bestFor: "オイリー肌・混合肌。崩れにくくサラサラ仕上げ。素早くメイクできて塗り直しも簡単。皮脂吸収成分配合で長時間崩れにくい。",
    notFor: "乾燥肌（粉っぽく見えることがある）・カバー力を求める方",
    longevity: "○（皮脂吸収で崩れにくい）",
    color: "#a855f7",
  },
  {
    name: "クッションファンデーション",
    icon: "🪞",
    coverage: "中程度",
    finish: "ツヤ・セミツヤ",
    bestFor: "普通肌・乾燥肌。ツヤ感重視の方・コンパクトで持ち運びしやすい。塗り直しが簡単。K-Beautyトレンドでツヤ肌を演出したい方に人気。",
    notFor: "マット仕上げが好みの方・オイリー肌（テカリが出やすい）",
    longevity: "△（リキッドよりやや崩れやすい）",
    color: "#ec4899",
  },
  {
    name: "スティックファンデーション",
    icon: "🖊️",
    coverage: "しっかり",
    finish: "セミマット",
    bestFor: "毛穴・ニキビ跡・くすみなどコンシーラー感覚でカバーしたい方。外出先での塗り直し・部分カバーに便利。高カバー力重視の方に。",
    notFor: "全顔への塗布に時間がかかる・肌への密着が強すぎる場合あり",
    longevity: "◎（密着感が高く崩れにくい）",
    color: "#f59e0b",
  },
  {
    name: "BBクリーム・CCクリーム",
    icon: "🌸",
    coverage: "薄め",
    finish: "ナチュラル",
    bestFor: "素肌感重視の方・メイク時間を短縮したい方。スキンケア効果と日焼け止めが一体化した多機能アイテム。ナチュラルメイク派に人気。",
    notFor: "しっかりカバーしたい方・フォーマルシーン",
    longevity: "△（カバー力が低い分崩れが目立ちやすい）",
    color: "#10b981",
  },
];

const SKIN_TYPE_RECS: SkinTypeRec[] = [
  {
    type: "乾燥肌",
    icon: "🌵",
    bestType: "リキッドファンデーション",
    rec: "保湿成分（ヒアルロン酸・セラミド・スクワラン）入りのリキッドが最適。ツヤ仕上げのタイプを選ぶと肌の乾燥がより目立ちにくい。",
    avoid: "パウダーファンデ（乾燥・粉っぽさが増す）・マット仕上げタイプ",
    color: "#06b6d4",
  },
  {
    type: "オイリー肌（脂性肌）",
    icon: "💦",
    bestType: "パウダーファンデーション",
    rec: "皮脂吸収成分（シリカ・タルク・クレイ）入りのパウダー、またはオイルフリーのリキッドが最適。崩れ防止のセッティングパウダーを仕上げに使うとより効果的。",
    avoid: "ツヤ感の強いタイプ・油分の多いクリームファンデ",
    color: "#f59e0b",
  },
  {
    type: "混合肌",
    icon: "⚖️",
    bestType: "リキッド（軽め）またはクッション",
    rec: "混合肌向けのオイルコントロールリキッドが使いやすい。Tゾーンだけパウダーを重ねる部分使いも効果的。軽いテクスチャーのクッションも合いやすい。",
    avoid: "重すぎるクリームタイプ・皮脂コントロールが弱いタイプ",
    color: "#a855f7",
  },
  {
    type: "敏感肌",
    icon: "🌸",
    bestType: "ミネラルファンデーション",
    rec: "無香料・無着色・アルコールフリー・パラベンフリーの低刺激タイプ。ミネラルファンデーションは肌への刺激が少なく敏感肌に向いている。テスターで事前確認推奨。",
    avoid: "香料・アルコール・色素の多いタイプ。初使用時はパッチテスト必須",
    color: "#ec4899",
  },
];

const APPLY_STEPS: ApplyStep[] = [
  { step: 1, name: "スキンケアをしっかり整える", detail: "化粧水・乳液・美容液をなじませる。乾燥・皮脂崩れ防止のためスキンケアが最重要。ベースが整っているほどファンデが綺麗に仕上がる。" },
  { step: 2, name: "化粧下地（プライマー）を塗る", detail: "毛穴・色ムラをカバーし、ファンデーションの密着性と持ちを大幅に向上させる。下地があるとないとでは仕上がりが雲泥の差。" },
  { step: 3, name: "ファンデを5点置きする", detail: "額・両頬・鼻・あごの5点に均等に置く。この段階では伸ばさず、あくまで「置く」だけが正解。" },
  { step: 4, name: "内側から外側に向かって伸ばす", detail: "顔の中心から外側に向かって優しく伸ばす。外側が薄くなるため自然なグラデーションになり、顔の輪郭が浮かない。" },
  { step: 5, name: "スポンジ・ブラシで密着させる", detail: "指で伸ばした後、スポンジを軽くたたきながら密着させる（こすらない）。ブラシを使う場合は円を描くように。密着感が格段に上がる。" },
  { step: 6, name: "セッティングパウダーで仕上げる", detail: "フェイスパウダーをブラシやパフで薄くのせて固定する。特にTゾーンは念入りに。これで崩れ耐性と仕上がりが大幅にアップ。" },
];

const FAQ: FAQItem[] = [
  {
    q: "ファンデーションの種類（リキッド・パウダー・クッション）の違いを教えてください。",
    a: "ファンデーションの主な種類の違い：【リキッド】液状でカバー力と保湿力を両立。乾燥肌・普通肌に最適。仕上がり：自然〜セミマット。【パウダー】粉状でサラサラ仕上げ。オイリー肌・崩れ防止に最適。仕上がり：マット。【クッション】スポンジにリキッドを含ませたタイプ。ツヤ感重視・手軽な使い方が魅力。仕上がり：ツヤ〜セミツヤ。【スティック】固形で高カバー力。部分カバーや持ち運びに便利。自分の肌タイプと求める仕上がりに合わせて選ぶことが大切です。",
  },
  {
    q: "肌タイプ別のファンデーションの選び方を教えてください。",
    a: "肌タイプ別ファンデーション選び方：【乾燥肌】保湿成分（ヒアルロン酸・セラミド）入りのリキッドが最適。パウダーは乾燥が悪化することがあるため避ける。【オイリー肌】皮脂吸収成分入りのパウダーかオイルフリーのリキッドを選ぶ。崩れ防止のセッティングパウダーを仕上げに使う。【混合肌】Tゾーンはパウダー・Uゾーンはリキッドを使い分けるか、混合肌向けリキッドを選ぶ。【敏感肌】ノンコメドジェニック・低刺激・アルコールフリーの製品を選ぶ。",
  },
  {
    q: "ファンデーションの正しい塗り方を教えてください。",
    a: "ファンデーションの正しい塗り方：①スキンケア後に化粧下地を塗る（毛穴・崩れ防止）②ファンデを顔の5点（額・両頬・鼻・あご）に置く③顔の中心から外側に向かって伸ばす（外側が薄くなり自然な仕上がりになる）④スポンジで軽くたたいて密着させる（こすらない）⑤フェイスパウダーで固定する。最も大切なのは「下地」で、下地があるとカバー力・持続性が大幅に上がります。",
  },
  {
    q: "ファンデーションの崩れを防ぐ方法を教えてください。",
    a: "崩れる主な原因と対策：①皮脂崩れ→下地（皮脂吸収タイプ）を使う・仕上げにセッティングパウダー/スプレーを使う②乾燥崩れ→保湿をしっかりしてからメイクする・乾燥肌向けのリキッドを選ぶ③摩擦崩れ→こすらない・マスク摩擦防止スプレーを使う④長時間持続→フィキシングスプレー（化粧固定スプレー）を全体に一吹き・外出先ではあぶらとり紙＋パウダーで塗り直す。",
  },
  {
    q: "ファンデーションの色選びのコツを教えてください。",
    a: "ファンデーション色選びのコツ：①顎や首に近い部分（フェイスラインの内側）でテストする（手の甲は顔と色が違うことが多い）②自分の肌色より1〜2トーン明るい色は白浮きしやすいため、首の色に近い色を選ぶ③室内（蛍光灯）だけでなく自然光下でも確認する（蛍光灯は色が変わって見える）④テスターを使い30分後の色を確認する（酸化・皮脂で色が変わる）⑤日本人の肌は黄みよりのトーンが多く、ピンクトーンは白浮きしやすい。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const coverageColor: Record<string, string> = {
  薄め: "bg-green-500/20 text-green-300 border-green-500/30",
  中程度: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  しっかり: "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

export default function FoundationGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-full px-4 py-1 mb-4">
            💄 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            ファンデーション選び方<br />
            <span className="text-rose-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【種類・肌タイプ別・塗り方・崩れない方法・プチプラ比較】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            リキッド・パウダー・クッション・スティックの違いから<br />
            肌タイプ別選び方・崩れない塗り方・プチプラ〜デパコス比較まで完全解説します。
          </p>
        </div>

        {/* 種類比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-3">
            💄 ファンデーションの種類5選【肌タイプ別・仕上がり比較】
          </h2>
          <div className="space-y-4">
            {FOUNDATION_TYPES.map((type) => (
              <div key={type.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-2xl">{type.icon}</span>
                  <h3 className="text-white font-black text-sm">{type.name}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${coverageColor[type.coverage]}`}>
                    カバー：{type.coverage}
                  </span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ background: `${type.color}15`, color: type.color, border: `1px solid ${type.color}30` }}
                  >
                    {type.finish}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-green-900/10 border border-green-700/20 rounded px-3 py-2">
                    <p className="text-green-400 font-bold mb-1">✅ おすすめ：</p>
                    <p className="text-gray-300 leading-relaxed">{type.bestFor}</p>
                  </div>
                  <div className="bg-red-900/10 border border-red-700/20 rounded px-3 py-2">
                    <p className="text-red-400 font-bold mb-1">⚠️ 注意：</p>
                    <p className="text-gray-300 leading-relaxed">{type.notFor}</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded px-3 py-2 text-xs">
                  <span className="text-gray-600">⏱️ 持続性：</span>
                  <span className="text-gray-200">{type.longevity}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 肌タイプ別おすすめ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-3">
            🌸 肌タイプ別ファンデーションの選び方
          </h2>
          <div className="space-y-4">
            {SKIN_TYPE_RECS.map((rec) => (
              <div key={rec.type} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xl">{rec.icon}</span>
                  <h3 className="font-black text-sm" style={{ color: rec.color }}>{rec.type}</h3>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${rec.color}15`, color: rec.color, border: `1px solid ${rec.color}30` }}
                  >
                    おすすめ：{rec.bestType}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-800 rounded px-3 py-2">
                    <p className="text-gray-600 font-bold mb-1">✅ おすすめポイント</p>
                    <p className="text-gray-300 leading-relaxed">{rec.rec}</p>
                  </div>
                  <div className="bg-gray-800 rounded px-3 py-2">
                    <p className="text-gray-600 font-bold mb-1">⚠️ 避けるべき</p>
                    <p className="text-gray-300 leading-relaxed">{rec.avoid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="foundation-guide" />

        {/* 正しい塗り方 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-3">
            📋 ファンデーションの正しい塗り方6ステップ
          </h2>
          <div className="space-y-3">
            {APPLY_STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm">
                    {s.step}
                  </div>
                </div>
                <div>
                  <p className="font-black text-white text-sm mb-1">{s.name}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 崩れない方法まとめ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-rose-500 pl-3">
            🛡️ ファンデーションが崩れる原因と対策まとめ
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="px-4 py-3 font-bold text-gray-300">崩れの種類</th>
                  <th className="px-4 py-3 font-bold text-gray-300">原因</th>
                  <th className="px-4 py-3 font-bold text-gray-300">対策</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "皮脂崩れ", cause: "皮脂でファンデが浮いてヨレる", fix: "皮脂吸収下地＋セッティングパウダー" },
                  { type: "乾燥崩れ", cause: "乾燥でファンデがひび割れ・粉落ち", fix: "保湿スキンケア強化＋保湿リキッド選択" },
                  { type: "摩擦崩れ", cause: "マスク・手が触れてこすれる", fix: "フィキシングスプレー＋触らない習慣" },
                  { type: "時間経過崩れ", cause: "汗・皮脂が徐々に蓄積する", fix: "あぶらとり紙＋パウダーで塗り直し" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-950"}>
                    <td className="px-4 py-3 font-semibold text-rose-300">{row.type}</td>
                    <td className="px-4 py-3 text-gray-600">{row.cause}</td>
                    <td className="px-4 py-3 text-gray-300">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* プチプラ vs デパコス */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-rose-500 pl-3">
            💰 プチプラ vs デパコス【ファンデーション比較2026】
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-5">
              <h3 className="text-green-300 font-black text-sm mb-3">💚 プチプラ（〜2,000円）</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-green-400 font-bold">✅ メリット</p>
                  <p className="text-gray-300 leading-relaxed mt-1">気軽に試せる・カラー展開が豊富・技術進化で高品質になっている。キャンメイク・KATE・セザンヌなどが人気。</p>
                </div>
                <div>
                  <p className="text-red-400 font-bold">⚠️ デメリット</p>
                  <p className="text-gray-300 leading-relaxed mt-1">テクスチャー・持続性・高カバー力でデパコスに劣る場合がある。</p>
                </div>
                <div className="bg-green-900/20 rounded px-2 py-1.5">
                  <p className="text-green-400 font-bold">おすすめブランド</p>
                  <p className="text-gray-300 mt-1">CANMAKE / KATE / CEZANNE / REVLON / Lオッペン</p>
                </div>
              </div>
            </div>
            <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-5">
              <h3 className="text-rose-300 font-black text-sm mb-3">💎 デパコス（3,000円〜）</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-rose-400 font-bold">✅ メリット</p>
                  <p className="text-gray-300 leading-relaxed mt-1">カバー力・持続性・テクスチャー・成分の質が高い。肌への負担が少なく長期的に見るとコスパが良いことも。</p>
                </div>
                <div>
                  <p className="text-red-400 font-bold">⚠️ デメリット</p>
                  <p className="text-gray-300 leading-relaxed mt-1">価格が高い。試せる場所が限られる。初心者には選択肢が多すぎる。</p>
                </div>
                <div className="bg-rose-900/20 rounded px-2 py-1.5">
                  <p className="text-rose-400 font-bold">おすすめブランド</p>
                  <p className="text-gray-300 mt-1">CHANEL / DIOR / NARS / SUQQU / THREE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-rose-900/20 to-pink-900/20 border border-rose-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            💋 メイクアップを総合的に学びたい方へ
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ファンデーションだけでなくベースメイク全体を<br />
            マスターしてワンランク上の仕上がりを目指しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/makeup-guide"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              メイクアップ完全ガイドを見る →
            </Link>
            <Link
              href="/concealer-guide"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              コンシーラーの選び方を見る →
            </Link>
            <Link
              href="/summer-makeup-guide"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              夏のメイク崩れ防止ガイド →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-rose-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQ.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
