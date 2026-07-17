import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  title: "韓国コスメ完全ガイド2026【最新トレンド・人気ブランド】",
  description: "2026年最新の韓国コスメトレンド・人気ブランド・購入方法を完全解説。K-Beautyの注目成分・おすすめアイテム・日本での買い方まで網羅。韓国コスメ初心者から上級者まで対応。",
  keywords: ["韓国コスメ 2026", "韓国コスメ トレンド", "K-Beauty おすすめ", "韓国コスメ ブランド", "韓国コスメ 購入"],
  openGraph: {
    title: "韓国コスメ完全ガイド2026【最新トレンド・人気ブランド】",
    description: "2026年最新の韓国コスメトレンド・人気ブランド・購入方法を完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "韓国コスメ完全ガイド2026【最新トレンド・人気ブランド】",
    description: "2026年最新の韓国コスメトレンド・人気ブランド・購入方法を完全解説",
  },
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/korean-beauty-guide" },
};

const TRENDS_2026 = [
  {
    trend: "グラスシン（Glass Skin）進化版：ミラースキン",
    emoji: "🪞",
    color: "#3b82f6",
    desc: "2026年のK-Beautyトレンドはガラス肌をさらに極めた「ミラースキン」。乳液状のエッセンスを7〜10層重ねることで、まるで鏡のように光を反射する透明感ある肌を目指す。センテラ・ヒアルロン酸の新世代処方が支える。",
    keywords: ["ミラースキン", "センテラ", "多層保湿"],
  },
  {
    trend: "クリーンビューティー×K-Beauty融合",
    emoji: "🌿",
    color: "#10b981",
    desc: "韓国コスメがクリーン（環境・肌への配慮）に傾倒。石油系界面活性剤・パラベン・シリコンを省いた処方でも高機能を維持する「クリーンK-Beauty」が世界的に人気を獲得中。",
    keywords: ["クリーン処方", "パラベンフリー", "ビーガン認証"],
  },
  {
    trend: "インナービューティー×スキンケア連携",
    emoji: "🍵",
    color: "#f59e0b",
    desc: "腸内環境と肌の関係（ガットスキン接続）が注目され、プロバイオティクス配合のコスメが急増。同時に飲む美容サプリとスキンケアをセットで使う「インサイド＆アウトサイド」ケアが定番化。",
    keywords: ["プロバイオティクス", "腸内美容", "美容サプリ連携"],
  },
  {
    trend: "AIパーソナライズ×K-Beautyコスメ",
    emoji: "🤖",
    color: "#8b5cf6",
    desc: "韓国大手コスメブランドが自社アプリのAI診断と連動した個別処方サービスを開始。撮影した肌データをAIが分析し、オーダーメイドのセラム・クリームを調合して自宅に配送するDTC（ダイレクト・トゥ・コンシューマー）モデルが急成長。",
    keywords: ["AIカスタム処方", "パーソナライズコスメ", "DTC美容"],
  },
  {
    trend: "シカ（センテラ）から「タイガーグラス」へ",
    emoji: "🌱",
    color: "#ec4899",
    desc: "シカクリームとして世界的に普及した「センテラアジアティカ」の次世代版として、より高濃度・高純度の「タイガーグラスエキス」配合アイテムが登場。炎症鎮静・バリア修復力がさらに向上。",
    keywords: ["タイガーグラス", "シカ進化版", "バリア修復"],
  },
];

const TOP_BRANDS = [
  {
    brand: "COSRX（コスアールエックス）",
    emoji: "🐌",
    color: "#10b981",
    category: "クリーン処方・ニキビケア",
    flagship: "アドバンスド・スネイルムチン96エッセンス",
    desc: "カタツムリ分泌液を高配合したムチンシリーズで世界的ブレイク。低刺激・高機能・シンプル処方が信条。ニキビ跡・毛穴・赤みに悩む敏感肌から圧倒的支持。Amazonでも購入可能。",
    buy: "Amazon・Qoo10・OLIVE YOUNG",
  },
  {
    brand: "Laneige（ラネージュ）",
    emoji: "💧",
    color: "#0ea5e9",
    category: "水分補給・リップケア",
    flagship: "リップスリーピングマスク",
    desc: "「水の研究所」を標榜する高保湿ブランド。リップスリーピングマスクは世界累計○○本突破の大ヒット商品。2026年はウォータースリーピングマスク新処方で話題に。",
    buy: "Sephora・公式サイト・Qoo10",
  },
  {
    brand: "BEAUTY OF JOSEON（ビューティーオブジョソン）",
    emoji: "🏮",
    color: "#d97706",
    category: "発酵美容・クラシックK-Beauty",
    flagship: "グローウ・ディープ・シームエッセンス",
    desc: "朝鮮時代の美容秘法をモダンに解釈したヘリテージブランド。発酵米水・人参・ユズ等の伝統成分を最新技術で配合。TikTokで200万以上のバイラル動画を生んだブランド。",
    buy: "Qoo10・スタイルコリアン・公式",
  },
  {
    brand: "Anua（アヌア）",
    emoji: "🌾",
    color: "#84cc16",
    category: "低刺激・センテラ系",
    flagship: "ドクダミ77%スーシング・トナー",
    desc: "ドクダミ高配合のシンプル処方で敏感肌・ニキビ肌から絶大支持。2026年はナイアシンアミド強化版が日本でも話題。クリーン処方かつコスパも良く初心者にも安心。",
    buy: "Qoo10・Amazon・公式日本サイト",
  },
  {
    brand: "SULWHASOO（雪花秀）",
    emoji: "🌸",
    color: "#ec4899",
    category: "高級韓方・プレステージ",
    flagship: "퍼스트 케어 アクティベーティングセラム EX",
    desc: "韓国の高級漢方美容ブランド。サムスン財閥のアモーレパシフィック傘下。人参・韓方成分の独自処方「JaUM Balancing Complex™」で世界の富裕層からも支持。免税店・高級百貨店で購入可能。",
    buy: "百貨店・免税店・公式サイト",
  },
  {
    brand: "Numbuzin（ナンバーズイン）",
    emoji: "🔢",
    color: "#8b5cf6",
    category: "高濃度成分・効果重視",
    flagship: "No.3 スキントーナー（ナイアシンアミド高配合）",
    desc: "ナイアシンアミド・ペプチド等の機能性成分を最高濃度で配合したシリーズ展開ブランド。「成分オタク」と呼ばれるK-Beautyファンに特に人気。2026年はペプチドシリーズが話題沸騰。",
    buy: "Qoo10・OLIVE YOUNG・スタイルコリアン",
  },
];

const BUY_GUIDE = [
  {
    shop: "Qoo10（キューテン）",
    emoji: "🛍️",
    color: "#ec4899",
    merit: "メガ割でさらにお得。公式ショップ多数",
    caution: "発送日数・偽物に注意。正規ショップを確認",
    bestFor: "まとめ買い・セール狙い",
  },
  {
    shop: "Amazon.co.jp",
    emoji: "📦",
    color: "#f97316",
    merit: "プライム配送で翌日届く。返品も安心",
    caution: "正規品かどうかショップ評価を確認",
    bestFor: "急ぎ・初めての購入",
  },
  {
    shop: "OLIVE YOUNG（オリーブヤング）グローバル",
    emoji: "🌿",
    color: "#10b981",
    merit: "韓国最大手コスメチェーンの直営。正規品保証",
    caution: "国際配送のため1週間程度かかる場合がある",
    bestFor: "正規品確認・最新アイテム",
  },
  {
    shop: "スタイルコリアン",
    emoji: "🇰🇷",
    color: "#3b82f6",
    merit: "正規品専門・日本語対応・割引率が高い",
    caution: "まとめ買いの方がコスパ良い（送料無料条件あり）",
    bestFor: "コスパ重視・まとめ買い",
  },
  {
    shop: "各ブランド公式サイト",
    emoji: "🏪",
    color: "#8b5cf6",
    merit: "限定品・先行発売品が入手できる。正規品保証",
    caution: "日本未発売ブランドは日本語未対応のことも",
    bestFor: "特定ブランド愛好者・限定品狙い",
  },
];

const FAQ = [
  {
    q: "2026年の韓国コスメトレンドは何ですか？",
    a: "2026年の最大トレンドは「ミラースキン（超透明感肌）」と「クリーンK-Beauty」の融合です。センテラ・ヒアルロン酸の次世代処方で究極の透明感を目指しながら、環境・肌への配慮（クリーン処方・ビーガン認証）を兼ね備えたコスメが人気を集めています。AIパーソナライズとK-Beautyの組み合わせも急増中です。",
  },
  {
    q: "韓国コスメはどこで買うのがおすすめですか？",
    a: "初めての方にはQoo10（メガ割でお得）またはAmazon（翌日届く・返品安心）がおすすめです。本格的にハマってきたらOLIVE YOUNGグローバルまたはスタイルコリアンで正規品をまとめ買いするのがコスパ最高です。偽物が多く流通しているブランドもあるため、必ず公式ショップまたは信頼できるセラーから購入してください。",
  },
  {
    q: "韓国コスメは日本のものと成分が違いますか？",
    a: "同じブランドの同名製品でも日本向けと韓国本国向けで成分濃度・処方が異なることがあります（日本の薬機法の規制に合わせて成分量を調整する場合があるため）。本国版がほしい場合はOLIVE YOUNGグローバルから直接購入するのがおすすめです。一方、日本版は日本語表示で成分確認しやすいメリットがあります。",
  },
  {
    q: "韓国コスメを初めて使う場合、何から始めればいいですか？",
    a: "まずはCOSRXのスネイルムチンエッセンスまたはAnuaのドクダミトナーから始めることをおすすめします。低刺激で多くの肌タイプに合い、K-Beautyの効果を実感しやすいアイテムです。2,000〜4,000円台でお試しでき、満足度が高ければ徐々にステップを増やしていくのが失敗しないコツです。",
  },
  {
    q: "韓国コスメのメガ割はいつ開催されますか？",
    a: "Qoo10のメガ割は年に数回（概ね3・6・9・12月頃）開催されます。事前にクーポンを取得しておくことで最大80%オフで購入できる場合があります。開催前に気になるブランドをカートに入れて準備しておくのがコツです。SNS（X/インスタ）でQoo10をフォローしておくと開催告知を見逃しません。",
  },
];

export default function KoreanBeautyGuidePage() {
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
      headline: "韓国コスメ完全ガイド2026【最新トレンド・人気ブランド】",
      description: "2026年最新の韓国コスメトレンド・人気ブランド・購入方法を完全解説",
      author: { "@type": "Organization", name: "Beauty Tech Japan" },
      publisher: { "@type": "Organization", name: "Beauty Tech Japan" },
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      inLanguage: "ja",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* ヘッダー */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-rose-100 text-rose-700 border border-rose-200">
            🇰🇷 韓国コスメガイド2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            韓国コスメ完全ガイド<span className="text-rose-600">2026</span><br className="sm:hidden" />
            <span className="text-xl sm:text-2xl font-bold ml-0 sm:ml-2 text-gray-600">最新トレンド・人気ブランド</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            世界が注目する韓国コスメ（K-Beauty）の2026年最新トレンドから人気ブランド・購入方法まで徹底解説。
            初心者も安心、韓国コスメのすべてがここで分かります。
          </p>
          <div className="flex flex-wrap gap-2">
            {["2026最新トレンド", "人気ブランド", "購入ガイド", "初心者OK"].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-rose-100 text-rose-600 font-semibold">{tag}</span>
            ))}
          </div>
        </section>

        {/* 2026年トレンド */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🔥 2026年 韓国コスメの最新トレンド5選</h2>
          <div className="space-y-4">
            {TRENDS_2026.map(t => (
              <div key={t.trend} className="rounded-2xl border bg-white p-5 space-y-3" style={{ borderColor: `${t.color}25` }}>
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">{t.emoji}</span>
                  <div>
                    <p className="font-black text-gray-900 text-sm mb-1">{t.trend}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.keywords.map(kw => (
                    <span key={kw} className="text-xs px-2.5 py-0.5 rounded-full font-semibold" style={{ background: `${t.color}10`, color: t.color }}>
                      # {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="korean-beauty-guide" />

        {/* 人気ブランド */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">✨ 2026年 韓国コスメ人気ブランド6選</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {TOP_BRANDS.map(b => (
              <div key={b.brand} className="rounded-2xl border bg-white p-5 space-y-3" style={{ borderColor: `${b.color}25` }}>
                <div className="flex items-start gap-2">
                  <span className="text-2xl flex-shrink-0">{b.emoji}</span>
                  <div>
                    <p className="font-black text-gray-900 text-sm leading-tight">{b.brand}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold mt-1 inline-block" style={{ background: `${b.color}12`, color: b.color }}>
                      {b.category}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-start gap-1">
                    <span className="font-bold flex-shrink-0" style={{ color: b.color }}>看板商品：</span>
                    <span className="text-gray-700">{b.flagship}</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="font-bold flex-shrink-0 text-gray-600">購入先：</span>
                    <span className="text-gray-600">{b.buy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 購入ガイド */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">🛒 韓国コスメ購入ガイド【日本から買う方法】</h2>
          <div className="space-y-3">
            {BUY_GUIDE.map(shop => (
              <div key={shop.shop} className="rounded-xl border bg-white p-4 space-y-2" style={{ borderColor: `${shop.color}25` }}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{shop.emoji}</span>
                  <span className="font-black text-gray-900 text-sm">{shop.shop}</span>
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: `${shop.color}12`, color: shop.color }}>
                    {shop.bestFor}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-1.5">
                    <span className="text-green-600 font-bold flex-shrink-0">○</span>
                    <span className="text-gray-600">{shop.merit}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-orange-500 font-bold flex-shrink-0">△</span>
                    <span className="text-gray-600">{shop.caution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンクCTA */}
        <section className="rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-8 text-center space-y-4">
          <h2 className="font-black text-white text-xl">K-Beautyの10ステップも詳しく学ぼう</h2>
          <p className="text-pink-100 text-sm">韓国コスメを最大限に活かすためのルーティン構築方法を解説。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/k-beauty-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-pink-700 text-sm transition-all hover:opacity-90 bg-white">
              K-Beautyルーティンを見る →
            </Link>
            <Link href="/skincare-ai-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-90 bg-white/20 text-white border border-white/40">
              AIスキンケアと組み合わせる →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-gray-900">よくある質問</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-rose-50 border border-rose-100 rounded-xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q. {q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 関連ガイド（役割の違う記事へ内部リンクし、検索評価の共食いを避ける） */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">あわせて読みたい</h2>
          <Link
            href="/k-beauty-guide"
            className="block rounded-xl border border-pink-200 bg-pink-50 p-5 transition-colors hover:border-pink-400"
          >
            <p className="font-bold text-gray-900 text-sm mb-1">
              K-Beautyスキンケアの「順番」を知りたい方へ
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              このページはトレンドとブランドの紹介が中心です。実際のスキンケアを10ステップの順番で解説した
              「K-Beautyルーティン完全ガイド」もあわせてどうぞ。
            </p>
            <span className="mt-3 inline-block text-xs font-bold text-pink-600">
              ルーティンガイドを読む →
            </span>
          </Link>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
