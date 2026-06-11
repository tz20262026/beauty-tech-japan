import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "コンシーラー完全ガイド2026年版【悩み別選び方・クマ・シミ・ニキビ跡の隠し方】| Beauty Tech Japan",
  description: "コンシーラーの種類（スティック・リキッド・クリーム・ペンシル）から悩み別の選び方・正しい塗り方・色選びのコツまで徹底解説。クマ・シミ・ニキビ跡を自然にカバー。",
  keywords: ["コンシーラー 選び方", "クマ 隠し方", "コンシーラー 使い方", "シミ コンシーラー", "ニキビ跡 カバー", "コンシーラー 色選び"],
  openGraph: {
    title: "コンシーラー完全ガイド2026年版【悩み別選び方・クマ・シミ・ニキビ跡の隠し方】| Beauty Tech Japan",
    description: "コンシーラーの種類・悩み別の選び方・正しい塗り方・色選びのコツまで徹底解説。クマ・シミ・ニキビ跡を自然にカバー。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "コンシーラー完全ガイド2026年版【悩み別選び方・クマ・シミ・ニキビ跡の隠し方】| Beauty Tech Japan",
    description: "コンシーラーの種類・悩み別の選び方・正しい塗り方・色選びのコツまで徹底解説。クマ・シミ・ニキビ跡を自然にカバー。",
  },
};

const CONCEALER_TYPES = [
  {
    type: "スティックタイプ",
    icon: "✏️",
    color: "#ec4899",
    coverage: "★★★★★ 高カバー",
    finish: "マット〜セミマット",
    bestFor: "シミ・そばかす・色素沈着",
    pros: ["高いカバー力", "コンパクトで携帯しやすい", "乾燥しにくい（クリームベース）"],
    cons: ["厚塗り感が出やすい", "小じわに入り込みやすい", "ブレンドに慣れが必要"],
  },
  {
    type: "リキッドタイプ",
    icon: "💧",
    color: "#6366f1",
    coverage: "★★★☆☆ 中カバー",
    finish: "自然・ツヤ感",
    bestFor: "クマ・広い範囲のカバー・日常使い",
    pros: ["自然な仕上がり", "ブレンドしやすい", "肌なじみが良い"],
    cons: ["高カバーには不向き", "乾燥肌は保湿下地が必要", "開封後の品質維持に注意"],
  },
  {
    type: "クリームタイプ",
    icon: "🧴",
    color: "#f59e0b",
    coverage: "★★★★☆ 高カバー",
    finish: "セミマット",
    bestFor: "ニキビ・ニキビ跡・毛穴",
    pros: ["高いカバー力", "伸びが良く塗りやすい", "崩れにくい"],
    cons: ["テクスチャーが重め", "乾燥肌には不向き", "パレット購入が必要な場合あり"],
  },
  {
    type: "ペンシルタイプ",
    icon: "🖊️",
    color: "#10b981",
    coverage: "★★★☆☆ 中〜高カバー",
    finish: "マット",
    bestFor: "小さなニキビ・毛穴・ピンポイントカバー",
    pros: ["ピンポイントで使いやすい", "細かい部分に適している", "コントロールしやすい"],
    cons: ["広い面積のカバーに不向き", "乾燥しやすい", "均一に塗るのが難しい"],
  },
];

const CONCERN_GUIDE = [
  {
    concern: "青クマ（静脈が透けて見える）",
    icon: "👁️",
    color: "#6366f1",
    cause: "睡眠不足・血行不良が原因",
    colorCorrect: "オレンジ・ピーチ系のカラーコレクター",
    method: "① コレクターで青みを打ち消す → ② 自分の肌色に近いコンシーラーを重ねる → ③ パウダーで定着",
    type: "リキッドまたはクリームタイプ",
  },
  {
    concern: "茶クマ（色素沈着）",
    icon: "🟤",
    color: "#d97706",
    cause: "目をこする習慣・紫外線・加齢が原因",
    colorCorrect: "イエロー系のカラーコレクター（茶みを消す）",
    method: "① イエローコレクターで色みを中和 → ② 肌色コンシーラーで仕上げ → ③ 薄いパウダーで定着",
    type: "スティックまたはクリームタイプ",
  },
  {
    concern: "黒クマ（たるみ・影）",
    icon: "⚫",
    color: "#64748b",
    cause: "皮膚のたるみ・加齢による立体的な影",
    colorCorrect: "コンシーラーだけでは限界。ハイライトが有効",
    method: "① 肌より1〜2トーン明るいコンシーラー → ② 目頭・クマ部分にトントンとのせる → ③ 指でなじませてフチをぼかす",
    type: "リキッドタイプ（明るめ）",
  },
  {
    concern: "シミ・そばかす",
    icon: "🌑",
    color: "#7c3aed",
    cause: "メラニン色素の沈着・紫外線ダメージ",
    colorCorrect: "カラーコレクターは不要（肌色のコンシーラーを直接使用）",
    method: "① 小さめのブラシまたは指先でピンポイントに置く → ② 外側へ向かって薄くぼかす → ③ ベースに重ねて自然に仕上げる",
    type: "スティックまたはクリームタイプ",
  },
  {
    concern: "ニキビ・ニキビ跡",
    icon: "🔴",
    color: "#dc2626",
    cause: "炎症・色素沈着",
    colorCorrect: "グリーンコレクター（赤みを打ち消す）",
    method: "① グリーンコレクターで赤みを抑える → ② 肌色コンシーラーを上から重ねる → ③ 指先でやさしくなじませる",
    type: "クリームまたはスティックタイプ",
  },
];

const APPLICATION_STEPS = [
  { step: 1, name: "ベースメイクを仕上げる", point: "BB/CCクリームまたはファンデーションを先に塗る。ベースの後にコンシーラーを使うことで、使用量が最小限になり自然な仕上がりに。" },
  { step: 2, name: "カラーコレクターで下処理", point: "クマや赤みがある場合は専用コレクターで色みを打ち消す。オレンジ→青クマ、グリーン→赤み、イエロー→茶クマ・紫みに効果的。" },
  { step: 3, name: "コンシーラーをスタンプ状に置く", point: "塗り広げるより、まず「置く」ことを意識する。気になる部分にコンシーラーをポンポンと軽く置いていく。" },
  { step: 4, name: "指またはブラシで自然にぼかす", point: "コンシーラーのフチを指先（体温でなじみやすい）またはブラシでやさしくブレンド。外側に向かって薄くなるようにぼかすのがコツ。" },
  { step: 5, name: "フェイスパウダーで定着", point: "コンシーラーを塗った後はフェイスパウダーで定着させると崩れにくくなる。目元の小じわには入り込まないよう薄くはたく。" },
];

const COLOR_GUIDE = [
  { color: "ナチュラル（肌色）", hex: "#f5cba7", usage: "シミ・毛穴など一般的なカバー。どんな悩みにも使える万能色。" },
  { color: "ライトピンク", hex: "#f4b8b8", usage: "目元のカバー・透明感を出したい時。明るさとツヤをプラス。" },
  { color: "オレンジ・ピーチ", hex: "#f4a460", usage: "青クマ・色素沈着の補色として。肌トーンのベースアップにも。" },
  { color: "イエロー", hex: "#f5d88a", usage: "茶クマ・紫みのある肌に。くすみを消してトーンアップ。" },
  { color: "グリーン", hex: "#90ee90", usage: "赤み・ニキビの赤・酒さに。補色の原理で赤みを打ち消す。" },
  { color: "ラベンダー", hex: "#e6b3e6", usage: "黄ぐすみ・顔色がくすんでいる時に。明るく透明感を演出。" },
];

const FAQ = [
  {
    q: "コンシーラーはファンデーションの前と後、どちらが正しいですか？",
    a: "一般的にはファンデーションの後が推奨されています。先にベース（ファンデ/BB）で全体を整えることで、コンシーラーの使用量が少なくて済み、より自然な仕上がりになります。ただし、色補正（カラーコレクター）はファンデーション前に使用してください。",
  },
  {
    q: "クマを隠すために明るすぎるコンシーラーを使っていますが問題ありますか？",
    a: "明るすぎるコンシーラーは逆にクマを目立たせる原因になります。自分の肌色より0.5〜1トーン明るい程度が適切です。特に黄みよりのコンシーラーが日本人の肌色になじみやすいです。まずはベージュ系のナチュラルな色から試してみてください。",
  },
  {
    q: "コンシーラーが崩れやすいのですが対策はありますか？",
    a: "フェイスパウダーで定着させることが最も効果的です。コンシーラーを塗った後、薄くパウダーをはたくと持ちが格段に良くなります。目元は薄くはたく程度に。また、油分の多いアイクリームを塗った直後はコンシーラーが滑りやすいため、少し時間を置いてから塗るのもコツです。",
  },
  {
    q: "ニキビにコンシーラーを使っても悪化しませんか？",
    a: "コンシーラーが毛穴を塞ぐと炎症を悪化させる可能性があります。炎症中のニキビ（赤く腫れている状態）にはノンコメドジェニック処方や「ニキビ肌向け」と表示のある製品を選んでください。また、使用前に必ず洗顔・スキンケアをしてから使用し、帰宅後はしっかりクレンジングすることが重要です。",
  },
  {
    q: "コンシーラーとファンデーションの色が違う場合どうすればいいですか？",
    a: "コンシーラーはファンデーションの色と完全に一致させる必要はありません。塗った後にしっかりブレンドして境目をぼかすことで自然になじみます。色補正用のコンシーラー（グリーン・オレンジ等）は目的が異なるため、肌色コンシーラーで上からカバーするのが正しい使い方です。",
  },
];

export default function ConcealerGuidePage() {
  return (
    <>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-purple-50 text-purple-600 border border-purple-200">
            🎨 コンシーラーガイド
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            コンシーラー<br className="sm:hidden" />
            <span className="text-purple-600">選び方・使い方完全ガイド</span>
            <span className="text-lg ml-2 text-gray-500">2026年版</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            クマ・シミ・ニキビ跡・毛穴など悩み別のコンシーラー選び方・正しい使い方を徹底解説。スティック・リキッド・クリーム・ペンシルの4タイプを比較し、あなたに最適なコンシーラーを見つけましょう。
          </p>
        </section>

        {/* コンシーラーの種類 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🎭 コンシーラーの種類と特徴</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {CONCEALER_TYPES.map(({ type, icon, color, coverage, finish, bestFor, pros, cons }) => (
              <div
                key={type}
                className="rounded-2xl border p-5 space-y-3"
                style={{ borderColor: `${color}30`, background: `${color}06` }}
              >
                <div>
                  <p className="font-black text-lg" style={{ color }}>
                    {icon} {type}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">カバー力: {coverage}</p>
                  <p className="text-xs text-gray-500">仕上がり: {finish}</p>
                  <p
                    className="text-xs font-bold mt-2 px-2 py-1 rounded-lg inline-block"
                    style={{ background: `${color}15`, color }}
                  >
                    特におすすめ：{bestFor}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-bold text-green-700 mb-1">メリット</p>
                    {pros.map((p) => (
                      <p key={p} className="text-gray-600 leading-relaxed">
                        ✓ {p}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-red-600 mb-1">デメリット</p>
                    {cons.map((c) => (
                      <p key={c} className="text-gray-600 leading-relaxed">
                        △ {c}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 悩み別選び方 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">😟 悩み別コンシーラー選び方＆使い方</h2>
          <div className="space-y-4">
            {CONCERN_GUIDE.map(({ concern, icon, color, cause, colorCorrect, method, type }) => (
              <div
                key={concern}
                className="rounded-2xl border p-5 space-y-3"
                style={{ borderColor: `${color}30`, background: `${color}06` }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{icon}</span>
                  <span className="font-black text-lg" style={{ color }}>
                    {concern}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-bold text-gray-700 mb-1">原因</p>
                    <p className="text-gray-600 leading-relaxed">{cause}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 mb-1">おすすめタイプ</p>
                    <p className="text-gray-600 leading-relaxed">{type}</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-sm mb-1">カラーコレクション</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{colorCorrect}</p>
                </div>
                <div
                  className="text-xs px-3 py-2 rounded-lg"
                  style={{ background: `${color}10`, color: color }}
                >
                  📋 手順: {method}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 正しい塗り方 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">💄 正しいコンシーラーの塗り方（5ステップ）</h2>
          <div className="space-y-3">
            {APPLICATION_STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">
                  {s.step}
                </div>
                <div>
                  <p className="font-black text-gray-900 mb-1">{s.name}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.point}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 色選びのコツ */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🎨 コンシーラー色選びのコツ</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {COLOR_GUIDE.map(({ color, hex, usage }) => (
              <div key={color} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 mt-0.5 border border-gray-200"
                  style={{ background: hex }}
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{color}</p>
                  <p className="text-gray-600 text-xs leading-relaxed mt-1">{usage}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-700 font-bold">
              💡 色選びの基本：「ベースカラー（肌色）」と「補色コレクター」を分けて考える。肌色コンシーラーはリップ・手の甲で試してみてから購入するのがおすすめ。
            </p>
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

        {/* 関連ガイドへの誘導 */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 space-y-3">
          <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
          <p className="text-gray-600 text-sm">メイクアップの完成度をさらに高めるガイドをご紹介します。</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/bb-cc-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-white border border-purple-200 text-gray-700 hover:bg-purple-50 transition-all"
            >
              BB・CCクリームガイド →
            </Link>
            <Link
              href="/eye-makeup-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-white border border-purple-200 text-gray-700 hover:bg-purple-50 transition-all"
            >
              アイメイクガイド →
            </Link>
          </div>
        </section>
      </div>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </>
  );
}
