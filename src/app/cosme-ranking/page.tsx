import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "プチプラコスメおすすめランキング2026年版【20代・30代・敏感肌・厳選12選】",
  description:
    "プチプラコスメの2026年最新おすすめランキング。ドラッグストアで買える1,000円〜3,000円のベースメイク・スキンケア・リップを肌タイプ別に厳選12選紹介。",
  openGraph: {
    title: "プチプラコスメおすすめランキング2026年版【12選】",
    description: "1,000円〜3,000円で使えるドラッグストアコスメを徹底比較。肌タイプ別おすすめも掲載。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "プチプラコスメおすすめランキング2026年版【12選】",
    description: "1,000円〜3,000円のプチプラコスメを肌タイプ別に厳選紹介。",
  },
};

type Category = "ベースメイク" | "スキンケア" | "リップ" | "アイメイク";

interface CosmeItem {
  rank: number;
  brand: string;
  name: string;
  price: string;
  category: Category;
  skinType: string;
  merit: string;
  rating: number;
}

interface SkinGuide {
  type: string;
  icon: string;
  products: string[];
  tips: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const COSME_RANKING: CosmeItem[] = [
  {
    rank: 1,
    brand: "キャンメイク",
    name: "マシュマロフィニッシュパウダー",
    price: "1,320円",
    category: "ベースメイク",
    skinType: "脂性肌・混合肌",
    merit: "崩れにくい・毛穴カバー・長時間皮脂テカリ防止",
    rating: 5,
  },
  {
    rank: 2,
    brand: "セザンヌ",
    name: "皮脂テカリ防止下地",
    price: "660円",
    category: "ベースメイク",
    skinType: "脂性肌・混合肌",
    merit: "660円とは思えない高品質・UV防止・毛穴レスに仕上がる",
    rating: 5,
  },
  {
    rank: 3,
    brand: "KATE",
    name: "リップモンスター",
    price: "1,210円",
    category: "リップ",
    skinType: "全肌タイプ",
    merit: "落ちにくい・発色が良い・乾燥しにくい・カラバリ豊富",
    rating: 5,
  },
  {
    rank: 4,
    brand: "マジョリカ マジョルカ",
    name: "ラッシュエキスパンダー",
    price: "1,430円",
    category: "アイメイク",
    skinType: "全肌タイプ",
    merit: "繊維入りでまつ毛が長く見える・ウォータープルーフ",
    rating: 4,
  },
  {
    rank: 5,
    brand: "ロムアンド",
    name: "ベターザンパレット",
    price: "1,980円",
    category: "アイメイク",
    skinType: "全肌タイプ",
    merit: "韓国発・発色抜群・パール感・プチプラなのにデパコス並みのクオリティ",
    rating: 5,
  },
  {
    rank: 6,
    brand: "花王",
    name: "キュレル 潤浸保湿 化粧水",
    price: "1,650円",
    category: "スキンケア",
    skinType: "敏感肌・乾燥肌",
    merit: "敏感肌に優しい・保湿力高い・セラミド配合・皮膚科推薦",
    rating: 5,
  },
  {
    rank: 7,
    brand: "ちふれ",
    name: "UV ホワイトニング乳液",
    price: "770円",
    category: "スキンケア",
    skinType: "全肌タイプ",
    merit: "低価格で高品質・美白成分配合・UV防止・軽いテクスチャー",
    rating: 4,
  },
  {
    rank: 8,
    brand: "コーセー",
    name: "ナチュリエ ハトムギ化粧水",
    price: "770円",
    category: "スキンケア",
    skinType: "全肌タイプ",
    merit: "コスパ最強・ハトムギエキス配合・毛穴ケア・惜しみなく使える",
    rating: 4,
  },
  {
    rank: 9,
    brand: "セザンヌ",
    name: "ナチュラルチーク",
    price: "638円",
    category: "ベースメイク",
    skinType: "全肌タイプ",
    merit: "発色が良い・馴染みやすい・カラバリ豊富・コスパ最強",
    rating: 4,
  },
  {
    rank: 10,
    brand: "カネボウ",
    name: "DEW クリアエッセンス",
    price: "3,300円",
    category: "スキンケア",
    skinType: "乾燥肌・エイジングケア",
    merit: "保湿力が高い・肌のキメが整う・透明感UP・プチプラ帯では最高峰",
    rating: 5,
  },
  {
    rank: 11,
    brand: "キャンメイク",
    name: "グロウフルールチークス",
    price: "858円",
    category: "ベースメイク",
    skinType: "全肌タイプ",
    merit: "ツヤ感・立体感・4色一体で使いやすい・初心者向け",
    rating: 4,
  },
  {
    rank: 12,
    brand: "ウズ（UZU）",
    name: "アイオープニングライナー",
    price: "1,430円",
    category: "アイメイク",
    skinType: "全肌タイプ",
    merit: "滲みにくい・細いラインが描きやすい・目元が際立つ",
    rating: 5,
  },
];

const SKIN_GUIDES: SkinGuide[] = [
  {
    type: "乾燥肌",
    icon: "💧",
    products: ["キュレル 潤浸保湿 化粧水", "DEW クリアエッセンス", "ナチュリエ ハトムギ化粧水"],
    tips: "洗顔後すぐに化粧水を入れて水分蒸発を防ぐ。乳液・クリームは欠かさず。ベースはリキッドファンデがおすすめ。",
  },
  {
    type: "脂性肌",
    icon: "✨",
    products: ["セザンヌ 皮脂テカリ防止下地", "キャンメイク マシュマロフィニッシュパウダー", "ちふれ UVホワイトニング乳液"],
    tips: "皮脂テカリ防止の下地が必須。ファンデはパウダータイプが長持ち。化粧直しはあぶらとり紙→パウダーの順番で。",
  },
  {
    type: "混合肌",
    icon: "🌸",
    products: ["セザンヌ 皮脂テカリ防止下地", "ナチュリエ ハトムギ化粧水", "キャンメイク マシュマロフィニッシュパウダー"],
    tips: "Tゾーン（額・鼻）は油分を控えめに。頬は保湿重視で。部位によってスキンケアを使い分けるのが理想。",
  },
  {
    type: "敏感肌",
    icon: "🌿",
    products: ["キュレル 潤浸保湿 化粧水", "ちふれ UVホワイトニング乳液", "セザンヌ ナチュラルチーク"],
    tips: "パッチテスト必須。無香料・無着色・低刺激処方の製品を選ぶ。新製品は腕の内側で24時間テストしてから使う。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "プチプラコスメはデパコスと比べて品質が劣りますか？",
    a: "必ずしも劣りません。セザンヌ・キャンメイク・UZUなど日本の優れたプチプラブランドは、成分・品質ともにデパコスと遜色ない製品を展開しています。特にベースメイクやリップ分野では、プチプラが上位にランクインする口コミ比較も多くあります。ただし高機能スキンケア（美容液・クリーム）はデパコスが強い傾向があります。",
  },
  {
    q: "敏感肌でもプチプラコスメは使えますか？",
    a: "はい、使えます。キュレルやちふれなど敏感肌向けのプチプラブランドは多数あります。購入前にパッチテストを行い、無香料・無着色・アルコールフリーの製品を選ぶとリスクを軽減できます。特にキュレルは皮膚科医も推薦する敏感肌向け低刺激処方として知られています。",
  },
  {
    q: "プチプラコスメで時短メイクをするコツは何ですか？",
    a: "①下地（皮脂テカリ防止）→②BBクリームまたはクッションファンデ→③パウダーチーク→④マスカラ→⑤リップの5ステップで整います。下地とパウダーを省かずに使うことで崩れを防ぎ、化粧直しの頻度が減ります。特にキャンメイクのマシュマロフィニッシュパウダーは仕上げの必須アイテムです。",
  },
  {
    q: "2026年のプチプラコスメのトレンドは何ですか？",
    a: "2026年は韓国コスメ（K-Beauty）の影響を受けたグラスシン肌（透明感重視）・セミマットテクスチャーが主流です。また、スキンケア成分配合のメイクアイテムやサステナブルパッケージの製品も増加傾向。特にロムアンドやIperipera（イペリペラ）などK-Beautyブランドが日本のプチプラ市場に参入し人気急上昇しています。",
  },
  {
    q: "プチプラコスメをどこで購入するのが最安ですか？",
    a: "ドラッグストア（マツキヨ・ツルハ・ウエルシア）が定番です。ポイントカード活用でさらにお得になります。またAmazon・楽天でもまとめ買い割引があり、定価より安く購入できるケースも。コンビニは定価販売が多いため、急ぎでない限りドラッグストアや通販での購入がおすすめです。",
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

const categoryColors: Record<Category, string> = {
  ベースメイク: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  スキンケア: "bg-green-500/20 text-green-300 border-green-500/30",
  リップ: "bg-red-500/20 text-red-300 border-red-500/30",
  アイメイク: "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

const rankColors = ["bg-yellow-400 text-black", "bg-gray-300 text-black", "bg-orange-400 text-black"];

export default function CosmeRankingPage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-pink-500/20 text-pink-400 border border-pink-500/30 rounded-full px-4 py-1 mb-4">
            💄 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            プチプラコスメ<br />
            <span className="text-pink-400">おすすめランキング2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【20代・30代・敏感肌・厳選12選】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            ドラッグストアで買える1,000円〜3,000円のプチプラコスメを徹底比較。<br />
            肌タイプ別・カテゴリ別に厳選しました。
          </p>
        </div>

        {/* ランキング */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-3">
            💄 プチプラコスメ おすすめTOP12
          </h2>
          <div className="space-y-4">
            {COSME_RANKING.map((item) => (
              <div
                key={item.rank}
                className="bg-gray-900 border border-gray-700 rounded-xl p-4 flex gap-4"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${
                  item.rank <= 3 ? rankColors[item.rank - 1] : "bg-gray-700 text-gray-300"
                }`}>
                  {item.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    <span className="text-yellow-400 text-xs">{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm">
                    {item.brand} {item.name}
                  </h3>
                  <p className="text-pink-400 text-xs font-bold mt-0.5">{item.price}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.merit}</p>
                  <p className="text-gray-500 text-xs mt-0.5">向き: {item.skinType}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 肌タイプ別ガイド */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-3">
            🌸 肌タイプ別 おすすめプチプラコスメ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKIN_GUIDES.map((g, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <h3 className="text-white font-bold text-sm mb-2">
                  {g.icon} {g.type}向け
                </h3>
                <ul className="space-y-1 mb-3">
                  {g.products.map((p, j) => (
                    <li key={j} className="text-pink-300 text-xs flex gap-1.5">
                      <span>✓</span>{p}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs leading-relaxed">{g.tips}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            💆 正しいスキンケアで土台を作ろう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            プチプラコスメを活かすには毎日のスキンケアが重要。朝晩のルーティンを確認しましょう。
          </p>
          <a
            href="/skincare-guide"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            スキンケア完全ガイドを見る →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
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
