import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/after-sun-care-guide" },
  title: "日焼け後ケア（アフターサンケア）完全ガイド2026【72時間が勝負】",
  description:
    "日焼け後のケアは72時間が勝負。冷却→保湿→美白ケアのタイムライン別セルフケア、ヒリヒリ・赤み・皮むけの状態別対処、シミにしないための1週間ケア、やってはいけないNG行動まで完全解説。2026年最新版。",
  keywords: [
    "日焼け後 ケア",
    "日焼け ヒリヒリ 対処",
    "日焼け後 美白 いつから",
    "アフターサンケア",
    "日焼け シミ 防ぐ",
    "日焼け後 保湿",
    "日焼け 皮むけ",
    "日焼け後 スキンケア",
  ],
  openGraph: {
    title: "日焼け後ケア（アフターサンケア）完全ガイド2026｜72時間が勝負",
    description: "冷却→保湿→美白ケアのタイムライン別セルフケアと、シミにしないための1週間ケアを完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "日焼け後ケア完全ガイド2026【72時間が勝負】",
    description: "冷却→保湿→美白ケアのタイムライン別アフターサンケアを完全解説",
  },
};

/** タイムライン1区分のデータ型 */
interface TimelinePhase {
  period: string;
  icon: string;
  title: string;
  goal: string;
  actions: string[];
  color: string;
}

/** 状態別対処1件分のデータ型 */
interface SymptomCare {
  name: string;
  icon: string;
  sign: string;
  care: string[];
  caution: string;
  color: string;
}

/** NG行動1件分のデータ型 */
interface NGAction {
  icon: string;
  title: string;
  reason: string;
}

/** 1週間ケア1日分のデータ型 */
interface WeekCareStep {
  day: string;
  focus: string;
  detail: string;
}

/** よくある質問1件分 */
interface FAQItem {
  q: string;
  a: string;
}

const TIMELINE: TimelinePhase[] = [
  {
    period: "直後〜6時間",
    icon: "🧊",
    title: "とにかく冷やす",
    goal: "肌の炎症（軽いやけど状態）を落ち着かせる",
    actions: [
      "流水・冷たいシャワーでほてった部分を10〜15分冷やす",
      "保冷剤や氷はタオルに包んで使う（直当ては凍傷のもと）",
      "広範囲なら濡らしたタオルを当てて、ぬるくなったら交換",
      "熱いお風呂・サウナ・激しい運動は避ける",
      "水分補給を忘れずに（日焼け後は体内も水分不足気味）",
    ],
    color: "#3b82f6",
  },
  {
    period: "6〜24時間",
    icon: "💧",
    title: "低刺激の保湿を開始",
    goal: "水分が抜けやすくなった肌にうるおいを補給する",
    actions: [
      "ほてりが引いたら、低刺激の化粧水をたっぷりやさしくなじませる",
      "アルコール・香料の強いものは避け、敏感肌用を選ぶと安心",
      "こすらず「手のひらで押さえる」ようにつける",
      "乳液やジェルで水分にフタをする",
      "ヒリつきが強い間はシートマスクの長時間パックは控える",
    ],
    color: "#06b6d4",
  },
  {
    period: "24〜72時間",
    icon: "🛡️",
    title: "保湿を続けて肌を立て直す",
    goal: "バリア機能の回復を助け、メラニン生成が本格化する前に備える",
    actions: [
      "朝晩の保湿を通常の1.5倍を目安にしっかり続ける",
      "セラミド・ヒアルロン酸など保湿成分配合のアイテムが目安",
      "洗顔はぬるま湯＋たっぷりの泡で「こすらない」を徹底",
      "外出時は日焼け止め＋帽子・日傘で追い焼けを絶対に防ぐ",
      "睡眠をしっかりとる（肌の回復は寝ている間に進むといわれる）",
    ],
    color: "#10b981",
  },
  {
    period: "72時間以降",
    icon: "✨",
    title: "美白ケアをスタート",
    goal: "シミの原因となるメラニンの蓄積に先回りしてアプローチ",
    actions: [
      "ヒリつき・赤みが引いたのを確認してから美白ケアを開始",
      "ビタミンC誘導体・トラネキサム酸などの美白有効成分配合の医薬部外品が候補",
      "いきなり高濃度を使わず、少量から肌の様子を見て進める",
      "保湿は引き続き最優先（乾燥した肌に美白ケアだけしても非効率）",
      "ビタミンC・タンパク質を意識した食事も内側からのサポートに",
    ],
    color: "#ec4899",
  },
];

const SYMPTOMS: SymptomCare[] = [
  {
    name: "赤み・ほてり",
    icon: "🔴",
    sign: "肌が赤くなり、触ると熱っぽい。日焼けの中では最も軽い段階。",
    care: [
      "冷却を最優先。流水や濡れタオルで熱を取る",
      "赤みが引いてきたら低刺激の保湿へ移行",
      "メイクは最小限にして肌を休ませる",
    ],
    caution: "赤みが1週間以上引かない場合は皮膚科に相談を。",
    color: "#ef4444",
  },
  {
    name: "ヒリヒリ痛む",
    icon: "⚡",
    sign: "触れると痛い・服がこすれるだけでしみる。炎症が強めのサイン。",
    care: [
      "冷却時間を長めに（1日数回に分けてもOK）",
      "スキンケアは「水分＋ワセリンなどシンプル保護」に絞る",
      "ピーリング・スクラブ・シェービングは完全にお休み",
    ],
    caution: "水ぶくれができた・広範囲で痛みが強い場合は、自己判断せず皮膚科を受診してください。",
    color: "#f59e0b",
  },
  {
    name: "皮むけ",
    icon: "🍂",
    sign: "数日後にポロポロと皮がむけてくる。回復過程で起こる現象。",
    care: [
      "絶対に手でむかない（下の未成熟な肌が傷つき、跡が残る原因に）",
      "保湿を徹底して自然にはがれるのを待つ",
      "むけかけの皮が気になるなら、入浴後にやわらかくなった分だけ自然に取れるのに任せる",
    ],
    caution: "無理にむいた部分は色素沈着しやすいといわれます。かゆみが強い場合も皮膚科へ。",
    color: "#a16207",
  },
];

const NG_ACTIONS: NGAction[] = [
  {
    icon: "🧴",
    title: "直後にいきなり美白コスメを使う",
    reason: "炎症中の肌には刺激が強く、赤みの悪化を招くことも。美白ケアは「炎症が落ち着いてから」が鉄則。",
  },
  {
    icon: "🧽",
    title: "ゴシゴシ洗う・スクラブ・ピーリング",
    reason: "日焼け後の肌はバリア機能が低下した状態。摩擦や角質ケアは回復を遅らせ、色素沈着のリスクを上げる。",
  },
  {
    icon: "♨️",
    title: "熱いお風呂・サウナ・飲酒",
    reason: "血行が促進されて炎症・ほてりが悪化しやすい。当日はぬるめのシャワーで済ませるのが無難。",
  },
  {
    icon: "🖐️",
    title: "皮を手でむく",
    reason: "下にあるできたての肌が傷つき、シミ・跡の原因に。自然にはがれるまで保湿して待つ。",
  },
  {
    icon: "☀️",
    title: "回復前に無防備で再び日に当たる",
    reason: "ダメージが蓄積して回復が大幅に遅れる。最低1週間は日焼け止め＋物理的な遮光を徹底する。",
  },
];

const WEEK_CARE: WeekCareStep[] = [
  { day: "1日目", focus: "冷却＋低刺激保湿", detail: "冷やしてほてりを取り、敏感肌用アイテムでやさしく保湿。メイク・角質ケアはお休み。" },
  { day: "2〜3日目", focus: "保湿強化＋完全遮光", detail: "朝晩たっぷり保湿。外出時は日焼け止め・帽子・日傘で追い焼けゼロを目指す。" },
  { day: "4〜5日目", focus: "美白ケア開始の見極め", detail: "赤み・ヒリつきが引いていれば、ビタミンC誘導体などの美白ケアを少量からスタート。" },
  { day: "6〜7日目", focus: "美白＋生活リンク", detail: "美白ケアを朝晩の習慣に。睡眠・ビタミンCを含む食事・水分補給で内側からもサポート。" },
];

const FAQ: FAQItem[] = [
  {
    q: "日焼け後のケアはなぜ72時間が勝負なのですか？",
    a: "日焼けによるメラニン色素の生成は、紫外線を浴びた直後から始まり、数日かけて本格化するといわれています。炎症が続くほど色素沈着（シミ）のリスクが高まるため、最初の72時間で「冷却→保湿→肌の立て直し」を済ませ、炎症を早く落ち着かせることがシミ予防の分かれ道になります。",
  },
  {
    q: "日焼け後の美白ケアはいつから始めればいいですか？",
    a: "目安は「赤み・ヒリつきが引いてから」、多くの場合72時間（3日）前後です。炎症が残った状態で美白コスメを使うと刺激になり、かえって肌トラブルを招くことがあります。まずは冷却と保湿を優先し、肌が落ち着いたのを確認してから少量ずつ始めてください。",
  },
  {
    q: "日焼けでヒリヒリするときは何を塗ればいいですか？",
    a: "まずは塗るより冷やすのが先です。流水や濡れタオルで熱を取り、ほてりが引いてから低刺激の化粧水＋ワセリンなどのシンプルな保湿で肌を保護します。アルコールや香料の強いアイテムはしみることがあるので避けましょう。水ぶくれができるほどの日焼けは軽いやけどにあたるため、皮膚科の受診をおすすめします。",
  },
  {
    q: "日焼け後の皮むけは取ってしまっていいですか？",
    a: "手でむくのはNGです。むけかけの皮の下にはできたての未成熟な肌があり、無理にはがすと傷つけて色素沈着や跡の原因になるといわれています。保湿を続けながら自然にはがれるのを待ちましょう。かゆみや痛みを伴う場合は皮膚科に相談してください。",
  },
  {
    q: "日焼けをシミにしないために一番大事なことは何ですか？",
    a: "「早く炎症を鎮めること」と「追い焼けをしないこと」の2つです。日焼け直後の冷却・保湿で炎症を早く落ち着かせるほど、メラニンの過剰生成を抑えやすくなります。さらに回復中の肌は紫外線ダメージを受けやすいため、最低1週間は日焼け止め・帽子・日傘での遮光を徹底することが、シミ予防の最重要ポイントです。",
  },
];

export default function AfterSunCareGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-12">
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "日焼け後ケア（アフターサンケア）完全ガイド2026【72時間が勝負】",
            description:
              "日焼け直後〜72時間のタイムライン別ケア（冷却→保湿→美白ケア）、状態別対処、シミにしないための1週間ケアを解説。",
            datePublished: "2026-07-20",
            dateModified: "2026-07-20",
            author: { "@type": "Organization", name: "Beauty Tech Japan" },
            publisher: { "@type": "Organization", name: "Beauty Tech Japan" },
            mainEntityOfPage: "https://beauty-tech-japan.vercel.app/after-sun-care-guide",
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-orange-50 text-orange-600 border border-orange-200">
          🌞 アフターサンケア
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          日焼け後ケア 完全ガイド<br className="sm:hidden" />
          <span className="text-orange-600">2026【72時間が勝負】</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          「うっかり焼けちゃった…」そのあと72時間の過ごし方で、シミになるかどうかが大きく変わるといわれています。日焼け直後の冷却から、保湿、美白ケアを始めるタイミングまで、時系列でやるべきことを整理しました。ヒリヒリ・赤み・皮むけの状態別対処もこの1ページでわかります。
        </p>
        <p className="text-sm text-gray-600">公開日:2026年7月20日</p>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            ⚠️ 本記事はセルフケアの情報です。<span className="font-bold">水ぶくれができるほどの日焼け・広範囲の強い痛み・発熱を伴う場合</span>は軽いやけどにあたることがあるため、自己判断せず皮膚科を受診してください。
          </p>
        </div>
      </section>

      {/* タイムライン */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">⏱️ 日焼け後72時間のケア・タイムライン</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          日焼けは肌が軽いやけどをした状態。順番を間違えると回復が遅れます。「冷やす→うるおす→立て直す→美白」の順で進めるのが基本です。
        </p>
        <div className="space-y-4">
          {TIMELINE.map((p) => (
            <div
              key={p.period}
              className="rounded-2xl border p-5 space-y-3"
              style={{ borderColor: `${p.color}35`, background: `${p.color}06` }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-3xl">{p.icon}</span>
                <span
                  className="text-xs px-3 py-1 rounded-full font-black text-white"
                  style={{ background: p.color }}
                >
                  {p.period}
                </span>
                <h3 className="text-lg font-black text-gray-900">{p.title}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold">この時間帯のゴール：</span>
                {p.goal}
              </p>
              <ul className="space-y-2">
                {p.actions.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: p.color }}>→</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
      <ArticleAffiliateCard tags={[]} articleId="after-sun-care-guide" />

      {/* NG行動 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🚫 日焼け後にやってはいけないNG行動5つ</h2>
        <div className="space-y-3">
          {NG_ACTIONS.map((n) => (
            <div key={n.title} className="flex gap-4 p-4 rounded-2xl bg-red-50 border border-red-100">
              <span className="text-2xl flex-shrink-0">{n.icon}</span>
              <div>
                <p className="font-black text-gray-900 mb-1">{n.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{n.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 状態別対処 */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">🩹 状態別の対処法（赤み・ヒリヒリ・皮むけ）</h2>
        <div className="space-y-4">
          {SYMPTOMS.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border p-5 space-y-3"
              style={{ borderColor: `${s.color}35`, background: `${s.color}05` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="text-lg font-black text-gray-900">{s.name}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{s.sign}</p>
              <ul className="space-y-2">
                {s.care.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: s.color }}>→</span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <p className="text-xs font-bold text-red-500 mb-1">⚠️ 受診の目安</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.caution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1週間ケア */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">📅 シミにしないための1週間リカバリープラン</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          72時間を乗り切ったあとも油断は禁物。1週間単位で「保湿の継続」「追い焼け防止」「美白ケアの習慣化」を意識すると、シミ予防の精度が上がります。
        </p>
        <div className="space-y-3">
          {WEEK_CARE.map((w) => (
            <div key={w.day} className="flex gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="flex-shrink-0 w-20 text-center">
                <span className="inline-block px-2 py-1 rounded-full bg-orange-500 text-white font-black text-xs whitespace-nowrap">
                  {w.day}
                </span>
              </div>
              <div>
                <div className="font-black text-gray-900 mb-1">{w.focus}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{w.detail}</p>
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
      <section className="bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <Link
            href="/sunscreen-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
          >
            日焼け止め完全ガイド →
          </Link>
          <Link
            href="/whitening-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
          >
            美白ケア完全ガイド →
          </Link>
          <Link
            href="/vitamin-c-serum-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #eab308)" }}
          >
            ビタミンC美容液ガイド →
          </Link>
          <Link
            href="/summer-makeup-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}
          >
            夏のメイク崩れ防止ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
