import extraArticlesData from "@/data/extra_articles.json";

// 記事IDをシードにして配列からランダム選択（同じIDなら常に同じ画像）
function pickByArticleId(images: string[], id: string): string {
  const seed = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return images[seed % images.length];
}

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80&fit=crop",
];

const CATEGORY_IMAGES: Record<string, string[]> = {
  スキンケア: [
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1571781565036-d3f759be73e4?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&fit=crop",
  ],
  アンチエイジング: [
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop",
  ],
  最先端成分: [
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop",
  ],
  成分: [
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800&q=80&fit=crop",
  ],
  ビューティーサイエンス: [
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&fit=crop",
  ],
  ビューティーテック: [
    "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&fit=crop",
  ],
  ウェルネス: [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
  ],
  インナービューティー: [
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
  ],
  サプリメント: [
    "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&fit=crop",
  ],
  美容機器: [
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&fit=crop",
  ],
  ルーティン: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80&fit=crop",
  ],
  パーソナライズ: [
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&fit=crop",
  ],
  マイクロバイオーム: [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop",
  ],
  Kビューティー: [
    "https://images.unsplash.com/photo-1546961342-ea5f62d793f1?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80&fit=crop",
  ],
  Jビューティー: [
    "https://images.unsplash.com/photo-1546961342-ea5f62d793f1?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80&fit=crop",
  ],
  テクノロジー: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&fit=crop",
  ],
  ヘアケア: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80&fit=crop",
  ],
  メイク: [
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1560705977-fd88ece3eef7?w=800&q=80&fit=crop",
  ],
  メイクアップ: [
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1560705977-fd88ece3eef7?w=800&q=80&fit=crop",
  ],
  フレグランス: [
    "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80&fit=crop",
  ],
  ネイル: [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&fit=crop",
  ],
  サステナビリティ: [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&fit=crop",
  ],
  AI: [
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80&fit=crop",
  ],
  トレンド: [
    "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80&fit=crop",
  ],
  ボディケア: [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop",
  ],
  OpenAI: ["https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop"],
  Anthropic: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop"],
  Google: ["https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80&fit=crop"],
  Meta: ["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop"],
  Microsoft: ["https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&q=80&fit=crop"],
  LLM: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop"],
  画像生成: ["https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80&fit=crop"],
  生産性: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop"],
  クリーンビューティー: [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
  ],
};

export function getArticleImageUrl(article: { id?: string; imageUrl?: string; tags: string[] }): string {
  if (article.imageUrl) return article.imageUrl;
  const id = article.id ?? String(Date.now());
  for (const tag of article.tags) {
    const images = CATEGORY_IMAGES[tag];
    if (images && images.length > 0) return pickByArticleId(images, id);
  }
  return pickByArticleId(DEFAULT_IMAGES, id);
}

export function getReadTime(body: string): number {
  const chars = body.replace(/\s/g, "").length;
  return Math.max(1, Math.round(chars / 500));
}

export function getRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "今日";
  if (diffDays === 1) return "昨日";
  if (diffDays < 7) return `${diffDays}日前`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}週間前`;
  return dateStr;
}

export function isNew(dateStr: string): boolean {
  const diffMs = new Date().getTime() - new Date(dateStr).getTime();
  return diffMs < 1000 * 60 * 60 * 24 * 3;
}

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

const extraArticles: Article[] = extraArticlesData as Article[];
export const allArticles: Article[] = [...extraArticles, ...articles].sort(
  (a, b) => b.publishedAt.localeCompare(a.publishedAt)
);

export function getArticleById(id: string): Article | undefined {
  return allArticles.find((a) => a.id === id);
}
