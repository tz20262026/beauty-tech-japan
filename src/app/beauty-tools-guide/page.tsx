import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "AIで変わる美容ケア2026【最新ビューティーテック15選】",
  description: "AI肌診断・ARメイクアプリ・美容デバイスを徹底比較。スマホで使える最新ビューティーテックツール15選を解説。2026年の美容テクノロジートレンドを完全網羅。",
  keywords: ["AI 肌診断", "美容テック", "ARメイク アプリ", "美容デバイス おすすめ", "ビューティーテック 2026"],
  openGraph: {
    title: "AIで変わる美容ケア2026【最新ビューティーテック15選】",
    description: "AI肌診断・ARメイク・美容デバイスを徹底比較。2026年最新ビューティーテックツール15選",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIで変わる美容ケア2026【最新ビューティーテック15選】",
    description: "AI肌診断・ARメイク・美容デバイスを徹底比較。2026年最新ビューティーテックツール15選",
  },
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/beauty-tools-guide" },
};

const AI_SKIN_TOOLS = [
  {
    rank: 1,
    name: "YouCam Makeup",
    type: "AR メイク＋AI肌診断",
    emoji: "💄",
    color: "#ec4899",
    desc: "スマホカメラでARメイクをリアルタイム試着。口紅・アイシャドウ・ファンデーションを購入前に試せる。AI肌診断機能で毛穴・シミ・くすみをスコアリング。",
    feature: "リアルタイムARメイク試着",
    platform: "iOS / Android 無料",
  },
  {
    rank: 2,
    name: "SKIN by NEUTROGENA",
    type: "AI肌診断",
    emoji: "🔬",
    color: "#8b5cf6",
    desc: "医療機器メーカーと共同開発した本格AI肌診断アプリ。UV環境・年齢・ライフスタイルを総合的に分析し、個別スキンケアルーティンを提案。",
    feature: "医療グレードの肌分析",
    platform: "iOS 無料",
  },
  {
    rank: 3,
    name: "Perfect Corp FaceAR",
    type: "ARビューティー",
    emoji: "🪞",
    color: "#f59e0b",
    desc: "EC連携型の試着ARプラットフォーム。EC店舗に組み込めるAPIも提供。コスメブランドのオンラインショップでリップを試着して購入できる体験を実現。",
    feature: "ECサイト連携試着",
    platform: "Web・アプリ 両対応",
  },
  {
    rank: 4,
    name: "Rinna Beauty AI",
    type: "会話型AI美容相談",
    emoji: "🤖",
    color: "#06b6d4",
    desc: "チャット形式で肌悩みを相談するとAIが適切なコスメやケア方法を提案。使用中のコスメとの相性診断・成分解析も得意。",
    feature: "コスメ成分相性チェック",
    platform: "Web 無料",
  },
  {
    rank: 5,
    name: "L'Oreal Modiface",
    type: "ARメイク",
    emoji: "✨",
    color: "#d946ef",
    desc: "ロレアルグループが開発したARメイク技術。Amazon・SnapchatなどのプラットフォームにAR試着機能を提供。アジア向けに肌トーン最適化アルゴリズムを搭載。",
    feature: "Amazon内でメイク試着",
    platform: "複数プラットフォーム対応",
  },
];

const BEAUTY_DEVICES = [
  {
    name: "ヤーマン フォトプラスプレステージS",
    category: "フォトフェイシャル（光美容器）",
    emoji: "💡",
    color: "#f97316",
    price: "約120,000円",
    effect: "シミ・毛穴・ハリUP",
    desc: "家庭用初のIPL（光）×RF（高周波）×EMS×LED 4機能搭載。週1〜2回の使用でクリニック級の効果を自宅で。2026年最新モデルはAI肌解析で照射強度を自動最適化。",
    schedule: "週1〜2回・1回10分",
  },
  {
    name: "パナソニック イオンエフェクター EH-ST98",
    category: "イオン導入美顔器",
    emoji: "⚡",
    color: "#3b82f6",
    price: "約40,000円",
    effect: "美容成分浸透アップ",
    desc: "マイナスイオンで美容液の有効成分を肌の奥まで浸透させる。ターボ導入・EMS・温感の3機能で毎日使いでも肌に優しい。化粧水の効果が2〜5倍向上するとされる。",
    schedule: "毎日・1回3分",
  },
  {
    name: "ReFa CARAT RAY FACE",
    category: "美顔ローラー（マイクロカレント）",
    emoji: "🌀",
    color: "#8b5cf6",
    price: "約35,000円",
    effect: "リフトアップ・むくみ解消",
    desc: "光発電のマイクロカレントで小顔&リフトアップ。太陽光・照明で自動充電。ローラーを転がすだけで顔のコンターを整え、むくみを解消。旅行にも持ち歩きやすいコンパクト設計。",
    schedule: "毎日・1回3〜5分",
  },
  {
    name: "ニキビ対策 LED マスク（各ブランド）",
    category: "LED 光線治療マスク",
    emoji: "🎭",
    color: "#10b981",
    price: "20,000〜100,000円",
    effect: "ニキビ・シワ・くすみ改善",
    desc: "赤色光（コラーゲン促進）・青色光（ニキビ菌殺菌）・近赤外線（細胞再生）を照射。週2〜3回の使用でクリニック施術と同等の光線治療効果。フェイス全体を均一に照射。",
    schedule: "週2〜3回・1回10〜20分",
  },
  {
    name: "ダーマペン風 マイクロニードル美顔器",
    category: "マイクロニードル（家庭用）",
    emoji: "🪡",
    color: "#ef4444",
    price: "30,000〜80,000円",
    effect: "毛穴・ニキビ跡・ハリUP",
    desc: "極細の微細な針が肌に微細な穴を開けることで美容成分の浸透と肌の自己修復力を高める。クリニック施術の1/10のコストで同等効果を目指せる。敏感肌・ニキビ活動期は使用禁止。",
    schedule: "週1回・1回15分",
  },
];

const AR_MAKEUP_FEATURES = [
  {
    feature: "リアルタイム試着",
    emoji: "📱",
    desc: "スマホのインカメラを通して口紅・アイシャドウ・チーク・ファンデーションをリアルタイムで試着。購入前のミスマッチを防げる。",
  },
  {
    feature: "肌トーン自動補正",
    emoji: "🎨",
    desc: "AIが肌トーンを自動解析し、色白・イエローベース・ブルーベースなど個人の肌色に合わせてカラーを最適表示。",
  },
  {
    feature: "トレンドメイク再現",
    emoji: "💫",
    desc: "SNSでバイラルしたメイクをワンタップで自分の顔に再現。韓国アイドルメイク・日本の清楚メイク等を簡単試せる。",
  },
  {
    feature: "EC購入連携",
    emoji: "🛒",
    desc: "試着したまま購入ボタンを押せるシームレスな購買体験。アマゾン・Qoo10・公式サイトへの直接リンクが多い。",
  },
];

const FAQ = [
  {
    q: "AI肌診断アプリは精度が高いですか？",
    a: "2026年現在、AIの肌分析精度は皮膚科医に近いレベルまで向上しています。毛穴・シミ・ニキビ・くすみの検出は特に精度が高く、医療機器メーカーと共同開発したアプリは臨床検証済みです。ただし医師の診断の代替にはなりません。スキンケア選びの参考に活用するのが最適です。",
  },
  {
    q: "ARメイクアプリはファンデーションの色選びにも使えますか？",
    a: "はい、使えます。AI肌トーン解析機能を持つアプリでは、撮影した肌色に最適なファンデーションの番号（例：オークル20・ピンクオークル10）を提案してくれます。Sephoraアプリの「Color IQ」やロレアルのModifaceが特に優秀です。実際の光源環境による差異があるため、あくまで目安として活用してください。",
  },
  {
    q: "家庭用美顔器は本当に効果がありますか？",
    a: "適切に使用すれば効果は実感できます。RF（高周波）・EMS・LED・マイクロニードルなどの技術はクリニックでも使用される本物の美容医療技術です。ただし家庭用は出力が低く効果の実感に時間がかかります。3ヶ月以上継続使用することで、ハリ・毛穴・くすみの改善が多くのユーザーから報告されています。",
  },
  {
    q: "美顔器を買う際に注意すべきことは？",
    a: "①医療機器認証の有無（厚生労働省の認証マークが品質保証の目安）②公式カスタマーサポートが日本語対応か③誇大広告（「1回で効果」等）に注意④敏感肌・ニキビ・アトピーなど肌トラブルがある場合は使用前に皮膚科に相談する、の4点を確認してください。",
  },
  {
    q: "ビューティーテックは肌荒れしませんか？",
    a: "適切な使用頻度・強度であれば肌荒れリスクは低いです。注意が必要なのは①使いすぎ（週推奨回数を超えた過剰使用）②肌が荒れている時期の使用③サンバーン直後の光照射機器の使用、の3点です。新しい機器は低い設定から始め、肌の反応を確認しながら徐々に慣らすのが基本です。",
  },
];

export default function BeautyToolsGuidePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AIで変わる美容ケア2026【最新ビューティーテック15選】",
      description: "AI肌診断・ARメイクアプリ・美容デバイスを徹底比較。2026年最新ビューティーテックツール15選",
      author: { "@type": "Organization", name: "Beauty Tech Japan" },
      publisher: { "@type": "Organization", name: "Beauty Tech Japan" },
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      inLanguage: "ja",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* ヘッダー */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-purple-100 text-purple-700 border border-purple-200">
            🤖 ビューティーテックガイド
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            AIで変わる美容ケア<span className="text-purple-600">2026</span><br className="sm:hidden" />
            <span className="text-2xl sm:text-3xl">最新ビューティーテック15選</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            AI肌診断・ARメイクアプリ・スマート美容デバイスが美容の常識を変えています。
            2026年最新のビューティーテックツールを徹底比較・解説します。
          </p>
          <div className="flex flex-wrap gap-2">
            {["AI肌診断", "ARメイク", "美容デバイス", "2026最新"].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">{tag}</span>
            ))}
          </div>
        </section>

        {/* AI肌診断・ARメイクアプリ */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🔬 AI肌診断・ARメイクアプリ 人気TOP5</h2>
          <p className="text-sm text-gray-500">スマートフォンのカメラとAIを組み合わせた次世代美容ツール。無料で始めやすいものが多い。</p>
          <div className="space-y-4">
            {AI_SKIN_TOOLS.map(tool => (
              <div key={tool.name} className="flex gap-4 p-5 rounded-2xl bg-white border shadow-sm" style={{ borderColor: `${tool.color}25` }}>
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                    style={{ background: tool.color }}
                  >
                    {tool.rank}
                  </div>
                  <span className="text-xl">{tool.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-black text-gray-900">{tool.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: `${tool.color}12`, color: tool.color }}>
                      {tool.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{tool.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="font-semibold text-gray-700">✅ {tool.feature}</span>
                    <span>{tool.platform}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARメイクの主要機能 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">💄 ARメイクアプリの主要機能ガイド</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {AR_MAKEUP_FEATURES.map(f => (
              <div key={f.feature} className="rounded-2xl border border-pink-100 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{f.emoji}</span>
                  <span className="font-black text-gray-900 text-sm">{f.feature}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 美容デバイス */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">✨ おすすめ美容デバイス5選【2026年版】</h2>
          <p className="text-sm text-gray-500">クリニック技術を家庭で再現。継続使用で本物の変化が出るものを厳選。</p>
          <div className="space-y-4">
            {BEAUTY_DEVICES.map(device => (
              <div key={device.name} className="rounded-2xl border bg-white p-5 space-y-3" style={{ borderColor: `${device.color}25` }}>
                <div className="flex flex-wrap items-start gap-3">
                  <span className="text-3xl flex-shrink-0">{device.emoji}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-black text-gray-900 text-sm">{device.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: `${device.color}12`, color: device.color }}>
                        {device.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{device.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-semibold">💰 {device.price}</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">🎯 {device.effect}</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">⏰ {device.schedule}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンクCTA */}
        <section className="rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-8 text-center space-y-4">
          <h2 className="font-black text-white text-xl">スキンケアの基本もあわせてチェック</h2>
          <p className="text-pink-100 text-sm">ビューティーテックと正しいスキンケアルーティンの組み合わせで効果最大化。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/skincare-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-pink-700 text-sm transition-all hover:opacity-90 bg-white">
              スキンケアガイドを見る →
            </Link>
            <Link href="/skincare-ai-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-90 bg-white/20 text-white border border-white/40">
              AIスキンケアガイド →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-gray-900">よくある質問</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-purple-50 border border-purple-100 rounded-xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q. {q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
