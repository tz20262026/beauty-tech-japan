import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/sensitive-skin-guide" },
  title: "敏感肌スキンケア完全ガイド2026【化粧水・下地・NG成分の選び方】",
  description:
    "敏感肌の原因とスキンケアの選び方を完全解説。低刺激化粧水の選び方、避けるべき成分、季節による肌荒れ対策、崩れやすい肌の下地選びまで。2026年最新版。",
  keywords: [
    "敏感肌 スキンケア",
    "敏感肌 化粧水 選び方",
    "敏感肌 下地",
    "低刺激 化粧品",
    "肌荒れ 原因",
    "敏感肌 NG成分",
    "バリア機能 回復",
    "敏感肌 スキンケア 順番",
  ],
  openGraph: {
    title: "敏感肌スキンケア完全ガイド2026｜化粧水・下地・NG成分の選び方",
    description: "低刺激化粧水の選び方、避けるべき成分、肌荒れ対策、下地選びを完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "敏感肌スキンケア完全ガイド2026",
    description: "低刺激化粧水の選び方とNG成分、肌荒れ対策を完全解説",
  },
};

/** 敏感肌タイプ1件分のデータ型 */
interface SkinType {
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

const SKIN_TYPES: SkinType[] = [
  {
    name: "乾燥性敏感肌",
    icon: "🏜️",
    sign: "洗顔後につっぱる・粉をふく・化粧水がしみることがある。",
    cause: "バリア機能が低下し、肌内部の水分が蒸発しやすくなっている状態。冷房・暖房・季節の変わり目で悪化しやすい。",
    care: [
      "洗浄力の強すぎるクレンジング・洗顔料を避ける",
      "セラミド・ヒアルロン酸配合の化粧水で水分を補う",
      "乳液・クリームで水分の蒸発をしっかりフタする",
      "こすらず「押さえるように」なじませる",
      "室内では加湿器で湿度40〜60%を保つ",
    ],
    keyItem: "セラミド化粧水・保湿クリーム",
    color: "#3b82f6",
    ngAction: "アルコール(エタノール)配合の収れん化粧水・ゴシゴシ洗顔",
  },
  {
    name: "炎症性敏感肌",
    icon: "🔴",
    sign: "赤み・ヒリつきが出やすい・新しい化粧品でかぶれることがある。",
    cause: "バリア機能の低下に加えて、外部刺激への防御力が落ち、軽い刺激でも炎症反応を起こしやすくなっている状態。",
    care: [
      "「無香料・無着色・アルコールフリー」表示の製品を選ぶ",
      "新しい化粧品は必ず二の腕内側でパッチテストしてから顔に使う",
      "紫外線対策を徹底する（紫外線は炎症を悪化させる主因）",
      "洗顔はぬるま湯（32〜34℃程度）で手早く",
      "肌がゆらいでいる時期はスキンケアの品数を最小限にする",
    ],
    keyItem: "低刺激処方の化粧水・ノンケミカル日焼け止め",
    color: "#ef4444",
    ngAction: "ピーリング・スクラブ等の物理刺激ケア・新製品の一気重ね",
  },
  {
    name: "揺らぎ敏感肌（季節性）",
    icon: "🌦️",
    sign: "季節の変わり目だけ調子が悪くなる・普段は問題ないのに急にヒリつく。",
    cause: "花粉・気温差・湿度変化などの外的要因で、一時的にバリア機能が乱れている状態。慢性的な敏感肌とは対処法が異なる。",
    care: [
      "季節の変わり目の2〜3週間前からケアを保湿重視に切り替える",
      "普段使っているアイテムを変えず、刺激を増やさない",
      "マスク着用時は摩擦を減らすため保湿を厚めに",
      "花粉の時期はメイクを控えめにして肌への負担を減らす",
      "調子が戻るまで新しいアイテムの導入は控える",
    ],
    keyItem: "保湿力の高いバームクリーム・ミスト化粧水",
    color: "#8b5cf6",
    ngAction: "季節の変わり目に新しいスキンケアラインを一気に導入すること",
  },
];

const CARE_STEPS: StepItem[] = [
  { step: 1, icon: "🧴", name: "クレンジング・洗顔は「摩擦ゼロ」を意識", point: "洗浄成分がマイルドなものを選び、泡や指の腹で優しく包み込むように洗う。すすぎはぬるま湯で丁寧に、タオルは押さえるように水分を取る。" },
  { step: 2, icon: "💧", name: "化粧水は「量より重ね付け」", point: "1回にたっぷりより、少量を数回に分けて重ね付けする方が浸透しやすい。手のひらで温めてから顔全体に優しくなじませる。" },
  { step: 3, icon: "🌿", name: "美容液は成分を1つずつ試す", point: "複数の新しい美容液を同時に始めると、荒れた時に原因が特定できなくなる。1品ずつ2週間ほど様子を見てから追加する。" },
  { step: 4, icon: "🧈", name: "乳液・クリームで水分を密閉", point: "化粧水で入れた水分を逃さないよう、油分でしっかりフタをする。乾燥がひどい部分は重ね塗りしてもOK。" },
  { step: 5, icon: "☀️", name: "日焼け止めは低刺激タイプを毎日", point: "紫外線はバリア機能低下の最大要因。ノンケミカル（紫外線散乱剤）タイプは肌への刺激が少なく敏感肌に選ばれやすい。" },
  { step: 6, icon: "🔍", name: "新しい製品は必ずパッチテスト", point: "二の腕の内側に少量を塗り、24〜48時間様子を見てから顔に使用する。ワンシーズン前の製品でも再度肌質が変わっている可能性がある。" },
];

const FAQ: FAQItem[] = [
  {
    q: "敏感肌用の化粧品はどうやって選べばいいですか？",
    a: "「無香料・無着色・アルコールフリー」「アレルギーテスト済み」「ノンコメドジェニック」といった表示を目安にしつつ、必ず二の腕内側でパッチテストをしてから顔に使ってください。表示だけで安全と判断せず、自分の肌で試すことが最も確実です。",
  },
  {
    q: "敏感肌でも美容液やピーリングは使えますか？",
    a: "美容液は成分を1つずつ試しながら少しずつ取り入れるのが安全です。ピーリングやスクラブなど物理的な刺激を伴うケアは、肌の調子が良い時でも頻度を抑え、炎症性敏感肌や揺らぎ期には避けるのが基本です。",
  },
  {
    q: "季節の変わり目だけ肌が荒れます。どう対策すればいいですか？",
    a: "揺らぎ敏感肌の可能性が高いです。変わり目の2〜3週間前から保湿重視のケアに切り替え、その時期は新しいアイテムを導入しないことがポイントです。普段のケアを変えないことが最大の予防になります。",
  },
  {
    q: "敏感肌に日焼け止めは必要ですか？肌に負担になりませんか？",
    a: "紫外線はバリア機能低下の最大要因のため、敏感肌ほど日焼け止めは必須です。ただし刺激が心配な場合は、紫外線吸収剤を使わないノンケミカルタイプ（紫外線散乱剤タイプ）を選ぶと肌への負担を抑えられます。",
  },
  {
    q: "肌が荒れている時にスキンケアはどうすればいいですか？",
    a: "荒れている間は品数を最小限にし、洗顔・保湿・日焼け止めのシンプルケアに戻すのが基本です。新しいアイテムの導入や美容液の追加は肌が落ち着いてから。症状がひどい場合や長引く場合は、自己判断せず皮膚科の受診も検討してください。",
  },
];

export default function SensitiveSkinGuidePage() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-blue-50 text-blue-600 border border-blue-200">
          🌿 敏感肌スキンケア対策
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          敏感肌スキンケア完全ガイド<br className="sm:hidden" />
          <span className="text-blue-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          乾燥・赤み・季節の揺らぎ——敏感肌には複数のタイプがあり、対策の優先順位も変わります。自分の敏感肌タイプの見極め方から、避けるべき成分、崩れにくいスキンケアの手順まで徹底解説します。
        </p>
      </section>

      {/* タイプ診断 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔍 あなたの敏感肌はどのタイプ？</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {SKIN_TYPES.map((t) => (
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
      <ArticleAffiliateCard tags={[]} articleId="sensitive-skin-guide" />

      {/* タイプ別対策詳細 */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-gray-900">💡 タイプ別の対策を詳しく解説</h2>
        {SKIN_TYPES.map((t) => (
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
        <h2 className="text-xl font-black text-gray-900">📋 敏感肌の基本スキンケア手順（6ステップ）</h2>
        <div className="space-y-3">
          {CARE_STEPS.map((s) => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm">
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <Link
            href="/kusumi-care-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
          >
            肌のくすみ対策ガイド →
          </Link>
          <Link
            href="/sunscreen-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
          >
            日焼け止め完全ガイド →
          </Link>
          <Link
            href="/skincare-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
          >
            スキンケア基本ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
