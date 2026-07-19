import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/summer-makeup-guide" },
  title: "夏のメイク崩れ防止 完全ガイド2026【テカリ・皮脂・汗に負けないベースメイク】",
  description:
    "夏のメイク崩れ・テカリの原因と対策を完全解説。皮脂崩れ・汗崩れ・乾燥崩れのタイプ別対処法、崩れないベースメイクの手順、外出先での正しいメイク直し3ステップまで。2026年最新版。",
  keywords: [
    "メイク崩れ 防止",
    "夏 メイク 崩れない",
    "テカリ 対策",
    "皮脂崩れ ファンデ",
    "メイク直し 方法",
    "化粧崩れ 原因",
    "崩れない ベースメイク",
    "フィックスミスト",
  ],
  openGraph: {
    title: "夏のメイク崩れ防止 完全ガイド2026｜テカリ・皮脂・汗に負けないベースメイク",
    description: "皮脂崩れ・汗崩れ・乾燥崩れのタイプ別対策と、崩れないベースメイクの手順を完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "夏のメイク崩れ防止 完全ガイド2026",
    description: "テカリ・皮脂・汗に負けないベースメイクの作り方を完全解説",
  },
};

/** メイク崩れタイプ1件分のデータ型 */
interface MeltType {
  name: string;
  icon: string;
  sign: string;
  cause: string;
  countermeasures: string[];
  keyItem: string;
  color: string;
  ngAction: string;
}

/** ベースメイク手順1ステップ分 */
interface BaseStep {
  step: number;
  icon: string;
  name: string;
  point: string;
}

/** よくある質問1件分 */
interface FAQItem {
  q: string;
  a: string;
}

const MELT_TYPES: MeltType[] = [
  {
    name: "皮脂崩れ（テカリ）",
    icon: "✨",
    sign: "Tゾーンがテカる・ファンデが毛穴に落ちる・時間が経つと顔全体がくすむ。",
    cause: "気温が1℃上がると皮脂分泌量は約10%増えるといわれ、夏は皮脂によるヨレ・テカリが最も起きやすい季節。過剰な皮脂がファンデの油分と混ざって崩れる。",
    countermeasures: [
      "皮脂吸着タイプの化粧下地をTゾーン中心に薄く仕込む",
      "ファンデはリキッドなら薄く2層より「薄く1層＋パウダー」",
      "仕上げにルースパウダーを皮脂の出やすい部分だけオン",
      "朝のスキンケアは乳液・クリームを「なじむまで待ってから」下地へ",
      "あぶらとり紙は1日2回まで（取りすぎは皮脂の過剰分泌を招く）",
    ],
    keyItem: "皮脂吸着下地・ルースパウダー",
    color: "#f59e0b",
    ngAction: "皮脂を気にして保湿を抜く（インナードライで逆に皮脂が増える）・パウダーの重ねすぎ（厚塗り崩れ）",
  },
  {
    name: "汗崩れ",
    icon: "💦",
    sign: "汗をかくとファンデがまだらに流れる・マスクや服にファンデが付く。",
    cause: "汗（水分）がファンデの粉体を浮かせて流してしまう状態。通勤・屋外イベント・スポーツ時に起きやすい。",
    countermeasures: [
      "ウォータープルーフ・耐汗性をうたう下地/ファンデを選ぶ",
      "仕上げにフィックスミスト（メイクキープミスト）を顔全体に",
      "汗をかいたら「こすらず」ティッシュかタオルで押さえる",
      "首・デコルテの汗を先に押さえると顔への汗だれを防げる",
      "スポーツ時はファンデを薄くし、日焼け止め＋パウダーで済ませる",
    ],
    keyItem: "フィックスミスト・ウォータープルーフ下地",
    color: "#3b82f6",
    ngAction: "汗をゴシゴシ拭く（ファンデごと剥がれてまだらになる）・崩れた上から厚くパウダーを重ねる",
  },
  {
    name: "乾燥崩れ（インナードライ）",
    icon: "🏜️",
    sign: "頬や口元だけ粉っぽく浮く・夕方に小じわが目立つ・部分的にファンデがひび割れる。",
    cause: "冷房で肌表面の水分が奪われ、乾燥した部分のファンデが密着せず浮いてしまう。夏でもオフィスワーカーに非常に多い崩れ方。",
    countermeasures: [
      "朝のスキンケアで化粧水をしっかり・乳液は薄くなじませる",
      "保湿系（ツヤ系）下地を頬・口元など乾燥する部分に使い分け",
      "パウダーは乾燥部分を避けてTゾーンのみに",
      "日中はメイクの上から使える保湿ミストで水分補給",
      "クッションファンデなど水分量の多いベースを選ぶ",
    ],
    keyItem: "保湿系下地・メイク上から使える保湿ミスト",
    color: "#ec4899",
    ngAction: "乾燥部分にマットパウダーを重ねる（粉浮きが悪化）・皮脂吸着下地を顔全体に塗る",
  },
];

const BASE_STEPS: BaseStep[] = [
  { step: 1, icon: "🧴", name: "スキンケアは「量より浸透待ち」", point: "化粧水・乳液のあと2〜3分置いて肌になじませてから下地へ。なじむ前に重ねると油分が混ざって崩れの原因に。ティッシュで軽く押さえるのも有効。" },
  { step: 2, icon: "☀️", name: "日焼け止め（薄く均一に）", point: "夏のベースメイクの土台。ムラづきは崩れの起点になるので、頬の内側から外側へ薄くのばす。SPF50+/PA++++を規定量守って。" },
  { step: 3, icon: "🎨", name: "下地はゾーンで使い分け", point: "Tゾーン＝皮脂吸着タイプ、頬・口元＝保湿タイプ。1本で済ませず「部分使い分け」が夏の崩れ対策の最重要ポイント。" },
  { step: 4, icon: "💄", name: "ファンデは薄く・スポンジで密着", point: "手よりスポンジ仕上げが密着度が高い。「隠したい部分だけコンシーラー、全体は薄く」が鉄則。厚塗りは崩れたときのダメージも大きい。" },
  { step: 5, icon: "🪶", name: "パウダーはTゾーン中心", point: "ルースパウダーを大きめブラシでTゾーン・小鼻・あごに。乾燥しやすい頬は最小限にしてツヤを残す。" },
  { step: 6, icon: "💨", name: "フィックスミストで固定", point: "顔から20cmほど離して2〜3プッシュ。パウダーの粉っぽさを抑えつつ、汗・湿気への耐性が大きく上がる仕上げの一手。" },
];

const RETOUCH_STEPS: BaseStep[] = [
  { step: 1, icon: "🧻", name: "余分な皮脂・汗をオフ", point: "ティッシュで顔全体をやさしく押さえる。崩れた部分は乳液を少量含ませた綿棒でファンデをいったん拭き取ると仕上がりが段違い。" },
  { step: 2, icon: "💧", name: "保湿ミストで水分補給", point: "メイクの上から使えるミストをひと吹きして肌を整える。乾燥崩れの人はこのステップを絶対に飛ばさない。" },
  { step: 3, icon: "🖌️", name: "薄く重ねて仕上げ", point: "クッションファンデかパウダーを崩れた部分にだけ薄くオン。全顔を塗り直すより自然で、時間も1〜2分で済む。" },
];

const FAQ: FAQItem[] = [
  {
    q: "夏にメイクが崩れる一番の原因は何ですか？",
    a: "最も多いのは皮脂によるテカリ崩れです。気温の上昇とともに皮脂分泌が増え、ファンデーションの油分と混ざってヨレ・くすみを起こします。ただし冷房環境で過ごす人は「乾燥崩れ（インナードライ）」も同じくらい多く、原因によって対策が真逆になるため、まず自分の崩れ方のタイプを見極めることが大切です。",
  },
  {
    q: "崩れないためにファンデは厚く塗った方がいいですか？",
    a: "逆効果です。厚塗りは崩れる量そのものを増やし、ヨレたときに目立ちやすくなります。「隠したい部分だけコンシーラー、全体は薄く」が夏のベースメイクの鉄則です。薄く仕上げた方がメイク直しも簡単になります。",
  },
  {
    q: "フィックスミスト（メイクキープミスト）は本当に効果がありますか？",
    a: "仕上げに使うことでパウダーや粉体を肌に密着させ、汗・湿気によるヨレを軽減する効果が期待できます。特に汗崩れタイプの人には効果を実感しやすいアイテムです。顔から20cmほど離し、2〜3プッシュを均一にかけるのが正しい使い方です。",
  },
  {
    q: "あぶらとり紙は使わない方がいいと聞きましたが本当ですか？",
    a: "使いすぎが問題なだけで、1日1〜2回程度なら問題ありません。皮脂を取りすぎると肌が「油分が足りない」と判断してさらに皮脂を分泌するため、テカリが悪化する悪循環になります。軽いテカリならティッシュで押さえる程度で十分です。",
  },
  {
    q: "外出先でのメイク直しの正しい手順は？",
    a: "①ティッシュで皮脂・汗を押さえる（崩れがひどい部分は乳液を含ませた綿棒でオフ）→②保湿ミストで水分補給→③崩れた部分にだけクッションファンデやパウダーを薄く重ねる、の3ステップです。崩れた上から直接パウダーを重ねるとまだらになるので、必ず「オフしてから重ねる」順番を守ってください。",
  },
];

export default function SummerMakeupGuidePage() {
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
          ☀️ 夏のベースメイク対策
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          夏のメイク崩れ防止 完全ガイド<br className="sm:hidden" />
          <span className="text-amber-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          テカリ・皮脂・汗・冷房乾燥——夏のメイク崩れには「タイプ」があり、対策は原因によって真逆になります。自分の崩れタイプの見極め方から、崩れないベースメイクの手順、外出先での正しいメイク直しまで徹底解説します。
        </p>
      </section>

      {/* 崩れタイプ診断 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔍 あなたのメイク崩れはどのタイプ？</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {MELT_TYPES.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border p-4 text-center space-y-2"
              style={{ borderColor: `${t.color}35`, background: `${t.color}08` }}
            >
              <div className="text-3xl">{t.icon}</div>
              <p className="font-black text-gray-900">{t.name}</p>
              <p className="text-xs text-gray-600 leading-relaxed text-left">{t.sign}</p>
              <p
                className="text-xs px-2 py-1 rounded-full font-bold inline-block"
                style={{ background: `${t.color}15`, color: t.color }}
              >
                鍵: {t.keyItem.split("・")[0]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
      <ArticleAffiliateCard tags={[]} articleId="summer-makeup-guide" />

      {/* タイプ別対策詳細 */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-gray-900">💡 崩れタイプ別の対策を詳しく解説</h2>
        {MELT_TYPES.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border p-6 space-y-4"
            style={{ borderColor: `${t.color}35`, background: `${t.color}05` }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{t.icon}</span>
              <h3 className="text-xl font-black text-gray-900">{t.name}</h3>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-xs font-bold text-gray-600 mb-1">原因</p>
              <p className="text-sm text-gray-700 leading-relaxed">{t.cause}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">対策</p>
              <ul className="space-y-2">
                {t.countermeasures.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: t.color }}>→</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <p className="text-xs font-bold mb-1" style={{ color: t.color }}>鍵になるアイテム</p>
                <p className="text-sm text-gray-600">{t.keyItem}</p>
              </div>
              <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                <p className="text-xs font-bold text-red-500 mb-1">⚠️ やってはいけないこと</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.ngAction}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 崩れないベースメイクの手順 */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">📋 崩れないベースメイクの手順（朝の6ステップ）</h2>
        <div className="space-y-3">
          {BASE_STEPS.map((s) => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm">
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

      {/* メイク直し3ステップ */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">🛠️ 外出先でのメイク直し 正解の3ステップ</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          崩れた上からパウダーを重ねるのはNG。「オフ→保湿→薄く重ねる」の順番を守るだけで、夕方の仕上がりが見違えます。
        </p>
        <div className="space-y-3">
          {RETOUCH_STEPS.map((s) => (
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
      <section className="bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <Link
            href="/foundation-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            ファンデーションの選び方 →
          </Link>
          <Link
            href="/sunscreen-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
          >
            日焼け止め完全ガイド →
          </Link>
          <Link
            href="/pore-care-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
          >
            毛穴ケア完全ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
