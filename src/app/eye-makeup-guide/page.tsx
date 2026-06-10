import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アイメイクの正しいやり方2026年版【アイシャドウ・アイライナー・マスカラの塗り方・初心者向け完全ガイド】",
  description:
    "アイメイクのやり方を2026年版で完全解説。アイシャドウの塗り方・アイライナーの引き方・マスカラの付け方・二重まぶたの作り方・奥二重メイクを初心者向けに詳しく解説します。",
  openGraph: {
    title: "アイメイクの正しいやり方2026年版【アイシャドウ・アイライナー・マスカラ完全ガイド】",
    description: "アイシャドウ・アイライナー・マスカラの基本から応用まで初心者向けに完全解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "アイメイクの正しいやり方2026年版",
    description: "アイシャドウ・アイライナー・マスカラの基本を完全解説。",
  },
};

interface EyeItem {
  name: string;
  icon: string;
  step: number;
  tool: string;
  key: string;
  tip: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const EYE_STEPS: EyeItem[] = [
  {
    name: "アイシャドウ（ベースカラー）",
    icon: "👁️",
    step: 1,
    tool: "広いチップ・指",
    key: "まぶた全体に薄く伸ばす",
    tip: "肌なじみの良いベージュ・ピンクベージュを選ぶ。まぶた全体にのせてアイシャドウの密着度を上げるのが目的。中指の腹でトントンとのせると密着しやすい。",
  },
  {
    name: "アイシャドウ（メインカラー）",
    icon: "🎨",
    step: 2,
    tool: "中サイズチップ",
    key: "二重幅〜まぶた中央に集中させる",
    tip: "ベースより少し濃い色を二重幅〜まぶた中央に重ねる。目の形を強調したい場合は目の中央をより濃くのせるとぱっちり見える。単色使いの場合はここで終了でOK。",
  },
  {
    name: "アイシャドウ（シェーディング）",
    icon: "🌑",
    step: 3,
    tool: "細チップ・小ブラシ",
    key: "目尻・アイホールの際にのせる",
    tip: "ブラウン・カーキ・ダークカラーを目尻と二重の折り目に沿ってのせる。アイホールの際（きわ）を意識してぼかすと立体感が生まれる。やりすぎは老け見えするので薄めが◎。",
  },
  {
    name: "アイライナー（上まぶた）",
    icon: "✏️",
    step: 4,
    tool: "リキッドライナー・ペンシルライナー",
    key: "まつ毛の根元を埋めるように引く",
    tip: "まぶたをやや引っ張り、まつ毛の根元の隙間を埋めるようにラインを引く。一気に引こうとせず「点→線」でつなぐと曲がりにくい。目尻はわずか上向きにはね上げると目が大きく見える。",
  },
  {
    name: "マスカラ（ボリューム・長さ）",
    icon: "🖌️",
    step: 5,
    tool: "マスカラブラシ",
    key: "根元から毛先に向けてジグザグ動かす",
    tip: "まつ毛の根元からブラシを当て、左右にジグザグさせながら毛先に向けて持ち上げる。ダマになったら乾く前にコームでとかす。ロング系とボリューム系を重ねるとより効果的。上まつ毛→下まつ毛の順で。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "アイメイクの正しい順番を教えてください。",
    a: "アイメイクの基本的な順番は①アイシャドウ（ベースカラー→メインカラー→シェーディングの順）②アイライナー（上まぶた→下まぶたの順）③マスカラ（上まつ毛→下まつ毛の順）④アイブロウ（眉毛は最後に整える）の順番が最も一般的です。アイライナーを先に引いてからアイシャドウをのせる方法もありますが、初心者はアイシャドウ→ライナー→マスカラの順がおすすめです。",
  },
  {
    q: "アイシャドウのぼかし方がうまくできません。コツを教えてください。",
    a: "アイシャドウをきれいにぼかすコツは①チップや指ではなくアイシャドウブラシを使う②色を「置く→ぼかす」の2ステップに分ける③縦方向（上下）ではなく横方向（左右）にブラシを動かしてぼかす④濃い色を先に置きすぎない（薄く重ねながら調整する）の4つです。特に境目をぼかす専用の「フラッフィーブラシ」（コロっと丸い毛先のブラシ）を使うと初心者でもきれいにぼかせます。",
  },
  {
    q: "奥二重・一重でもアイメイクを映えさせる方法はありますか？",
    a: "奥二重・一重のアイメイクのポイントは①アイシャドウは二重の折り目より少し外側まで広げる（折り目に収めると消えてしまう）②ラメ・グリッターシャドウをまぶた中央にのせると立体感が出る③目尻のみシェーディングカラーを入れて切れ長に仕上げる④アイラインは目尻のみ太めに引いてはね上げる⑤下まぶたのインナーコーナー（目頭側）にハイライトをのせると目が大きく見える、の5つが効果的です。",
  },
  {
    q: "アイライナーがうまく引けません。どんな種類がおすすめですか？",
    a: "初心者にはペンシルタイプのアイライナーが最もおすすめです。理由：①ペンで書く感覚で使いやすい②失敗しても綿棒でこすれば修正できる③リキッドより乾くのが遅くやり直しが利く。慣れてきたらリキッドアイライナーに挑戦するとより鮮明な線が引けます。ポイントは一気に長く引こうとせず「点→点→点→線につなぐ」と曲がりにくいです。",
  },
  {
    q: "夕方になるとアイメイクが崩れてしまいます。崩れ防止の方法を教えてください。",
    a: "アイメイク崩れ防止の方法は①アイシャドウの前にアイシャドウベース（プライマー）を塗る（最も効果的）②パウダーファンデ・プレストパウダーをまぶたにはたいてから塗る③ウォータープルーフ・ロングラスティングタイプを選ぶ④下まぶたの皮脂取りに微粉末パウダーをのせる⑤帰宅途中に油分を取る（あぶらとり紙）の5つが効果的です。特にアイシャドウベースの使用が最も改善効果が高いです。",
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

export default function EyeMakeupGuidePage() {
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
            アイメイクの正しいやり方<br />
            <span className="text-rose-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【アイシャドウ・ライナー・マスカラ初心者入門】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            アイメイクの正しい順番・塗り方・コツを<br />
            初心者向けに2026年版で完全解説します。
          </p>
        </div>

        {/* ステップ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-3">
            👁️ アイメイク基本5ステップ
          </h2>
          <div className="space-y-4">
            {EYE_STEPS.map((step) => (
              <div key={step.step} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xl font-black text-rose-400 bg-rose-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">{step.step}</span>
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-white font-black text-sm">{step.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs">
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400">🖌️ 道具：</span>
                    <span className="text-gray-200">{step.tool}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400">✅ ポイント：</span>
                    <span className="text-gray-200">{step.key}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{step.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-rose-900/20 to-pink-900/20 border border-rose-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            💄 リップメイク・ベースメイクも完成させよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            アイメイクと合わせてベースメイクとリップを整えることで<br />
            トータルメイクが完成します。
          </p>
          <Link
            href="/makeup-guide"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            メイクアップ初心者ガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-rose-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
