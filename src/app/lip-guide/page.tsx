import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "リップメイク・リップケア完全ガイド2026年版【リップの塗り方・乾燥対策・おすすめリップ選び】",
  description:
    "リップメイク・リップケアの方法を2026年版で完全解説。リップの塗り方・乾燥ケア・リップライナーの使い方・プチプラ〜デパコスのおすすめリップを初心者向けに詳しく解説します。",
  openGraph: {
    title: "リップメイク・リップケア完全ガイド2026年版【塗り方・乾燥対策・おすすめリップ】",
    description: "リップの正しい塗り方・乾燥対策・リップライナーの使い方を初心者向けに解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "リップメイク・リップケア完全ガイド2026年版",
    description: "リップの塗り方・乾燥対策・おすすめリップを初心者向けに完全解説。",
  },
};

interface LipType {
  name: string;
  icon: string;
  finish: string;
  longevity: "長持ち" | "普通" | "短め";
  moisturize: "高い" | "普通" | "低め";
  best: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const LIP_TYPES: LipType[] = [
  {
    name: "マットリップ",
    icon: "💋",
    finish: "つや消し・ベルベット感",
    longevity: "長持ち",
    moisturize: "低め",
    best: "大人っぽい・洗練された印象に。ひと塗りでメイクが決まる。ただし乾燥しやすいため、リップケアを事前にしっかり行うことが重要。ニュアンスカラー（テラコッタ・ブラウン系）と相性◎。",
  },
  {
    name: "グロスリップ",
    icon: "✨",
    finish: "つや・ぷっくり・ウェット感",
    longevity: "短め",
    moisturize: "高い",
    best: "唇をふっくら・ぷっくり見せる効果あり。ヌーディカラーに重ねると立体感が増す。単体使いよりもリップスティックや口紅の上に重ねる「仕上げ使い」がおすすめ。",
  },
  {
    name: "ティントリップ",
    icon: "🌹",
    finish: "ステイン・じゅわっと血色",
    longevity: "長持ち",
    moisturize: "普通",
    best: "唇に色素を染め込む「グラデーションリップ」が作りやすい。最も落ちにくいタイプで食事後もカラーが残る。指でぽんぽんと叩き込むように塗るとナチュラルなグラデが完成。",
  },
  {
    name: "リップクリーム・バーム",
    icon: "🌿",
    finish: "ツヤ・保湿感",
    longevity: "短め",
    moisturize: "高い",
    best: "保湿力が最も高く毎日のリップケアに必須。カラー付きバームは「ナチュラルメイク・すっぴん風」の仕上がりに。朝のメイク前・夜の就寝前に使うと唇荒れを防げる。",
  },
  {
    name: "リップライナー",
    icon: "✏️",
    finish: "輪郭強調",
    longevity: "長持ち",
    moisturize: "低め",
    best: "リップの輪郭をはっきり見せる・リップがはみ出すのを防ぐ・唇を大きく見せる効果がある。リップと同系色か透明タイプを選ぶと自然に仕上がる。リップの前にライナーで輪郭を取ることで長持ちする。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "リップの正しい塗り方を教えてください。",
    a: "リップの正しい塗り方：①リップバームで事前保湿（5〜10分前に塗る）②ティッシュで余分な油分を軽く押さえる③コンシーラーで唇の輪郭をぼかす（オプション）④リップライナーで輪郭を取る（オプション）⑤リップスティック・グロスを上唇の山→下唇の順に塗る⑥一度ティッシュでおさえてから2度塗りすると持ちが良くなる。グラデーションリップは①全体に薄く塗る②中央のみ濃く重ねる③指で馴染ませるの手順で完成します。",
  },
  {
    q: "唇の乾燥対策・唇荒れを防ぐ方法を教えてください。",
    a: "唇の乾燥対策：①就寝前に保湿力の高いリップバーム（ヴァセリン・ランコム・カラーポップなど）を厚めに塗る②唇を舐める癖をやめる（唾液が乾燥を促進する）③メイク前にリップバームで保湿してから5〜10分待ってリップを塗る④水分をしっかり摂る（内側からの保湿）⑤週1〜2回の「リップパック」（リップバームを厚塗りしてラップで覆う）が効果的。唇はUV対策も大切でSPF入りリップバームを使うと日焼けによる色素沈着を防げます。",
  },
  {
    q: "プチプラでおすすめのリップを教えてください（2026年版）",
    a: "2026年おすすめプチプラリップ：①CEZANNE（セザンヌ）シアーリップスティック（保湿力が高くナチュラル）②CanMake（キャンメイク）ステイオンバームルージュ（長持ちバームタイプ）③Kate（ケイト）リップモンスター（圧倒的な発色の持続力）④KIKO Milano（イタリア発・高発色・550〜800円）⑤rom&nd（ロムアンド）ジューシーラスティングティント（韓国コスメ・グラデリップが簡単）。特に③Kate リップモンスターは1本770円で食事後も色が残ることで人気急上昇。",
  },
  {
    q: "リップライナーはどんな人が使うべきですか？",
    a: "リップライナーが特におすすめな人：①マットリップや濃い色のリップを使う（はみ出しやすい）②唇の形が不揃い・左右非対称で整えたい③唇を自然に大きく見せたい（輪郭より外側に描く）④リップの持ちを良くしたい（ライナー→リップの順で使うと長持ち）。使い方のポイントはリップと同系色か1〜2色濃い色を選ぶこと。透明リップライナーなら手持ちのリップ全てに使えて便利です。",
  },
  {
    q: "韓国リップ（グラデーションリップ・アイドルリップ）の作り方を教えてください。",
    a: "韓国グラデーションリップ（ウォーターリップ）の作り方：①ティントリップを唇の内側（中央）のみに軽くのせる②指の腹でポンポンと外側に向けてぼかす③境界線が自然にグラデになるように馴染ませる④外側のフチは薄く、中央が濃い状態が完成形。ポイントは最初に「少量だけ内側に入れてぼかす」こと。最初から全体に塗ると失敗しやすいです。ティントタイプのリップが最もやりやすいです。",
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

const longevityColors: Record<LipType["longevity"], string> = {
  長持ち: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  普通: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  短め: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};

const moisturizeColors: Record<LipType["moisturize"], string> = {
  高い: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  普通: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  低め: "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

export default function LipGuidePage() {
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
            💋 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            リップメイク・リップケア<br />
            <span className="text-pink-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【塗り方・乾燥対策・おすすめリップ選び】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            リップの正しい塗り方・種類・乾燥対策・おすすめアイテムを<br />
            初心者向けに2026年版で完全解説します。
          </p>
        </div>

        {/* リップ種類 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-3">
            💋 リップ5種類【仕上がり・持ち・保湿比較】
          </h2>
          <div className="space-y-4">
            {LIP_TYPES.map((lip, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-2xl">{lip.icon}</span>
                  <h3 className="text-white font-black text-sm">{lip.name}</h3>
                  <span className={`text-xs border px-2 py-0.5 rounded-full ${longevityColors[lip.longevity]}`}>{lip.longevity}</span>
                  <span className={`text-xs border px-2 py-0.5 rounded-full ${moisturizeColors[lip.moisturize]}`}>保湿：{lip.moisturize}</span>
                </div>
                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs mb-3">
                  <span className="text-gray-600">✨ 仕上がり：</span>
                  <span className="text-gray-200">{lip.finish}</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{lip.best}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="lip-guide" />

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            👁️ アイメイクと合わせてトータルメイクを完成させよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            リップと合わせてアイメイクを完成させることで<br />
            フルメイクが仕上がります。
          </p>
          <Link
            href="/eye-makeup-guide"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            アイメイクガイドを見る →
          </Link>
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
