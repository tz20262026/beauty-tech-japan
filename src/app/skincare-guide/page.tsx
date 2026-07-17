import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  title: "2026年版 スキンケアの基本ルーティン完全ガイド【朝晩の順番・選び方】",
  description: "スキンケアの正しい順番・使い方を完全解説。洗顔・化粧水・乳液・美容液・日焼け止めの順番から、肌質別（乾燥・混合・脂性）の選び方まで。2026年最新の海外美容法も紹介。",
  keywords: ["スキンケア 順番", "スキンケア ルーティン", "洗顔 化粧水 順番", "スキンケア 基本", "肌荒れ 対策"],
  openGraph: {
    title: "2026年版 スキンケア完全ガイド｜朝晩のルーティン・順番・選び方",
    description: "スキンケアの正しい順番・使い方を完全解説。肌質別の選び方・海外最新美容法も紹介",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026年版 スキンケア完全ガイド｜朝晩のルーティン・順番・選び方",
    description: "スキンケアの正しい順番・使い方を完全解説。肌質別の選び方・海外最新美容法も紹介",
  },
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/skincare-guide" },
};

const MORNING_STEPS = [
  { step: 1, name: "洗顔", icon: "💧", time: "1〜2分", point: "ぬるま湯（32〜34℃）で優しく。夜にしっかりケアしていれば朝は水洗いでもOK。強くこすらない。" },
  { step: 2, name: "化粧水（トナー）", icon: "🌊", time: "1〜2分", point: "洗顔後30秒以内に塗布。コットンより手のひらで包み込むように。乾燥肌は2〜3度重ねづけが効果的。" },
  { step: 3, name: "美容液（セラム）", icon: "✨", time: "1分", point: "化粧水の直後に。ビタミンC・ナイアシンアミド・レチノールなど目的に応じて選ぶ。朝はビタミンCが特におすすめ。" },
  { step: 4, name: "保湿クリーム（モイスチャライザー）", icon: "🧴", time: "30秒", point: "美容液の上に重ねてフタをする感覚で。オイリー肌はジェルタイプ、乾燥肌はリッチクリームを選ぶ。" },
  { step: 5, name: "日焼け止め（SPF/PA）", icon: "☀️", time: "30秒", point: "スキンケアの最終ステップ。SPF30以上・PA+++以上を毎日必ず。曇りの日も紫外線は降り注ぐ。" },
];

const NIGHT_STEPS = [
  { step: 1, name: "クレンジング（メイクあり）", icon: "🫧", time: "2〜3分", point: "メイクをした日はW洗顔必須。クレンジングオイル→泡洗顔の順。こすらず乳化させて落とす。" },
  { step: 2, name: "洗顔", icon: "💧", time: "1〜2分", point: "泡立てた洗顔料をTゾーンから優しく洗う。すすぎは32〜34℃で20〜30回。洗い流し残しが毛穴詰まりの原因に。" },
  { step: 3, name: "化粧水（トナー）", icon: "🌊", time: "2〜3分", point: "夜は朝より丁寧に。保湿力が高いタイプをたっぷり使う。手のひらでハンドプレスして浸透させる。" },
  { step: 4, name: "美容液（セラム）", icon: "✨", time: "1〜2分", point: "夜はレチノール・ペプチド・AHA/BHAなど再生・ターンオーバー促進成分が効果的。敏感肌は少量から始める。" },
  { step: 5, name: "目元クリーム（必要に応じて）", icon: "👁️", time: "30秒", point: "目元は皮膚が薄く乾燥しやすい。薬指で優しくトントンと塗布。強い力は禁物。" },
  { step: 6, name: "保湿クリーム / ナイトクリーム", icon: "🌙", time: "1分", point: "夜用は昼より高保湿なリッチタイプを。就寝中に肌の再生を最大化するのが夜のケアの目的。" },
];

const SKIN_TYPES = [
  {
    type: "乾燥肌",
    color: "#60a5fa",
    icon: "🏜️",
    desc: "水分・油分ともに不足。毛穴が目立ちにくいが、小じわ・カサつきが悩み。",
    tips: ["セラミド・ヒアルロン酸入りの保湿重視を選ぶ", "洗顔は優しいクリームタイプを使用", "化粧水を重ね付けしてしっかり補水", "夜はリッチなナイトクリームで修復を"],
  },
  {
    type: "脂性肌（オイリー肌）",
    color: "#34d399",
    icon: "✨",
    desc: "皮脂分泌が多く、テカリや毛穴の詰まりが悩み。肌のバリア機能は高め。",
    tips: ["ジェルやローションタイプの軽い保湿を選ぶ", "ノンコメドジェニック処方のコスメを優先", "毛穴ケアにはサリチル酸（BHA）が有効", "洗いすぎは逆に皮脂増加を引き起こすので注意"],
  },
  {
    type: "混合肌",
    color: "#f59e0b",
    icon: "⚖️",
    desc: "Tゾーンは脂っぽく、Uゾーンは乾燥。日本人に最も多い肌タイプ。",
    tips: ["部位別ケアが効果的（Tゾーンはさっぱり、Uゾーンはしっかり保湿）", "化粧水は全体にたっぷり、クリームはUゾーンに重点的に", "皮脂コントロールの化粧水を使う", "季節によってテクスチャーを変える"],
  },
  {
    type: "敏感肌",
    color: "#ec4899",
    icon: "🌸",
    desc: "外的刺激に反応しやすく、赤み・かゆみ・刺激感が出やすい。",
    tips: ["香料・アルコール・着色料フリーを選ぶ", "成分の少ないシンプルな処方を優先", "新商品は必ずパッチテストをしてから", "「低刺激」「敏感肌向け」表記は参考程度に（科学的根拠は任意）"],
  },
];

const FAQ = [
  { q: "スキンケアは何歳から始めるべきですか？", a: "基本的な保湿・日焼け止めは何歳からでも有効です。特に日焼け止めは子供の頃から習慣にすることで、将来の光老化（シミ・シワ）を大幅に予防できます。10代後半〜20代前半から本格的なルーティンを始めるのがおすすめです。" },
  { q: "化粧水と乳液、両方使う必要がありますか？", a: "基本的にはセットで使うことをおすすめします。化粧水が水分を補い、乳液がそれにフタをする役割です。ただし、オイリー肌の方は化粧水のみでも十分なケースがあります。お使いのアイテムの特性によって調整してください。" },
  { q: "日焼け止めは室内でも必要ですか？", a: "室内でも窓ガラスを通じてUVAは入ってきます。UVAは肌の奥まで届き、シミやたるみの原因となります。特にデスクワークで窓際に座る方は、室内でも日焼け止めを塗ることを推奨します。" },
  { q: "美容液はいつ使うのが正しいですか？", a: "基本的に化粧水の後・乳液/クリームの前が正しいステップです。成分の分子が小さい（水溶性）→大きい（油溶性）の順で重ねることで、より肌奥へ届きやすくなります。" },
  { q: "韓国スキンケアと日本のスキンケアの違いは？", a: "韓国スキンケアは多ステップ（7〜10ステップ）で水分補給を重視し、エッセンス・アンプル等のレイヤリングが特徴です。日本は品質・シンプルさを重視する傾向があります。どちらも優れており、現代はK-BeautyとJ-Beautyを組み合わせるハイブリッドアプローチが人気です。" },
];

export default function SkincareGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-12">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "朝のスキンケアルーティン 正しい順番",
        description: "朝のスキンケアを正しい順番で行う方法",
        step: MORNING_STEPS.map(s => ({
          "@type": "HowToStep",
          position: s.step,
          name: s.name,
          text: s.point,
        })),
      })}} />

      {/* ヘッダー */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-pink-50 text-pink-600 border border-pink-200">
          ✨ スキンケアガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          スキンケアの正しい順番・<br className="sm:hidden" />
          <span className="text-pink-600">ルーティン完全ガイド</span>
          <span className="text-lg ml-2 text-gray-600">2026年版</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          洗顔・化粧水・美容液・乳液・日焼け止めの正しい使い方と順番を徹底解説。肌質別の選び方・海外で話題の最新スキンケア法もご紹介します。
        </p>
      </section>

      {/* 朝のルーティン */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">☀️ 朝のスキンケア順番（5ステップ）</h2>
        <div className="space-y-3">
          {MORNING_STEPS.map(s => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm">{s.step}</div>
                <span className="text-lg">{s.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="font-black text-gray-900">{s.name}</span>
                  <span className="text-xs text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">{s.time}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.point}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 夜のルーティン */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">🌙 夜のスキンケア順番（6ステップ）</h2>
        <div className="space-y-3">
          {NIGHT_STEPS.map(s => (
            <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-sm">{s.step}</div>
                <span className="text-lg">{s.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="font-black text-gray-900">{s.name}</span>
                  <span className="text-xs text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">{s.time}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.point}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
      <ArticleAffiliateCard tags={[]} articleId="skincare-guide" />

      {/* 肌質別ガイド */}
      <section className="space-y-5">
        <h2 className="text-xl font-black text-gray-900">肌質別 スキンケアの選び方</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {SKIN_TYPES.map(({ type, color, icon, desc, tips }) => (
            <div key={type} className="rounded-2xl border p-5 space-y-3" style={{ borderColor: `${color}30`, background: `${color}06` }}>
              <div>
                <span className="font-black text-lg" style={{ color }}>{icon} {type}</span>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
              </div>
              <ul className="space-y-1.5">
                {tips.map(t => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold flex-shrink-0" style={{ color }}>→</span>
                    {t}
                  </li>
                ))}
              </ul>
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

      {/* 最新記事へ誘導 */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-2xl p-6 space-y-3">
        <h2 className="font-black text-gray-900">海外の最新スキンケアトレンドをチェック</h2>
        <p className="text-gray-600 text-sm">Allure・Byrdie・Vogue Beautyから毎日最新の美容情報をお届け中。</p>
        <Link href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}>
          最新記事を読む →
        </Link>
      </section>

      {/* 関連ガイドへ誘導 */}
      <section className="bg-gradient-to-br from-amber-50 to-pink-50 border border-amber-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/serum-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            美容液の選び方ガイド →
          </Link>
          <Link
            href="/sunscreen-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #3b82f6, #ec4899)" }}
          >
            日焼け止め完全ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
