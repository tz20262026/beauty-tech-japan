import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/whitening-guide" },
  title: "美白ケア完全ガイド2026年版【シミ・くすみに効く成分・ルーティン】",
  description: "美白ケアの正しい方法を解説。ビタミンC・アルブチン・ナイアシンアミドなど有効成分別の選び方・使い方・朝夜ルーティンまで。2026年最新情報。",
  keywords: ["美白 成分", "シミ 対策", "くすみ 改善", "ビタミンC 美白", "ナイアシンアミド 効果", "美白ケア 順番"],
  openGraph: {
    title: "美白ケア完全ガイド2026年版【シミ・くすみに効く成分・ルーティン】| Beauty Tech Japan",
    description: "美白ケアの正しい方法を解説。ビタミンC・アルブチン・ナイアシンアミドなど有効成分別の選び方・使い方・朝夜ルーティンまで。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "美白ケア完全ガイド2026年版【シミ・くすみに効く成分・ルーティン】| Beauty Tech Japan",
    description: "美白ケアの正しい方法を解説。ビタミンC・アルブチン・ナイアシンアミドなど有効成分別の選び方・使い方・朝夜ルーティンまで。",
  },
};

const WHITENING_INGREDIENTS = [
  {
    name: "ビタミンC誘導体",
    icon: "🍋",
    color: "#f59e0b",
    effect: "メラニン生成を抑制・抗酸化・ブライトニング",
    concentration: "安定型誘導体：3〜20%が一般的",
    usage: "朝のルーティンに最適。日焼け止めと併用で相乗効果",
    synergy: "ビタミンE・フェルラ酸（安定性アップ）・ナイアシンアミド",
    caution: "高濃度（20%以上）は刺激あり。pH2〜3.5で効果最大",
  },
  {
    name: "アルブチン",
    icon: "🌾",
    color: "#10b981",
    effect: "チロシナーゼ阻害でメラニン生成を抑制",
    concentration: "1〜3%（α-アルブチンは0.5〜1%でも高効果）",
    usage: "化粧水・美容液に広く配合。刺激が少なく敏感肌にも使いやすい",
    synergy: "ナイアシンアミド・ビタミンC（W美白効果）",
    caution: "α-アルブチンはβ型より高効果。加水分解するとヒドロキノンになる場合あり",
  },
  {
    name: "トラネキサム酸",
    icon: "💊",
    color: "#ec4899",
    effect: "メラノサイト活性化を阻害・肝斑に医薬品レベルの効果",
    concentration: "2〜5%（医薬部外品：2%が上限）",
    usage: "朝夜どちらにも使用可。肝斑・炎症後色素沈着に特に効果的",
    synergy: "アスコルビン酸（ビタミンC）・ニコチン酸アミド",
    caution: "市販品は2%以下。それ以上は病院処方薬。つい大量使用しがち。適量を守る",
  },
  {
    name: "ナイアシンアミド（ビタミンB3）",
    icon: "✨",
    color: "#8b5cf6",
    effect: "メラノソーム転送阻害・毛穴改善・バリア機能強化",
    concentration: "2〜10%（5%以上で有意な美白効果）",
    usage: "朝夜どちらでも使用可。最も多目的に使える美白成分の一つ",
    synergy: "レチノール・ビタミンC・ペプチド",
    caution: "高濃度（10%以上）はフラッシング（一時的な赤み）が出る場合あり",
  },
  {
    name: "コウジ酸",
    icon: "🍶",
    color: "#0891b2",
    effect: "チロシナーゼを直接阻害・シミ・ソバカスに効果",
    concentration: "0.5〜2%（医薬部外品：1%が規定値）",
    usage: "美容液・美白クリームに配合。刺激が少なく使いやすい",
    synergy: "アルブチン・ビタミンC（複合美白作用）",
    caution: "敏感肌は1%以下から開始。日光過敏性を増す場合があるため夜使用が安心",
  },
];

const MORNING_ROUTINE = [
  { step: 1, name: "洗顔", icon: "💧", point: "ぬるま湯でやさしく洗う。汚れを落としながらも皮膚バリアを守る。" },
  { step: 2, name: "美白化粧水", icon: "🌊", point: "洗顔後すぐに。アルブチン・ナイアシンアミド配合の化粧水を手のひらでプレス。" },
  { step: 3, name: "ビタミンC美容液", icon: "🍋", point: "朝のビタミンCは日中の酸化ストレスから肌を守る。10〜15%の安定型を選ぶ。" },
  { step: 4, name: "保湿クリーム", icon: "🧴", point: "美容液にフタをするように保湿。バリア機能を整えることが美白効果を高める。" },
  { step: 5, name: "SPF50+日焼け止め（必須）", icon: "☀️", point: "美白ケアで最も重要なステップ。UVA・UVBをブロックしないと美白成分の効果が半減する。" },
];

const NIGHT_ROUTINE = [
  { step: 1, name: "クレンジング＋洗顔", icon: "🫧", point: "日焼け止め・メイクを完全除去。残留が色素沈着の原因になる。" },
  { step: 2, name: "美白化粧水（多め）", icon: "🌊", point: "夜は時間をかけてたっぷり重ねづけ。トラネキサム酸・コウジ酸配合が効果的。" },
  { step: 3, name: "美白美容液", icon: "✨", point: "複数の美白成分（ナイアシンアミド＋アルブチン等）を組み合わせることで相乗効果。" },
  { step: 4, name: "ナイトクリーム（保湿）", icon: "🌙", point: "就寝中に肌修復が活発化。高保湿クリームでターンオーバーを促進する。" },
];

const FAQ = [
  {
    q: "美白成分はいつ効果が出始めますか？",
    a: "ビタミンCは約4〜8週間、ナイアシンアミドは約4週間で効果を実感し始める方が多いです。シミの完全な改善には3〜6ヶ月の継続使用が必要です。最初の1ヶ月は毎日使用を続けることが重要です。",
  },
  {
    q: "美白化粧品と医薬部外品の違いは何ですか？",
    a: "医薬部外品（薬用）は、厚生労働省が認可した有効成分（アルブチン・トラネキサム酸等）が規定濃度で配合され、メラニン生成抑制の効能が表示できます。化粧品は効能の表示に制限があるため、成分量やエビデンスに注目して選ぶことが大切です。",
  },
  {
    q: "ビタミンCとレチノールは一緒に使えますか？",
    a: "同時使用は避けることをおすすめします。ビタミンCは朝、レチノールは夜に使い分けることで、それぞれの効果を最大化しつつ刺激を最小限に抑えられます。朝のビタミンCは酸化防止、夜のレチノールはターンオーバー促進と役割が異なります。",
  },
  {
    q: "美白ケアで日焼け止めはなぜ必須なのですか？",
    a: "美白成分はメラニン生成を抑制しますが、紫外線を浴びれば新たにメラニンが生成されます。日焼け止めなしでの美白ケアは「穴の空いたバケツに水を注ぐ」ようなもの。SPF30以上・PA+++以上を毎日使用することが美白の最優先事項です。",
  },
  {
    q: "ハイドロキノンは使っても大丈夫ですか？",
    a: "ハイドロキノンは強力な脱色素成分ですが、日本では医薬品として扱われ市販は禁止されています。高濃度（4%以上）の長期使用は白斑リスクがあるため、使用する場合は皮膚科医の処方・指示のもとで行ってください。市販の美白成分との使い分けが安全です。",
  },
];

export default function WhiteningGuidePage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-yellow-50 text-yellow-600 border border-yellow-200">
            🍋 美白ガイド
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            美白ケア完全ガイド<br className="sm:hidden" />
            <span className="text-yellow-500">シミ・くすみ対策</span>
            <span className="text-lg ml-2 text-gray-600">2026年版</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            シミ・くすみの根本原因であるメラニン生成を抑制する美白成分を徹底解説。ビタミンC・アルブチン・トラネキサム酸・ナイアシンアミドの選び方・使い方・朝夜ルーティンまで、2026年最新情報をお届けします。
          </p>
        </section>

        {/* 美白成分カード */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">✨ 美白有効成分 完全解説（5成分）</h2>
          <div className="space-y-4">
            {WHITENING_INGREDIENTS.map((ing) => (
              <div
                key={ing.name}
                className="rounded-2xl border p-5 space-y-3"
                style={{ borderColor: `${ing.color}30`, background: `${ing.color}06` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ing.icon}</span>
                  <span className="font-black text-lg" style={{ color: ing.color }}>
                    {ing.name}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-bold text-gray-700 mb-1">効果</p>
                    <p className="text-gray-600 leading-relaxed">{ing.effect}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 mb-1">推奨濃度</p>
                    <p className="text-gray-600 leading-relaxed">{ing.concentration}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 mb-1">使い方</p>
                    <p className="text-gray-600 leading-relaxed">{ing.usage}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 mb-1">相性の良い成分</p>
                    <p className="text-gray-600 leading-relaxed">{ing.synergy}</p>
                  </div>
                </div>
                <div
                  className="text-xs px-3 py-2 rounded-lg"
                  style={{ background: `${ing.color}10`, color: ing.color }}
                >
                  ⚠️ {ing.caution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="whitening-guide" />

        {/* 朝ルーティン */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">☀️ 朝の美白ルーティン（5ステップ）</h2>
          <div className="space-y-3">
            {MORNING_ROUTINE.map((s) => (
              <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-yellow-50 border border-yellow-100">
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm">
                    {s.step}
                  </div>
                  <span className="text-lg">{s.icon}</span>
                </div>
                <div>
                  <p className="font-black text-gray-900 mb-1">{s.name}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.point}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-sm text-yellow-700 font-bold">
              💡 朝の美白ケアのポイント：ビタミンC＋日焼け止めのコンビが最強。日焼け止めを忘れると美白効果が大幅に低下します。
            </p>
          </div>
        </section>

        {/* 夜ルーティン */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🌙 夜の美白ルーティン（4ステップ）</h2>
          <div className="space-y-3">
            {NIGHT_ROUTINE.map((s) => (
              <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm">
                    {s.step}
                  </div>
                  <span className="text-lg">{s.icon}</span>
                </div>
                <div>
                  <p className="font-black text-gray-900 mb-1">{s.name}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.point}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-sm text-purple-700 font-bold">
              💡 夜は肌の修復タイム。トラネキサム酸・コウジ酸など刺激の少ない美白成分を夜にたっぷり使うことで、睡眠中に美白効果を高めます。
            </p>
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
        <section className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 space-y-3">
          <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
          <p className="text-gray-600 text-sm">スキンケアの基本から最新の美容トレンドまで幅広く解説しています。</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/skincare-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-white border border-yellow-200 text-gray-700 hover:bg-yellow-50 transition-all"
            >
              スキンケア基本ガイド →
            </Link>
            <Link
              href="/serum-guide"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-white border border-yellow-200 text-gray-700 hover:bg-yellow-50 transition-all"
            >
              美容液選び方ガイド →
            </Link>
          </div>
        </section>
      </div>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </>
  );
}
