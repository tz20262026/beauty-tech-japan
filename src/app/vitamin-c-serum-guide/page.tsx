import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  title: "ビタミンC美容液のおすすめ選び方2026年【シミ・毛穴・美白に効果的な使い方】",
  description: "ビタミンC美容液の種類（L-アスコルビン酸・誘導体）の違い、美白・シミ・毛穴への効果、使い方・重ね付けの順番、敏感肌向けの選び方を2026年最新版で完全解説。",
  keywords: [
    "ビタミンC 美容液",
    "ビタミンC誘導体 効果",
    "ビタミンC 選び方",
    "L-アスコルビン酸",
    "美白 美容液",
    "シミ 美容液",
    "毛穴 ビタミンC",
    "ビタミンC 敏感肌",
    "ビタミンC 使い方",
  ],
  alternates: {
    canonical: "https://beauty-tech-japan.vercel.app/vitamin-c-serum-guide",
  },
  openGraph: {
    title: "ビタミンC美容液のおすすめ選び方2026年【シミ・毛穴・美白に効果的な使い方】",
    description: "L-アスコルビン酸と誘導体の違い、美白・シミ・毛穴効果、使い方を完全解説",
    type: "article",
    locale: "ja_JP",
    url: "https://beauty-tech-japan.vercel.app/vitamin-c-serum-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "ビタミンC美容液のおすすめ選び方2026年",
    description: "種類の違い・効果・使い方・選び方を徹底解説",
  },
};

interface VitaminCType {
  name: string;
  stability: string;
  penetration: string;
  irritation: string;
  price: string;
  bestFor: string;
  color: string;
}

interface EffectItem {
  icon: string;
  title: string;
  mechanism: string;
  color: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const VITAMIN_C_TYPES: VitaminCType[] = [
  {
    name: "L-アスコルビン酸（純粋VC）",
    stability: "△ 不安定（酸化しやすい）",
    penetration: "◎ 最も高い",
    irritation: "△ 刺激あり（高濃度）",
    price: "○ 比較的安価",
    bestFor: "最速でシミを薄くしたい・刺激に強い肌",
    color: "#f97316",
  },
  {
    name: "アスコルビルグルコシド（AA2G）",
    stability: "◎ 非常に安定",
    penetration: "○ 良好",
    irritation: "◎ 刺激が少ない",
    price: "○ 中程度",
    bestFor: "敏感肌・美白目的・初めてのVC美容液",
    color: "#f59e0b",
  },
  {
    name: "アスコルビルリン酸Na（APNa）",
    stability: "◎ 安定",
    penetration: "△ やや低い",
    irritation: "◎ 刺激が少ない",
    price: "◎ 安価",
    bestFor: "ニキビ・毛穴ケア・コスパ重視",
    color: "#10b981",
  },
  {
    name: "テトラヘキシルデカン酸アスコルビル（VCIP）",
    stability: "◎ 非常に安定",
    penetration: "◎ 油溶性で高い浸透",
    irritation: "◎ 最も刺激少",
    price: "△ やや高価",
    bestFor: "敏感肌・乾燥肌・レチノール併用者",
    color: "#8b5cf6",
  },
];

const EFFECTS: EffectItem[] = [
  {
    icon: "🌑",
    title: "シミ・くすみの改善",
    mechanism: "メラニン生成の原因となるチロシナーゼ酵素の働きを阻害し、新たなシミの形成を防ぐ。既存のメラニンを還元・脱色してシミを薄くする効果も。",
    color: "#f97316",
  },
  {
    icon: "🔵",
    title: "毛穴の引き締め",
    mechanism: "皮脂の過剰分泌を抑制し、コラーゲン産生を促すことで毛穴周りの皮膚を引き締める。角栓の酸化（黒ずみ毛穴）を防ぐ抗酸化作用も。",
    color: "#06b6d4",
  },
  {
    icon: "✨",
    title: "コラーゲン合成促進・ハリアップ",
    mechanism: "コラーゲン合成に不可欠なヒドロキシプロリン形成をサポート。継続使用でハリ・弾力の改善が期待できる。",
    color: "#d946ef",
  },
  {
    icon: "🛡️",
    title: "抗酸化・紫外線ダメージ軽減",
    mechanism: "活性酸素を除去し、紫外線によるDNAダメージを軽減。朝使用でSPFとの相乗効果が期待でき、シミの予防効果が高まる。",
    color: "#8b5cf6",
  },
];

const FAQ: FAQItem[] = [
  {
    q: "ビタミンC美容液は朝・夜どちらに使うのが効果的ですか？",
    a: "朝の使用が特に効果的です。ビタミンCの抗酸化作用が、日中の紫外線・大気汚染による活性酸素ダメージを軽減します。日焼け止めと組み合わせることで、シミ予防効果が大幅にアップします。L-アスコルビン酸（純粋VC）の安定性が気になる場合はVC誘導体を選ぶか、夜のみ使用でも問題ありません。",
  },
  {
    q: "ビタミンC美容液とレチノールは一緒に使えますか？",
    a: "一般的に「朝にビタミンC、夜にレチノール」という使い分けが推奨されています。同時に使用すると、互いの効果を打ち消す可能性があります。ただし、油溶性のVCIPとレチノールは夜に一緒に使えるとする研究もあります。初心者はまず朝夕に分けて使うのが最も安全です。",
  },
  {
    q: "ビタミンC美容液の刺激が強くてヒリヒリします。どうすればいいですか？",
    a: "L-アスコルビン酸（純粋VC）の高濃度製品でよく起こります。敏感肌の方にはアスコルビルグルコシドやVCIPなどの誘導体がおすすめです。また、使用量を減らす・週数回から始める・化粧水でしっかり保湿してから使用するなどの対策も有効です。",
  },
  {
    q: "ビタミンC美容液のにおいが気になります。使っても大丈夫ですか？",
    a: "L-アスコルビン酸は酸化すると黄〜茶色になり、においが出ることがあります。変色・酸っぱいにおいが強い場合は劣化のサインで、効果が落ちている可能性があります。開封後は3〜6ヶ月を目安に使い切り、冷暗所で保管してください。誘導体タイプ（AA2G・VCIP等）は安定性が高くこの問題が起きにくいです。",
  },
];

export default function VitaminCSerumGuidePage() {
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
          🍋 ビタミンC美容液ガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          ビタミンC美容液の<br className="sm:hidden" />
          <span className="text-orange-500">おすすめ選び方</span>
          <span className="block text-lg text-gray-600 mt-1 font-bold">2026年版【シミ・毛穴・美白に効果的な使い方】</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          「ビタミンC美容液は種類が多すぎてどれを選べばいいかわからない」という方へ。L-アスコルビン酸と誘導体の違い、シミ・毛穴・美白への効果、敏感肌向けの選び方まで完全ガイドします。
        </p>
        <div className="flex flex-wrap gap-2">
          {["シミ予防", "美白", "毛穴ケア", "抗酸化", "コラーゲン促進"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 font-bold">
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* 効果一覧 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">💡 ビタミンC美容液が肌にもたらす4つの効果</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {EFFECTS.map(({ icon, title, mechanism, color }) => (
            <div
              key={title}
              className="rounded-2xl border p-4 space-y-2"
              style={{ borderColor: `${color}30`, background: `${color}06` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{icon}</span>
                <p className="font-black text-gray-900 text-sm">{title}</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{mechanism}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
      <ArticleAffiliateCard tags={[]} articleId="vitamin-c-serum-guide" />

      {/* 種類の違い */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🧪 ビタミンC美容液の種類（L-アスコルビン酸vs誘導体）の違いを徹底比較</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          ビタミンC美容液には大きく「純粋VC（L-アスコルビン酸）」と「VC誘導体」の2系統があります。それぞれの特徴を理解して自分の肌に合ったタイプを選びましょう。
        </p>
        <div className="space-y-4">
          {VITAMIN_C_TYPES.map(({ name, stability, penetration, irritation, price, bestFor, color }) => (
            <div
              key={name}
              className="rounded-2xl border p-5 space-y-3"
              style={{ borderColor: `${color}35`, background: `${color}06` }}
            >
              <h3 className="font-black text-gray-900 text-base" style={{ color }}>{name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: "安定性", value: stability },
                  { label: "浸透力", value: penetration },
                  { label: "刺激", value: irritation },
                  { label: "コスパ", value: price },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white rounded-xl p-2 border border-gray-100 text-center">
                    <p className="text-xs text-gray-600 font-bold">{label}</p>
                    <p className="text-xs text-gray-700 mt-1 font-bold">{value}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-2 bg-white rounded-xl p-3 border border-gray-100">
                <span className="font-bold text-xs flex-shrink-0 mt-0.5" style={{ color }}>こんな人に</span>
                <p className="text-sm text-gray-600">{bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 使い方・重ね付けの順番 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">📝 ビタミンC美容液の正しい使い方・スキンケアの順番</h2>
        <div className="space-y-3">
          {[
            { step: "1", label: "洗顔", detail: "余分な皮脂・汚れを落とし、有効成分が浸透しやすい肌に整える。" },
            { step: "2", label: "化粧水", detail: "肌を十分に潤わせてから使用。乾いた肌に直接塗ると刺激が出やすい。" },
            { step: "3", label: "ビタミンC美容液", detail: "化粧水の後に適量（2〜3滴または米粒大）を顔全体に薄く伸ばす。目元・口元の粘膜付近は避ける。" },
            { step: "4", label: "保湿（乳液・クリーム）", detail: "ビタミンCは乾燥しやすいため、しっかり保湿してフタをする。セラミド・ヒアルロン酸との相性◎。" },
            { step: "5", label: "日焼け止め（朝のみ）", detail: "ビタミンCは光で分解されやすいため、朝は必ずSPF30以上を使用。これがシミ予防効果を最大化する。" },
          ].map(({ step, label, detail }) => (
            <div key={step} className="flex gap-4 p-4 rounded-2xl border border-gray-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-black text-white text-sm flex-shrink-0">
                {step}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{label}</p>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 敏感肌向けの選び方 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🌸 敏感肌向けビタミンC美容液の選び方</h2>
        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 space-y-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            敏感肌の方は純粋VC（L-アスコルビン酸）の高濃度製品は避け、刺激の少ないVC誘導体を選ぶことをおすすめします。
          </p>
          <div className="space-y-2">
            {[
              "アスコルビルグルコシド（AA2G）またはVCIP配合製品を選ぶ",
              "無香料・無着色・アルコールフリーを優先する",
              "まずパッチテスト（腕の内側などで24時間）を行う",
              "週2〜3回から始めて様子を見る",
              "保湿成分（セラミド・ヒアルロン酸）が同時配合されているものを選ぶ",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-pink-400 flex-shrink-0 mt-0.5">✓</span>
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
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
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/retinol-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}
          >
            レチノールガイド →
          </Link>
          <Link
            href="/niacinamide-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
          >
            ナイアシンアミドガイド →
          </Link>
          <Link
            href="/whitening-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
          >
            美白・ブライトニングガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
