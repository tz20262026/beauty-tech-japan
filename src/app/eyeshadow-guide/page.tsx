import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アイシャドウの使い方・色選びガイド2026年版【初心者・奥二重・二重別・プチプラおすすめ】",
  description:
    "アイシャドウの使い方・色選び・ぼかし方を2026年版で完全解説。一重・奥二重・二重別の塗り方・プチプラからデパコスまでのおすすめ・季節別カラー選びを初心者向けに詳しく紹介します。",
  keywords: [
    "アイシャドウ 使い方", "アイシャドウ 色選び", "アイシャドウ ぼかし方",
    "アイシャドウ 奥二重", "アイシャドウ 初心者", "アイシャドウ プチプラ",
    "アイシャドウ 二重", "アイシャドウ 2026"
  ],
  openGraph: {
    title: "アイシャドウの使い方・色選びガイド2026年版【初心者・奥二重・二重別】",
    description: "アイシャドウの正しい使い方・色選び・ぼかし方を初心者向けに完全解説。まぶたの形別テクニックも紹介。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "アイシャドウの使い方・色選びガイド2026年版",
    description: "初心者でもできるアイシャドウの使い方・色選び・ぼかし方を完全解説",
  },
};

interface ColorTrend {
  color: string;
  icon: string;
  effect: string;
  season: string;
  skinTone: string;
  hexColor: string;
}

interface EyelidType {
  type: string;
  icon: string;
  point: string;
  technique: string;
  color: string;
}

interface ApplyStep {
  step: number;
  name: string;
  tool: string;
  area: string;
  tip: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const COLOR_TRENDS: ColorTrend[] = [
  {
    color: "ブラウン系",
    icon: "🤎",
    effect: "目を自然に大きく・深みを演出。最も汎用性が高くどんなメイクにも馴染む万能カラー。",
    season: "オールシーズン",
    skinTone: "全ての肌色に合う",
    hexColor: "#92400e",
  },
  {
    color: "ピンク・コーラル系",
    icon: "🌸",
    effect: "ぱっちりとした可愛らしい目元を演出。明るく若々しい印象に。血色感もアップ。",
    season: "春・夏",
    skinTone: "明るい肌色・イエローベース",
    hexColor: "#ec4899",
  },
  {
    color: "テラコッタ・オレンジ系",
    icon: "🍊",
    effect: "血色感・立体感・ヘルシーな印象を演出。2026年トレンドカラー。肌馴染みが良い。",
    season: "春〜秋",
    skinTone: "イエローベース・ゴールデン系肌",
    hexColor: "#c2410c",
  },
  {
    color: "パープル・ラベンダー系",
    icon: "💜",
    effect: "クールで大人っぽい印象・くすみをカバーして白目が綺麗に見える効果も。",
    season: "秋・冬",
    skinTone: "ブルーベース・透明感のある肌",
    hexColor: "#7c3aed",
  },
  {
    color: "カーキ・オリーブ系",
    icon: "🌿",
    effect: "こなれた雰囲気・ナチュラルなおしゃれ感。上品で落ち着いた大人メイクに。",
    season: "秋・冬",
    skinTone: "イエローベース・グリーン系肌",
    hexColor: "#4d7c0f",
  },
  {
    color: "ネイビー・ブルー系",
    icon: "💙",
    effect: "白目がくっきり見える・印象的な目元に。クールビューティーな仕上がり。",
    season: "夏・秋",
    skinTone: "ブルーベース・白い肌",
    hexColor: "#1e40af",
  },
];

const EYELID_TYPES: EyelidType[] = [
  {
    type: "二重（幅広）",
    icon: "👁️",
    point: "二重幅にカラーが映えやすく最もアイシャドウが楽しめるまぶた。ぼかしを丁寧に行うと一気に垢抜ける。",
    technique: "ベースカラー→メインカラー（二重幅全体）→シェーディング（目尻・アイホール際）の3色使いで立体感を出す。ラメを二重幅中央にのせるとぱっちり効果が増す。",
    color: "#ec4899",
  },
  {
    type: "奥二重",
    icon: "👀",
    point: "二重の折り目の上に脂肪がかぶっているため、メイクが消えやすい。色を折り目より少し外側まで広げるのがコツ。",
    technique: "アイシャドウは二重の折り目よりも1〜2mm広く塗る。ラメ・グリッターをまぶた中央にのせると立体感が出て目が大きく見える。目尻だけシェーディングを濃くすると切れ長な目元になる。",
    color: "#a855f7",
  },
  {
    type: "一重",
    icon: "😑",
    point: "まぶたが下がっているため影が出来やすく、カラーが目立ちにくい。しかし適切な塗り方でアイシャドウを最大限活かせる。",
    technique: "まぶたをやや押し上げながら広めにアイシャドウを塗る。目の上3分の1にシェーディングカラーを入れて影を作る。下まぶたのインナーコーナー（目頭）にハイライトをのせると目が大きく見える。リキッドアイライナーを太めに引いて目力を出す。",
    color: "#f59e0b",
  },
];

const APPLY_STEPS: ApplyStep[] = [
  {
    step: 1,
    name: "アイシャドウベース（プライマー）",
    tool: "指先 or スポンジ",
    area: "まぶた全体",
    tip: "まぶたの皮脂・凹凸をカバーしてアイシャドウの密着度を劇的に上げる。崩れ防止にも最も効果的。省略すると夕方にはほぼ消えてしまう。",
  },
  {
    step: 2,
    name: "ベースカラー（肌なじみカラー）",
    tool: "広いチップ or 中指の腹",
    area: "まぶた全体",
    tip: "ベージュ・ピンクベージュ・オフホワイトを薄くまぶた全体にのせる。肌の凹凸を整えてメインカラーを綺麗に発色させるための土台作り。薄くのせることがポイント。",
  },
  {
    step: 3,
    name: "メインカラー",
    tool: "中サイズチップ or 平筆",
    area: "二重幅〜まぶた中央",
    tip: "ベースより少し濃い色を二重幅からまぶた中央に重ねる。目の形を強調したい場合は目の中央をより濃くのせるとぱっちり見える効果が高い。",
  },
  {
    step: 4,
    name: "シェーディング（影色）",
    tool: "細チップ or 小さいブラシ",
    area: "目尻・アイホール際",
    tip: "ブラウン・カーキ・ダークカラーを目尻と二重の折り目に沿ってのせる。アイホールの際（きわ）を意識してぼかすと立体感が生まれる。やりすぎは老け見えするので薄めが◎。",
  },
  {
    step: 5,
    name: "ぼかし（フラッフィーブラシ）",
    tool: "フラッフィーブラシ（丸い毛先）",
    area: "色の境目",
    tip: "色と色の境目を横方向（左右）に動かしてぼかす。縦方向に動かすと色が混ざりすぎて濁る。これが「垢抜けアイシャドウ」の最重要テクニック。",
  },
  {
    step: 6,
    name: "ハイライト・ラメ",
    tool: "指先 or 細チップ",
    area: "まぶた中央・目頭",
    tip: "ラメ・グリッターを人差し指の腹で中央にポンポンとのせる。目頭のインナーコーナーにも少量のせると目が明るくなり大きく見える効果がある。",
  },
];

const FAQ: FAQItem[] = [
  {
    q: "アイシャドウのぼかし方がうまくできません。コツを教えてください。",
    a: "アイシャドウを綺麗にぼかす最大のコツは「フラッフィーブラシ（コロッと丸い毛先のブラシ）を使う」ことです。指やチップではなくブラシを使い、色を置いた後に境目を横方向（左右）にブラシで動かしてぼかします。縦方向に動かすと色が混ざりすぎて濁ります。また、色は薄く重ねながら調整するのがコツで、最初から濃くのせすぎると直せなくなります。アイシャドウベースを下地に使うと、発色がよくなりぼかしも綺麗に決まります。",
  },
  {
    q: "自分の肌色に合うアイシャドウカラーの選び方を教えてください。",
    a: "肌色別のおすすめカラーの選び方：【イエローベース（黄み肌）】ブラウン・テラコッタ・オレンジ・ゴールドが得意。コーラルピンクも馴染みやすい。ブルー・ラベンダーは浮いて見えることがある。【ブルーベース（ピンク肌・白い肌）】ピンク・パープル・ラベンダー・シルバーが得意。コーラルより淡いピンクが肌馴染み良し。テラコッタ・オレンジは浮いて見えることがある。迷ったらブラウン系を選ぶのが最も失敗なしです。",
  },
  {
    q: "奥二重・一重でもアイシャドウを映えさせる方法はありますか？",
    a: "奥二重・一重のアイシャドウのポイントは①二重の折り目より1〜2mm広くアイシャドウを塗る（折り目に収めると目を開けたときに消えてしまう）②ラメ・グリッターシャドウをまぶた中央にのせると立体感が出る③目尻だけシェーディングカラーを濃くして切れ長に仕上げる④下まぶたのインナーコーナー（目頭側）にハイライトをのせると目が大きく見える、の4つが特に効果的です。",
  },
  {
    q: "夕方になるとアイシャドウが消えてしまいます。崩れない方法を教えてください。",
    a: "アイシャドウが崩れる主な原因はまぶたの皮脂です。対策は①アイシャドウベース（プライマー）を下地に塗る（最も効果的）②プレストパウダー（フェイスパウダー）をまぶたにはたいてから塗る③ウォータープルーフ・ロングラスティングタイプを選ぶ④パウダータイプのアイシャドウを選ぶ（クリームタイプより崩れにくい）の4つです。特にアイシャドウベースの使用が最も改善効果が高く、これだけで夜まで色が持つようになります。",
  },
  {
    q: "アイシャドウ初心者におすすめのカラーと使い方を教えてください。",
    a: "初心者には「ブラウン単色またはブラウン系パレット」が最もおすすめです。理由は①どんな肌色にも合う②失敗しても違和感が出にくい③ナチュラルからしっかりメイクまで幅広く使える、の3点からです。塗り方は①明るいベージュをまぶた全体に②中間ブラウンを二重幅に③濃いブラウンを目尻に、という3段階で塗ればグラデーションが完成します。プチプラならキャンメイク・セザンヌのパレットが評判良いです。",
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

export default function EyeshadowGuidePage() {
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
            👁️ 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            アイシャドウの使い方・色選び<br />
            <span className="text-rose-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【初心者・奥二重・二重別・プチプラおすすめ】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            アイシャドウの正しい使い方・色選び・ぼかし方を<br />
            まぶたの形別テクニックも含めて2026年最新情報で完全解説します。
          </p>
        </div>

        {/* 2026年カラートレンド */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-3">
            🎨 2026年トレンドカラーと色選びガイド
          </h2>
          <div className="space-y-4">
            {COLOR_TRENDS.map((trend) => (
              <div key={trend.color} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{trend.icon}</span>
                  <h3 className="text-white font-black text-sm">{trend.color}</h3>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${trend.hexColor}20`,
                      color: trend.hexColor,
                      border: `1px solid ${trend.hexColor}40`,
                    }}
                  >
                    {trend.season}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-800 rounded px-3 py-2">
                    <p className="text-gray-600 font-bold mb-1">✨ 効果</p>
                    <p className="text-gray-300 leading-relaxed">{trend.effect}</p>
                  </div>
                  <div className="bg-gray-800 rounded px-3 py-2">
                    <p className="text-gray-600 font-bold mb-1">🌸 おすすめ肌色</p>
                    <p className="text-gray-300 leading-relaxed">{trend.skinTone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* まぶたのタイプ別テクニック */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-3">
            👁️ まぶたのタイプ別アイシャドウテクニック
          </h2>
          <div className="space-y-5">
            {EYELID_TYPES.map((eyelid) => (
              <div
                key={eyelid.type}
                className="bg-gray-900 border border-gray-700 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{eyelid.icon}</span>
                  <h3
                    className="font-black text-base"
                    style={{ color: eyelid.color }}
                  >
                    {eyelid.type}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{eyelid.point}</p>
                <div className="bg-gray-800 rounded-xl px-4 py-3 text-xs">
                  <p className="font-bold mb-1" style={{ color: eyelid.color }}>💡 おすすめテクニック</p>
                  <p className="text-gray-300 leading-relaxed">{eyelid.technique}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 正しい塗り方ステップ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-3">
            📋 アイシャドウの正しい塗り方6ステップ
          </h2>
          <div className="space-y-3">
            {APPLY_STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm">
                    {s.step}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center mb-1">
                    <p className="font-black text-white text-sm">{s.name}</p>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">道具: {s.tool}</span>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">塗布部位: {s.area}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ブラシの使い方 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-rose-500 pl-3">
            🖌️ アイシャドウブラシの選び方・使い分け
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="px-4 py-3 font-bold text-gray-300">ブラシの種類</th>
                  <th className="px-4 py-3 font-bold text-gray-300">使用場面</th>
                  <th className="px-4 py-3 font-bold text-gray-300">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { brush: "フラットブラシ（平筆）", use: "メインカラーをのせる", tip: "色を均一にのせるのに最適" },
                  { brush: "フラッフィーブラシ（丸い毛先）", use: "ぼかし・アイホール全体", tip: "境目をぼかすのに必須アイテム" },
                  { brush: "細小ブラシ（チップブラシ）", use: "目尻・細部のシェーディング", tip: "ピンポイントで色をのせる" },
                  { brush: "チップ（付属品）", use: "ラメ・グリッターを中央にのせる", tip: "指の腹でものせられる" },
                  { brush: "下まぶた用細ブラシ", use: "下まぶたのライン・シェーディング", tip: "目の下の細い部分に使いやすい" },
                ].map((row, i) => (
                  <tr key={row.brush} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-950"}>
                    <td className="px-4 py-3 font-semibold text-gray-200">{row.brush}</td>
                    <td className="px-4 py-3 text-gray-300">{row.use}</td>
                    <td className="px-4 py-3 text-gray-600">{row.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* プチプラ vs デパコス */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-rose-500 pl-3">
            💰 プチプラ vs デパコス【アイシャドウ比較】
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-5">
              <h3 className="text-green-300 font-black text-sm mb-3">💚 プチプラ（〜2,000円）</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-green-400 font-bold">✅ メリット</p>
                  <p className="text-gray-300 leading-relaxed mt-1">
                    気軽に試せる・カラー展開が豊富・技術進化で高品質になっている。
                    キャンメイク・セザンヌ・UZU・リンメルなどが人気。
                  </p>
                </div>
                <div>
                  <p className="text-red-400 font-bold">⚠️ デメリット</p>
                  <p className="text-gray-300 leading-relaxed mt-1">発色・持続性・質感がデパコスに比べてやや劣る場合がある。</p>
                </div>
                <div className="bg-green-900/20 rounded px-2 py-1.5">
                  <p className="text-green-400 font-bold">おすすめブランド</p>
                  <p className="text-gray-300 mt-1">CANMAKE / CEZANNE / UZU / RIMMEL / 3COINS</p>
                </div>
              </div>
            </div>
            <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-5">
              <h3 className="text-rose-300 font-black text-sm mb-3">💎 デパコス（3,000円〜）</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-rose-400 font-bold">✅ メリット</p>
                  <p className="text-gray-300 leading-relaxed mt-1">
                    発色の良さ・持続性・質感・ラメの輝きが段違い。
                    パレットデザインもコレクターアイテムとして価値あり。
                  </p>
                </div>
                <div>
                  <p className="text-red-400 font-bold">⚠️ デメリット</p>
                  <p className="text-gray-300 leading-relaxed mt-1">価格が高い・使い切るまで時間がかかる・試せる場所が限られる。</p>
                </div>
                <div className="bg-rose-900/20 rounded px-2 py-1.5">
                  <p className="text-rose-400 font-bold">おすすめブランド</p>
                  <p className="text-gray-300 mt-1">CHANEL / DIOR / SUQQU / NARS / Urban Decay</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-rose-900/20 to-pink-900/20 border border-rose-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            💄 アイメイク全体を完成させよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            アイシャドウと合わせてアイライナー・マスカラを整えることで<br />
            トータルアイメイクが完成します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/eye-makeup-guide"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              アイメイク完全ガイドを見る →
            </Link>
            <Link
              href="/makeup-guide"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              メイクアップ全般ガイドを見る →
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
