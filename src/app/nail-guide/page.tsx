import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "セルフネイルおすすめ完全ガイド2026年版【ジェルネイル・マニキュア・初心者向け道具・やり方】",
  description:
    "セルフネイルの始め方を2026年版で完全解説。ジェルネイル・マニキュアの道具・やり方・デザイン・おすすめポリッシュを初心者向けに紹介。オフの方法も解説。",
  openGraph: {
    title: "セルフネイルおすすめ完全ガイド2026年版【ジェル・マニキュア初心者】",
    description: "ジェルネイル・マニキュアの道具・やり方・デザインを初心者向けに徹底解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "セルフネイルおすすめ完全ガイド2026年版",
    description: "ジェルネイル・マニキュアの始め方・道具・デザインを解説。",
  },
};

interface NailType {
  type: string;
  icon: string;
  duration: string;
  difficulty: "初心者OK" | "中級者向け" | "上級者向け";
  cost: string;
  pros: string[];
  cons: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const NAIL_TYPES: NailType[] = [
  {
    type: "ジェルネイル（セルフ）",
    icon: "✨",
    duration: "2〜4週間",
    difficulty: "中級者向け",
    cost: "初期費用5,000〜15,000円",
    pros: ["持ちが長い（2〜4週間）", "ツヤツヤで高級感がある", "チップ折れが少ない", "デザインの幅が広い"],
    cons: ["UVライトが必要（3,000〜5,000円）", "オフが手間（アセトン必要）", "最初は硬化ムラが出やすい"],
  },
  {
    type: "マニキュア（ネイルポリッシュ）",
    icon: "💅",
    duration: "3〜7日間",
    difficulty: "初心者OK",
    cost: "初期費用500〜3,000円",
    pros: ["道具が少なくてすぐ始められる", "オフが楽（除光液のみ）", "価格がリーズナブル", "失敗してもやり直しやすい"],
    cons: ["持ちが短い（3〜7日）", "乾燥に時間がかかる", "チップ折れしやすい"],
  },
  {
    type: "ネイルシール・ジェルシール",
    icon: "🎀",
    duration: "1〜2週間",
    difficulty: "初心者OK",
    cost: "500〜2,000円/セット",
    pros: ["最も簡単・誰でもきれいに仕上がる", "技術不要でサロン風のデザイン", "時間がかからない（15分以内）"],
    cons: ["デザインが固定（カスタム不可）", "コストパフォーマンスは高くない", "持ちはマニキュアと同程度"],
  },
  {
    type: "スカルプチュア（アクリル）",
    icon: "💎",
    duration: "3〜4週間",
    difficulty: "上級者向け",
    cost: "初期費用15,000〜30,000円",
    pros: ["爪を長くできる", "耐久性が最も高い", "3Dアートなど高度なデザインが可能"],
    cons: ["技術習得に時間がかかる", "道具が多く費用が高い", "オフが最も難しい"],
  },
];

const BEGINNER_STEPS = [
  {
    title: "マニキュアで始めるセルフネイル（初心者向け）",
    steps: [
      { n: 1, action: "爪を整える", detail: "ファイルで爪の形を整え（スクエア・ラウンド・ポイント等）、甘皮をキューティクルプッシャーで押し上げる" },
      { n: 2, action: "ベースコートを塗る", detail: "爪の着色・保護のためにベースコートを1度塗り。爪の黄ばみ・ダメージを防ぐ" },
      { n: 3, action: "カラーを塗る（2度塗り）", detail: "1回目は薄めに塗って完全に乾かす。2回目で均一に仕上げる。ムラを防ぐために薄く重ねるのがポイント" },
      { n: 4, action: "アート・デザインをする（任意）", detail: "ドット・ラインテープ・スタンピング等でデザインを追加。乾いてから行う" },
      { n: 5, action: "トップコートを塗る", detail: "ツヤ出し・保護のためにトップコートを仕上げに塗る。端まで塗ることで持ちがUP" },
    ],
  },
];

const FAQS: FaqItem[] = [
  {
    q: "セルフジェルネイルに必要な道具は何ですか？",
    a: "最低限必要なものは①ジェルネイルキット（ベースジェル・カラージェル・トップジェル）②UVライトまたはLEDライト③ジェルブラシ④スポンジファイル・エメリーボード⑤プライマー・ボンド⑥アセトン（オフ用）です。セルフネイル用キット（5,000〜15,000円）を購入すると必要なものがまとめて揃います。",
  },
  {
    q: "セルフジェルネイルはすぐに剥がれてしまいます。なぜですか？",
    a: "主な原因は①下処理が不十分（甘皮処理・サンディング・プライマーを省略）②爪の油分・水分が残っている③塗り方が厚すぎる（一度に厚く塗ると端から剥がれやすい）④キューティクルやサイドウォールにジェルが触れている⑤UVライトの硬化時間が足りないの5つです。特に「下処理」が最も重要です。",
  },
  {
    q: "ジェルネイルはどうやってオフしますか？",
    a: "①爪ヤスリで表面を削る（ツヤを取る）②コットンにアセトン（100均でも購入可）を染み込ませ爪に当てる③アルミホイルで包んで10〜15分待つ④ジェルが浮いてきたらプッシャーで優しく除去⑤残りはファイルで軽く削る⑥ネイルオイルで保湿する、という手順です。無理に剥がすと自爪が傷むため注意。",
  },
  {
    q: "100均やプチプラのネイルポリッシュは品質が悪いですか？",
    a: "100均（DAISOのジェルネイル風マニキュア等）やプチプラ（キャンメイク・セザンヌ・OPI等）でも品質が高いものは多くあります。特に「塗りやすさ・発色・持ち」が重要で、価格との相関は一概には言えません。初心者はまずプチプラで試してから、気に入ったカラーや塗り心地のブランドを探すのがおすすめです。",
  },
  {
    q: "セルフネイルはどのくらいの頻度でやり直しますか？",
    a: "マニキュアは3〜7日・ジェルネイルは2〜4週間が目安です。爪は1ヶ月で約3〜4mm伸びるため、ジェルネイルは3〜4週間で根元の「隙間」が気になってきます。無理に長く放置すると自爪が薄くなりやすいため、適切な周期でオフ→ケア→塗り直しを行うことをおすすめします。",
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

const difficultyStyle: Record<NailType["difficulty"], string> = {
  "初心者OK": "bg-green-500/20 text-green-300 border-green-500/30",
  "中級者向け": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "上級者向け": "bg-red-500/20 text-red-300 border-red-500/30",
};

export default function NailGuidePage() {
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
            💅 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            セルフネイル<br />
            <span className="text-pink-400">おすすめ完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【ジェル・マニキュア・初心者道具・やり方】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            ジェルネイル・マニキュアの始め方・道具・デザインを<br />
            2026年版で初心者向けに完全解説します。
          </p>
        </div>

        {/* ネイルタイプ比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-3">
            💅 セルフネイルの種類と特徴
          </h2>
          <div className="space-y-4">
            {NAIL_TYPES.map((n, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{n.icon}</span>
                  <h3 className="text-white font-black text-base">{n.type}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${difficultyStyle[n.difficulty]}`}>
                    {n.difficulty}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3 text-xs">
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400 block mb-0.5">⏳ 持ち</span>
                    <span className="text-white">{n.duration}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400 block mb-0.5">💰 コスト</span>
                    <span className="text-white">{n.cost}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-green-400 text-xs font-bold mb-1">✅ メリット</p>
                    <ul className="space-y-0.5">
                      {n.pros.map((p, j) => <li key={j} className="text-gray-400 text-xs">・{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 text-xs font-bold mb-1">❌ デメリット</p>
                    <ul className="space-y-0.5">
                      {n.cons.map((c, j) => <li key={j} className="text-gray-400 text-xs">・{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* マニキュア手順 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-pink-500 pl-3">
            🎀 マニキュアセルフネイルのやり方（5ステップ）
          </h2>
          <div className="space-y-3">
            {BEGINNER_STEPS[0].steps.map((s) => (
              <div key={s.n} className="bg-gray-900 border border-gray-700 rounded-xl p-4 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-pink-500 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
                  {s.n}
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{s.action}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🌸 コスメ・スキンケアもチェックしよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ネイルとあわせてトータルビューティーで楽しむ。<br />
            プチプラコスメランキングはこちら。
          </p>
          <a
            href="/cosme-ranking"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            プチプラコスメランキングを見る →
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
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
