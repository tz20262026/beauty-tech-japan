import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/ase-taisaku-guide" },
  title: "汗・ニオイ対策 完全ガイド2026【制汗剤の選び方と正しい使い方】",
  description:
    "制汗剤とデオドラントの違い、ロールオン・スティック・スプレー・クリームのタイプ別比較、「夜に塗る」が効果的といわれる理由まで完全解説。通勤・スポーツ・デートのシーン別対策、服の汗ジミ対策も。2026年最新版。",
  keywords: [
    "制汗剤 おすすめ 選び方",
    "汗 ニオイ 対策",
    "ワキ汗 対策",
    "デオドラント 違い",
    "制汗剤 いつ塗る",
    "制汗剤 夜 塗る",
    "汗ジミ 対策",
    "ワキガ 対策 セルフケア",
  ],
  openGraph: {
    title: "汗・ニオイ対策 完全ガイド2026｜制汗剤の選び方と正しい使い方",
    description: "制汗剤とデオドラントの違いから、タイプ別の選び方・夜に塗る使い方・シーン別対策まで完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "汗・ニオイ対策 完全ガイド2026",
    description: "制汗剤の選び方と「夜に塗る」正しい使い方を完全解説",
  },
};

/** 制汗アイテムのタイプ1件分のデータ型 */
interface ItemType {
  name: string;
  icon: string;
  feature: string;
  strengths: string[];
  weakness: string;
  bestFor: string;
  color: string;
}

/** 使い方のコツ1件分のデータ型 */
interface UsageTip {
  step: number;
  icon: string;
  name: string;
  point: string;
}

/** シーン別対策1件分のデータ型 */
interface SceneCare {
  scene: string;
  icon: string;
  tips: string[];
  color: string;
}

/** よくある質問1件分 */
interface FAQItem {
  q: string;
  a: string;
}

const ITEM_TYPES: ItemType[] = [
  {
    name: "ロールオン",
    icon: "🔵",
    feature: "液体を直接肌に塗るタイプ。密着度が高く、有効成分が肌に残りやすい。",
    strengths: [
      "肌への密着度が高く、効果が持続しやすいといわれる",
      "ワキなど狭い範囲にピンポイントで塗れる",
      "コンパクトで持ち運びやすい",
    ],
    weakness: "塗ってから乾くまで少し待つ必要がある。",
    bestFor: "ワキ汗・ニオイをしっかりケアしたい人の毎日使いに",
    color: "#3b82f6",
  },
  {
    name: "スティック",
    icon: "🟣",
    feature: "固形タイプを直塗りする。密着度が高く、白残りしにくい処方も多い。",
    strengths: [
      "乾くのを待つ時間がほぼ不要ですぐ服を着られる",
      "密着度が高く汗に流れにくいといわれる",
      "液だれせず量の調整がしやすい",
    ],
    weakness: "広範囲には塗りにくい。",
    bestFor: "朝の時短とワキのしっかりケアを両立したい人に",
    color: "#8b5cf6",
  },
  {
    name: "スプレー",
    icon: "🟢",
    feature: "広範囲にシューッと吹きかけるタイプ。清涼感が高く手軽さNo.1。",
    strengths: [
      "背中・胸元など広い範囲に手を汚さず使える",
      "冷感タイプならクールダウンにも使える",
      "外出先でのリフレッシュに手軽",
    ],
    weakness: "肌への密着度は直塗りタイプより低めで、持続力は控えめといわれる。",
    bestFor: "全身のリフレッシュ・スポーツ後のケアに",
    color: "#10b981",
  },
  {
    name: "クリーム",
    icon: "🟠",
    feature: "指で塗り込むタイプ。肌への密着度が最も高いといわれ、ニオイケア向き。",
    strengths: [
      "有効成分が肌に密着しやすく、持続力に定評があるタイプ",
      "足・ワキなどニオイが気になる部位の集中ケアに向く",
      "保湿成分配合のものなら肌にやさしい使い心地",
    ],
    weakness: "手で塗るためやや手間。塗った後に手を洗う必要がある。",
    bestFor: "ニオイを重点的にケアしたい人・足のニオイ対策に",
    color: "#f59e0b",
  },
];

const USAGE_TIPS: UsageTip[] = [
  { step: 1, icon: "🌙", name: "「夜」に塗るのが最も効果的", point: "制汗成分は汗腺に浸透して汗を抑える仕組みのため、汗をかいていない就寝前の清潔な肌に塗ると効きやすいといわれています。お風呂上がりに肌をしっかり乾かしてから塗るのがベストタイミング。" },
  { step: 2, icon: "🧼", name: "清潔な肌に塗る", point: "汗や皮脂が残ったままだと成分が密着しにくく、ニオイ菌のエサも残ったまま。汗をかいた後に塗り直す場合は、汗拭きシートで拭いてから塗るのが正解です。" },
  { step: 3, icon: "🪶", name: "薄く均一に・塗りすぎない", point: "たくさん塗っても効果が比例して上がるわけではありません。ムラなく薄く伸ばす方が密着します。特にクリームは小豆粒程度を目安に。" },
  { step: 4, icon: "🔄", name: "朝は「仕上げ」として軽く", point: "夜のケアをベースに、朝は出かける前に軽くひと塗りで十分。乾いてから服を着ると、服への付着や白残りを防げます。" },
  { step: 5, icon: "📆", name: "毎日続けて「育てる」", point: "制汗ケアは1回で劇的に変わるものではなく、毎晩続けることで実感しやすくなるといわれています。まずは2週間、夜ケアを習慣にしてみてください。" },
];

const SCENES: SceneCare[] = [
  {
    scene: "通勤・オフィス",
    icon: "🏢",
    tips: [
      "前夜に制汗剤を塗っておき、朝は軽く仕上げ塗り",
      "駅から会社までは早歩きしない（体温を上げない）が地味に効く",
      "オフィス着く前に汗拭きシート→必要なら塗り直しの2ステップ",
      "替えのインナーをロッカーに1枚置いておくと安心感が違う",
    ],
    color: "#3b82f6",
  },
  {
    scene: "スポーツ・ジム",
    icon: "🏃",
    tips: [
      "運動前は皮膜感の少ないスプレーやシートタイプが快適",
      "運動後はシャワーか汗拭きシートで汗を流してから塗り直す",
      "ウェアは吸汗速乾素材を選ぶとニオイ菌の繁殖を抑えやすい",
      "シューズ・足のニオイにはクリームタイプの集中ケアが向く",
    ],
    color: "#10b981",
  },
  {
    scene: "デート・大事な予定",
    icon: "💐",
    tips: [
      "当日の朝ではなく「前日の夜」からケアを始めるのが正解",
      "香り付きデオドラントは香水と混ざらないよう無香料が無難",
      "ハンカチ＋ミニサイズの制汗剤をバッグに忍ばせて安心を確保",
      "緊張汗はワキ汗パッドとの併用が心強い",
    ],
    color: "#ec4899",
  },
];

const SWEAT_STAIN_TIPS: string[] = [
  "ワキ汗パッド（服に貼るタイプ・肌に貼るタイプ）を使い分ける",
  "汗ジミが目立ちにくい色を選ぶ：白・黒・柄物は目立ちにくく、グレー・ライトブルーは目立ちやすい",
  "吸汗速乾インナーを1枚仕込むだけで、シャツへの汗ジミは大きく減る",
  "脇部分が汗ジミ加工（撥水・防汚）されたシャツも増えている",
  "ついてしまった黄ばみは、酸素系漂白剤を40℃前後のぬるま湯で使うのが定番の落とし方",
];

const FAQ: FAQItem[] = [
  {
    q: "制汗剤とデオドラントは何が違うのですか？",
    a: "役割が違います。制汗剤は「汗そのものを抑える」ことを目的とし、汗腺に働きかける制汗成分（クロルヒドロキシアルミニウムなど）を配合します。デオドラントは「ニオイを防ぐ」ことが目的で、ニオイの原因菌にアプローチする殺菌成分や消臭成分が主役です。多くの市販品は両方の機能を兼ねていますが、汗の量が悩みなら制汗成分重視、ニオイが悩みなら殺菌・消臭成分重視で選ぶと失敗しにくくなります。",
  },
  {
    q: "制汗剤はいつ塗るのが一番効果的ですか？",
    a: "「夜、お風呂上がりの清潔な肌」に塗るのが最も効果的といわれています。制汗成分は汗をかいていない状態の方が汗腺に浸透しやすいためです。日中の汗で流れにくいスティックやクリームを夜に塗り、朝は軽く仕上げ塗りする2段構えがおすすめです。",
  },
  {
    q: "汗のニオイはなぜ発生するのですか？汗自体が臭うの？",
    a: "かきたての汗はほぼ無臭といわれています。ニオイの主な正体は、汗や皮脂を皮膚の常在菌が分解するときに発生する物質です。つまり「汗を抑える」ことに加えて「菌を増やさない（清潔に保つ・殺菌成分でケアする）」ことがニオイ対策の本質になります。汗をかいたら1時間以内を目安に拭き取るのが効果的です。",
  },
  {
    q: "制汗剤のタイプはどれを選べばいいですか？",
    a: "悩みで選ぶのが基本です。ワキ汗・ニオイをしっかりケアしたいなら密着度の高いロールオンかスティック、ニオイの集中ケア（特に足)ならクリーム、全身のリフレッシュや手軽さ重視ならスプレーが目安です。まず夜用に直塗りタイプを1本、外出先用にスプレーかシートを1つ、という2本持ちが実用的です。",
  },
  {
    q: "セルフケアで改善しない汗・ニオイはどうすればいいですか？",
    a: "日常生活に支障が出るほどの多汗や、セルフケアで変化を感じられない強いニオイの悩みは、多汗症やワキガ（腋臭症）として治療の対象になる場合があります。保険適用の外用薬や治療の選択肢もあるため、一人で抱え込まず皮膚科や専門クリニックに相談してみてください。",
  },
];

export default function AseTaisakuGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-12">
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "汗・ニオイ対策 完全ガイド2026【制汗剤の選び方と正しい使い方】",
            description:
              "制汗剤とデオドラントの違い、タイプ別（ロールオン・スティック・スプレー・クリーム）の比較、夜に塗る正しい使い方、シーン別対策を解説。",
            datePublished: "2026-07-20",
            dateModified: "2026-07-20",
            author: { "@type": "Organization", name: "Beauty Tech Japan" },
            publisher: { "@type": "Organization", name: "Beauty Tech Japan" },
            mainEntityOfPage: "https://beauty-tech-japan.vercel.app/ase-taisaku-guide",
            inLanguage: "ja",
          }),
        }}
      />
      {/* JSON-LD: FAQPage */}
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-sky-50 text-sky-600 border border-sky-200">
          💦 汗・ニオイ対策
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          汗・ニオイ対策 完全ガイド<br className="sm:hidden" />
          <span className="text-sky-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          「制汗剤を塗っているのに効かない」——それ、選び方や塗るタイミングが原因かもしれません。制汗剤とデオドラントの違い、ロールオン・スティック・スプレー・クリームのタイプ別比較、「夜に塗る」が効果的といわれる理由、通勤・スポーツ・デートのシーン別対策まで、汗とニオイの悩みをこの1ページにまとめました。
        </p>
        <p className="text-sm text-gray-600">公開日:2026年7月20日</p>
      </section>

      {/* 制汗剤とデオドラントの違い */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔍 制汗剤とデオドラントの違い（まずここから）</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          同じ売り場に並んでいますが、この2つは役割がまったく違います。自分の悩みが「汗の量」なのか「ニオイ」なのかで、選ぶべき成分が変わります。
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-5 space-y-2">
            <div className="text-3xl">💧</div>
            <p className="font-black text-gray-900">制汗剤（アンチパースピラント）</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">目的：汗そのものを抑える。</span>
              クロルヒドロキシアルミニウムなどの制汗成分が汗の出口に働きかけ、汗の量を抑えることを目指すアイテム。
            </p>
            <p className="text-xs px-2 py-1 rounded-full font-bold inline-block bg-sky-100 text-sky-700">
              悩みが「汗の量・汗ジミ」の人向け
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
            <div className="text-3xl">🌿</div>
            <p className="font-black text-gray-900">デオドラント</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">目的：ニオイを防ぐ。</span>
              ニオイの原因は汗ではなく、汗や皮脂を分解する皮膚の常在菌。殺菌成分・消臭成分でニオイの発生を抑えることを目指すアイテム。
            </p>
            <p className="text-xs px-2 py-1 rounded-full font-bold inline-block bg-emerald-100 text-emerald-700">
              悩みが「ニオイ」の人向け
            </p>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            💡 市販品の多くは両方の機能を兼ねた「制汗デオドラント」。パッケージの成分表示で<span className="font-bold">制汗成分と殺菌成分のどちらが推されているか</span>を見ると、自分の悩みに合う1本を選びやすくなります。
          </p>
        </div>
      </section>

      {/* タイプ別比較 */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-gray-900">🧴 タイプ別の特徴比較（ロールオン・スティック・スプレー・クリーム）</h2>
        {ITEM_TYPES.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border p-6 space-y-4"
            style={{ borderColor: `${t.color}35`, background: `${t.color}05` }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{t.icon}</span>
              <h3 className="text-xl font-black text-gray-900">{t.name}</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{t.feature}</p>
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">強み</p>
              <ul className="space-y-2">
                {t.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: t.color }}>→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <p className="text-xs font-bold text-gray-600 mb-1">弱み・注意点</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.weakness}</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <p className="text-xs font-bold mb-1" style={{ color: t.color }}>こんな人におすすめ</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.bestFor}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
      <ArticleAffiliateCard tags={[]} articleId="ase-taisaku-guide" />

      {/* 正しい使い方 */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">🌙 制汗剤の正しい使い方（「夜に塗る」が新常識）</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          じつは制汗剤は「朝、出かける前に塗るもの」とは限りません。効果を実感しやすいのは夜のケア。理由と手順を5つのポイントで解説します。
        </p>
        <div className="space-y-3">
          {USAGE_TIPS.map((s) => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm">
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

      {/* シーン別対策 */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">🎯 シーン別の汗・ニオイ対策</h2>
        <div className="space-y-4">
          {SCENES.map((s) => (
            <div
              key={s.scene}
              className="rounded-2xl border p-5 space-y-3"
              style={{ borderColor: `${s.color}35`, background: `${s.color}05` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="text-lg font-black text-gray-900">{s.scene}</h3>
              </div>
              <ul className="space-y-2">
                {s.tips.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: s.color }}>→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 服の汗ジミ対策 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">👕 服の汗ジミ・黄ばみ対策</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          肌のケアと同じくらい大事なのが「服側の対策」。汗ジミの見え方は服の色と素材でほぼ決まります。
        </p>
        <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
          <ul className="space-y-2">
            {SWEAT_STAIN_TIPS.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="font-bold flex-shrink-0 mt-0.5 text-sky-500">✓</span>
                {t}
              </li>
            ))}
          </ul>
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
      <section className="bg-gradient-to-br from-sky-50 to-emerald-50 border border-sky-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <Link
            href="/summer-makeup-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            夏のメイク崩れ防止ガイド →
          </Link>
          <Link
            href="/bodycare-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }}
          >
            ボディケア完全ガイド →
          </Link>
          <Link
            href="/perfume-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
          >
            香水の選び方ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
