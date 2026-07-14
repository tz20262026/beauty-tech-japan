import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

const PAGE_URL = "https://beauty-tech-japan.vercel.app/acne-care-guide";
const PUBLISHED_AT = "2026-07-14";

export const metadata: Metadata = {
  title: "ニキビケア完全ガイド2026年版【大人ニキビの原因・種類別の対策・成分の選び方】",
  description:
    "ニキビの種類（白・黒・赤・黄）ごとの状態と対策、大人ニキビと思春期ニキビの違い、スキンケアで選ばれる成分、やってはいけないNG習慣、皮膚科を受診する判断基準までまとめた2026年版の完全ガイド。",
  keywords: [
    "ニキビ ケア",
    "大人ニキビ 原因",
    "ニキビ 種類",
    "ニキビ 治し方",
    "ニキビ跡 ケア",
    "ニキビ スキンケア",
    "ニキビ 皮膚科",
    "サリチル酸 ニキビ",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "ニキビケア完全ガイド2026年版【大人ニキビの原因・種類別の対策】",
    description:
      "ニキビの種類別の状態と対策、大人ニキビの原因、成分の選び方、NG習慣、皮膚科を受診する判断基準を解説。",
    type: "article",
    locale: "ja_JP",
    url: PAGE_URL,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: "ニキビケア完全ガイド2026年版",
    description: "ニキビの種類別対策・大人ニキビの原因・成分の選び方・受診の目安を解説。",
  },
};

/** ニキビの進行段階1つ分 */
interface AcneStage {
  name: string;
  stage: string;
  state: string;
  care: string;
  color: string;
}

/** 大人ニキビと思春期ニキビの比較行 */
interface CompareRow {
  label: string;
  adult: string;
  teen: string;
}

/** スキンケア成分1件分 */
interface Ingredient {
  name: string;
  role: string;
  note: string;
}

/** よくある質問1件分 */
interface FaqItem {
  q: string;
  a: string;
}

const STAGES: AcneStage[] = [
  {
    name: "白ニキビ（閉鎖面皰）",
    stage: "初期",
    state: "毛穴が皮脂と角質で詰まり、白いポツッとした膨らみになった状態。炎症はまだ起きていない。",
    care: "毛穴の詰まりを防ぐケアが中心。優しい洗顔と、詰まりに配慮した成分（サリチル酸など）を含むアイテムが選ばれます。潰さないこと。",
    color: "#94a3b8",
  },
  {
    name: "黒ニキビ（開放面皰）",
    stage: "初期",
    state: "詰まった皮脂の先端が空気に触れて酸化し、黒く見える状態。汚れではなく酸化によるもの。",
    care: "白ニキビと同様に毛穴の詰まりへの対処が中心。ゴシゴシこすっても取れず、かえって刺激になります。",
    color: "#64748b",
  },
  {
    name: "赤ニキビ（炎症性皮疹）",
    stage: "炎症あり",
    state: "詰まった毛穴の中でアクネ菌が増え、炎症が起きて赤く腫れた状態。触れると痛むことがある。",
    care: "刺激を減らし、とにかく触らないことが基本。市販品で変化がない場合や広範囲の場合は皮膚科の受診を検討してください。",
    color: "#ef4444",
  },
  {
    name: "黄ニキビ（膿疱）",
    stage: "重度",
    state: "炎症が進み、膿がたまって黄色く見える状態。ニキビ跡（へこみ・色素沈着）が残りやすい段階。",
    care: "自己判断で潰すと跡が残りやすくなります。この段階は皮膚科の受診をおすすめします。",
    color: "#f59e0b",
  },
];

const COMPARE: CompareRow[] = [
  {
    label: "できやすい場所",
    adult: "あご・フェイスライン・口まわりなどのUゾーン",
    teen: "おでこ・鼻などのTゾーン",
  },
  {
    label: "主な背景",
    adult: "乾燥・生活リズムの乱れ・ストレス・ホルモンバランスの変化・スキンケアの合わなさ",
    teen: "成長期の皮脂分泌の増加",
  },
  {
    label: "肌の状態",
    adult: "皮脂は多いのに内側は乾燥していることが多い（インナードライ）",
    teen: "全体的に皮脂が多い",
  },
  {
    label: "ケアの方向性",
    adult: "皮脂を落としすぎず、保湿を保ちながら毛穴の詰まりに配慮する",
    teen: "過剰な皮脂と毛穴の詰まりへの対処が中心",
  },
  {
    label: "繰り返しやすさ",
    adult: "同じ場所に繰り返しできやすく、長期化しやすい",
    teen: "成長とともに落ち着くことが多い",
  },
];

const INGREDIENTS: Ingredient[] = [
  {
    name: "サリチル酸（BHA）",
    role: "角質や毛穴の詰まりに着目した成分。洗顔料・化粧水・美容液に配合される。",
    note: "濃度が高いほど刺激も強くなります。乾燥・ヒリつきを感じたら頻度を落としてください。",
  },
  {
    name: "ナイアシンアミド",
    role: "皮脂バランスや肌荒れに着目した成分。刺激が比較的おだやかで使いやすい。",
    note: "詳しくは当サイトのナイアシンアミドガイドで解説しています。",
  },
  {
    name: "アゼライン酸",
    role: "近年ニキビ・赤みのケアで注目されている成分。",
    note: "国内では医薬品ではなく化粧品として流通しているものが多く、位置づけを確認して選んでください。",
  },
  {
    name: "グリチルリチン酸2K",
    role: "肌荒れを防ぐ目的で医薬部外品に広く配合されている成分。",
    note: "「ニキビを防ぐ」表示のある医薬部外品によく含まれます。",
  },
  {
    name: "セラミド・ヒアルロン酸",
    role: "肌の水分を保つ保湿成分。乾燥が背景にある大人ニキビでは土台として重要。",
    note: "「ニキビ＝保湿しない」は誤解です。乾燥は皮脂の過剰分泌につながることがあります。",
  },
];

const NG_HABITS: { habit: string; why: string }[] = [
  {
    habit: "ニキビを指で潰す・つぶす",
    why: "炎症が悪化し、へこみや色素沈着といったニキビ跡が残りやすくなります。最もやってはいけない習慣です。",
  },
  {
    habit: "1日に何度も洗顔する・ゴシゴシこすう",
    why: "必要な皮脂まで落とすと肌が乾燥し、かえって皮脂が過剰に分泌されることがあります。洗顔は基本的に朝晩の2回で十分です。",
  },
  {
    habit: "ニキビが気になって保湿をやめる",
    why: "乾燥した肌は皮脂を出して補おうとします。オイルフリー・ノンコメドジェニックなど、軽めのテクスチャーの保湿を選ぶのが現実的です。",
  },
  {
    habit: "気になって何度も顔を触る",
    why: "手の雑菌や摩擦が刺激になります。頬杖・前髪が当たる・マスクの摩擦も同様です。",
  },
  {
    habit: "新しいアイテムを一度に何個も足す",
    why: "合わなかったときにどれが原因か分からなくなります。新しいものは1つずつ、2〜4週間ほど様子を見ながら試してください。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "大人ニキビと思春期ニキビの違いは何ですか？",
    a: "できる場所と背景が異なります。思春期ニキビは成長期の皮脂分泌の増加が主な背景で、おでこ・鼻などのTゾーンにできやすいのが特徴です。一方、大人ニキビはあご・フェイスライン・口まわりのUゾーンにできやすく、乾燥・生活リズムの乱れ・ストレス・ホルモンバランスの変化など複数の要因が絡みます。大人ニキビは「皮脂は出ているのに内側は乾燥している」状態のことが多いため、皮脂を落としすぎるケアはかえって逆効果になることがあります。",
  },
  {
    q: "ニキビがあるときも保湿はしたほうがいいですか？",
    a: "はい、保湿は続けてください。「ニキビ＝油分が多い＝保湿しない」というのはよくある誤解です。肌が乾燥すると、それを補おうとして皮脂が過剰に分泌されることがあり、毛穴の詰まりにつながります。特に大人ニキビは乾燥が背景にあることが多いため、保湿は土台になります。テクスチャーが重いものが気になる場合は、油分が控えめのジェルタイプや、ノンコメドジェニックテスト済みと表示されたアイテムを選ぶとよいでしょう。",
  },
  {
    q: "ニキビは潰してもいいですか？",
    a: "自分で潰すのは避けてください。炎症が周囲に広がったり、へこみ（クレーター）や色素沈着といったニキビ跡が残りやすくなります。特に膿がたまった黄ニキビを自己判断で潰すと跡が残るリスクが高くなります。どうしても気になる場合は、自分で処置せず皮膚科に相談してください。医療機関では専用の器具を用いた処置が行われることがあります。",
  },
  {
    q: "皮膚科に行くべきなのはどんなときですか？",
    a: "次のいずれかに当てはまる場合は、皮膚科の受診を検討してください。①赤く腫れたニキビや膿をもったニキビが多数ある、②市販のスキンケアを1〜2ヶ月続けても変化がない、③繰り返し同じ場所にでき、跡が残り始めている、④痛みが強い、⑤ニキビが顔以外（背中・胸など）にも広がっている。ニキビは「尋常性ざ瘡」という皮膚疾患で、医療機関では処方薬による治療が受けられます。跡が残ってからでは対処が難しくなるため、早めの相談が結果的に近道になることが多いです。",
  },
  {
    q: "ニキビ跡は消せますか？",
    a: "ニキビ跡は種類によって対処のしやすさが異なります。赤み・色素沈着として残っているタイプは、時間の経過とともに目立ちにくくなることがあり、日焼け対策や美白ケアが選択肢になります。一方、へこみ（クレーター）として残ったタイプは、セルフケアで元の状態に戻すのは難しく、医療機関での施術が検討されます。いずれにせよ最も確実なのは「跡を作らないこと」で、そのためには炎症段階のニキビを潰さないこと、早めに皮膚科に相談することが重要です。",
  },
  {
    q: "食事はニキビに関係しますか？",
    a: "食事だけがニキビの原因になるわけではありませんが、生活習慣の一部として整える価値はあります。一般に、糖質や脂質に偏った食事、睡眠不足、強いストレスは肌の状態に影響しうると考えられています。ただし「これを食べればニキビが治る」という食品はありません。特定の食品を過度に制限するより、睡眠・食事・ストレスのバランスを整えたうえで、スキンケアと必要に応じた医療機関の受診を組み合わせるのが現実的です。",
  },
];

/** FAQ構造化データ（AI検索・リッチリザルト向け） */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** 記事構造化データ */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ニキビケア完全ガイド2026年版【大人ニキビの原因・種類別の対策・成分の選び方】",
  description:
    "ニキビの種類ごとの状態と対策、大人ニキビと思春期ニキビの違い、スキンケア成分の選び方、NG習慣、皮膚科を受診する判断基準を解説する。",
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  inLanguage: "ja",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "Beauty Tech Japan" },
  publisher: { "@type": "Organization", name: "Beauty Tech Japan" },
};

export default function AcneCareGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ヘッダー */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-rose-50 text-rose-600 border border-rose-200">
          🩹 ニキビケア完全ガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          ニキビケア
          <span className="text-rose-500">完全ガイド</span>
          <span className="block text-lg text-gray-600 mt-1 font-bold">
            2026年版【大人ニキビの原因・種類別の対策・成分の選び方】
          </span>
        </h1>
        <p className="text-gray-700 text-base leading-relaxed">
          ニキビは種類（進行段階）によって適切な対応が変わります。この記事では、白・黒・赤・黄の段階別の状態と対策、
          大人ニキビと思春期ニキビの違い、スキンケアで選ばれる成分、やってはいけないNG習慣、
          そして皮膚科を受診する判断基準までをまとめました。
        </p>
        <div className="flex flex-wrap gap-2">
          {["大人ニキビ", "ニキビ跡", "毛穴の詰まり", "サリチル酸", "皮膚科の受診目安"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-bold"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-xs">公開日：2026年7月14日</p>
      </section>

      {/* 最初に伝えたいこと */}
      <section className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-2">
          <h2 className="font-black text-blue-900">はじめに：ニキビは皮膚疾患です</h2>
          <p className="text-sm text-blue-800 leading-relaxed">
            ニキビは医学的には「尋常性ざ瘡（じんじょうせいざそう）」という皮膚疾患で、医療機関での治療の対象です。
            この記事はスキンケアの観点から一般的な情報を整理したものであり、診断・治療を目的としたものではありません。
            炎症をともなうニキビが多い場合や、市販のケアで変化がない場合は、早めに皮膚科へ相談してください。
            <strong className="text-blue-900">跡が残ってからでは対処が難しくなります。</strong>
          </p>
        </div>
      </section>

      {/* 種類別 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔍 ニキビの種類と段階別の対策</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          ニキビは「白 → 黒 → 赤 → 黄」と進行していきます。段階が進むほど跡が残りやすくなるため、
          今どの段階にあるかを見極めることが最初の一歩です。
        </p>
        <div className="space-y-3">
          {STAGES.map(({ name, stage, state, care, color }) => (
            <div
              key={name}
              className="rounded-2xl border p-4 space-y-2"
              style={{ borderColor: `${color}35`, background: `${color}08` }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-black text-base" style={{ color }}>
                  {name}
                </span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${color}18`, color, border: `1px solid ${color}35` }}
                >
                  {stage}
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">状態：</strong>
                {state}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">対策：</strong>
                {care}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 中間CTA：既存のアフィリエイト導線を再利用 */}
      <ArticleAffiliateCard tags={[]} articleId="acne-care-guide" />

      {/* 大人ニキビ vs 思春期ニキビ */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🧑‍🦱 大人ニキビと思春期ニキビの違い</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          同じ「ニキビ」でも、大人と思春期では背景が異なり、適したケアの方向性も変わります。
          大人ニキビに思春期向けの「皮脂を徹底的に落とす」ケアをすると、乾燥を招いて悪循環になることがあります。
        </p>

        {/* 横スクロールさせず、カード型で並べる（スマホ対応） */}
        <div className="space-y-3">
          {COMPARE.map(({ label, adult, teen }) => (
            <div key={label} className="rounded-2xl border border-gray-200 bg-white p-4 space-y-3">
              <p className="font-black text-gray-900 text-sm">{label}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-3">
                  <p className="text-xs font-bold text-rose-700 mb-1">大人ニキビ</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{adult}</p>
                </div>
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-3">
                  <p className="text-xs font-bold text-sky-700 mb-1">思春期ニキビ</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{teen}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 成分 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🧪 ニキビケアで選ばれる主な成分</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          化粧品は医薬品ではないため、ニキビを治療するものではありません。ここでは、ニキビが気になる肌のスキンケアで
          よく選ばれている成分と、その位置づけを整理します。炎症が強い場合は化粧品ではなく医療機関での治療が優先されます。
        </p>
        <div className="space-y-3">
          {INGREDIENTS.map(({ name, role, note }) => (
            <div key={name} className="rounded-2xl border border-gray-200 bg-white p-4 space-y-1">
              <p className="font-black text-gray-900 text-sm">{name}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{role}</p>
              <p className="text-xs text-gray-600 leading-relaxed">💡 {note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NG習慣 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🚫 やってはいけない5つのNG習慣</h2>
        <div className="space-y-2">
          {NG_HABITS.map(({ habit, why }) => (
            <div key={habit} className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <span className="text-red-500 font-black flex-shrink-0">✕</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">{habit}</p>
                <p className="text-sm text-gray-700 mt-0.5 leading-relaxed">{why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 受診の目安 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🏥 皮膚科を受診する判断基準</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            次のいずれかに当てはまる場合は、市販のスキンケアで粘らず、皮膚科への相談を検討してください。
          </p>
          <ul className="space-y-2">
            {[
              "赤く腫れたニキビ・膿をもったニキビが多数ある",
              "市販のスキンケアを1〜2ヶ月続けても変化がない",
              "同じ場所に繰り返しでき、跡が残り始めている",
              "痛みが強い、または広範囲に広がっている",
              "顔以外（背中・胸など）にも広がっている",
            ].map((item) => (
              <li key={item} className="text-sm text-gray-700 flex items-start gap-2 leading-relaxed">
                <span className="text-amber-600 mt-0.5 flex-shrink-0 font-bold">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed pt-1">
            ニキビは保険診療の対象になる皮膚疾患です。セルフケアで長く迷うより、一度専門家に見てもらうほうが
            結果的に近道になることが多いと考えられます。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">よくある質問</h2>
        <div className="space-y-3">
          {FAQS.map(({ q, a }) => (
            <div key={q} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-900 text-sm mb-2">Q. {q}</p>
              <p className="text-gray-700 text-sm leading-relaxed">A. {a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 関連ガイド */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Link
            href="/niacinamide-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
          >
            ナイアシンアミドガイド →
          </Link>
          <Link
            href="/pore-care-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}
          >
            毛穴ケアガイド →
          </Link>
          <Link
            href="/concealer-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
          >
            コンシーラーガイド →
          </Link>
          <Link
            href="/skincare-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
          >
            スキンケア基本ガイド →
          </Link>
        </div>
      </section>

      {/* 免責 */}
      <section className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
        <p className="text-xs text-gray-600 leading-relaxed">
          ※本記事は一般的な情報提供を目的としたものであり、医学的な診断・治療を目的としたものではありません。
          症状が続く場合・悪化する場合は、必ず皮膚科などの医療機関を受診してください。
          化粧品は医薬品ではなく、疾患を治療するものではありません。
        </p>
      </section>

      {/* アフィリエイト（既存コンポーネントを再利用） */}
      <AffiliateSectionBeauty />
    </div>
  );
}
