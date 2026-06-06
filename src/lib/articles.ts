import extraArticlesData from "@/data/extra_articles.json";

// ????????Unsplash?????(????)
const BEAUTY_IMAGE_POOL = [
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1571781565036-d3f759be73e4?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1525904097878-94fb15835963?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80&fit=crop",
];

// djb2??????(????)
function hashId(id: string): number {
  let hash = 5381;
  for (let i = 0; i < id.length; i++) {
    hash = ((hash << 5) + hash) + id.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getArticleImageUrl(
  article: { id?: string; imageUrl?: string; tags?: string[] },
  allArticles?: { id?: string }[]
): string {
  // ?????undefined?null ?????????????
  if (article.imageUrl && article.imageUrl.trim() !== "") return article.imageUrl;
  if (allArticles && article.id) {
    const idx = allArticles.findIndex((a) => a.id === article.id);
    if (idx >= 0) return BEAUTY_IMAGE_POOL[idx % BEAUTY_IMAGE_POOL.length];
  }
  const seed = article.id ? hashId(article.id) : 0;
  return BEAUTY_IMAGE_POOL[seed % BEAUTY_IMAGE_POOL.length];
}

export function getReadTime(body: string | undefined | null): number {
  if (!body) return 1;
  const chars = body.replace(/\s/g, "").length;
  return Math.max(1, Math.round(chars / 500));
}

export function getRelativeTime(dateStr: string | undefined | null): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  // ??????????????????
  if (isNaN(date.getTime())) return dateStr;
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "??";
  if (diffDays === 1) return "??";
  if (diffDays < 7) return `${diffDays}??`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}???`;
  return dateStr;
}

export function isNew(dateStr: string | undefined | null): boolean {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return false;
  const diffMs = new Date().getTime() - date.getTime();
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
