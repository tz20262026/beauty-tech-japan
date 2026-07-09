import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "日焼け止め選び方完全ガイド2026年版【SPF・PA・種類別おすすめ・正しい塗り方】",
  description:
    "日焼け止めの選び方を2026年版で完全解説。SPF・PAの意味・違い・正しい塗り方・塗り直しのタイミング・種類別（クリーム・スプレー・スティック）おすすめを初心者向けに詳しく解説します。",
  openGraph: {
    title: "日焼け止め選び方完全ガイド2026年版【SPF・PA・種類別おすすめ】",
    description: "日焼け止めのSPF・PA・正しい塗り方・種類別おすすめを初心者向けに解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "日焼け止め選び方完全ガイド2026年版",
    description: "SPF・PA・種類別おすすめ・正しい塗り方を完全解説。",
  },
};

interface SunscreenType {
  name: string;
  icon: string;
  spf: string;
  texture: string;
  best: string;
  avoid: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const SUNSCREEN_TYPES: SunscreenType[] = [
  {
    name: "クリームタイプ",
    icon: "🧴",
    spf: "SPF30〜50+/PA++〜++++",
    texture: "クリーミー・しっかり",
    best: "保湿力が高く乾燥肌・日焼け予防を重視する方に。1回の量が多くても伸びが良い。砂浜・海水浴など強いUV環境向き。",
    avoid: "テクスチャーが重く感じる方・混合肌・オイリー肌の方",
  },
  {
    name: "ミルク・ローションタイプ",
    icon: "💧",
    spf: "SPF30〜50+/PA+++〜++++",
    texture: "軽い・さらさら",
    best: "伸びが良く軽いテクスチャーで普段使いに最適。日常の外出・通勤・デートに最適。化粧下地として使えるものも多い。最も人気のタイプ。",
    avoid: "海水浴・アウトドアなど汗・水に長時間さらされる場面",
  },
  {
    name: "スプレータイプ",
    icon: "💨",
    spf: "SPF30〜50/PA++〜+++",
    texture: "ミスト・軽い",
    best: "塗り直しに最適。手が届かない背中・頭皮にも使える。メイクの上からも使える（UV粉末スプレー）。屋外イベント・スポーツに便利。",
    avoid: "初回の塗布には不向き（塗りムラができやすい）",
  },
  {
    name: "スティックタイプ",
    icon: "🖊️",
    spf: "SPF30〜50+/PA+++〜++++",
    texture: "固形・べたつきなし",
    best: "塗り直しが簡単でメイクの上からも使いやすい。目元・口元など細部の塗布に適している。外出時のバッグに入れやすいコンパクトサイズ。",
    avoid: "顔全体の初回塗布には時間がかかる",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "SPFとPAの違いと意味を教えてください。",
    a: "SPFとPAの違い：【SPF（Sun Protection Factor）】UV-B（主に肌を焼く紫外線）の防御力を示す数値。数字が大きいほど効果が高い（SPF15: 普段使い / SPF30: 外出 / SPF50+: 炎天下・海水浴）。【PA（Protection Grade of UV-A）】UV-A（シミ・しわ・老化を促進する紫外線）の防御力を示す記号。+の数が多いほど効果が高い（PA+: 普段使い / PA++: 野外活動 / PA+++: 炎天下 / PA++++: 最高防御）。日常使いならSPF30・PA+++が目安です。",
  },
  {
    q: "日焼け止めの正しい塗り方と量を教えてください。",
    a: "日焼け止めの正しい塗り方：①外出の15〜30分前に塗る（肌に馴染む時間が必要）②顔の場合：パール粒大2個分（約2g）を額・両頬・鼻・顎の5点に置いてから全体に伸ばす③指で優しく全体に馴染ませる（こすらない）④二度塗りすると効果がより安定する⑤2〜3時間おきに塗り直す（水・汗・摩擦で落ちるため）。最も多い失敗は「量が少なすぎること」です。少量だと記載のSPF効果が得られません。",
  },
  {
    q: "日焼け止めはどのくらいの頻度で塗り直す必要がありますか？",
    a: "日焼け止めの塗り直し目安：①通常の外出：2〜3時間おき②汗をかく・水に入る場合：1〜2時間おき③夏の海水浴・炎天下：30〜60分おき（ウォータープルーフでも）。外出先での塗り直しにはスプレータイプ・スティックタイプが便利です。メイクの上からでも使えるUV粉末スプレーを持ち歩くと日中の塗り直しが簡単にできます。",
  },
  {
    q: "肌に優しい・敏感肌向けの日焼け止めの選び方を教えてください。",
    a: "敏感肌向け日焼け止めの選び方のポイントは①紫外線散乱剤（ノンケミカル）のみを使用した製品を選ぶ（酸化亜鉛・酸化チタン）②アルコール・香料・着色料・防腐剤無添加のものを選ぶ③「敏感肌向け」「肌に優しい」「低刺激」と明記されたものを選ぶ④パッチテスト（腕の内側に少量塗布して24時間様子を見る）してから使う。おすすめブランド：Sensitive地/SKIN AQUAロベクチン・アリィーUVミルクモイスチャーなど。",
  },
  {
    q: "日焼け止めは冬・室内でも必要ですか？",
    a: "はい、冬・室内でも日焼け止めは必要です。理由：①UV-A（シミ・老化の原因）は雲や窓ガラスを透過する②UV-Aは夏冬の差がUV-Bより小さく、冬でも約50〜70%のUV-Aが降り注ぐ③窓際の室内・日当たりの良い場所はUV-Aの蓄積が多い。冬・室内ではSPF20〜30・PA++程度の軽いものを選ぶと肌への負担が少ないです。化粧下地に日焼け止め効果があるものを使うと手間が省けます。",
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

export default function SuncareGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full px-4 py-1 mb-4">
            ☀️ 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            日焼け止め選び方<br />
            <span className="text-yellow-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【SPF・PA・種類別おすすめ・正しい塗り方】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            日焼け止めのSPF・PA・種類・正しい塗り方・塗り直しの<br />
            タイミングを初心者向けに2026年版で完全解説します。
          </p>
        </div>

        {/* SPFとPA説明 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-yellow-500 pl-3">
            ☀️ SPF・PA早わかり表
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4">
              <h3 className="text-orange-300 font-black text-sm mb-2">SPF（UV-B防御）</h3>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-gray-300"><span>SPF15〜20</span><span className="text-gray-600">普段使い・室内</span></div>
                <div className="flex justify-between text-gray-300"><span>SPF30</span><span className="text-gray-600">外出・通勤</span></div>
                <div className="flex justify-between text-gray-300"><span>SPF50</span><span className="text-gray-600">炎天下・アウトドア</span></div>
                <div className="flex justify-between text-gray-300"><span>SPF50+</span><span className="text-gray-600">海水浴・登山</span></div>
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
              <h3 className="text-purple-300 font-black text-sm mb-2">PA（UV-A防御）</h3>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-gray-300"><span>PA+</span><span className="text-gray-600">室内・普段使い</span></div>
                <div className="flex justify-between text-gray-300"><span>PA++</span><span className="text-gray-600">外出・野外活動</span></div>
                <div className="flex justify-between text-gray-300"><span>PA+++</span><span className="text-gray-600">炎天下・スポーツ</span></div>
                <div className="flex justify-between text-gray-300"><span>PA++++</span><span className="text-gray-600">最強防御・海水浴</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 種類 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">
            🧴 日焼け止めの種類4選【テクスチャー・用途比較】
          </h2>
          <div className="space-y-4">
            {SUNSCREEN_TYPES.map((type, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-2xl">{type.icon}</span>
                  <h3 className="text-white font-black text-sm">{type.name}</h3>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-2 py-0.5 rounded-full">{type.texture}</span>
                </div>
                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs mb-2">
                  <span className="text-gray-600">🌟 SPF/PA目安：</span>
                  <span className="text-gray-200">{type.spf}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs">
                  <div className="bg-green-900/10 border border-green-500/20 rounded px-2 py-1.5">
                    <span className="text-green-400 font-bold">✅ おすすめ：</span>
                    <span className="text-gray-300">{type.best}</span>
                  </div>
                  <div className="bg-red-900/10 border border-red-500/20 rounded px-2 py-1.5">
                    <span className="text-red-400 font-bold">⚠️ 注意：</span>
                    <span className="text-gray-300">{type.avoid}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="suncare-guide" />

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🌸 スキンケアと合わせてUV対策を完璧に
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            日焼け止めと合わせてスキンケアを取り入れることで<br />
            美肌を長く維持できます。
          </p>
          <Link
            href="/skincare-guide"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            スキンケア完全ガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-yellow-500 pl-3">
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
