import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

// =============================================
// メタデータ（SEO）
// =============================================
export const metadata: Metadata = {
  title: "美顔器・美容機器おすすめランキング2026年【自宅エステ完全版】| Beauty Tech Japan",
  description:
    "2026年最新の美顔器・美容機器をランキング形式で完全解説。EMS・RF（ラジオ波）・LED・超音波・ハイフ家庭用など種類別に効果・使い方・予算を徹底比較。自宅エステの最強機器を見つけよう。",
  keywords: [
    "美顔器 おすすめ",
    "美容機器 ランキング",
    "EMS 美顔器",
    "RF 美顔器",
    "LED 美容機器",
    "ハイフ 家庭用",
    "自宅エステ 機器",
  ],
  alternates: {
    canonical: "https://beauty-tech-japan.vercel.app/beauty-devices",
  },
  openGraph: {
    title: "美顔器・美容機器おすすめランキング2026年【自宅エステ完全版】",
    description:
      "EMS・RF・LED・超音波・ハイフ家庭用。種類別に美顔器の効果・使い方・予算を徹底比較した完全ランキング。",
    type: "article",
    locale: "ja_JP",
    siteName: "Beauty Tech Japan",
  },
  twitter: {
    card: "summary_large_image",
    title: "美顔器・美容機器おすすめランキング2026年【自宅エステ完全版】",
    description:
      "EMS・RF・LED・超音波・ハイフ家庭用。種類別に美顔器の効果・使い方・予算を徹底比較した完全ランキング。",
  },
};

// =============================================
// 型定義
// =============================================
interface DeviceType {
  icon: string;
  name: string;
  color: string;
  scienceScore: string;
  mainEffect: string;
  howItWorks: string;
  frequency: string;
  priceRange: string;
  bestFor: string[];
  caution: string;
}

interface UsageTip {
  icon: string;
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

// =============================================
// データ
// =============================================
const DEVICE_TYPES: DeviceType[] = [
  {
    icon: "⚡",
    name: "EMS（電気刺激）",
    color: "#06b6d4",
    scienceScore: "★★★★☆",
    mainEffect: "表情筋・フェイスラインの引き締め",
    howItWorks: "微弱電流で表情筋を直接刺激し、筋肉を収縮させる。ジムで筋トレをするのと同じ効果を顔に与える。",
    frequency: "週3〜5回・1回5〜10分",
    priceRange: "5,000〜50,000円",
    bestFor: ["フェイスラインがたるんできた", "顔の筋肉を鍛えたい", "ほうれい線・マリオネットラインが気になる"],
    caution: "ペースメーカー使用者・妊娠中・顔に金属プレート・顔の傷口付近は使用不可",
  },
  {
    icon: "📻",
    name: "RF（ラジオ波・高周波）",
    color: "#f59e0b",
    scienceScore: "★★★★☆",
    mainEffect: "真皮層の温熱効果によるコラーゲン産生・引き締め",
    howItWorks: "高周波エネルギーが真皮層（皮膚の深部）を加温し、コラーゲン収縮・再生を促進する。エステで行うラジオ波と同等の技術を家庭用に縮小したもの。",
    frequency: "週1〜2回・1回10〜15分",
    priceRange: "15,000〜100,000円",
    bestFor: ["コラーゲン産生を促したい", "肌のハリ・弾力を回復させたい", "小じわ・ほうれい線を改善したい"],
    caution: "金属インプラント・フィラー注入部位は避ける。過度な使用は肌にダメージを与える可能性あり",
  },
  {
    icon: "💡",
    name: "LED光療法",
    color: "#10b981",
    scienceScore: "★★★★★",
    mainEffect: "波長別に美白・ニキビ・エイジングケアに効果",
    howItWorks: "赤色LED（630nm）：コラーゲン産生・エイジングケア。青色LED（415nm）：ニキビ菌への抗菌効果。黄色LED：シミ・くすみ改善。",
    frequency: "毎日〜週4回・1回10〜20分",
    priceRange: "8,000〜150,000円",
    bestFor: ["ニキビ・ニキビ跡が気になる", "コラーゲン産生をサポートしたい", "日常的にケアしたい（痛みなし）"],
    caution: "光過敏症・光線療法薬（テトラサイクリン等）服用中は使用不可。目を直接照射しない",
  },
  {
    icon: "🌊",
    name: "超音波（ウルトラソニック）",
    color: "#8b5cf6",
    scienceScore: "★★★☆☆",
    mainEffect: "美容成分の浸透促進・肌の活性化",
    howItWorks: "1MHz前後の超音波振動が皮膚を振動させ、美容液・美容成分の浸透を3〜4倍に高める。イオン導入と組み合わせて使うことが多い。",
    frequency: "週2〜4回・1回5〜10分",
    priceRange: "3,000〜30,000円",
    bestFor: ["化粧水・美容液の浸透を高めたい", "スキンケアの効果を最大化したい", "敏感肌でも使いやすい機器を探している"],
    caution: "目の周りは避ける。顔に傷がある部位は使用しない。ジェルや美容液を必ず塗布してから使用",
  },
  {
    icon: "🎯",
    name: "HIFU（家庭用ハイフ）",
    color: "#ec4899",
    scienceScore: "★★★★☆",
    mainEffect: "SMAS層へのアプローチによる強力なリフトアップ",
    howItWorks: "高密度焦点式超音波でSMAS層（筋膜層）に熱エネルギーを集中させてコラーゲンを再生。医療エステで数十万円かかるハイフを家庭用に。ただし家庭用は出力が低い。",
    frequency: "月1〜2回・1回15〜30分",
    priceRange: "30,000〜200,000円",
    bestFor: ["顔のたるみ・ジョールラインが気になる", "本格的なリフトアップをしたい", "エステのハイフに近い効果を自宅で"],
    caution: "使い方を誤ると火傷・神経損傷のリスクあり。使用前に必ず取扱説明書を熟読する。太い血管・神経の上は避ける",
  },
  {
    icon: "💎",
    name: "イオン導入・フォトン",
    color: "#f97316",
    scienceScore: "★★★☆☆",
    mainEffect: "美容成分の経皮浸透を電気的に促進",
    howItWorks: "イオン化した美容成分（ビタミンC・ヒアルロン酸等）を微弱電流で皮膚深部に導入する。通常の塗布より浸透率が格段に向上。",
    frequency: "週2〜3回・1回5〜10分",
    priceRange: "5,000〜30,000円",
    bestFor: ["美白美容液の効果を最大化したい", "化粧品の効果を高めたい", "ヒアルロン酸・ビタミンCを浸透させたい"],
    caution: "イオン化していない成分には効果がない。顔全体に均一に使用すること",
  },
];

const USAGE_TIPS: UsageTip[] = [
  {
    icon: "🧼",
    title: "洗顔後の清潔な肌で使用する",
    desc: "メイクや汚れが残った状態では効果が半減します。必ず洗顔後の清潔な肌に使用してください。",
  },
  {
    icon: "💧",
    title: "導電ジェル・美容液を必ず塗布する",
    desc: "EMS・RF・超音波は必ず専用ジェルまたは美容液を塗布してから使用。乾いた肌への使用は効果が下がり、場合によっては肌を傷めます。",
  },
  {
    icon: "📅",
    title: "頻度を守って継続する",
    desc: "毎日使えばいいわけではありません。過度な使用は逆効果になる場合があります。各機器の推奨頻度を守って継続することが最大の近道。",
  },
  {
    icon: "☀️",
    title: "使用後は日焼け止めを必ず塗る",
    desc: "多くの美容機器の使用後は肌が敏感になります。昼間の使用後は必ずSPF30以上の日焼け止めを塗布してください。",
  },
  {
    icon: "📸",
    title: "使用前後の写真で変化を記録する",
    desc: "効果は徐々に現れるため、使用開始前の写真を撮っておくことをおすすめします。同じ角度・同じ光源で毎月撮影すると変化が一目でわかります。",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "美顔器は毎日使っても大丈夫ですか？",
    a: "機器の種類によって異なります。LED光療法は毎日使用しても問題ない製品が多いですが、EMS・RF・ハイフは週1〜3回が推奨です。過度な使用は肌への負荷になり、逆効果になる可能性があります。必ず各製品の取扱説明書の頻度を守ってください。",
  },
  {
    q: "複数の美顔器を同時に使っても大丈夫ですか？",
    a: "可能ですが、同日に複数使用する場合は順番が重要です。一般的には「超音波・イオン導入（成分浸透）→ EMS（引き締め）→ LED（仕上げ）」の順が最も効果的。RF（ラジオ波）は刺激が強いため、他の機器と同日使用は避けるのが無難です。",
  },
  {
    q: "美顔器の効果を実感できるまでどのくらいかかりますか？",
    a: "一般的には2〜3ヶ月の継続使用で効果を実感できます。LEDは2〜4週間でニキビ改善などの効果を感じやすく、EMS・RFはコラーゲン産生に3ヶ月かかるため、効果実感には時間がかかります。継続が最大の秘訣です。",
  },
  {
    q: "家庭用ハイフはエステのハイフと同じ効果がありますか？",
    a: "家庭用は安全性のため出力を医療・エステ用の10〜30%に制限しています。そのため効果は本格的なハイフより劣りますが、家で継続的に使用することで長期的な積み上げ効果が期待できます。費用対効果を考えると一定の価値があります。",
  },
];

// =============================================
// ページコンポーネント
// =============================================
export default function BeautyDevicesPage() {
  return (
    <div className="min-h-screen bg-[#0f0a1a]">
      {/* 背景グラデーション */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, #8b5cf6 0%, #ec4899 50%, transparent 70%)",
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
            headline: "美顔器・美容機器おすすめランキング2026年【自宅エステ完全版】",
            description:
              "EMS・RF・LED・超音波・ハイフ家庭用など種類別に効果・使い方・予算を徹底比較した美顔器ランキング。",
            author: { "@type": "Organization", name: "Beauty Tech Japan" },
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            url: "https://beauty-tech-japan.vercel.app/beauty-devices",
          }),
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-20">
        {/* パンくず */}
        <nav className="flex items-center gap-2 text-sm text-pink-300/40 mb-8">
          <Link href="/" className="hover:text-pink-300/70 transition-colors">トップ</Link>
          <span>/</span>
          <Link href="/beauty-tools-guide" className="hover:text-pink-300/70 transition-colors">美容ツール</Link>
          <span>/</span>
          <span className="text-pink-300/60">美顔器ランキング2026</span>
        </nav>

        {/* ヒーロー */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm font-semibold text-purple-400 mb-6">
            ✨ 美顔器完全ガイド 2026年版
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            美顔器・美容機器
            <span className="block" style={{
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              おすすめランキング2026年
            </span>
            <span className="text-xl sm:text-3xl text-white/80">【自宅エステ完全版】</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed mb-4">
            EMS・RF（ラジオ波）・LED・超音波・家庭用ハイフなど、美顔器の種類は多種多様。「どれを買えばいいかわからない」という方向けに、種類別の効果・科学的根拠・使い方・予算を完全比較します。
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <span>📅 2026年6月30日</span>
            <span>⏱️ 読了時間：約12分</span>
          </div>
        </div>

        {/* 種類別ランキング */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-4">
            🏆 美顔器の種類と効果 完全ランキング
          </h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            悩みに合わせた美顔器の種類を選ぶことが、効果を実感する最短の近道です。
          </p>
          <div className="space-y-6">
            {DEVICE_TYPES.map((device, index) => (
              <div
                key={device.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                {/* ヘッダー */}
                <div
                  className="px-6 py-4 flex items-center gap-4"
                  style={{ borderBottom: `1px solid ${device.color}25`, background: `${device.color}08` }}
                >
                  <span className="text-3xl">{device.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <span className="text-xs font-bold text-white/40">第{index + 1}位</span>
                      <h3 className="font-black text-white text-xl">{device.name}</h3>
                      <span className="text-yellow-400 text-sm">{device.scienceScore}</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ color: device.color, background: `${device.color}15`, border: `1px solid ${device.color}30` }}
                      >
                        {device.priceRange}
                      </span>
                      <span className="text-xs text-white/40">{device.frequency}</span>
                    </div>
                  </div>
                </div>

                {/* ボディ */}
                <div className="px-6 py-5 space-y-4">
                  <div>
                    <p className="text-xs text-white/40 mb-1 font-bold">主な効果</p>
                    <p
                      className="text-sm font-bold"
                      style={{ color: device.color }}
                    >
                      {device.mainEffect}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-white/40 mb-1 font-bold">仕組み</p>
                    <p className="text-sm text-white/65 leading-relaxed">{device.howItWorks}</p>
                  </div>

                  <div>
                    <p className="text-xs text-white/40 mb-2 font-bold">こんな方におすすめ</p>
                    <ul className="space-y-1">
                      {device.bestFor.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                          <span style={{ color: device.color }} className="flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-amber-500/5 border border-amber-500/15 p-3">
                    <p className="text-xs font-bold text-amber-400 mb-1">⚠️ 注意事項</p>
                    <p className="text-xs text-white/55 leading-relaxed">{device.caution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 悩み別おすすめ */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">
            🎯 悩み別おすすめ美顔器の選び方
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { worry: "たるみ・フェイスライン", devices: ["EMS", "RF（ラジオ波）", "家庭用HIFU"], color: "#06b6d4" },
              { worry: "ニキビ・ニキビ跡", devices: ["青色LED", "黄色LED", "超音波（成分浸透）"], color: "#10b981" },
              { worry: "シミ・くすみ・美白", devices: ["黄色LED・グリーンLED", "超音波＋美白美容液"], color: "#f59e0b" },
              { worry: "ほうれい線・毛穴", devices: ["RF（ラジオ波）", "EMS", "超音波"], color: "#8b5cf6" },
              { worry: "コラーゲン産生・ハリ", devices: ["赤色LED", "RF", "家庭用HIFU"], color: "#ec4899" },
              { worry: "美容液の効果アップ", devices: ["超音波（浸透促進）", "イオン導入", "EMS"], color: "#f97316" },
            ].map((item) => (
              <div
                key={item.worry}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <h3
                  className="text-sm font-black mb-3"
                  style={{ color: item.color }}
                >
                  😟 {item.worry}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.devices.map((device) => (
                    <span
                      key={device}
                      className="text-xs px-2 py-1 rounded-full text-white/70 bg-white/[0.05] border border-white/10"
                    >
                      {device}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 使い方のコツ */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">
            💡 美顔器の効果を最大化する使い方5つのコツ
          </h2>
          <div className="space-y-4">
            {USAGE_TIPS.map((tip) => (
              <div
                key={tip.title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{tip.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 予算別おすすめ */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">
            💰 予算別おすすめ美顔器の選び方
          </h2>
          <div className="space-y-4">
            {[
              {
                budget: "〜5,000円",
                color: "#6b7280",
                recommendation: "超音波美顔器（浸透促進タイプ）・イオン導入器",
                note: "まずは手軽に試したい方向け。美容液の浸透を高める機器から始めるのが正解。",
              },
              {
                budget: "5,000〜15,000円",
                color: "#10b981",
                recommendation: "LED美顔器（赤色＋青色）・EMS入門機",
                note: "科学的根拠の高いLEDは予算を抑えつつも効果が期待できる。まずLEDから始めるのがおすすめ。",
              },
              {
                budget: "15,000〜50,000円",
                color: "#f59e0b",
                recommendation: "RF（ラジオ波）美顔器・高機能EMS",
                note: "本格的な引き締め・コラーゲン産生効果を狙うならRF帯域の機器へ。毎月エステに行くより圧倒的にコスパがいい。",
              },
              {
                budget: "50,000円〜",
                color: "#ec4899",
                recommendation: "家庭用HIFU・高機能多機能複合機",
                note: "本格的なリフトアップ効果を自宅で。エステ（1回30,000〜80,000円）と比較するとコスパ最高水準。",
              },
            ].map((item) => (
              <div
                key={item.budget}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex items-start gap-4"
              >
                <div
                  className="flex-shrink-0 w-24 text-center py-1 rounded-lg text-xs font-black"
                  style={{ color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  {item.budget}
                </div>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{item.recommendation}</p>
                  <p className="text-xs text-white/55 leading-relaxed">{item.note}</p>
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
            background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.12))",
            border: "1px solid rgba(139,92,246,0.25)",
          }}
        >
          <p className="text-white/60 text-sm mb-2">内側からのケアも組み合わせよう</p>
          <h2 className="text-2xl font-black text-white mb-4">
            飲む美容サプリ<br className="sm:hidden" />最強ランキング2026年版
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/beauty-supplements"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base text-white transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
            >
              💊 美容サプリランキングを見る
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
            { href: "/anti-aging-guide", label: "アンチエイジングガイド", emoji: "⏳" },
            { href: "/beauty-tools-guide", label: "美容ツール完全ガイド", emoji: "🪄" },
            { href: "/skincare-ai-guide", label: "AIスキンケア診断", emoji: "🤖" },
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
