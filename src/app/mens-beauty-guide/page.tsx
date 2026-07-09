import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  title: "メンズ美容 入門ガイド2026年版【スキンケア・眉毛・脱毛・ヘアケア・初心者向け完全解説】",
  description:
    "メンズ美容の始め方を2026年版で完全解説。スキンケア・眉毛の整え方・脱毛・ヘアケア・メンズコスメ選びなど男性の美容ケアを初心者向けにわかりやすく解説します。",
  openGraph: {
    title: "メンズ美容 入門ガイド2026年版【スキンケア・眉毛・脱毛・ヘアケア】",
    description: "メンズスキンケア・眉毛・脱毛・ヘアケアの始め方を解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "メンズ美容入門ガイド2026年版",
    description: "メンズスキンケア・眉毛・脱毛・ヘアケアの始め方を解説。",
  },
};

interface CareItem {
  name: string;
  icon: string;
  priority: "必須" | "おすすめ" | "上級";
  budget: string;
  steps: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const CARE_ITEMS: CareItem[] = [
  {
    name: "スキンケア（洗顔・保湿）",
    icon: "💧",
    priority: "必須",
    budget: "月1,000〜3,000円",
    steps: ["朝夜の洗顔（泡洗顔料でやさしく洗う）", "化粧水・乳液 or オールインワンジェルで保湿", "日焼け止めを毎朝塗る（最重要）"],
  },
  {
    name: "眉毛の整え方",
    icon: "✂️",
    priority: "必須",
    budget: "初期費用1,500〜3,000円",
    steps: ["眉コームで毛の流れを整える", "眉の上下の余分な毛をハサミorカミソリで整える", "自然な形を保つ（剃りすぎ注意）"],
  },
  {
    name: "ヘアケア・セット",
    icon: "💇",
    priority: "必須",
    budget: "月2,000〜5,000円",
    steps: ["シャンプーはアミノ酸系を選ぶ（頭皮に優しい）", "コンディショナー or ヘアマスクで保湿", "ドライヤーで乾かしてからスタイリング剤で整える"],
  },
  {
    name: "ムダ毛ケア（脱毛）",
    icon: "🪒",
    priority: "おすすめ",
    budget: "家庭用：3〜10万円・サロン：数万〜数十万円",
    steps: ["自己処理の場合はシェービングジェルで肌を保護", "電気シェーバーor家庭用光脱毛を活用", "脱毛サロンは特に脇・ひげ・胸が人気"],
  },
  {
    name: "歯のホワイトニング",
    icon: "🦷",
    priority: "おすすめ",
    budget: "月1,000〜5,000円（市販品）",
    steps: ["ホワイトニング歯磨き粉を日常使いする", "歯磨きを毎食後2分以上丁寧に行う", "コーヒー・赤ワイン・タバコは着色の原因なので注意"],
  },
  {
    name: "フレグランス（香水）",
    icon: "🌸",
    priority: "上級",
    budget: "5,000〜30,000円/本",
    steps: ["手首の内側・首筋・肘の内側に少量つける", "運動後・体温が高い時は避ける（香りが強くなりすぎる）", "TPOに合わせて香りを選ぶ（オフィスは爽やか系）"],
  },
];

const FAQS: FaqItem[] = [
  {
    q: "メンズ美容を始めるのに最低限必要なものは何ですか？",
    a: "最低限必要なのは①泡立てネット付き洗顔料（男性向け）②化粧水・乳液（またはオールインワンジェル）③日焼け止め（SPF30以上）の3つです。この3点だけでもスキンケアの基礎は完成します。コスパが良いおすすめブランドはニベアメン・ラボシリーズ・バルクオム・ハトムギ化粧水などです。最初は3,000〜5,000円で全て揃えられます。",
  },
  {
    q: "男性がスキンケアをするメリットは何ですか？",
    a: "主なメリットは①見た目の清潔感・若々しさが向上する②肌荒れ・毛穴・テカリが改善される③シェービング後の肌へのダメージを軽減できる④紫外線対策で将来のシミ・シワを予防できる⑤第一印象・モテに繋がるという点です。特に20代・30代から始めることで、40代以降の肌の劣化速度が大幅に変わります。",
  },
  {
    q: "眉毛の整え方がわかりません。どうすれば自然な形になりますか？",
    a: "眉毛を自然に整えるポイントは①まず「眉のアーチの上ラインはそのまま」をキープする（上を剃りすぎると不自然になる）②下ラインの余分な毛だけを少量整える③眉間の毛を整えると清潔感がアップする④最初は整えすぎず少しずつ。また男性は「眉毛スタイリング剤」でまずは形を整えるだけでも印象が大きく変わります。不安な場合はプロの眉カットサービス（美容院・眉サロン）を利用するのがおすすめです。",
  },
  {
    q: "メンズ脱毛はどこから始めるのがおすすめですか？",
    a: "最も人気が高いのは①ひげ脱毛（毎日のシェービング時間の削減・肌荒れ改善）②脇脱毛（清潔感アップ・汗臭対策）③胸・腹脱毛（夏のビーチ・スポーツジムで気にならなくなる）の順番です。コスト面では家庭用光脱毛器（3〜10万円）でまず試してから、効果に満足できたらサロンに通うのがコスパが良い選択肢です。",
  },
  {
    q: "メンズ美容にかかる毎月の費用はどのくらいですか？",
    a: "始めたばかりの段階（基本スキンケアのみ）なら月1,000〜3,000円が目安です。眉毛・ヘアケアを加えると月3,000〜8,000円。サロン脱毛を加えると月5,000〜20,000円になります。最初は基本スキンケアから始めて、慣れてきたら徐々に範囲を広げることをおすすめします。美容にかかったコストは印象・清潔感・自信向上を通じて、仕事・プライベート両面で十分な投資対効果があります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const priorityStyle: Record<CareItem["priority"], string> = {
  "必須": "bg-red-500/20 text-red-300 border-red-500/30",
  "おすすめ": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "上級": "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function MensBeautyGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full px-4 py-1 mb-4">
            💪 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            メンズ美容<br />
            <span className="text-blue-400">入門ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【スキンケア・眉毛・脱毛・ヘアケア】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            男性のための美容ケア入門ガイド。<br />
            スキンケアから脱毛まで優先順位・予算・方法を解説。
          </p>
        </div>

        {/* ケア項目一覧 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            💪 メンズ美容ケア6選
          </h2>
          <div className="space-y-4">
            {CARE_ITEMS.map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-white font-black text-sm">{item.name}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${priorityStyle[item.priority]}`}>
                    {item.priority}
                  </span>
                </div>
                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs mb-3">
                  <span className="text-gray-600">💰 費用目安：</span>
                  <span className="text-gray-200">{item.budget}</span>
                </div>
                <div>
                  <p className="text-blue-400 text-xs font-bold mb-1">📋 実践ステップ</p>
                  <ul className="space-y-0.5">
                    {item.steps.map((s, j) => <li key={j} className="text-gray-600 text-xs">・{s}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="mens-beauty-guide" />

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🌸 女性向けスキンケアも参考に
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            スキンケアの基本的な考え方は男女共通。<br />
            女性向けスキンケアガイドも参考になります。
          </p>
          <a
            href="/skincare-guide"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            スキンケア完全ガイドを見る →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-blue-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
