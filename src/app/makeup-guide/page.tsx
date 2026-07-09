import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  title: "メイクアップ 初心者完全ガイド2026年版【ベースメイク・アイメイク・リップの順番・やり方】",
  description:
    "メイクアップの基本を2026年版で完全解説。ベースメイク・アイシャドウ・リップの順番・やり方・初心者向けプチプラコスメを徹底解説。崩れにくいメイクの方法も紹介。",
  openGraph: {
    title: "メイクアップ初心者完全ガイド2026年版【順番・やり方・プチプラ】",
    description: "ベースメイク・アイメイク・リップの順番・やり方を初心者向けに解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "メイクアップ初心者完全ガイド2026年版",
    description: "ベースメイク・アイメイク・リップの基本順番を解説。",
  },
};

interface MakeupStep {
  n: number;
  step: string;
  icon: string;
  product: string;
  how: string;
  tip: string;
}

interface TrendItem {
  name: string;
  desc: string;
  icon: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const MAKEUP_STEPS: MakeupStep[] = [
  {
    n: 1, step: "スキンケア（土台作り）", icon: "💧",
    product: "化粧水・乳液・美容液",
    how: "洗顔後に化粧水→乳液の順で保湿。メイクの前に肌を整える",
    tip: "皮脂が多い場合はさっぱり系・乾燥肌はとろみ系を選ぶ",
  },
  {
    n: 2, step: "日焼け止め・化粧下地", icon: "☀️",
    product: "SPF30以上の日焼け止め、化粧下地",
    how: "日焼け止めを顔全体に伸ばし、毛穴・色ムラが気になる部分に下地を重ねる",
    tip: "下地は毛穴カバー・皮脂コントロール・明るさアップなど目的別に選ぶ",
  },
  {
    n: 3, step: "ベースメイク（ファンデーション）", icon: "✨",
    product: "リキッド・クッション・パウダーファンデ",
    how: "スポンジや指で内から外へポンポンと押し込むように塗る。厚塗りNG",
    tip: "初心者にはクッションファンデが最も簡単。薄く重ね付けが崩れにくさの鍵",
  },
  {
    n: 4, step: "コンシーラー", icon: "🎯",
    product: "スティック・リキッドコンシーラー",
    how: "クマ・ニキビ・シミなど気になる部分にのみピンポイントで使用",
    tip: "全顔に塗ると不自然になるので必要箇所のみ。トントンとなじませる",
  },
  {
    n: 5, step: "フェイスパウダー（仕上げ）", icon: "🌸",
    product: "ルースパウダー・プレストパウダー",
    how: "ブラシやパフで顔全体にふわっとのせてメイクを固定",
    tip: "Tゾーンは厚めに、目の下・頬は薄く。崩れ防止効果が上がる",
  },
  {
    n: 6, step: "アイブロウ（眉メイク）", icon: "📏",
    product: "眉ペンシル・眉パウダー・眉マスカラ",
    how: "自眉に沿ってペンシルで形を描き、パウダーで自然に仕上げる",
    tip: "眉は顔の印象を最も左右するパーツ。左右対称より自然さを優先",
  },
  {
    n: 7, step: "アイシャドウ", icon: "👁️",
    product: "パレット型アイシャドウ",
    how: "ライト色→ミディアム色→シャドウ色の順に重ねる。締め色はキワだけ",
    tip: "まずは3〜4色パレットで練習。ブラウン系が初心者に最もなじみやすい",
  },
  {
    n: 8, step: "アイライナー・マスカラ", icon: "✏️",
    product: "リキッドアイライナー、マスカラ",
    how: "アイライナーは目のキワに沿って細く引く。マスカラはジグザグに根元から",
    tip: "アイライナーは最初はリキッドより鉛筆型が描きやすい",
  },
  {
    n: 9, step: "チーク・ハイライト", icon: "🌷",
    product: "チーク、ハイライター",
    how: "チークは笑った時の頰の高い部分に円を描くように。ハイライトは鼻筋・Cゾーンに",
    tip: "チークは少なめからスタート。入れすぎ注意。自然な血色感が目標",
  },
  {
    n: 10, step: "リップメイク", icon: "💋",
    product: "リップスティック・リップグロス・ティント",
    how: "最後にリップを塗る。口角からスタートすると綺麗に仕上がる",
    tip: "まずは薄い色やコーラル系が失敗しにくい。グロスを重ねるとツヤが出る",
  },
];

const TRENDS_2026: TrendItem[] = [
  { name: "グラスメイク", desc: "肌がガラスのように透き通って見えるツヤ肌メイク。韓国発トレンドが継続。", icon: "✨" },
  { name: "ブラウンコンビネーション", desc: "ブラウンの眉・アイシャドウ・リップを統一するナチュラルトーン人気継続。", icon: "🟤" },
  { name: "ワイルドロウブロウ", desc: "整えすぎない「毛が生えた感じ」のナチュラル眉。自然なふさふさ眉が主流。", icon: "📏" },
  { name: "ブラーリップ", desc: "グラデーションで中心が濃く外側が薄いリップ。ふっくら見える効果。", icon: "💋" },
];

const FAQS: FaqItem[] = [
  {
    q: "メイクの正しい順番はどうすればいいですか？",
    a: "基本順序は①スキンケア②日焼け止め・下地③ファンデーション④コンシーラー⑤フェイスパウダー⑥眉メイク⑦アイシャドウ⑧アイライナー・マスカラ⑨チーク⑩リップです。この順番は「土台から仕上げへ」の原則で、ベースメイクを先に仕上げてからポイントメイクをするのが崩れにくい仕上がりのコツです。",
  },
  {
    q: "メイクが崩れやすいのですが対策はありますか？",
    a: "崩れ防止の主な対策は①下地（コントロールカラー・プライマー）をしっかり使う②フェイスパウダーをTゾーンに重ねる③フィキシングスプレー（メイクの上からスプレー）を使う④こまめにあぶら取り紙でケアする⑤保湿を徹底して乾燥崩れを防ぐ、の5点です。特に皮脂が多い方は「皮脂コントロール系の下地」が効果的です。",
  },
  {
    q: "初心者向けのメイク道具は何から揃えればいいですか？",
    a: "最低限必要なアイテムは①日焼け止め②CCクリームまたはクッションファンデ③アイブロウペンシル④マスカラ⑤チーク⑥リップの6点です。最初から全部揃える必要はなく、少ないアイテムで自然なメイクから始めることをおすすめします。キャンメイク・セザンヌ・エテュセなどプチプラブランドで揃えても十分です。",
  },
  {
    q: "アイシャドウがうまく塗れません。コツを教えてください。",
    a: "初心者へのコツは①ブラシ使い：指よりブラシの方がグラデーションが作りやすい②色数を絞る：最初は2〜3色のパレットで練習③締め色は細いブラシで目のキワだけ④単色使いから始める：まずハイライトカラーのみをまぶた全体に塗る練習から。焦らず単色→2色→3色と徐々に複雑にしていくのがコツです。",
  },
  {
    q: "仕事・学校に適したナチュラルメイクの仕方を教えてください。",
    a: "ナチュラルメイクの基本は①下地＋薄めのファンデorBBクリーム②自眉に沿った自然な眉③ブラウン系のアイシャドウ（くすみ色）④マスカラ（ブラウンや細めのもの）⑤コーラルピンクや薄めのリップ、の5点に絞ることです。アイラインは省略してもOK。「素っぴんよりほんのり整えた顔」が目標です。",
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

export default function MakeupGuidePage() {
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
            💄 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            メイクアップ<br />
            <span className="text-pink-400">初心者完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【順番・やり方・プチプラコスメ】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            ベースメイク・アイメイク・リップの正しい順番・やり方を<br />
            2026年版で初心者向けに完全解説します。
          </p>
        </div>

        {/* メイク手順 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-3">
            💄 メイクアップの正しい順番（10ステップ）
          </h2>
          <div className="space-y-3">
            {MAKEUP_STEPS.map((s) => (
              <div key={s.n} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {s.n}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-lg">{s.icon}</span>
                      <h3 className="text-white font-black text-sm">{s.step}</h3>
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">{s.product}</span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-1">{s.how}</p>
                    <p className="text-pink-400 text-xs">💡 {s.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2026年トレンド */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-pink-500 pl-3">
            🌸 2026年メイクトレンド4選
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {TRENDS_2026.map((t, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{t.icon}</span>
                  <h3 className="text-white font-bold text-sm">{t.name}</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="makeup-guide" />

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🌸 スキンケアも一緒に学ぼう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            メイクの仕上がりは土台のスキンケアで決まります。<br />
            スキンケア完全ガイドでベースを整えましょう。
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

        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
