import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SITE_URL = "https://beauty-tech-japan.vercel.app";
const PAGE_URL = `${SITE_URL}/guides`;

export const metadata: Metadata = {
  title: "美容ガイド一覧【全41ガイド】スキンケア成分・メイク・ヘアケアを徹底解説",
  description:
    "Beauty Tech Japanの全ガイド記事をカテゴリ別に一覧できるページ。レチノール・ビタミンCなどの成分解説から、メイク・韓国コスメ・ヘアケアまで、知りたいテーマから探せます。無料の肌タイプ診断・更年期セルフチェックもこちらから。",
  keywords: ["美容ガイド 一覧", "スキンケア 成分 一覧", "美容メディア まとめ", "肌タイプ診断", "更年期 セルフチェック"],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og`, width: 1200, height: 630, alt: "Beauty Tech Japan" }],
    title: "美容ガイド一覧【全41ガイド】スキンケア成分・メイク・ヘアケアを徹底解説",
    description: "成分解説からメイク・韓国コスメ・ヘアケアまで、全ガイドをカテゴリ別に一覧。無料診断ツールもこちら。",
    type: "website",
    locale: "ja_JP",
    url: PAGE_URL,
  },
  twitter: {
    images: [`${SITE_URL}/api/og`],
    card: "summary_large_image",
    title: "美容ガイド一覧【全41ガイド】",
    description: "成分解説からメイク・韓国コスメ・ヘアケアまで、全ガイドをカテゴリ別に一覧できます。",
  },
};

interface GuideItem {
  href: string;
  title: string;
  desc: string;
}

interface GuideCategory {
  name: string;
  emoji: string;
  items: GuideItem[];
}

// 無料診断ツールはリード獲得・収益導線の要なので別枠で最上部に目立たせる
const DIAGNOSIS_TOOLS: GuideItem[] = [
  {
    href: "/skin-type-diagnosis",
    title: "肌タイプ診断",
    desc: "30秒の質問に答えるだけで、乾燥肌・脂性肌・混合肌・敏感肌・普通肌のどれかがわかる無料診断。",
  },
  {
    href: "/menopause-check",
    title: "更年期セルフチェック",
    desc: "7つの質問で今の不調タイプと、今日からできるセルフケア・病院に相談すべきサインがわかる無料診断。",
  },
];

const CATEGORIES: GuideCategory[] = [
  {
    name: "スキンケア成分ガイド",
    emoji: "🧪",
    items: [
      { href: "/retinol-guide", title: "レチノール完全ガイド", desc: "効果・濃度の選び方・A反応の対処法まで皮膚科医監修で解説。" },
      { href: "/vitamin-c-serum-guide", title: "ビタミンC美容液ガイド", desc: "誘導体の種類とシミ・毛穴・美白への使い方、酸化しにくい選び方。" },
      { href: "/niacinamide-guide", title: "ナイアシンアミドガイド", desc: "毛穴・美白・ニキビ跡への効果と推奨濃度、レチノールとの併用可否。" },
      { href: "/acne-care-guide", title: "ニキビケア完全ガイド", desc: "思春期・大人ニキビの違いと種類別対処、皮膚科に行く判断基準。" },
      { href: "/serum-guide", title: "美容液の選び方ガイド", desc: "悩み別・成分別・タイプ別に自分に合う美容液の選び方を解説。" },
      { href: "/pore-care-guide", title: "毛穴ケアガイド", desc: "開き・黒ずみ・たるみ毛穴の種類別の原因と正しいケア方法。" },
      { href: "/whitening-guide", title: "美白ケアガイド", desc: "シミ・くすみに効く成分と選び方、朝夜のルーティンを解説。" },
      { href: "/anti-aging-guide", title: "エイジングケアガイド", desc: "年齢肌対策の成分（レチノール・ペプチド等）とルーティン。" },
      { href: "/sensitive-skin-guide", title: "敏感肌スキンケアガイド", desc: "低刺激化粧水の選び方と避けるべき成分、肌荒れ対策を解説。" },
      { href: "/kusumi-care-guide", title: "肌のくすみ対策ガイド", desc: "くすみの5つの原因タイプ別の見分け方と改善ケアを解説。" },
    ],
  },
  {
    name: "基本のスキンケア・日焼け止め",
    emoji: "✨",
    items: [
      { href: "/skincare-guide", title: "スキンケア基本ルーティン", desc: "朝晩の正しい順番と肌タイプ別の選び方を完全解説。" },
      { href: "/sunscreen-guide", title: "日焼け止め選び方ガイド", desc: "SPF・PAの意味、種類別おすすめ、正しい塗り方と塗り直し量。" },
      { href: "/skincare-ai-guide", title: "AIスキンケアガイド", desc: "AI肌診断アプリと最新ビューティーテックを紹介。" },
    ],
  },
  {
    name: "メイクアップ",
    emoji: "💄",
    items: [
      { href: "/makeup-guide", title: "メイク初心者ガイド", desc: "ベースメイク・アイメイク・リップの順番とやり方を解説。" },
      { href: "/foundation-guide", title: "ファンデーション選び方", desc: "種類・肌タイプ別の選び方、崩れない塗り方を解説。" },
      { href: "/concealer-guide", title: "コンシーラーガイド", desc: "クマ・シミ・ニキビ跡の悩み別の隠し方を解説。" },
      { href: "/bb-cc-guide", title: "BB・CCクリームガイド", desc: "BBとCCの違いと肌タイプ別の選び方を比較解説。" },
      { href: "/eye-makeup-guide", title: "アイメイクガイド", desc: "アイシャドウ・アイライナー・マスカラの塗り方を解説。" },
      { href: "/eyeshadow-guide", title: "アイシャドウガイド", desc: "奥二重・二重別の色選びと塗り方のコツを解説。" },
      { href: "/lip-guide", title: "リップガイド", desc: "リップの塗り方と乾燥対策、おすすめアイテムを解説。" },
    ],
  },
  {
    name: "韓国コスメ・ランキング",
    emoji: "🇰🇷",
    items: [
      { href: "/k-beauty-guide", title: "韓国コスメ・K-Beautyルーティン", desc: "10ステップスキンケアとおすすめ成分を完全解説。" },
      { href: "/korean-beauty-guide", title: "韓国コスメ最新トレンド", desc: "人気ブランドと最新トレンド、日本での買い方を紹介。" },
      { href: "/cosme-ranking", title: "プチプラコスメランキング", desc: "20代・30代・敏感肌向けの厳選コスメ12選。" },
    ],
  },
  {
    name: "季節のケア",
    emoji: "🍂",
    items: [
      { href: "/autumn-skin-reset-guide", title: "夏ダメージ肌の秋リセットガイド", desc: "紫外線・乾燥・ゆらぎ肌を7日間で立て直すケア方法。" },
      { href: "/after-sun-care-guide", title: "日焼け後ケアガイド", desc: "日焼け後72時間が勝負。冷却→保湿→美白ケアの手順。" },
      { href: "/ase-taisaku-guide", title: "汗・ニオイ対策ガイド", desc: "制汗剤の選び方とタイプ別比較、シーン別対策を解説。" },
      { href: "/summer-makeup-guide", title: "夏のメイク崩れ防止ガイド", desc: "テカリ・皮脂・汗に負けないベースメイクの手順。" },
    ],
  },
  {
    name: "ヘア・ボディ・その他",
    emoji: "💇",
    items: [
      { href: "/haircare-guide", title: "ヘアケアガイド", desc: "髪質改善・ダメージ補修・シャンプーの選び方を解説。" },
      { href: "/bodycare-guide", title: "ボディケアガイド", desc: "保湿・スクラブ・脱毛・むくみ対策を解説。" },
      { href: "/mens-beauty-guide", title: "メンズ美容ガイド", desc: "男性向けスキンケア・眉毛・脱毛の始め方を解説。" },
      { href: "/beauty-devices", title: "美顔器・美容機器ランキング", desc: "EMS・RF・LEDなど自宅で使える美容機器の選び方。" },
      { href: "/beauty-supplements", title: "美容サプリガイド", desc: "美白・コラーゲン・腸活サプリを目的別に比較。" },
      { href: "/diet-beauty-guide", title: "美容ダイエットガイド", desc: "食事・運動・サプリの組み合わせ方を解説。" },
      { href: "/nail-guide", title: "ネイルガイド", desc: "セルフジェルネイルの道具とやり方を解説。" },
      { href: "/perfume-guide", title: "香水ガイド", desc: "レディース・メンズ・プチプラの香水選びを紹介。" },
      { href: "/biyou-monitor-guide", title: "美容モニターの始め方", desc: "コスメ・エステを実質無料で試す方法を解説。" },
      { href: "/beauty-tools-guide", title: "ビューティーテック15選", desc: "AI肌診断・ARメイクアプリなど最新ツールを紹介。" },
      { href: "/josei-usuge-guide", title: "女性の薄毛ケアガイド", desc: "産後・更年期の抜け毛の原因とセルフケアを解説。" },
      { href: "/currentbody-scalp-care-guide", title: "40〜50代男性の頭皮ケアガイド", desc: "加齢で起きる頭皮の変化と自宅ケア、LEDデバイスも解説。" },
    ],
  },
];

const TOTAL_GUIDE_COUNT =
  DIAGNOSIS_TOOLS.length + CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

export default function GuidesPage() {
  // CollectionPage + ItemList: 全ガイドをitemListElementとして列挙し、
  // このページが「ガイドをまとめた一覧ページ」であることを検索エンジンに明示する
  const allItemsInOrder = [...DIAGNOSIS_TOOLS, ...CATEGORIES.flatMap((c) => c.items)];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "美容ガイド一覧",
    description: "Beauty Tech Japanの全ガイド記事をカテゴリ別にまとめた一覧ページ",
    url: PAGE_URL,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allItemsInOrder.length,
      itemListElement: allItemsInOrder.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.title,
        url: `${SITE_URL}${item.href}`,
      })),
    },
  };

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "ガイド一覧" }]} />

      {/* ヘッダー */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-pink-50 text-pink-600 border border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-900">
          📚 全{TOTAL_GUIDE_COUNT}ガイド収録
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight">
          美容ガイド一覧
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-2xl">
          スキンケア成分からメイク・韓国コスメ・ヘアケアまで、Beauty Tech Japanの全ガイドをカテゴリ別にまとめました。気になるテーマから読みたいガイドを見つけてください。
        </p>
      </section>

      {/* 無料診断ツール（収益導線の要なので最上部に大きく配置） */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
          🧴 無料診断ツール
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DIAGNOSIS_TOOLS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-2 p-6 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="inline-block w-fit text-xs font-black px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                無料・30秒〜1分
              </span>
              <p className="font-black text-lg leading-tight">{item.title}</p>
              <p className="text-sm text-white/90 leading-relaxed">{item.desc}</p>
              <span className="mt-1 text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                診断してみる →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* カテゴリ別ガイド一覧 */}
      {CATEGORIES.map((category) => (
        <section key={category.name} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <span>{category.emoji}</span>
            {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-1.5 p-5 rounded-2xl bg-white border border-gray-200 hover:border-pink-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 dark:bg-gray-800/60 dark:border-gray-700 dark:hover:border-pink-800"
              >
                <p className="font-black text-gray-900 dark:text-white text-sm leading-tight group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {item.title}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
