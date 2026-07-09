import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  title: "ナイアシンアミドの効果・選び方完全ガイド2026年【毛穴・美白・ニキビ跡に】",
  description: "ナイアシンアミドの毛穴・美白・ニキビ跡・くすみへの効果、推奨濃度（5〜10%）、レチノールやビタミンCとの使い分け、スキンケアの順番を2026年最新版で完全解説。",
  keywords: [
    "ナイアシンアミド 効果",
    "ナイアシンアミド 毛穴",
    "ナイアシンアミド 美白",
    "ナイアシンアミド 濃度",
    "ナイアシンアミド 選び方",
    "ナイアシンアミド ニキビ跡",
    "ナイアシンアミド 敏感肌",
    "ナイアシンアミド レチノール",
    "ナイアシンアミド ビタミンC",
  ],
  alternates: {
    canonical: "https://beauty-tech-japan.vercel.app/niacinamide-guide",
  },
  openGraph: {
    title: "ナイアシンアミドの効果・選び方完全ガイド2026年【毛穴・美白・ニキビ跡に】",
    description: "毛穴・美白・ニキビ跡効果から推奨濃度・他成分との使い分けまで完全解説",
    type: "article",
    locale: "ja_JP",
    url: "https://beauty-tech-japan.vercel.app/niacinamide-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "ナイアシンアミドの効果・選び方完全ガイド2026年",
    description: "毛穴・美白・ニキビ跡への効果・濃度選び・使い方を徹底解説",
  },
};

interface EffectItem {
  icon: string;
  title: string;
  detail: string;
  color: string;
}

interface CombinationItem {
  ingredient: string;
  icon: string;
  timing: string;
  note: string;
  compatible: boolean;
  color: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const EFFECTS: EffectItem[] = [
  {
    icon: "🔵",
    title: "毛穴の引き締め・皮脂コントロール",
    detail: "皮脂腺の皮脂分泌を調節し、毛穴の開きや黒ずみ・いちご鼻を改善。特に5〜10%の高濃度では顕著な効果が見られる。",
    color: "#06b6d4",
  },
  {
    icon: "🌑",
    title: "美白・シミ・くすみ改善",
    detail: "メラニンを肌表面の角化細胞へ運ぶ「メラノソーム輸送」を阻害し、新しいシミの形成を防ぐ。既存のくすみ・不均一な肌トーンにも効果的。",
    color: "#d946ef",
  },
  {
    icon: "🔴",
    title: "ニキビ跡・赤みの軽減",
    detail: "抗炎症作用により、活動性ニキビの炎症を鎮め、ニキビ跡の赤み・色素沈着を薄くする。過剰な皮脂分泌を抑えニキビの再発予防にも。",
    color: "#10b981",
  },
  {
    icon: "✨",
    title: "バリア機能の強化・保湿",
    detail: "セラミド・遊離脂肪酸など皮膚バリアを構成する成分の合成を促進。乾燥・外部刺激への抵抗力を高め、健康な肌を維持する。",
    color: "#f59e0b",
  },
  {
    icon: "📏",
    title: "小じわ・ハリの改善",
    detail: "コラーゲンの産生を促進し、真皮のマトリックスタンパクを増加させることで、小じわの改善と肌の弾力回復を助ける。",
    color: "#8b5cf6",
  },
];

const COMBINATIONS: CombinationItem[] = [
  {
    ingredient: "レチノール",
    icon: "🔬",
    timing: "ナイアシンアミド先・レチノール後（夜）",
    note: "ナイアシンアミドはレチノールのA反応（乾燥・赤み）を緩和する。朝にナイアシンアミド、夜にレチノールと分けるのも◎。",
    compatible: true,
    color: "#f59e0b",
  },
  {
    ingredient: "ビタミンC（L-アスコルビン酸）",
    icon: "🍋",
    timing: "朝VC・夜ナイアシンアミドで時間差使用を推奨",
    note: "pH環境が異なると互いの効果が落ちる可能性がある。VC誘導体（AA2G等）とは問題なく併用可能。",
    compatible: true,
    color: "#f97316",
  },
  {
    ingredient: "AHA（グリコール酸・乳酸）",
    icon: "🧴",
    timing: "同時使用は一時的に避ける",
    note: "AHAの低pHとナイアシンアミドを同時使用するとナイアシン（フラッシング成分）に変換される可能性あり。時間差（数時間）で使用するのが安全。",
    compatible: false,
    color: "#ef4444",
  },
  {
    ingredient: "ペプチド",
    icon: "🧬",
    timing: "どちらの順番でもOK",
    note: "ナイアシンアミドとペプチドは相性が良く、ハリ・くすみ改善の相乗効果が期待できる。両者とも刺激が少なく組み合わせやすい。",
    compatible: true,
    color: "#8b5cf6",
  },
];

const FAQ: FAQItem[] = [
  {
    q: "ナイアシンアミドは敏感肌でも使えますか？",
    a: "はい、ナイアシンアミドはスキンケア成分の中でも刺激が少なく、敏感肌に向いた成分です。ただし、稀に「フラッシング（皮膚のほてり・赤み）」が起こる方がいます。これはニコチン酸（ナイアシン）への変換によるもので、5%以下の低濃度製品から始めるか、pHが低い製品との同時使用を避けることで防げます。",
  },
  {
    q: "ナイアシンアミドの効果が実感できるまでどのくらいかかりますか？",
    a: "毛穴・皮脂コントロールは比較的早く（2〜4週間で変化を感じる方も）、美白・シミ改善は4〜12週間が目安です。継続が重要で、最低8週間は毎日使用することをおすすめします。レチノールやビタミンCと組み合わせると効果がより早く現れることがあります。",
  },
  {
    q: "ナイアシンアミドの推奨濃度は何%ですか？",
    a: "一般的な推奨濃度は5〜10%です。初めての方は5%から始め、肌が慣れてきたら10%に移行するのが理想的です。市販品ではThe Ordinary（10%）やPaula's Choice（10%）などが有名です。10%を超える製品も存在しますが、追加的なベネフィットはほとんどなく、フラッシングのリスクが高まることがあります。",
  },
  {
    q: "ナイアシンアミドとビタミンCを一緒に使うと無効になると聞きましたが本当ですか？",
    a: "これは過去に言われていた「ナイアシンとアスコルビン酸が反応して黄色いニコチン酸アスコルビル錯体を形成する」という説です。しかし現在の研究では、一般的なスキンケア製品に使われる濃度・pH・温度条件では実際にはほぼ問題ないとされています。ただし念のため、L-アスコルビン酸（純粋VC）使用時は時間差（朝VC・夜ナイアシンアミド）での使用を推奨します。",
  },
];

export default function NiacinamideGuidePage() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-purple-50 text-purple-600 border border-purple-200">
          💜 ナイアシンアミド完全ガイド
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          ナイアシンアミドの<br className="sm:hidden" />
          <span className="text-purple-500">効果・選び方</span>
          <span className="block text-lg text-gray-500 mt-1 font-bold">完全ガイド2026年【毛穴・美白・ニキビ跡に】</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          「万能スキンケア成分」として世界中で注目されるナイアシンアミド（ビタミンB3）。毛穴・美白・ニキビ跡・くすみ・ハリと複数のお悩みに同時アプローチできる理由を、推奨濃度・他成分との相性も含めて完全解説します。
        </p>
        <div className="flex flex-wrap gap-2">
          {["毛穴引き締め", "美白", "ニキビ跡", "くすみ改善", "バリア強化"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-bold">
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* ナイアシンアミドとは */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🧬 ナイアシンアミドとは？なぜ「万能成分」と呼ばれるのか</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 space-y-3">
          <p className="text-gray-700 text-sm leading-relaxed">
            ナイアシンアミドはビタミンB3の一形態で、水溶性・安定性が高く、幅広いpH環境で安定して機能します。「刺激が少ない」「多様な悩みに対応」「他成分との相性が良い」という3拍子が揃い、
            <strong className="text-purple-600">初心者からエキスパートまで使える万能成分</strong>として評価されています。
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { icon: "🛡️", title: "低刺激・高安定", desc: "光・熱・pH変化に強く、配合しやすい。敏感肌でも使いやすい" },
              { icon: "🔀", title: "多悩みに対応", desc: "毛穴・美白・ニキビ跡・ハリなど複数悩みに同時アプローチ可能" },
              { icon: "🤝", title: "他成分との相性◎", desc: "レチノール・ペプチドなど多くの成分と組み合わせて使える" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-3 border border-purple-100 text-center">
                <span className="text-2xl">{icon}</span>
                <p className="font-bold text-gray-800 text-xs mt-1">{title}</p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
      <ArticleAffiliateCard tags={[]} articleId="niacinamide-guide" />

      {/* 効果一覧 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">✨ ナイアシンアミドが持つ5つの美肌効果</h2>
        <div className="space-y-3">
          {EFFECTS.map(({ icon, title, detail, color }) => (
            <div
              key={title}
              className="rounded-2xl border p-4 space-y-2"
              style={{ borderColor: `${color}30`, background: `${color}06` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-black text-gray-900 text-base">{title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 推奨濃度 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">📊 推奨濃度（5〜10%）と選び方のポイント</h2>
        <div className="space-y-3">
          {[
            { range: "2〜5%", label: "入門・保湿・バリア強化", color: "#10b981", desc: "初めて使う方や敏感肌に。バリア機能改善・保湿効果を実感しやすい。刺激がほぼなく日常使いに最適。" },
            { range: "5〜10%", label: "毛穴・美白・ニキビ跡（最も推奨）", color: "#8b5cf6", desc: "多くの臨床研究で採用される濃度。毛穴・美白・ニキビ跡全ての悩みに有効。バランスが最も良い。" },
            { range: "10%超", label: "上級者向け（必ずしも有効ではない）", color: "#f59e0b", desc: "10%超は追加ベネフィットが少なく、フラッシング（ほてり）リスクが高まる場合がある。10%で十分。" },
          ].map(({ range, label, color, desc }) => (
            <div
              key={range}
              className="rounded-2xl border p-4 space-y-2"
              style={{ borderColor: `${color}30`, background: `${color}06` }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-black text-2xl" style={{ color }}>{range}</span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
                >
                  {label}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 他成分との使い分け */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">🔀 レチノール・ビタミンCとの使い分け・相性ガイド</h2>
        <div className="space-y-3">
          {COMBINATIONS.map(({ ingredient, icon, timing, note, compatible, color }) => (
            <div
              key={ingredient}
              className="rounded-2xl border p-4 space-y-2"
              style={{ borderColor: `${color}30`, background: `${color}06` }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xl">{icon}</span>
                <span className="font-black text-gray-900">ナイアシンアミド × {ingredient}</span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: compatible ? "#10b98115" : "#ef444415",
                    color: compatible ? "#10b981" : "#ef4444",
                    border: `1px solid ${compatible ? "#10b98130" : "#ef444430"}`,
                  }}
                >
                  {compatible ? "✓ 併用可" : "△ 要注意"}
                </span>
              </div>
              <p className="text-xs font-bold text-gray-700">タイミング：{timing}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* スキンケアの順番 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">📋 ナイアシンアミドを使ったスキンケアの順番</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <div className="space-y-3">
            {[
              { step: "朝", items: ["洗顔 → 化粧水 → ビタミンC美容液（VC誘導体） → ナイアシンアミド美容液 → 乳液/クリーム → 日焼け止め"] },
              { step: "夜", items: ["クレンジング・洗顔 → 化粧水 → ナイアシンアミド美容液 → レチノール（週2〜3回） → 保湿クリーム"] },
            ].map(({ step, items }) => (
              <div key={step} className="flex gap-3">
                <span className="text-xs font-black px-2 py-1 rounded bg-purple-100 text-purple-700 flex-shrink-0 h-fit">{step}</span>
                <div className="space-y-1">
                  {items.map((item) => (
                    <p key={item} className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ ナイアシンアミドは朝晩両方に使用OK。朝夜の使用で効果を最大化できます。
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

      {/* 関連ガイドへ誘導 */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 space-y-4">
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
            href="/vitamin-c-serum-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
          >
            ビタミンC美容液ガイド →
          </Link>
          <Link
            href="/pore-care-guide"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
          >
            毛穴ケアガイド →
          </Link>
        </div>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionBeauty />
    </div>
  );
}
