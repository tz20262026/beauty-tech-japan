import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "BB・CCクリーム完全ガイド2026年版【違い・選び方・肌タイプ別おすすめ】| Beauty Tech Japan",
  description: "BBクリームとCCクリームの違いを徹底比較。カバー力・保湿力・UV効果・肌タイプ別の選び方から正しい使い方・重ねヅケの方法まで。2026年最新版。",
  keywords: ["BB クリーム CCクリーム 違い", "BBクリーム 選び方", "CCクリーム 効果", "BBクリーム 肌タイプ", "BBクリーム 使い方"],
  openGraph: {
    title: "BB・CCクリーム完全ガイド2026年版【違い・選び方・肌タイプ別おすすめ】| Beauty Tech Japan",
    description: "BBクリームとCCクリームの違いを徹底比較。カバー力・保湿力・UV効果・肌タイプ別の選び方から正しい使い方まで。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "BB・CCクリーム完全ガイド2026年版【違い・選び方・肌タイプ別おすすめ】| Beauty Tech Japan",
    description: "BBクリームとCCクリームの違いを徹底比較。カバー力・保湿力・UV効果・肌タイプ別の選び方から正しい使い方まで。",
  },
};

const COMPARISON_TABLE = [
  { item: "カバー力", bb: "高め（シミ・毛穴を隠す）", cc: "中程度（自然な肌補正）" },
  { item: "保湿力", bb: "中程度", cc: "高め（スキンケア成分配合）" },
  { item: "UV効果", bb: "SPF20〜50（製品による）", cc: "SPF30〜50+（高めが多い）" },
  { item: "仕上がり", bb: "マット〜セミマット", cc: "自然・ツヤ感あり" },
  { item: "主な目的", bb: "ベースメイク・時短", cc: "スキンケア＋カラーコレクション" },
  { item: "向いている肌タイプ", bb: "脂性〜混合肌", cc: "乾燥肌・敏感肌" },
  { item: "崩れにくさ", bb: "やや崩れやすい", cc: "比較的崩れにくい（製品による）" },
];

const SKIN_TYPE_GUIDE = [
  {
    type: "乾燥肌",
    icon: "🏜️",
    color: "#60a5fa",
    choice: "CCクリームがおすすめ",
    reason: "セラミック・ヒアルロン酸・グリセリン配合のCCクリームで保湿しながらカバー。",
    tips: ["保湿成分（セラミド・ヒアルロン酸）配合を選ぶ", "クリームテクスチャーのタイプが◎", "下地なしでも使えるタイプが時短になる"],
  },
  {
    type: "脂性肌（オイリー肌）",
    icon: "✨",
    color: "#34d399",
    choice: "BBクリームがおすすめ",
    reason: "皮脂コントロール成分配合のBBクリームで、テカリを抑えながらカバー。",
    tips: ["「オイルフリー」「ノンコメドジェニック」表記を選ぶ", "パウダータイプのBBが崩れにくい", "フィニッシュパウダーと合わせてマット仕上げを"],
  },
  {
    type: "混合肌",
    icon: "⚖️",
    color: "#f59e0b",
    choice: "BBクリームをTゾーン控えめに",
    reason: "Tゾーンは薄づけ、乾燥しやすいUゾーンは重ねてカバーするテクニックが有効。",
    tips: ["「スキンケアBB」でTゾーンとUゾーンのバランスを取る", "Tゾーンのみパウダーを重ねる", "CCクリームを保湿下地として使いBBを重ねるのも有効"],
  },
  {
    type: "敏感肌",
    icon: "🌸",
    color: "#ec4899",
    choice: "CCクリームがおすすめ",
    reason: "低刺激・無香料・パラベンフリーのCCクリームを選び、肌への負担を最小限に。",
    tips: ["「無香料・無着色・アルコールフリー」を選ぶ", "パッチテスト必須", "ミネラル系の日焼け止め配合タイプが肌に優しい"],
  },
];

const USAGE_STEPS = [
  { step: 1, name: "スキンケアを完了させる", point: "化粧水・乳液・保湿クリームを完全に肌になじませてから使用。水分が多い状態ではBB/CCが滑って均一に塗れない。" },
  { step: 2, name: "指またはスポンジで少量を取る", point: "パール粒大（約0.5〜1g）から始める。塗りすぎは厚ぼったい仕上がりの原因。少量を重ねる方が自然に仕上がる。" },
  { step: 3, name: "顔の中心から外側へ伸ばす", point: "鼻・頬の内側→外側へ向かって薄く伸ばす。フェイスラインは特に薄くして自然なグラデーションを作る。" },
  { step: 4, name: "目元・口元を丁寧にブレンド", point: "スポンジのコーナーを使って細部をブレンド。目元の小じわに入り込まないよう、軽くたたくように仕上げる。" },
  { step: 5, name: "気になる箇所を重ねてカバー", point: "シミ・赤みが気になる部分はBB/CCを重ねてカバー。またはコンシーラーを上から使うとより自然。" },
];

const BRAND_COMPARISON = [
  {
    category: "日本ブランド",
    icon: "🇯🇵",
    color: "#ec4899",
    brands: [
      { name: "CANMAKE（キャンメイク）", feature: "低価格・高品質。毛穴カバー・UVカット優秀" },
      { name: "CEZANNE（セザンヌ）", feature: "皮脂崩れに強い。プチプラNo.1クラスの人気" },
      { name: "資生堂 マキアージュ", feature: "医薬部外品の美容効果＋高いカバー力" },
    ],
  },
  {
    category: "海外ブランド",
    icon: "🌍",
    color: "#6366f1",
    brands: [
      { name: "IT Cosmetics（アメリカ）", feature: "SPF50+・高カバー。肌補正効果が圧倒的" },
      { name: "Erborian（フランス）", feature: "CCクリームの元祖。保湿力・肌補正のバランス最高" },
      { name: "Dr.Jart+（韓国）", feature: "シカ成分配合CCで敏感肌にも人気。ツヤ仕上がり" },
    ],
  },
];

const FAQ = [
  {
    q: "BBクリームだけでメイクは完成しますか？",
    a: "BBクリームは保湿・UVカット・カバーが一体化した多機能アイテムです。それだけでベースメイクが完成するため時短になります。ただし、より長持ちさせたい場合はフィニッシュパウダーを重ね、アイメイクやリップを加えると仕上がりがぐっと上がります。",
  },
  {
    q: "CCクリームはどんな肌悩みに効果的ですか？",
    a: "CCクリームは「カラーコレクティング」を意味し、赤み・黄くすみ・青クマなどの色補正が得意です。またスキンケア成分が豊富なため、乾燥肌・敏感肌の方に特におすすめです。カバー力はBBより控えめですが自然な仕上がりが魅力です。",
  },
  {
    q: "BB/CCクリームの上にファンデーションは塗れますか？",
    a: "塗ることはできますが、重ねすぎると厚塗り感が出て崩れやすくなります。BB/CCをベースに使いたい場合は薄く均一に伸ばし、気になる部分のみコンシーラーを重ねる方法が自然な仕上がりになります。",
  },
  {
    q: "BBクリームとCCクリームを重ねて使っても大丈夫ですか？",
    a: "CCクリームを先に使いスキンケア効果を得てから、上にBBクリームでカバーを足す重ねづけは可能です。ただし、1〜2ステップで仕上げたい場合はどちらか1つで十分です。重ねる場合はどちらも薄づけを意識してください。",
  },
  {
    q: "SPF入りのBB/CCクリームだけで日焼け止めは省けますか？",
    a: "SPF50以上のBB/CCクリームであれば日常的なUVケアはある程度カバーできますが、アウトドアや長時間の屋外活動には別途日焼け止めの使用を推奨します。また、BB/CCは規定量（顔全体に2g程度）を塗らないと表示のSPF効果は得られません。",
  },
];

export default function BbCcGuidePage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-pink-50 text-pink-600 border border-pink-200">
            💄 BB・CCクリームガイド
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            BB・CCクリーム<br className="sm:hidden" />
            <span className="text-pink-600">完全ガイド</span>
            <span className="text-lg ml-2 text-gray-500">2026年版</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            BBクリームとCCクリームの違い・肌タイプ別の選び方・正しい使い方を徹底解説。海外ブランドと日本ブランドの比較も。時短メイクで美しい仕上がりを実現するための完全ガイドです。
          </p>
        </section>

        {/* BB vs CC 比較表 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">⚖️ BB vs CC 徹底比較表</h2>
          <div className="overflow-x-auto rounded-2xl border border-pink-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-pink-50">
                  <th className="text-left px-4 py-3 font-black text-gray-900 w-1/3">項目</th>
                  <th className="text-left px-4 py-3 font-black text-pink-600">BBクリーム</th>
                  <th className="text-left px-4 py-3 font-black text-purple-600">CCクリーム</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map(({ item, bb, cc }, i) => (
                  <tr key={item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-bold text-gray-700">{item}</td>
                    <td className="px-4 py-3 text-gray-600">{bb}</td>
                    <td className="px-4 py-3 text-gray-600">{cc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            ※ BBクリーム（Blemish Balm）＝ 傷ケア用クリームが起源のカバーファンデ。CCクリーム（Color Control）＝ 色補正＋スキンケア効果を重視したアイテム。
          </p>
        </section>

        {/* 肌悩み別選び方 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🔍 肌タイプ・悩み別 おすすめ選び方</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SKIN_TYPE_GUIDE.map(({ type, icon, color, choice, reason, tips }) => (
              <div
                key={type}
                className="rounded-2xl border p-5 space-y-3"
                style={{ borderColor: `${color}30`, background: `${color}06` }}
              >
                <div>
                  <span className="font-black text-lg" style={{ color }}>
                    {icon} {type}
                  </span>
                  <p className="text-sm font-bold mt-1" style={{ color }}>
                    → {choice}
                  </p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{reason}</p>
                </div>
                <ul className="space-y-1.5">
                  {tips.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="font-bold flex-shrink-0" style={{ color }}>
                        ✓
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 正しい使い方 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">💆 BB/CCクリームの正しい使い方（5ステップ）</h2>
          <div className="space-y-3">
            {USAGE_STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-pink-50 border border-pink-100">
                <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">
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

        {/* ブランド比較 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🌐 海外ブランド vs 日本ブランド比較</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {BRAND_COMPARISON.map(({ category, icon, color, brands }) => (
              <div
                key={category}
                className="rounded-2xl border p-5 space-y-3"
                style={{ borderColor: `${color}30`, background: `${color}06` }}
              >
                <p className="font-black text-lg" style={{ color }}>
                  {icon} {category}
                </p>
                <div className="space-y-3">
                  {brands.map(({ name, feature }) => (
                    <div key={name} className="text-sm">
                      <p className="font-bold text-gray-900">{name}</p>
                      <p className="text-gray-600 leading-relaxed">{feature}</p>
                    </div>
                  ))}
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

        {/* 関連ガイドへの誘導 */}
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-2xl p-6 space-y-3">
          <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
          <p className="text-gray-600 text-sm">メイクアップの基礎から応用テクニックまで幅広く解説しています。</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/makeup-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-white border border-pink-200 text-gray-700 hover:bg-pink-50 transition-all"
            >
              メイクアップガイド →
            </Link>
            <Link
              href="/foundation-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-white border border-pink-200 text-gray-700 hover:bg-pink-50 transition-all"
            >
              ファンデーション選び方 →
            </Link>
          </div>
        </section>
      </div>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </>
  );
}
