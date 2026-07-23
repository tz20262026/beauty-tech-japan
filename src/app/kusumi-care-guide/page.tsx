import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/kusumi-care-guide" },
  title: "肌のくすみ対策完全ガイド2026【原因タイプ別の改善法・おすすめケア】",
  description:
    "肌のくすみの原因を「乾燥・血行不良・角質・紫外線・糖化」の5タイプ別に解説。それぞれの見分け方と改善ケア、透明感を出すメイクのコツ、くすみ対策の毎日の習慣まで完全網羅。2026年最新版。",
  keywords: [
    "肌 くすみ 原因",
    "くすみ 改善",
    "くすみ 対策",
    "透明感 スキンケア",
    "血行不良 くすみ",
    "角質 くすみ",
    "糖化 くすみ",
    "顔色 悪い 改善",
  ],
  openGraph: {
    title: "肌のくすみ対策完全ガイド2026｜原因タイプ別の改善法",
    description: "くすみの5つの原因タイプを見分け、それぞれに合った改善ケアを完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "肌のくすみ対策完全ガイド2026",
    description: "くすみの原因タイプ別の見分け方と改善ケアを完全解説",
  },
};

/** くすみタイプ1件分のデータ型 */
interface KusumiType {
  name: string;
  icon: string;
  sign: string;
  cause: string;
  care: string[];
  keyItem: string;
  color: string;
  ngAction: string;
}

/** ステップ1件分 */
interface StepItem {
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

const KUSUMI_TYPES: KusumiType[] = [
  {
    name: "乾燥くすみ",
    icon: "🏜️",
    sign: "肌がカサつくと同時に顔色が沈む・化粧水をつけた直後は明るく見える。",
    cause: "肌表面の水分不足で凹凸ができ、光が均一に反射しなくなることで顔全体が暗く見える状態。",
    care: [
      "化粧水・美容液で水分をしっかり補給する",
      "乳液・クリームで水分を逃さないようフタをする",
      "週1〜2回、保湿系のシートマスクで集中ケア",
      "洗顔後は5秒以内に化粧水をつける習慣をつける",
      "加湿器で室内の湿度を保つ",
    ],
    keyItem: "高保湿化粧水・シートマスク",
    color: "#3b82f6",
    ngAction: "洗浄力の強い洗顔での過度な皮脂除去・保湿を怠ったままのメイク",
  },
  {
    name: "血行不良くすみ",
    icon: "🩸",
    sign: "顔が青白い・青黒い・冷えを感じやすい・マッサージすると一時的に明るくなる。",
    cause: "血流が滞ることで肌に酸素や栄養が届きにくくなり、顔色が悪く見える状態。冷え・運動不足・肩こりが影響する。",
    care: [
      "毎朝の洗顔時にぬるま湯で軽く顔をマッサージする",
      "蒸しタオルを1〜2分顔にのせて血行を促す",
      "首・肩をこまめにほぐし、全身の血流を良くする",
      "湯船に浸かる習慣をつける（シャワーだけで済ませない）",
      "顔用ローラーやツボ押しを軽い力で取り入れる",
    ],
    keyItem: "温感マッサージクリーム・蒸しタオル",
    color: "#ef4444",
    ngAction: "強い力でのゴリゴリマッサージ（摩擦で色素沈着の原因に）",
  },
  {
    name: "角質くすみ",
    icon: "✨",
    sign: "肌のザラつきを感じる・ファンデが均一にのらない・触るとゴワつく。",
    cause: "古い角質が肌表面に溜まり、ターンオーバーが乱れることで肌のトーンが不均一になり暗く見える状態。",
    care: [
      "週1回程度、肌に合ったピーリング・角質ケアを取り入れる",
      "洗顔料をよく泡立て、こすらず優しく洗う",
      "ビタミンC誘導体配合の美容液でターンオーバーをサポート",
      "十分な睡眠でターンオーバーのリズムを整える",
      "やりすぎ注意：週1〜2回を超える頻度でのピーリングは避ける",
    ],
    keyItem: "ピーリング美容液・ビタミンC誘導体美容液",
    color: "#f59e0b",
    ngAction: "毎日のスクラブ・ピーリング（バリア機能を壊し逆にくすみが悪化）",
  },
  {
    name: "紫外線くすみ（色素沈着）",
    icon: "☀️",
    sign: "頬や額など特定の部位が茶色っぽい・シミの周辺がくすんで見える。",
    cause: "紫外線ダメージによるメラニンの蓄積が原因。日焼け止めを塗り忘れた部位や、日常的な紫外線の積み重ねで起こる。",
    care: [
      "日焼け止めをSPF/PA値だけでなく「量」も規定通り塗る",
      "美白有効成分（ビタミンC誘導体・トラネキサム酸など）配合美容液を継続使用",
      "帽子・日傘・アームカバーで物理的に紫外線を遮る",
      "曇りの日・室内でも紫外線対策を続ける",
      "改善には数ヶ月単位の継続ケアを前提に取り組む",
    ],
    keyItem: "美白美容液・日焼け止め",
    color: "#eab308",
    ngAction: "日焼け止めの塗り直しをしないこと・紫外線対策を晴れの日だけにすること",
  },
  {
    name: "糖化くすみ",
    icon: "🍩",
    sign: "肌が黄ばんで見える・年齢を重ねるごとにくすみが強くなってきた気がする。",
    cause: "体内の余分な糖とタンパク質が結びつく「糖化」によって、肌のコラーゲンが変性し黄ぐすみを起こす。生活習慣が影響しやすい。",
    care: [
      "糖化を抑える成分（プラセンタ・カルノシンなど）配合の美容液を取り入れる",
      "血糖値が急上昇しやすい食べ方（食後すぐの甘いもの等）を避ける",
      "抗酸化作用のあるビタミンC・ポリフェノールを食事から摂る",
      "規則正しい食生活と睡眠でホルモンバランスを整える",
      "適度な運動で代謝を上げる",
    ],
    keyItem: "抗糖化美容液・ビタミンC含有食品",
    color: "#a855f7",
    ngAction: "糖分の摂りすぎ・不規則な食生活を放置したままのスキンケアだけでの改善狙い",
  },
];

const CARE_STEPS: StepItem[] = [
  { step: 1, icon: "🫖", name: "朝は蒸しタオルで顔を温める", point: "起床後、電子レンジで温めたタオルを1分ほど顔にのせるだけで血行が促進され、その日の肌色が変わる。忙しい朝でも取り入れやすい習慣。" },
  { step: 2, icon: "💧", name: "化粧水は「浸透待ち」を意識", point: "つけてすぐ次に進まず、手のひらで軽く押さえて浸透を待つ。乾燥くすみの改善には量よりもこのひと手間が効く。" },
  { step: 3, icon: "🧴", name: "ビタミンC系美容液を1本取り入れる", point: "角質・紫外線・糖化すべてのくすみタイプに横断的に効果が期待できる成分。まず1本試すならビタミンC系がおすすめ。" },
  { step: 4, icon: "☀️", name: "日焼け止めは「量」を規定通りに", point: "薄塗りは効果が半減する。日焼け止め対策の失敗の大半は塗る量の不足が原因。500円玉大を目安に顔全体へ。" },
  { step: 5, icon: "🛁", name: "湯船に浸かって全身の血流を上げる", point: "シャワーだけで済ませず、38〜40℃のお湯に10分程度浸かる習慣が血行不良くすみの根本的な対策になる。" },
  { step: 6, icon: "😴", name: "睡眠の質を優先する", point: "ターンオーバーは主に睡眠中に進む。就寝時間を一定にし、睡眠不足が続くと角質・糖化どちらのくすみも悪化しやすい。" },
];

const FAQ: FAQItem[] = [
  {
    q: "自分のくすみタイプがわかりません。どう見分ければいいですか？",
    a: "肌が乾燥してカサつくなら乾燥くすみ、青白く冷えを感じるなら血行不良くすみ、ザラつきやファンデのノリが悪いなら角質くすみ、特定の部位だけ茶色いなら紫外線くすみ、年齢とともに黄ぐすみが強くなってきたなら糖化くすみの可能性が高いです。複数のタイプが重なっていることも多いので、一番当てはまるサインから対策を始めてみてください。",
  },
  {
    q: "くすみ対策で一番早く効果を感じやすいのはどれですか？",
    a: "血行不良くすみへの対策（蒸しタオル・マッサージ・入浴）は、その日のうちに顔色の変化を感じやすい即効性のあるケアです。一方、紫外線くすみや糖化くすみの改善は数ヶ月単位の継続が前提になります。",
  },
  {
    q: "ピーリングはくすみに効果がありますか？",
    a: "角質が溜まって暗く見えるタイプのくすみには効果的です。ただし頻度が高すぎるとバリア機能を壊して逆にくすみや肌荒れを悪化させるため、週1〜2回程度を目安にし、肌の様子を見ながら調整してください。",
  },
  {
    q: "食事でくすみは改善できますか？",
    a: "糖化くすみには食生活が大きく影響します。血糖値が急上昇しやすい食べ方を避け、ビタミンC・ポリフェノールを含む食品を意識的に摂ることで、体の内側からの改善が期待できます。スキンケアと生活習慣の両輪で取り組むのが効果的です。",
  },
  {
    q: "メイクでくすみをカバーする方法はありますか？",
    a: "くすみの色味に対して補色となるコントロールカラーが有効です。黄ぐすみにはラベンダー系、青みくすみにはオレンジ系の下地を薄くのせると顔色が均一に見えます。ただしメイクは応急処置のため、根本的な改善には原因タイプに合わせたスキンケアの継続が必要です。",
  },
];

export default function KusumiCareGuidePage() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-purple-50 text-purple-600 border border-purple-200">
          ✨ 肌のくすみ対策
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          肌のくすみ対策完全ガイド<br className="sm:hidden" />
          <span className="text-purple-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          乾燥・血行不良・角質・紫外線・糖化——くすみには5つの原因タイプがあり、対策はタイプによって異なります。自分のくすみタイプの見極め方から、それぞれの改善ケア、メイクでのカバー方法まで徹底解説します。
        </p>
      </section>

      {/* タイプ診断 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔍 あなたのくすみはどのタイプ？</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KUSUMI_TYPES.map((t) => (
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

      {/* 中間CTA */}
      <ArticleAffiliateCard tags={[]} articleId="kusumi-care-guide" />

      {/* タイプ別対策詳細 */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-gray-900">💡 くすみタイプ別の対策を詳しく解説</h2>
        {KUSUMI_TYPES.map((t) => (
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
              <p className="text-sm font-bold text-gray-700 mb-2">ケア方法</p>
              <ul className="space-y-2">
                {t.care.map((m) => (
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

      {/* ケア手順 */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">📋 くすみ対策の毎日の習慣（6ステップ）</h2>
        <div className="space-y-3">
          {CARE_STEPS.map((s) => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm">
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
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <Link
            href="/sensitive-skin-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
          >
            敏感肌スキンケアガイド →
          </Link>
          <Link
            href="/whitening-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #eab308, #f59e0b)" }}
          >
            美白ケア完全ガイド →
          </Link>
          <Link
            href="/vitamin-c-serum-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
          >
            ビタミンC美容液ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
