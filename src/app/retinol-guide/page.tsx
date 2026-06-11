import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "レチノール美容液の選び方・効果・副作用完全ガイド2026年【皮膚科医監修】| Beauty Tech Japan",
  description: "レチノールの効果（シワ・毛穴・美白）、濃度の選び方（初心者向け0.1%〜）、副作用（A反応）の対処法、使い方のステップアップ方法を徹底解説。2026年最新版。",
  keywords: [
    "レチノール 美容液",
    "レチノール 効果",
    "レチノール 副作用",
    "レチノール 濃度",
    "A反応 対処法",
    "レチノール 選び方",
    "レチノール 初心者",
    "レチノール シワ",
    "レチノール 毛穴",
  ],
  alternates: {
    canonical: "https://beauty-tech-japan.vercel.app/retinol-guide",
  },
  openGraph: {
    title: "レチノール美容液の選び方・効果・副作用完全ガイド2026年【皮膚科医監修】",
    description: "レチノールの効果・副作用・濃度の選び方を完全解説。A反応の対処法・使い方ステップアップまでわかる",
    type: "article",
    locale: "ja_JP",
    url: "https://beauty-tech-japan.vercel.app/retinol-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "レチノール美容液の選び方・効果・副作用完全ガイド2026年",
    description: "レチノールの効果・濃度・副作用・使い方ステップアップを徹底解説",
  },
};

interface ConcentrationLevel {
  level: string;
  range: string;
  target: string;
  color: string;
  note: string;
}

interface StepItem {
  step: number;
  title: string;
  desc: string;
  duration: string;
  color: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const CONCENTRATION_LEVELS: ConcentrationLevel[] = [
  {
    level: "入門・超低濃度",
    range: "0.025〜0.05%",
    target: "初めてレチノールを使う方・敏感肌",
    color: "#10b981",
    note: "刺激がほぼなく使いやすい。肌をレチノールに慣らす期間に最適。",
  },
  {
    level: "初心者向け・低濃度",
    range: "0.1〜0.3%",
    target: "レチノール使用経験1〜3ヶ月の方",
    color: "#06b6d4",
    note: "ターンオーバー促進を実感しやすい濃度。A反応が出ることもあるが多くの人が問題なく使える。",
  },
  {
    level: "中濃度",
    range: "0.5%",
    target: "6ヶ月以上使用経験のある方",
    color: "#f59e0b",
    note: "シワ・毛穴への明らかな効果を期待できる。肌が慣れてから移行する。",
  },
  {
    level: "高濃度",
    range: "1%以上",
    target: "上級者・皮膚科医の指導のもとで",
    color: "#ef4444",
    note: "強い効果がある一方でA反応（乾燥・剥け・赤み）が出やすい。初心者には不推奨。",
  },
];

const STEP_UP: StepItem[] = [
  {
    step: 1,
    title: "週1〜2回から始める",
    desc: "最初の2〜4週間は週1〜2回の使用でOK。肌の反応を見ながら少しずつ慣らしていく。",
    duration: "2〜4週間",
    color: "#10b981",
  },
  {
    step: 2,
    title: "週3〜4回に増やす",
    desc: "A反応（乾燥・赤み・皮剥け）が出ていなければ週3〜4回に増やす。保湿を強化しながら継続。",
    duration: "4〜8週間",
    color: "#06b6d4",
  },
  {
    step: 3,
    title: "毎晩使用へ移行",
    desc: "肌が慣れてきたら毎晩使用に。ここまで来たら効果を最大限に引き出せる段階。",
    duration: "2〜3ヶ月〜",
    color: "#8b5cf6",
  },
  {
    step: 4,
    title: "濃度を上げる（任意）",
    desc: "毎晩使用して3ヶ月以上問題なければ、次の濃度ステージへ。急がず慎重にステップアップ。",
    duration: "3ヶ月〜",
    color: "#f59e0b",
  },
];

const FAQ: FAQItem[] = [
  {
    q: "レチノールを使い始めたら皮が剥けました。これは正常ですか？",
    a: "はい、これは「レチノイド反応（A反応）」と呼ばれる正常な反応です。ターンオーバーが活性化されている証拠でもあります。乾燥・赤み・皮剥けが出た場合は使用頻度を週1〜2回に減らし、保湿を徹底してください。症状が1ヶ月以上続く場合は皮膚科への相談をおすすめします。",
  },
  {
    q: "レチノールは朝に使ってもいいですか？",
    a: "いいえ、レチノールは必ず夜のみ使用してください。光や酸素によって分解されやすく、また使用後は肌が紫外線に敏感になります。翌朝は必ずSPF30以上の日焼け止めを使用してください。",
  },
  {
    q: "レチノールとナイアシンアミドは一緒に使えますか？",
    a: "はい、ナイアシンアミドはレチノールの刺激を和らげる働きがあり、組み合わせとしておすすめです。ただし、直接混ぜるのは避け、別々に使用するか時間差（レチノール→保湿→ナイアシンアミド等）でスキンケアするのが理想的です。",
  },
  {
    q: "妊娠中・授乳中はレチノールを使えますか？",
    a: "いいえ、レチノール（ビタミンA誘導体全般）は妊娠中・授乳中の使用が推奨されていません。国内外の皮膚科学会でも使用を避けるよう指導されています。妊娠・授乳中の方はペプチドやヒアルロン酸などの代替成分を選んでください。",
  },
  {
    q: "レチノールの効果が実感できるまでどのくらいかかりますか？",
    a: "個人差はありますが、一般的に「ターンオーバーの改善」は4〜6週間、「シワ・毛穴への明らかな変化」は3〜6ヶ月が目安です。レチノールは継続使用が鍵。最初の数週間で効果が出なくても焦らず続けることが大切です。",
  },
];

export default function RetinolGuidePage() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-amber-50 text-amber-600 border border-amber-200">
          🔬 レチノール完全ガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          レチノール美容液の<br className="sm:hidden" />
          <span className="text-amber-500">選び方・効果・副作用</span>
          <span className="block text-lg text-gray-500 mt-1 font-bold">完全ガイド2026年【皮膚科医監修】</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          スキンケア成分の中でも最も科学的根拠のある「レチノール」。シワ・毛穴・美白への効果から、A反応（副作用）の対処法、初心者向けの濃度選び・ステップアップ方法まで完全解説します。
        </p>
        <div className="flex flex-wrap gap-2">
          {["シワ改善", "毛穴ケア", "ターンオーバー正常化", "ニキビ跡", "たるみ予防"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-bold">
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* レチノールとは */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🧬 レチノールとは？作用のメカニズム</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
          <p className="text-gray-700 text-sm leading-relaxed">
            レチノールはビタミンAの誘導体で、皮膚科学において<strong className="text-amber-600">「シワ改善に最も科学的エビデンスがある外用成分」</strong>として知られています。肌に塗布すると、体内でレチノイン酸（活性型ビタミンA）に変換され、以下の作用をもたらします。
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mt-3">
            {[
              { icon: "🔄", title: "ターンオーバー促進", desc: "古い角質の入れ替えを正常化し、くすみ・ざらつきを改善" },
              { icon: "🧱", title: "コラーゲン産生促進", desc: "真皮のコラーゲン・エラスチン合成を増やしシワ・ハリを改善" },
              { icon: "🔍", title: "毛穴・皮脂の正常化", desc: "過剰な皮脂分泌を抑制し、毛穴の開き・詰まりを改善" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-3 border border-amber-100 text-center">
                <span className="text-2xl">{icon}</span>
                <p className="font-bold text-gray-800 text-xs mt-1">{title}</p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 濃度の選び方 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">📊 レチノール濃度の選び方｜初心者は0.1%から</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          レチノールは濃度が高いほど効果が高い一方で、副作用（A反応）も出やすくなります。自分の肌状態・使用経験に合わせて選ぶことが重要です。
        </p>
        <div className="space-y-3">
          {CONCENTRATION_LEVELS.map(({ level, range, target, color, note }) => (
            <div
              key={level}
              className="rounded-2xl border p-4 space-y-2"
              style={{ borderColor: `${color}35`, background: `${color}06` }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                >
                  {level}
                </span>
                <span className="font-black text-lg" style={{ color }}>{range}</span>
              </div>
              <p className="text-sm font-bold text-gray-700">対象：{target}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800 font-bold">💡 初心者へのアドバイス</p>
          <p className="text-sm text-blue-700 mt-1 leading-relaxed">
            最初は必ず0.1%以下の低濃度から始めてください。レチノールは「慣れ」が最も重要。焦って高濃度にすると肌バリアが壊れてかえって悪化します。
          </p>
        </div>
      </section>

      {/* ステップアップ方法 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🪜 使い方・ステップアップの正しい順序</h2>
        <div className="space-y-3">
          {STEP_UP.map(({ step, title, desc, duration, color }) => (
            <div key={step} className="flex gap-4 p-4 rounded-2xl border border-gray-200 bg-white">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                style={{ background: color }}
              >
                {step}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-bold text-gray-900 text-sm">{title}</p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{ background: `${color}15`, color }}
                  >
                    {duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A反応（副作用）の対処法 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">⚠️ A反応（副作用）の症状と対処法</h2>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            レチノール使用初期に起こる「レチノイド反応（A反応）」は、ターンオーバーが急激に活性化されることで起こる一過性の反応です。適切に対処すれば乗り越えられます。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "主な症状", items: ["乾燥・突っ張り感", "赤み・熱感", "皮剥け・うろこ状のざらつき", "ニキビの一時的な悪化（初期フラッシュ）"] },
              {
                title: "対処法", items: [
                  "使用頻度を週1〜2回に落とす",
                  "保湿（セラミド・ヒアルロン酸）を強化",
                  "日焼け止めを必ず使用（朝）",
                  "症状がひどい場合は一時休止",
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-white rounded-xl p-4 border border-red-100">
                <p className="font-bold text-gray-800 text-xs mb-2">{title}</p>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 選び方のポイント */}
        <h2 className="text-xl font-black text-gray-900 pt-4">✅ レチノール美容液の選び方チェックリスト</h2>
        <div className="space-y-2">
          {[
            { point: "濃度が明記されている製品を選ぶ", detail: "「レチノール配合」だけでは濃度が不明。0.1%・0.3%などと明記された製品を選ぶ。" },
            { point: "遮光容器（チューブ・暗色ボトル）入りを選ぶ", detail: "レチノールは光で分解されやすいため、遮光設計の容器が品質を保つ。" },
            { point: "保湿成分（セラミド・ペプチド）が同時配合されているか", detail: "刺激を和らげる成分が一緒に入っているほうが初心者には使いやすい。" },
            { point: "フレグランス（香料）フリーを優先する", detail: "レチノールで敏感になった肌に香料は追加刺激になる。無香料を選ぶのがベター。" },
          ].map(({ point, detail }) => (
            <div key={point} className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
              <span className="text-green-500 font-black flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-gray-800 text-sm">{point}</p>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{detail}</p>
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
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 space-y-4">
        <h2 className="font-black text-gray-900">関連ガイドもチェック</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/niacinamide-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
          >
            ナイアシンアミドガイド →
          </Link>
          <Link
            href="/vitamin-c-serum-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
          >
            ビタミンC美容液ガイド →
          </Link>
          <Link
            href="/serum-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
          >
            美容液選び方ガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
