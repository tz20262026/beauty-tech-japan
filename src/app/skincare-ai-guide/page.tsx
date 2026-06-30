import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "AIスキンケア完全ガイド2026【肌診断・おすすめアプリ】",
  description: "AI肌診断の仕組み・おすすめアプリ・自宅でできるAIスキンケアを完全解説。2026年最新のAI美容技術でパーソナライズされたスキンケアルーティンを構築する方法。",
  keywords: ["AI スキンケア", "AI 肌診断 アプリ", "パーソナライズ スキンケア", "AI 美容", "肌分析 AI"],
  openGraph: {
    title: "AIスキンケア完全ガイド2026【肌診断・おすすめアプリ】",
    description: "AI肌診断の仕組み・おすすめアプリ・自宅でできるAIスキンケアを完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIスキンケア完全ガイド2026【肌診断・おすすめアプリ】",
    description: "AI肌診断の仕組み・おすすめアプリ・自宅でできるAIスキンケアを完全解説",
  },
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/skincare-ai-guide" },
};

const AI_HOW_IT_WORKS = [
  {
    step: 1,
    title: "スマホカメラで顔を撮影",
    emoji: "📸",
    color: "#ec4899",
    desc: "自然光の下でスマートフォンのインカメラで顔を撮影。AIが最適な撮影条件（照明・距離・角度）をリアルタイムでガイドする。",
  },
  {
    step: 2,
    title: "AIが肌状態を多角的に解析",
    emoji: "🤖",
    color: "#8b5cf6",
    desc: "機械学習モデルが100万枚以上の肌画像データで学習したアルゴリズムで、毛穴・シミ・くすみ・シワ・ニキビ・乾燥度合いを定量スコア化する。",
  },
  {
    step: 3,
    title: "肌タイプ・悩みを特定",
    emoji: "🎯",
    color: "#f59e0b",
    desc: "乾燥肌・脂性肌・混合肌・敏感肌を判定し、個人の主要肌悩みトップ3を抽出。年齢・生活習慣の質問と組み合わせて精度を上げる。",
  },
  {
    step: 4,
    title: "パーソナライズされたケア提案",
    emoji: "✨",
    color: "#10b981",
    desc: "分析結果をもとに最適な成分・テクスチャー・使用順・使用頻度を個別提案。おすすめコスメや生活習慣の改善点まで具体的にアドバイス。",
  },
  {
    step: 5,
    title: "継続追跡で改善を可視化",
    emoji: "📊",
    color: "#3b82f6",
    desc: "定期的な再撮影で肌スコアの変化をグラフ表示。ケアの効果を数値で確認できるため、継続モチベーションが上がる。",
  },
];

const AI_SKINCARE_APPS = [
  {
    name: "Skinsei AI",
    category: "パーソナライズスキンケア",
    emoji: "🌸",
    color: "#ec4899",
    price: "無料（製品購入型）",
    strength: "生活習慣・環境・ストレスも統合分析",
    desc: "肌写真だけでなく、睡眠・食事・ストレス・住んでいる環境の湿度まで考慮した360度の総合肌分析。個別処方のスキンケアセットを自動提案・定期届け。",
  },
  {
    name: "Proven Skincare AI",
    category: "カスタム処方AI",
    emoji: "🔬",
    color: "#3b82f6",
    price: "月額制（製品込み）",
    strength: "4,700万件のレビューデータを学習",
    desc: "コスメのレビューデータ・皮膚科論文・気候データを組み合わせた独自AIで個別処方スキンケアを製造。同じ製品は2人分しか作らないパーソナライズ度の高さが特徴。",
  },
  {
    name: "Revieve AI Beauty Advisor",
    category: "AI美容コンサルタント",
    emoji: "💬",
    color: "#8b5cf6",
    price: "ブランド埋め込み型",
    strength: "コスメブランド公式サイトで使える",
    desc: "ロレアル・シセイドウなど大手コスメブランドの公式サイトに組み込まれたAIアドバイザー。ブランドの商品ラインナップの中から肌に合う製品を絞り込んで提案。",
  },
  {
    name: "AI MIRA（ミラ）",
    category: "日本語対応AI肌診断",
    emoji: "🇯🇵",
    color: "#f59e0b",
    price: "無料",
    strength: "日本語で詳しく説明・日本人肌に最適化",
    desc: "日本人の肌データで学習したAIが日本語で肌診断レポートを生成。日本で手に入るコスメブランドを優先的に提案。アジア肌特有のイエローベース・くすみ分析が得意。",
  },
];

const AI_ROUTINE_STEPS = [
  {
    timing: "週1回",
    action: "AI肌診断アプリで肌スコアを計測",
    emoji: "📱",
    tip: "同じ時間帯・同じ照明条件で撮影すると変化が正確に追跡できる",
  },
  {
    timing: "毎朝",
    action: "AI提案のルーティンを実行",
    emoji: "☀️",
    tip: "診断で提案された順番・量を守る。「なんとなく」のケアをやめるだけで肌が変わる",
  },
  {
    timing: "毎晩",
    action: "夜用AI提案ルーティンを実行",
    emoji: "🌙",
    tip: "夜は再生タイム。AIが提案するレチノール・ペプチド等の成分を夜に集中投入",
  },
  {
    timing: "月1回",
    action: "AI診断の結果を振り返りケアを調整",
    emoji: "📊",
    tip: "スコアが上がっていれば継続。下がっていれば生活習慣・製品を見直す",
  },
  {
    timing: "季節の変わり目",
    action: "AIへの問診入力を更新",
    emoji: "🍂",
    tip: "湿度・温度・生活リズムの変化に合わせてAIへの入力情報を更新すると診断精度が上がる",
  },
];

const AI_VS_TRADITIONAL = [
  {
    aspect: "肌診断の精度",
    ai: "100万枚超の肌データで学習。感覚より数値で正確に現状把握",
    traditional: "自己判断や店員の経験則。個人差・主観性が高い",
    winner: "ai",
  },
  {
    aspect: "製品選びの手間",
    ai: "分析結果から自動でフィルタリング。数百万種から最適品を即提示",
    traditional: "口コミ・雑誌・試供品で自分で試す。時間とお金がかかる",
    winner: "ai",
  },
  {
    aspect: "継続モチベーション",
    ai: "肌スコアの変化をグラフで可視化。数値上昇が継続の励みに",
    traditional: "感覚的な改善確認。変化がわかりにくく続けにくい",
    winner: "ai",
  },
  {
    aspect: "コスト",
    ai: "診断自体は無料〜安価。ただし提案製品は高価な場合も",
    traditional: "低コストの商品も選べる。自分でコスト管理しやすい",
    winner: "traditional",
  },
  {
    aspect: "人の温もり・共感",
    ai: "感情的なサポートは苦手。悩みを「共感」してもらいたい場合は不向き",
    traditional: "優秀なBAや皮膚科医のカウンセリングは精神的サポートも提供",
    winner: "traditional",
  },
];

const FAQ = [
  {
    q: "AI肌診断は無料で使えますか？",
    a: "多くのAI肌診断アプリは基本機能を無料で提供しています。YouCam Makeup・Skin by Neutrogena等は無料でダウンロードしてすぐ使えます。製品のパーソナライズ処方まで行うサービス（Proven Skincare等）は製品費用がかかります。まずは無料アプリから始めて効果を実感してからサブスクを検討するのがおすすめです。",
  },
  {
    q: "AI診断の結果は信頼できますか？",
    a: "客観的な肌状態の数値化（毛穴サイズ・色ムラ・水分量推定等）の精度は高く参考になります。ただし皮膚疾患（アトピー・湿疹・酒さ等）の診断・治療には使えません。あくまでもスキンケア製品選びの参考ツールとして位置づけ、異常を感じたら皮膚科を受診してください。",
  },
  {
    q: "AIスキンケアで肌が本当に変わりますか？",
    a: "適切な製品を適切な量・順序・頻度で使えば変わります。AIスキンケアの最大のメリットは「試行錯誤の無駄をなくす」ことです。従来の「なんとなく選んで合わなかったら次の製品」という非効率なサイクルから脱却できます。AI診断通りに3ヶ月継続したユーザーの80%以上が肌スコアの改善を実感したというデータもあります。",
  },
  {
    q: "プライバシーが心配です。顔写真を送っても大丈夫ですか？",
    a: "主要なAI肌診断アプリは個人情報保護規制（日本の個人情報保護法・EUのGDPR等）に準拠しています。ただし①利用規約でデータの使用目的を確認②信頼できるブランドのアプリを選ぶ③匿名性の高いアカウントを使う、の3点を確認することをおすすめします。画像をサーバーに送らずデバイス内で処理するオフラインAIアプリも増えています。",
  },
];

export default function SkincareAiGuidePage() {
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
      "@type": "HowTo",
      name: "AIスキンケアルーティンの始め方",
      description: "AIを活用したパーソナライズスキンケアの実践方法",
      step: AI_ROUTINE_STEPS.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.action,
        text: s.tip,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AIスキンケア完全ガイド2026【肌診断・おすすめアプリ】",
      description: "AI肌診断の仕組み・おすすめアプリ・自宅でできるAIスキンケアを完全解説",
      author: { "@type": "Organization", name: "Beauty Tech Japan" },
      publisher: { "@type": "Organization", name: "Beauty Tech Japan" },
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      inLanguage: "ja",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* ヘッダー */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-blue-100 text-blue-700 border border-blue-200">
            🤖 AIスキンケアガイド
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            <span className="text-blue-600">AIスキンケア</span>完全ガイド<br className="sm:hidden" />
            <span className="text-lg font-normal ml-2 text-gray-600">2026年版</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            AI肌診断の仕組みからおすすめアプリ・自宅でできるAIスキンケアルーティンまで完全解説。
            テクノロジーで「なんとなくケア」から脱却し、肌が本当に変わる方法を紹介します。
          </p>
          <div className="flex flex-wrap gap-2">
            {["AI肌診断", "パーソナライズ", "おすすめアプリ", "ルーティン構築"].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold">{tag}</span>
            ))}
          </div>
        </section>

        {/* AI肌診断の仕組み */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🔬 AI肌診断の仕組み（5ステップ）</h2>
          <div className="space-y-3">
            {AI_HOW_IT_WORKS.map(s => (
              <div key={s.step} className="flex gap-4 p-4 rounded-2xl bg-white border shadow-sm" style={{ borderColor: `${s.color}20` }}>
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
                    style={{ background: s.color }}
                  >
                    {s.step}
                  </div>
                  <span className="text-xl">{s.emoji}</span>
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* おすすめAIスキンケアアプリ */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">📱 おすすめAIスキンケアアプリ4選</h2>
          <div className="space-y-4">
            {AI_SKINCARE_APPS.map(app => (
              <div key={app.name} className="rounded-2xl border bg-white p-5 space-y-3" style={{ borderColor: `${app.color}25` }}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-3xl">{app.emoji}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-black text-gray-900">{app.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: `${app.color}12`, color: app.color }}>
                        {app.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{app.price}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{app.desc}</p>
                <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: app.color }}>
                  <span>✅ {app.strength}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AIスキンケアルーティン */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">📅 AI活用スキンケアルーティンの組み立て方</h2>
          <div className="space-y-3">
            {AI_ROUTINE_STEPS.map(s => (
              <div key={s.timing} className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-xs font-black text-blue-700 text-center leading-tight">{s.timing}</span>
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm mb-1">{s.action}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">💡 {s.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI vs 従来のスキンケア比較 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🆚 AI診断 vs 従来のケア — 何が違う？</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-3 text-left rounded-tl-xl font-bold">比較軸</th>
                  <th className="p-3 text-left font-bold">🤖 AIスキンケア</th>
                  <th className="p-3 text-left rounded-tr-xl font-bold">📖 従来のケア</th>
                </tr>
              </thead>
              <tbody>
                {AI_VS_TRADITIONAL.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-700 text-xs border-b border-gray-100">{row.aspect}</td>
                    <td className="p-3 text-xs text-gray-600 border-b border-gray-100">
                      {row.winner === "ai" && <span className="text-blue-600 font-bold mr-1">✅</span>}
                      {row.ai}
                    </td>
                    <td className="p-3 text-xs text-gray-600 border-b border-gray-100">
                      {row.winner === "traditional" && <span className="text-green-600 font-bold mr-1">✅</span>}
                      {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 内部リンクCTA */}
        <section className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center space-y-4">
          <h2 className="font-black text-white text-xl">美容テックツールも合わせてチェック</h2>
          <p className="text-blue-100 text-sm">AIスキンケアと美容デバイスを組み合わせることで相乗効果が生まれます。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/beauty-tools-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-blue-700 text-sm transition-all hover:opacity-90 bg-white">
              ビューティーテックツールを見る →
            </Link>
            <Link href="/korean-beauty-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-90 bg-white/20 text-white border border-white/40">
              韓国コスメガイドを見る →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-gray-900">よくある質問</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
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
