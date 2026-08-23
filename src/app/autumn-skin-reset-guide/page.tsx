import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/autumn-skin-reset-guide" },
  title: "夏ダメージ肌の秋リセット完全ガイド2026【紫外線・乾燥・ゆらぎ対策】",
  description:
    "夏に蓄積した紫外線ダメージ・エアコン乾燥・ゆらぎ肌を秋に立て直す完全ガイド。ダメージタイプ別の見分け方と対策、肌リセット7日間ルーティン、季節の変わり目にやってはいけないNG習慣まで解説。2026年最新版。",
  keywords: [
    "秋 乾燥肌 対策",
    "季節の変わり目 肌荒れ",
    "夏 紫外線ダメージ 回復",
    "肌リセット 秋",
    "ゆらぎ肌 スキンケア",
    "夏の疲れ肌",
    "秋 スキンケア 切り替え",
    "肌荒れ 季節性",
  ],
  openGraph: {
    images: [{ url: "https://beauty-tech-japan.vercel.app/api/og", width: 1200, height: 630, alt: "Beauty Tech Japan" }],
    title: "夏ダメージ肌の秋リセット 完全ガイド2026｜紫外線・乾燥・ゆらぎからの立て直し",
    description: "紫外線蓄積・エアコン乾燥・ゆらぎ肌のタイプ別対策と、秋の肌リセット7日間ルーティンを完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    images: ["https://beauty-tech-japan.vercel.app/api/og"],
    card: "summary_large_image",
    title: "夏ダメージ肌の秋リセット 完全ガイド2026",
    description: "紫外線・乾燥・ゆらぎからの立て直し方を完全解説",
  },
};

interface DamageType {
  name: string;
  icon: string;
  sign: string;
  cause: string;
  countermeasures: string[];
  keyItem: string;
  color: string;
  ngAction: string;
}

interface ResetStep {
  step: number;
  icon: string;
  name: string;
  point: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const DAMAGE_TYPES: DamageType[] = [
  {
    name: "紫外線ダメージ蓄積型",
    icon: "☀️",
    sign: "シミ・そばかすが濃くなった、肌のトーンが暗い、触るとザラつく（角質肥厚）。",
    cause: "夏に浴び続けた紫外線でメラニンが過剰生成され、さらにターンオーバーが乱れて排出しきれずに蓄積した状態。日焼け直後は自覚しにくく、8〜9月になって色ムラとして表面化しやすい。",
    countermeasures: [
      "美白有効成分（ビタミンC誘導体・トラネキサム酸・ナイアシンアミド）を継続使用",
      "ピーリングやふき取り化粧水でターンオーバーの乱れを整える（やりすぎ注意・週1〜2回）",
      "秋以降も紫外線量はゼロにならないため日焼け止めは継続する",
      "睡眠中の肌代謝を高めるため夜のスキンケアに保湿を厚めに",
    ],
    keyItem: "美白美容液・トラネキサム酸配合美容液",
    color: "#f59e0b",
    ngAction: "「もう夏は終わったから」と日焼け止めをやめる・強い摩擦での角質ケア（かえって色素沈着を招く）",
  },
  {
    name: "エアコン乾燥型",
    icon: "❄️",
    sign: "頬や口元がつっぱる、小じわが目立つ、化粧水をつけてもすぐ乾く。",
    cause: "夏の間ずっと冷房にさらされ続けたことで肌のバリア機能・保水力が低下。汗をかいていたので自覚しにくいが、実は夏の間中ずっと肌内部の水分は奪われ続けている。",
    countermeasures: [
      "化粧水を「重ねづけ」して角質層にしっかり水分を入れる",
      "セラミド・ヒアルロン酸配合の保湿クリームで水分にフタをする",
      "夏はさっぱり系だった乳液・クリームをこっくりしたテクスチャーに切り替える",
      "加湿器や室内の湿度管理で外側からも乾燥を防ぐ",
    ],
    keyItem: "セラミド配合クリーム・高保湿化粧水",
    color: "#3b82f6",
    ngAction: "夏用のさっぱりケアを秋も継続する・熱いお湯での洗顔（皮脂と一緒に必要な潤いも奪う）",
  },
  {
    name: "ゆらぎ敏感型",
    icon: "🌾",
    sign: "急に肌がヒリヒリする、いつものコスメがしみる、赤みやかゆみが出やすい。",
    cause: "気温・湿度の急激な変化に肌のバリア機能が追いつかず、外部刺激に対して過敏になっている状態。「季節の変わり目に毎年荒れる」という人はこのタイプが多い。",
    countermeasures: [
      "スキンケアの品数を一時的に減らし、低刺激処方のアイテムに絞る",
      "新しいコスメの導入は肌が落ち着くまで避ける",
      "こすらない・パッティングしない、手のひらで優しく押さえる浸透方法に変える",
      "肌荒れが1週間以上続く場合は皮膚科の受診も検討する",
    ],
    keyItem: "低刺激処方の化粧水・敏感肌用クリーム",
    color: "#ec4899",
    ngAction: "荒れているのに角質ケアやピーリングを続ける・新しい美容液を次々試す",
  },
];

const RESET_STEPS: ResetStep[] = [
  { step: 1, icon: "🧴", name: "1〜2日目：スキンケアを一旦シンプルに", point: "洗顔・化粧水・保湿クリームの最小構成に戻す。夏の間に増えたアイテムを一時的に減らし、肌の状態をリセットして見極める。" },
  { step: 2, icon: "💧", name: "3〜4日目：保湿力を底上げ", point: "化粧水は重ねづけ、乳液・クリームは夏より少しリッチなテクスチャーへ切り替え。セラミドやヒアルロン酸配合のアイテムで水分保持力を高める。" },
  { step: 3, icon: "✨", name: "5〜6日目：美白・ケア成分を追加", point: "肌が落ち着いてきたら、紫外線ダメージ向けにビタミンC誘導体やナイアシンアミドを1品ずつ追加。一気に足すと刺激になるため様子を見ながら。" },
  { step: 4, icon: "🌙", name: "7日目：夜のスペシャルケアで仕上げ", point: "週1回のシートマスクやスリーピングパックで集中保湿。肌の状態を振り返り、まだゆらぎが残るなら低刺激ケアの期間を延長する。" },
];

const FAQ: FAQItem[] = [
  {
    q: "秋になって急に肌荒れするのはなぜですか？",
    a: "夏の間に紫外線・エアコンの乾燥・汗による摩擦など複数のダメージが蓄積し、気温と湿度が下がり始める9月前後にバリア機能の低下が表面化するためです。「季節の変わり目に毎年荒れる」という方は、実は夏のうちからダメージが進んでいたケースがほとんどです。",
  },
  {
    q: "夏用のさっぱりケアはいつ切り替えればいいですか？",
    a: "厳密な時期の決まりはなく、「化粧水をつけてもすぐつっぱる」と感じ始めたタイミングが目安です。気温が下がりきる前でも、肌の乾燥サインを感じたら早めに保湿力の高いアイテムへ切り替えることをおすすめします。",
  },
  {
    q: "美白ケアと保湿ケア、どちらを優先すべきですか？",
    a: "肌がゆらいでいる・ヒリヒリする状態であれば、まず保湿と低刺激ケアでバリア機能を立て直すのが先決です。美白有効成分は刺激になりやすいため、肌が落ち着いてから追加するのが安全な順番です。",
  },
  {
    q: "秋になっても日焼け止めは必要ですか？",
    a: "必要です。紫外線量は真夏に比べて減るものの、秋も紫外線はゼロになりません。特に夏のダメージが色ムラとして出てきやすい時期なので、日焼け止めをやめてしまうとせっかくのリセットケアの効果が薄れてしまいます。",
  },
  {
    q: "肌荒れが1週間続いても良くならない場合はどうすればいいですか？",
    a: "セルフケアで様子を見る期間は1週間程度を目安にしてください。それ以上赤み・かゆみ・ヒリつきが続く場合は、コスメによる刺激以外の原因（乾燥性皮膚炎など）の可能性もあるため、自己判断を続けず皮膚科を受診することをおすすめします。",
  },
];

export default function AutumnSkinResetGuidePage() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-orange-50 text-orange-600 border border-orange-200">
          🍂 秋の肌リセット対策
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          夏ダメージ肌の秋リセット 完全ガイド<br className="sm:hidden" />
          <span className="text-orange-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          紫外線の蓄積・エアコンによる乾燥・季節の変わり目のゆらぎ——夏に受けたダメージは種類によって秋の立て直し方が異なります。自分のダメージタイプの見分け方から、7日間でできる肌リセットルーティンまで徹底解説します。
        </p>
      </section>

      {/* ダメージタイプ診断 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔍 あなたの夏ダメージはどのタイプ？</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {DAMAGE_TYPES.map((t) => (
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
      <ArticleAffiliateCard tags={[]} articleId="autumn-skin-reset-guide" />

      {/* タイプ別対策詳細 */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-gray-900">💡 ダメージタイプ別の対策を詳しく解説</h2>
        {DAMAGE_TYPES.map((t) => (
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
              <p className="text-sm font-bold text-gray-700 mb-2">対策</p>
              <ul className="space-y-2">
                {t.countermeasures.map((m) => (
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

      {/* 肌リセット7日間ルーティン */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">📋 秋の肌リセット 7日間ルーティン</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          一気に色々なケアを足すと刺激になり逆効果です。「減らす→整える→足す」の順番で1週間かけて立て直すのが、遠回りに見えて一番確実です。
        </p>
        <div className="space-y-3">
          {RESET_STEPS.map((s) => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm">
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
      <section className="bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <Link
            href="/sensitive-skin-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            敏感肌スキンケアガイド →
          </Link>
          <Link
            href="/whitening-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
          >
            美白ケアガイド →
          </Link>
          <Link
            href="/after-sun-care-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
          >
            日焼け後ケアガイド →
          </Link>
          <Link
            href="/skin-type-diagnosis"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
          >
            肌タイプ診断（無料）→
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
