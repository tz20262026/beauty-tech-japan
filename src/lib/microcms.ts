/**
 * microCMS クライアント
 * Read API（一覧・詳細取得）と Write API（記事作成）を提供します。
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN!;
const API_KEY = process.env.MICROCMS_API_KEY!;
const ENDPOINT = process.env.MICROCMS_ENDPOINT ?? "news";

const BASE_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1`;

// ─── 型定義 ─────────────────────────────────────────────

export type MicroCMSImage = {
  url: string;
  width?: number;
  height?: number;
};

export type MicroCMSArticle = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  summary: string;
  content: string;
  source_name: string;
  source_url: string;
  tags: string; // カンマ区切りテキスト
  eyecatch?: MicroCMSImage;
};

export type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type ArticleWritePayload = {
  title: string;
  summary: string;
  content: string;
  source_name: string;
  source_url: string;
  tags: string;
  eyecatch?: string; // 画像URLはテキストフィールドとして扱う
};

// ─── Read API ────────────────────────────────────────────

/** 記事一覧を取得（デフォルト最大100件、publishedAtで降順） */
export async function getArticles(options?: {
  limit?: number;
  offset?: number;
  filters?: string;
}): Promise<MicroCMSListResponse<MicroCMSArticle>> {
  const params = new URLSearchParams({
    limit: String(options?.limit ?? 100),
    offset: String(options?.offset ?? 0),
    orders: "-publishedAt",
    ...(options?.filters ? { filters: options.filters } : {}),
  });

  const res = await fetch(`${BASE_URL}/${ENDPOINT}?${params}`, {
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    next: { revalidate: 300 }, // 5分キャッシュ
  });

  if (!res.ok) {
    throw new Error(`microCMS getArticles failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

/** IDで記事を1件取得 */
export async function getArticleById(id: string): Promise<MicroCMSArticle> {
  const res = await fetch(`${BASE_URL}/${ENDPOINT}/${id}`, {
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`microCMS getArticleById failed: ${res.status}`);
  }
  return res.json();
}

/** 全記事を取得（ページネーションを自動処理） */
export async function getAllArticles(): Promise<MicroCMSArticle[]> {
  const first = await getArticles({ limit: 1 });
  const total = first.totalCount;
  if (total === 0) return [];

  const pages = Math.ceil(total / 100);
  const results = await Promise.all(
    Array.from({ length: pages }, (_, i) => getArticles({ limit: 100, offset: i * 100 }))
  );
  return results.flatMap((r) => r.contents);
}

// ─── Write API ───────────────────────────────────────────

/** 新規記事を microCMS に投稿する */
export async function createArticle(
  payload: ArticleWritePayload
): Promise<{ id: string }> {
  const res = await fetch(`${BASE_URL}/${ENDPOINT}`, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`microCMS createArticle failed: ${res.status} ${body}`);
  }
  return res.json();
}

/** microCMS の Article を既存の Article 型に変換するアダプター */
export function adaptMicroCMSArticle(a: MicroCMSArticle) {
  const rawImageUrl = a.eyecatch?.url;
  // pollinations.ai は不安定なため除外し、Unsplash プールにフォールバックさせる
  const imageUrl = rawImageUrl && !rawImageUrl.includes("pollinations.ai") ? rawImageUrl : undefined;
  return {
    id: a.id,
    title: a.title,
    summary: a.summary,
    body: a.content,
    source: a.source_name,
    sourceUrl: a.source_url,
    tags: a.tags ? a.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
    publishedAt: a.publishedAt.slice(0, 10), // "YYYY-MM-DD"
    imageUrl,
  };
}
