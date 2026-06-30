import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

// =============================================
// メタデータ（SEO）
// =============================================
export const metadata: Metadata = {
  title: "飲む美容サプリ最強ランキング2026年【美白・コラーゲン・腸活】",
  description:
    "2026年最新の飲む美容サプリをカテゴリ別にランキング。美白・コラーゲン・ヒアルロン酸・腸活・抗酸化など目的別に最強サプリを徹底比較。選び方・飲み合わせ・タイミングも解説。",
  keywords: [
    "美容サプリ ランキング",
    "飲む美容液",
    "コラーゲン サプリ おすすめ",
    "美白 サプリ",
    "腸活 美容",
    "ヒアルロン酸 サプリ",
  ],
  alternates: {
    canonical: "https://beauty-tech-japan.vercel.app/beauty-supplements",
  },
  openGraph: {
    title: "飲む美容サプリ最強ランキング2026年【美白・コラーゲン・腸活】",
    description:
      "目的別・美容サプリ最強ランキング。美白・コラーゲン・腸活・抗酸化など成分別に選ぶポイントと飲み方を完全解説。",
    type: "article",
    locale: "ja_JP",
    siteName: "Beauty Tech Japan",
  },
  twitter: {
    card: "summary_large_image",
    title: "飲む美容サプリ最強ランキング2026年【美白・コラーゲン・腸活】",
    description:
      "目的別・美容サプリ最強ランキング。美白・コラーゲン・腸活・抗酸化など成分別に選ぶポイントと飲み方を完全解説。",
  },
};

// =============================================
// 型定義
// =============================================
interface SupplementCategory {
  icon: string;
  name: string;
  color: string;
  effect: string;
  keyIngredients: string[];
  timing: string;
  caution: string;
  monthlyBudget: string;
}

interface IngredientInfo {
  name: string;
  icon: string;
  scienceScore: string;
  color: string;
  benefit: string;
  dailyDose: string;
  combination: string;
  note: string;
}

interface FaqItem {
  q: string;
  a: string;
}

// =============================================
// データ
// =============================================
const CATEGORIES: SupplementCategory[] = [
  {
    icon: "✨",
    name: "美白・ブライトニング",
    color: "#f59e0b",
    effect: "シミ・くすみ・肝斑の予防と改善",
    keyIngredients: ["ビタミンC（1,000〜3,000mg/日）", "トラネキサム酸", "L-システイン", "アスタキサンチン"],
    timing: "朝食後（ビタミンCは食後が胃への刺激を抑える）",
    caution: "トラネキサム酸は医薬品成分。市販サプリは含有量に注意",
    monthlyBudget: "3,000〜8,000円",
  },
  {
    icon: "💧",
    name: "コラーゲン・ハリ",
    color: "#ec4899",
    effect: "肌の弾力・ハリ・小じわ改善",
    keyIngredients: ["低分子コラーゲンペプチド（5,000mg〜）", "ビタミンC（コラーゲン合成に必須）", "ヒアルロン酸", "プロテオグリカン"],
    timing: "就寝前（コラーゲン合成は夜間に活発化）",
    caution: "飲んだコラーゲンは直接肌に届くわけではなくアミノ酸に分解される。ビタミンCとの併用が必須",
    monthlyBudget: "2,000〜6,000円",
  },
  {
    icon: "🦠",
    name: "腸活・美腸",
    color: "#10b981",
    effect: "腸内環境改善→肌荒れ・くすみ・吹き出もの改善",
    keyIngredients: ["乳酸菌（100億個以上）", "ビフィズス菌", "食物繊維（イヌリン・難消化性デキストリン）", "短鎖脂肪酸産生菌"],
    timing: "食前または食後（種類による）",
    caution: "効果が出るまで2〜4週間かかる。急な大量摂取で腹部膨満感が出ることあり",
    monthlyBudget: "2,000〜5,000円",
  },
  {
    icon: "🛡️",
    name: "抗酸化・エイジングケア",
    color: "#8b5cf6",
    effect: "活性酸素除去・細胞レベルのエイジングケア",
    keyIngredients: ["アスタキサンチン（6〜12mg）", "コエンザイムQ10（100mg〜）", "ビタミンE", "ポリフェノール（レスベラトロール・ケルセチン）"],
    timing: "食後（脂溶性成分は食事と一緒に）",
    caution: "抗凝固剤（ワーファリン等）との相互作用に注意。医師に相談を",
    monthlyBudget: "4,000〜12,000円",
  },
  {
    icon: "💊",
    name: "保湿・乾燥ケア",
    color: "#06b6d4",
    effect: "肌の水分量維持・バリア機能サポート",
    keyIngredients: ["ヒアルロン酸（120〜240mg）", "セラミド（植物性セラミド推奨）", "プロテオグリカン", "グルコサミン"],
    timing: "朝夕2回に分けて飲むと効果的",
    caution: "甲殻類アレルギーがある場合はグルコサミン（エビ・カニ由来）は避ける",
    monthlyBudget: "2,000〜5,000円",
  },
];

const INGREDIENTS: IngredientInfo[] = [
  {
    name: "ビタミンC",
    icon: "🍋",
    scienceScore: "★★★★★",
    color: "#f59e0b",
    benefit: "美白・コラーゲン合成促進・抗酸化・免疫強化",
    dailyDose: "1,000〜3,000mg（分割摂取が理想）",
    combination: "ビタミンE・亜鉛・コラーゲンペプチドと相乗効果",
    note: "一度に大量摂取すると尿に排出されるため、1日3回に分けて飲むのが理想",
  },
  {
    name: "コラーゲンペプチド",
    icon: "💎",
    scienceScore: "★★★★☆",
    color: "#ec4899",
    benefit: "肌の弾力・ハリ改善・骨・関節サポート",
    dailyDose: "5,000〜10,000mg",
    combination: "ビタミンC必須・ヒアルロン酸と組み合わせで相乗効果",
    note: "低分子コラーゲンペプチド（分子量3,000ダルトン以下）が吸収率が高い",
  },
  {
    name: "アスタキサンチン",
    icon: "🦐",
    scienceScore: "★★★★☆",
    color: "#ef4444",
    benefit: "抗酸化力がビタミンCの6,000倍・シミ予防・目の疲れ",
    dailyDose: "6〜12mg",
    combination: "ビタミンE・DHA・EPAと組み合わせで脂溶性ゆえ吸収がアップ",
    note: "ヘマトコッカス藻由来のものが研究で最も多く使用されている",
  },
  {
    name: "ヒアルロン酸",
    icon: "💧",
    scienceScore: "★★★☆☆",
    color: "#06b6d4",
    benefit: "肌の水分量維持・関節サポート",
    dailyDose: "120〜240mg",
    combination: "コラーゲンペプチド・セラミドとのセット摂取が効果的",
    note: "経口ヒアルロン酸の肌への直接効果は科学的には議論中。肌外用との併用が確実",
  },
  {
    name: "乳酸菌・ビフィズス菌",
    icon: "🦠",
    scienceScore: "★★★★☆",
    color: "#10b981",
    benefit: "腸内環境改善・肌荒れ・便秘・免疫強化",
    dailyDose: "100億〜1,000億CFU",
    combination: "食物繊維（プレバイオティクス）と一緒に摂ると菌が増えやすい",
    note: "菌の種類によって効果が異なる。ロイテリ菌・LGG菌・B-3菌など研究実績のある株を選ぶ",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "美容サプリはいつ飲むのが最も効果的ですか？",
    a: "成分によって異なります。ビタミンC・コラーゲン・乳酸菌は「食後」、脂溶性ビタミン（A・E・K）・アスタキサンチン・コエンザイムQ10は「食事中〜食後」が吸収率が高まります。就寝前は成長ホルモン分泌が活発になるため、コラーゲン・ヒアルロン酸を就寝前に飲むのも効果的です。",
  },
  {
    q: "美容サプリは飲み合わせに注意が必要ですか？",
    a: "一般的な美容サプリ同士は問題ありませんが、薬との組み合わせには注意が必要です。特にビタミンKは抗凝固剤（ワーファリン）の効果を弱めます。鉄分は亜鉛・カルシウムと一緒に飲むと吸収を妨げ合います。薬を服用中の場合は必ず医師・薬剤師に相談してください。",
  },
  {
    q: "美容サプリの効果が出るまでどのくらいかかりますか？",
    a: "一般的には3〜6ヶ月の継続摂取で効果を実感できます。肌のターンオーバー（新陳代謝）は28〜45日かかるため、最低でも3ヶ月は継続して評価することをおすすめします。1〜2ヶ月で効果がないと感じてやめてしまう方が多いですが、それでは成分が蓄積する前に終わっています。",
  },
  {
    q: "安いサプリと高いサプリの違いは何ですか？",
    a: "主な違いは「有効成分の含有量」「原材料の品質・由来」「添加物の少なさ」「第三者機関の品質検査」です。美白効果が期待できるビタミンCは1日1,000〜3,000mgが目安ですが、安価なサプリは1錠100mgのことも。成分量（mg）を比較して選ぶことが重要です。",
  },
];

// =============================================
// ページコンポーネント
// =============================================
export default function BeautySupplementsPage() {
  return (
    <div className="min-h-screen bg-[#0f0a1a]">
      {/* 背景グラデーション */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, #ec4899 0%, #8b5cf6 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "飲む美容サプリ最強ランキング2026年【美白・コラーゲン・腸活】",
            description:
              "目的別・美容サプリ最強ランキング。美白・コラーゲン・腸活・抗酸化など成分別に選ぶポイントと飲み方を完全解説。",
            author: { "@type": "Organization", name: "Beauty Tech Japan" },
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            url: "https://beauty-tech-japan.vercel.app/beauty-supplements",
          }),
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-20">
        {/* パンくず */}
        <nav className="flex items-center gap-2 text-sm text-pink-300/40 mb-8">
          <Link href="/" className="hover:text-pink-300/70 transition-colors">トップ</Link>
          <span>/</span>
          <Link href="/skincare-guide" className="hover:text-pink-300/70 transition-colors">スキンケア</Link>
          <span>/</span>
          <span className="text-pink-300/60">美容サプリランキング</span>
        </nav>

        {/* ヒーロー */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-sm font-semibold text-pink-400 mb-6">
            💊 美容サプリ完全ガイド 2026年版
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            飲む美容サプリ
            <span className="block" style={{
              background: "linear-gradient(135deg, #ec4899, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              最強ランキング2026年
            </span>
            <span className="text-xl sm:text-3xl text-white/80">【美白・コラーゲン・腸活】</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed mb-4">
            美容サプリは種類が多すぎて何を選べばいいか迷いがち。本記事では「美白」「コラーゲン・ハリ」「腸活」「抗酸化」「保湿」の5カテゴリ別に、科学的根拠のある成分と選び方を完全解説。2026年最新情報をお届けします。
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <span>📅 2026年6月30日</span>
            <span>⏱️ 読了時間：約10分</span>
          </div>
        </div>

        {/* カテゴリ別ランキング */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-4">
            🏆 目的別 美容サプリ選び方ガイド
          </h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            「何のために飲むか」を明確にすることが美容サプリ選びの第一歩です。目的別に最適な成分と予算をまとめました。
          </p>
          <div className="space-y-5">
            {CATEGORIES.map((cat, index) => (
              <div
                key={cat.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div
                  className="px-6 py-4 flex items-center gap-3"
                  style={{ borderBottom: `1px solid ${cat.color}25`, background: `${cat.color}08` }}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-black text-white text-lg">
                        第{index + 1}位：{cat.name}
                      </h3>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ color: cat.color, background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                      >
                        月{cat.monthlyBudget}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mt-0.5">{cat.effect}</p>
                  </div>
                </div>
                <div className="px-6 py-5 space-y-4">
                  <div>
                    <p className="text-xs text-white/40 mb-2 font-bold">主要成分</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.keyIngredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-xs px-2 py-1 rounded-lg"
                          style={{ color: cat.color, background: `${cat.color}12`, border: `1px solid ${cat.color}25` }}
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3">
                      <p className="text-xs text-white/40 mb-1">⏰ 飲むタイミング</p>
                      <p className="text-xs text-white/70">{cat.timing}</p>
                    </div>
                    <div className="rounded-lg bg-amber-500/5 border border-amber-500/15 p-3">
                      <p className="text-xs text-amber-400 mb-1">⚠️ 注意点</p>
                      <p className="text-xs text-white/60">{cat.caution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 成分解説 */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-4">
            🔬 成分別 科学的根拠スコア解説
          </h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            美容サプリに配合される主要成分を、科学的根拠の強さ・推奨摂取量・飲み合わせとともに解説します。
          </p>
          <div className="space-y-4">
            {INGREDIENTS.map((ing) => (
              <div
                key={ing.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{ing.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="font-black text-white">{ing.name}</h3>
                      <span className="text-yellow-400 text-sm">{ing.scienceScore}</span>
                    </div>
                    <p className="text-sm text-white/70 mb-3">{ing.benefit}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="rounded p-2 bg-white/[0.04]">
                        <span className="text-white/40">推奨量：</span>
                        <span className="text-white/70 font-bold">{ing.dailyDose}</span>
                      </div>
                      <div className="rounded p-2 bg-white/[0.04]">
                        <span className="text-white/40">組み合わせ：</span>
                        <span style={{ color: ing.color }}>{ing.combination}</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/45 mt-2 leading-relaxed">💡 {ing.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 飲み方最適化 */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">
            ⏰ 美容サプリの効果を最大化する飲み方
          </h2>
          <div className="space-y-4">
            {[
              {
                time: "朝食後",
                icon: "🌅",
                color: "#f59e0b",
                supplements: ["ビタミンC", "ビタミンB群", "乳酸菌（一部）", "コラーゲンペプチド"],
                reason: "水溶性ビタミンは吸収が早く、朝のタイミングで摂ることで1日を通じて効果が続きます。",
              },
              {
                time: "昼食後",
                icon: "☀️",
                color: "#10b981",
                supplements: ["鉄分", "亜鉛", "ビタミンD"],
                reason: "ミネラル系は食事と一緒が胃への刺激を減らし、吸収効率もアップします。",
              },
              {
                time: "夕食後",
                icon: "🌙",
                color: "#8b5cf6",
                supplements: ["アスタキサンチン（脂溶性）", "コエンザイムQ10", "ビタミンE・K", "オメガ3（DHA・EPA）"],
                reason: "脂溶性成分は食事の脂質と一緒に摂取すると吸収率が大幅に上がります。夕食後が最適。",
              },
              {
                time: "就寝前",
                icon: "😴",
                color: "#ec4899",
                supplements: ["コラーゲンペプチド", "ヒアルロン酸", "プロテオグリカン", "マグネシウム"],
                reason: "成長ホルモンが分泌される睡眠中に、肌の再生に必要な成分を届けることで効率的に吸収されます。",
              },
            ].map((timing) => (
              <div
                key={timing.time}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{timing.icon}</span>
                  <div className="flex-1">
                    <h3
                      className="font-black mb-2"
                      style={{ color: timing.color }}
                    >
                      {timing.time}に飲むサプリ
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {timing.supplements.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1 rounded-full text-white/70 bg-white/[0.06] border border-white/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-white/55 leading-relaxed">{timing.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">❓ よくある質問</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="font-bold text-white mb-2">Q. {item.q}</p>
                <p className="text-sm text-white/60 leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 text-center mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(236,72,153,0.12), rgba(139,92,246,0.12))",
            border: "1px solid rgba(236,72,153,0.25)",
          }}
        >
          <p className="text-white/60 text-sm mb-2">外からのケアも合わせてチェック</p>
          <h2 className="text-2xl font-black text-white mb-4">
            美顔器・美容機器ランキング<br className="sm:hidden" />2026年版
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/beauty-devices"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base text-white transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
              style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
            >
              ✨ 美顔器ランキングを見る
            </Link>
            <Link
              href="/skincare-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all"
            >
              🧴 スキンケア基本ガイド
            </Link>
          </div>
        </div>

        {/* 関連リンク */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/whitening-guide", label: "美白ケア完全ガイド", emoji: "✨" },
            { href: "/anti-aging-guide", label: "アンチエイジングガイド", emoji: "⏳" },
            { href: "/diet-beauty-guide", label: "ダイエット美容ガイド", emoji: "🌿" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 transition-all text-center"
            >
              <p className="text-xl mb-1">{link.emoji}</p>
              <p className="text-sm font-bold text-white/70">{link.label}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* アフィリエイトセクション */}
      <AffiliateSectionBeauty />
    </div>
  );
}
