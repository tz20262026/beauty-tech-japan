import extraArticlesData from "@/data/extra_articles.json";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop";

const CATEGORY_IMAGES: Record<string, string> = {
  // ビューティー・スキンケア
  スキンケア:     "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80&fit=crop",
  アンチエイジング: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80&fit=crop",
  最先端成分:     "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&fit=crop",
  成分:           "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&fit=crop",
  ビューティーサイエンス: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80&fit=crop",
  ビューティーテック: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&fit=crop",
  ウェルネス:     "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop",
  インナービューティー: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&fit=crop",
  サプリメント:   "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800&q=80&fit=crop",
  美容機器:       "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&fit=crop",
  ルーティン:     "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&fit=crop",
  パーソナライズ: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80&fit=crop",
  マイクロバイオーム: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop",
  Kビューティー:  "https://images.unsplash.com/photo-1546961342-ea5f62d793f1?w=800&q=80&fit=crop",
  Jビューティー:  "https://images.unsplash.com/photo-1546961342-ea5f62d793f1?w=800&q=80&fit=crop",
  テクノロジー:   "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
  ヘアケア:       "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&fit=crop",
  メイク:         "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&fit=crop",
  フレグランス:   "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80&fit=crop",
  ネイル:         "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&fit=crop",
  サステナビリティ: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&fit=crop",
  // 企業・ブランド
  OpenAI:       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
  Anthropic:    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
  Google:       "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80&fit=crop",
  Meta:         "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop",
  Microsoft:    "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&q=80&fit=crop",
  Apple:        "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80&fit=crop",
  Samsung:      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
  Tesla:        "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80&fit=crop",
  Adobe:        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
  // コンテンツ種別
  画像生成:     "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80&fit=crop",
  動画生成:     "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
  動画編集:     "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
  音声AI:       "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80&fit=crop",
  LLM:          "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
  生産性:       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
  オープンソース: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  開発ツール:   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  コーディング: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  クリエイティブ: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
  デザイン:     "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
  ロボット:     "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&fit=crop",
  自動運転:     "https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=800&q=80&fit=crop",
  会議AI:       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop",
  マーケティング: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
  語学学習:     "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
  メンタルヘルス: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&fit=crop",
  SNS:          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80&fit=crop",
  プレゼン:     "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80&fit=crop",
  エンタープライズ: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
  翻訳:         "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
  多言語:       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
  ビジネス:     "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
  文章AI:       "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80&fit=crop",
  AI:           "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
};

export function getArticleImageUrl(article: { imageUrl?: string; tags: string[] }): string {
  if (article.imageUrl) return article.imageUrl;
  for (const tag of article.tags) {
    if (CATEGORY_IMAGES[tag]) return CATEGORY_IMAGES[tag];
  }
  return DEFAULT_IMAGE;
}

/** 記事の本文から「何分で読めるか」を計算する（日本語500文字/分） */
export function getReadTime(body: string): number {
  const chars = body.replace(/\s/g, "").length;
  return Math.max(1, Math.round(chars / 500));
}

/** 日付を「3日前」「今日」などの表現に変換する */
export function getRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "今日";
  if (diffDays === 1) return "昨日";
  if (diffDays < 7) return `${diffDays}日前`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}週間前`;
  return dateStr;
}

/** 3日以内の記事かどうか判定する */
export function isNew(dateStr: string): boolean {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  return diffMs < 1000 * 60 * 60 * 24 * 3;
}

/** タグが一致する関連記事を最大3件返す */
export function getRelatedArticles(article: Article, all: Article[]): Article[] {
  return all
    .filter((a) => a.id !== article.id && a.tags.some((t) => article.tags.includes(t)))
    .slice(0, 3);
}

export type Article = {
  id: string;
  title: string;
  summary: string;
  body: string;
  source: string;
  sourceUrl: string;
  tags: string[];
  publishedAt: string;
  imageUrl?: string;
};

export const articles: Article[] = [];

// kaigaimeパイプラインから自動追加された記事と結合
const extraArticles: Article[] = extraArticlesData as Article[];
export const allArticles: Article[] = [...extraArticles, ...articles].sort(
  (a, b) => b.publishedAt.localeCompare(a.publishedAt)
);

export function getArticleById(id: string): Article | undefined {
  return allArticles.find((a) => a.id === id);
}
