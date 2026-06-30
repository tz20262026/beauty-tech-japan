import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllArticles, adaptMicroCMSArticle } from "@/lib/microcms";
import { allArticles as localArticles, getArticleImageUrl, getReadTime, getRelativeTime, isNew } from "@/lib/articles";
import type { Article } from "@/lib/articles";

export const revalidate = 300;

type Props = { params: Promise<{ tag: string }> };

async function fetchArticles(): Promise<Article[]> {
  try {
    const remote = await getAllArticles();
    if (remote.length > 0) return remote.map(adaptMicroCMSArticle);
  } catch {
    /* フォールバック */
  }
  return localArticles;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const ogUrl = `https://beauty-tech-japan.vercel.app/api/og?title=${encodeURIComponent(decoded)}&tag=${encodeURIComponent(decoded)}`;
  return {
    title: `#${decoded} の記事一覧`,
    description: `${decoded} に関する美容・コスメの最新情報をまとめました。`,
    openGraph: {
      title: `#${decoded} | Beauty Tech Japan`,
      description: `${decoded} に関する美容・コスメ最新情報`,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: decoded }],
    },
  };
}

export async function generateStaticParams() {
  const articles = await fetchArticles();
  const tags = Array.from(new Set(articles.flatMap((a) => a.tags)));
  return tags.map((tag) => ({ tag }));
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const all = await fetchArticles();
  const articles = all.filter((a) => a.tags.includes(decoded));

  if (articles.length === 0) notFound();

  return (
    <div>
      {/* パンくず */}
      <nav className="text-xs text-gray-600 dark:text-gray-300 mb-4 flex items-center gap-1.5">
        <Link href="/" className="hover:text-pink-500 transition-colors">ホーム</Link>
        <span>/</span>
        <span className="text-gray-600 dark:text-gray-300">{decoded}</span>
      </nav>

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 px-4 py-1.5 rounded-full text-sm font-bold mb-2">
          # {decoded}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {decoded} の記事一覧
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{articles.length} 件の記事</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {articles.map((article, i) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={getArticleImageUrl(article, all)}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {isNew(article.publishedAt) && (
                <span className="absolute top-2 right-2 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded animate-pulse z-10">
                  NEW
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300 mb-1.5">
                <span>{getRelativeTime(article.publishedAt)} · {article.source}</span>
                <span>{getReadTime(article.body)}分</span>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-1.5 group-hover:text-pink-600 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                {article.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
          ← すべての記事を見る
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "ホーム", item: "https://beauty-tech-japan.vercel.app" },
              { "@type": "ListItem", position: 2, name: decoded, item: `https://beauty-tech-japan.vercel.app/tags/${encodeURIComponent(decoded)}` },
            ],
          }),
        }}
      />
    </div>
  );
}
