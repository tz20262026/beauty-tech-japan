import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "ヘアケア完全ガイド2026年版【髪質改善・ダメージ補修・おすすめシャンプー10選】",
  description:
    "ヘアケアの正しい方法を2026年版で完全解説。髪質改善・ダメージ補修・乾燥対策・パサつき改善に効果的なシャンプー・トリートメント・ヘアオイルを肌タイプ別に紹介。",
  openGraph: {
    title: "ヘアケア完全ガイド2026年版【髪質改善・おすすめ10選】",
    description: "髪質改善・ダメージ補修に効果的なヘアケア方法とおすすめアイテムを徹底解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ヘアケア完全ガイド2026年版",
    description: "髪質改善・ダメージ補修の正しいヘアケア方法を解説。おすすめアイテム10選。",
  },
};

interface HairStep {
  step: number;
  title: string;
  description: string;
  tips: string[];
}

interface HairType {
  type: string;
  icon: string;
  issues: string[];
  recommendations: string[];
  avoid: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const MORNING_STEPS: HairStep[] = [
  {
    step: 1,
    title: "正しいブラッシング（起床後）",
    description: "起床後すぐに粗歯のコームやパドルブラシで根本から毛先に向かって優しくブラッシング。",
    tips: [
      "濡れた髪はNG（切れ毛・摩擦ダメージの原因）",
      "毛先から少しずつほぐしてから根元へ",
      "静電気が気になる場合はイオン系ブラシを使用",
    ],
  },
  {
    step: 2,
    title: "スタイリング前の熱保護スプレー",
    description: "ドライヤー・アイロンを使う前に必ずヒートプロテクタントスプレーを使用。",
    tips: [
      "180℃以上の熱は髪のタンパク質を変性させる",
      "ヘアオイルも熱から守る効果あり",
      "塗布後は均一に馴染ませてからスタイリング",
    ],
  },
];

const NIGHT_STEPS: HairStep[] = [
  {
    step: 1,
    title: "丁寧なシャンプー（頭皮マッサージ）",
    description: "髪より頭皮を洗う意識で。指の腹で優しくマッサージするように洗う。ゴシゴシ摩擦は厳禁。",
    tips: [
      "シャンプー前のブラッシングで絡まりを除去",
      "まず予洗い（1〜2分）でほこり・汚れを落とす",
      "シャンプーは手のひらで泡立ててから使う",
      "すすぎは30秒〜1分かけて丁寧に",
    ],
  },
  {
    step: 2,
    title: "トリートメント（毛先中心に）",
    description: "トリートメントは根元を避け毛先から中間に集中塗布。3〜5分置いてから洗い流す。",
    tips: [
      "根元への塗布は毛穴詰まりの原因に",
      "コームで馴染ませると浸透度UP",
      "週1〜2回のヘアマスク（集中ケア）も有効",
    ],
  },
  {
    step: 3,
    title: "タオルドライ＆ドライヤー",
    description: "タオルでゴシゴシNG。押さえるように水分を吸収。必ず根元から乾かし、完全乾燥させて就寝。",
    tips: [
      "半乾きの状態での就寝は雑菌繁殖・摩擦ダメージの原因",
      "ドライヤーは15cm以上離して使用",
      "最後に冷風で毛キューティクルを閉じる",
      "寝る前にヘアオイルで保湿仕上げ",
    ],
  },
  {
    step: 4,
    title: "就寝時のヘアケア",
    description: "シルクや摩擦の少ない素材の枕カバーを使用。ロングヘアは緩くまとめて摩擦を減らす。",
    tips: [
      "コットンより摩擦が少ないシルクorサテン素材がおすすめ",
      "きつく縛らずゆるいお団子やシュシュで留める",
      "シルクのナイトキャップも効果的",
    ],
  },
];

const HAIR_TYPES: HairType[] = [
  {
    type: "ダメージ毛・パサつき",
    icon: "💧",
    issues: ["カラー・パーマ・縮毛矯正によるダメージ", "キューティクルが剥がれた状態", "水分・タンパク質不足"],
    recommendations: ["補修成分（ケラチン・システィン・CMC）配合シャンプー", "ヘアマスクを週2〜3回", "ヘアオイルで毎日保湿"],
    avoid: "硫酸系洗浄成分（ラウリル硫酸Na等）は洗浄力が強すぎるため避ける",
  },
  {
    type: "細い髪・猫っ毛",
    icon: "🌸",
    issues: ["ボリュームが出にくい", "すぐにペタンとなる", "バックコームで傷みやすい"],
    recommendations: ["軽い洗い上がりのアミノ酸系シャンプー", "軽質テクスチャーのトリートメント（根元は避ける）", "ボリュームアップスタイリング剤"],
    avoid: "重いシリコンコーティングが多いトリートメントは猫っ毛をさらにペタンとさせる",
  },
  {
    type: "くせ毛・うねり",
    icon: "🌀",
    issues: ["湿気でうねりが出る", "広がりやすい", "扱いにくい"],
    recommendations: ["保湿・うねり抑制成分配合シャンプー", "洗い流さないトリートメントで毎日保湿", "縮毛矯正・酸性ストレートも選択肢"],
    avoid: "泡立ちが良すぎる洗浄力の強いシャンプーは乾燥を引き起こしうねりを悪化させる",
  },
  {
    type: "脂性頭皮・べたつき",
    icon: "💦",
    issues: ["1日でべたつく", "頭皮の臭いが気になる", "フケが出やすい"],
    recommendations: ["スカルプシャンプー（頭皮の皮脂をコントロール）", "38℃以下のぬるめのお湯で洗う", "ドライシャンプーを活用"],
    avoid: "熱いお湯は皮脂分泌を促進。シャンプーのしすぎも反射的皮脂分泌を招く",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "髪質改善はサロンに行かないとできませんか？",
    a: "ホームケアでも大幅な改善が可能です。特にシャンプーをアミノ酸系（低刺激・保湿）に変えるだけで2〜4週間で変化を感じる方が多いです。ただし縮毛矯正・酸性ストレート・トリートメント（サロン専用）は美容室でしかできない施術です。ホームケアとサロンを組み合わせるのが最も効果的です。",
  },
  {
    q: "ヘアオイルとヘアミルク、どちらを使えばいいですか？",
    a: "ヘアオイルは保湿・艶出し・ダメージ補修に向いており、硬い髪・ダメージ毛・乾燥毛に特におすすめです。ヘアミルクは水分補給・軽いまとまり感・広がり抑制に向いており、細い髪・猫っ毛に向いています。どちらが良いかは髪質によります。お試しサイズから始めて自分の髪に合う方を選びましょう。",
  },
  {
    q: "カラーした髪の正しいヘアケア方法は？",
    a: "カラー後48時間はシャンプーを控える（色落ちを防ぐ）・カラー専用シャンプー（低刺激・色持ちUP）を使う・週1〜2回ヘアマスクで保湿・UV防止スプレーで色落ち予防・お湯の温度を38℃以下にするが基本です。カラー後は髪がアルカリ性になっているため、酸性成分配合のトリートメントで中和するのも効果的です。",
  },
  {
    q: "シャンプーを毎日するのは良くないですか？",
    a: "一般的には毎日シャンプーしても問題ありません。ただし乾燥が気になる方・ダメージ毛の方は1日おきにして、スカルプケアミスト等で頭皮の清潔を保つ方法もあります。大切なのはシャンプーの頻度より「洗い方」「使用するシャンプーの成分」です。低刺激のアミノ酸系シャンプーなら毎日使っても問題ありません。",
  },
  {
    q: "ヘアケアで抜け毛を減らすことはできますか？",
    a: "正しいヘアケアで頭皮環境を整えることが抜け毛予防の第一歩です。頭皮マッサージで血行を促進する・洗浄力が強すぎないシャンプーを使う・栄養バランスの良い食事と十分な睡眠が基本です。ただし遺伝的な薄毛（AGA）や疾患による脱毛はヘアケアだけでは改善できないため、皮膚科・薄毛専門クリニックへの相談をおすすめします。",
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

export default function HaircareGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full px-4 py-1 mb-4">
            💇 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            ヘアケア完全ガイド2026年版<br />
            <span className="text-amber-400">【髪質改善・ダメージ補修】</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">おすすめシャンプー&トリートメント</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            ダメージ毛・くせ毛・パサつきを改善する正しいヘアケア方法と<br />
            2026年のおすすめアイテムを髪質別に徹底解説します。
          </p>
        </div>

        {/* 朝のルーティン */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-amber-500 pl-3">
            ☀️ 朝のヘアケアルーティン
          </h2>
          <div className="space-y-4">
            {MORNING_STEPS.map((s) => (
              <div key={s.step} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-black text-xs font-black flex items-center justify-center flex-shrink-0">
                    {s.step}
                  </div>
                  <h3 className="text-white font-bold text-sm">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-2">{s.description}</p>
                <ul className="space-y-1">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="text-gray-400 text-xs flex gap-1.5">
                      <span className="text-amber-400">✓</span>{tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 夜のルーティン */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-amber-500 pl-3">
            🌙 夜のヘアケアルーティン（4ステップ）
          </h2>
          <div className="space-y-4">
            {NIGHT_STEPS.map((s) => (
              <div key={s.step} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-full bg-purple-500 text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                    {s.step}
                  </div>
                  <h3 className="text-white font-bold text-sm">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-2">{s.description}</p>
                <ul className="space-y-1">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="text-gray-400 text-xs flex gap-1.5">
                      <span className="text-purple-400">✓</span>{tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 髪タイプ別 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-amber-500 pl-3">
            💇 髪質別おすすめヘアケア
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HAIR_TYPES.map((h, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <h3 className="text-amber-400 font-bold text-sm mb-2">{h.icon} {h.type}</h3>
                <div className="mb-2">
                  <p className="text-red-400 text-xs font-bold mb-1">主な悩み</p>
                  <ul className="space-y-0.5">
                    {h.issues.map((issue, j) => (
                      <li key={j} className="text-gray-400 text-xs">・{issue}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <p className="text-green-400 text-xs font-bold mb-1">おすすめアプローチ</p>
                  <ul className="space-y-0.5">
                    {h.recommendations.map((r, j) => (
                      <li key={j} className="text-gray-400 text-xs">・{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded px-2 py-1.5">
                  <span className="text-orange-400 text-xs font-bold">避けるべき: </span>
                  <span className="text-gray-400 text-xs">{h.avoid}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-10 bg-gradient-to-r from-pink-900/30 to-amber-900/30 border border-pink-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🌸 スキンケアも一緒に見直そう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ヘアケアと合わせてスキンケアルーティンも整えることで美容効果が倍増します。
          </p>
          <a
            href="/skincare-guide"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            スキンケア完全ガイドを見る →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-amber-500 pl-3">
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
