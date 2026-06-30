import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import {
  getArticleImageUrl,
  getReadTime,
  getRelativeTime,
  getRelatedArticles,
  allArticles as localArticles,
  type Article,
} from "@/lib/articles";
import {
  getAllArticles,
  getArticleById as getMicroCMSArticleById,
  adaptMicroCMSArticle,
} from "@/lib/microcms";
import ShareButtons from "@/components/ShareButtons";
import ReadingProgress from "@/components/ReadingProgress";
import BookmarkButton from "@/components/BookmarkButton";
import NewsletterForm from "@/components/NewsletterForm";
import TableOfContents, { extractHeadings } from "@/components/TableOfContents";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const revalidate = 300;

type Props = { params: Promise<{ id: string }> };

async function fetchAllArticles(): Promise<Article[]> {
  try {
    const remote = await getAllArticles();
    if (remote.length > 0) return remote.map(adaptMicroCMSArticle);
  } catch {
    /* フォールバック */
  }
  return localArticles;
}

async function fetchArticleById(id: string): Promise<Article | undefined> {
  try {
    const remote = await getMicroCMSArticleById(id);
    return adaptMicroCMSArticle(remote);
  } catch {
    /* フォールバック to local */
  }
  return localArticles.find((a) => a.id === id);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await fetchArticleById(id);
  if (!article) return {};
  const imageUrl = getArticleImageUrl(article);
  const ogImageUrl = `https://beauty-tech-japan.vercel.app/api/og?title=${encodeURIComponent(article.title)}&tag=${encodeURIComponent(article.tags[0] ?? "")}`;
  return {
    title: `${article.title}`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
      tags: article.tags,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [ogImageUrl],
    },
  };
}

export async function generateStaticParams() {
  const articles = await fetchAllArticles();
  return articles.map((a) => ({ id: a.id }));
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = await fetchArticleById(id);
  if (!article) notFound();

  const allArticles = await fetchAllArticles();
  const related = getRelatedArticles(article, allArticles);
  const siteBase = "https://beauty-tech-japan.vercel.app";
  const headings = extractHeadings(article.body ?? "");

  // 前後の記事（日付降順で並べて隣接する記事を取得）
  const sorted = [...allArticles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const currentIdx = sorted.findIndex((a) => a.id === article.id);
  const newerArticle = currentIdx > 0 ? sorted[currentIdx - 1] : null;
  const olderArticle = currentIdx < sorted.length - 1 ? sorted[currentIdx + 1] : null;

  const articleUrl = `${siteBase}/articles/${article.id}`;
  const articleImageUrl = getArticleImageUrl(article);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    url: articleUrl,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "ja",
    author: {
      "@type": "Organization",
      name: "Beauty Tech Japan",
      url: siteBase,
    },
    publisher: {
      "@type": "Organization",
      name: "Beauty Tech Japan",
      url: siteBase,
      logo: {
        "@type": "ImageObject",
        url: `${siteBase}/icon.png`,
        width: 512,
        height: 512,
      },
    },
    image: {
      "@type": "ImageObject",
      url: articleImageUrl,
      width: 1200,
      height: 630,
    },
    keywords: article.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: siteBase },
        ...(article.tags[0]
          ? [{ "@type": "ListItem", position: 2, name: article.tags[0], item: `${siteBase}/tags/${encodeURIComponent(article.tags[0])}` }]
          : []),
        { "@type": "ListItem", position: article.tags[0] ? 3 : 2, name: article.title, item: articleUrl },
      ],
    },
  };

  return (
    <div className="max-w-2xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />

      {/* パンくず */}
      <nav className="text-xs text-gray-600 dark:text-gray-300 mb-4 flex items-center gap-1.5">
        <Link href="/" className="hover:text-pink-500 transition-colors">ホーム</Link>
        <span>/</span>
        {article.tags[0] && (
          <>
            <Link href={`/tags/${encodeURIComponent(article.tags[0])}`} className="hover:text-pink-500 transition-colors">
              {article.tags[0]}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-600 dark:text-gray-300 truncate max-w-[200px]">{article.title}</span>
      </nav>

      <article className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="relative w-full h-52 sm:h-72 overflow-hidden">
          <Image
            src={getArticleImageUrl(article)}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full border border-white/30 hover:bg-white/40 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-600 dark:text-gray-300">
              <span>{getRelativeTime(article.publishedAt)}</span>
              <span>·</span>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                {article.source} ↗
              </a>
              <span>·</span>
              <span>約{getReadTime(article.body)}分で読める</span>
            </div>
            <BookmarkButton articleId={article.id} />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
            {article.title}
          </h1>

          <div className="bg-pink-50 dark:bg-pink-950/30 border-l-4 border-pink-400 dark:border-pink-600 rounded-r-xl px-5 py-4 mb-7 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            {article.summary}
          </div>

          <TableOfContents headings={headings} />

          <div className="prose prose-sm sm:prose max-w-none text-gray-800 dark:text-gray-200 leading-loose prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-pink-600 prose-strong:text-gray-900 dark:prose-strong:text-white prose-li:marker:text-pink-400 dark:prose-invert">
            <ReactMarkdown>{article.body}</ReactMarkdown>
          </div>

          {/* アフィリエイトカード（記事1本につき1つ） */}
          <ArticleAffiliateCard tags={article.tags} articleId={article.id} />

          {/* 読了後CTA：次に読む記事 */}
          {related[0] && (
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-3">✨ 次にこれを読む</p>
              <Link
                href={`/articles/${related[0].id}`}
                className="flex gap-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/30 dark:to-purple-950/30 border border-pink-100 dark:border-pink-900 rounded-xl overflow-hidden hover:shadow-md hover:border-pink-300 dark:hover:border-pink-700 transition-all group"
              >
                <div className="relative w-24 sm:w-32 shrink-0">
                  <Image
                    src={getArticleImageUrl(related[0], allArticles)}
                    alt={related[0].title}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="py-4 pr-4 flex flex-col justify-center min-w-0">
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                    {getRelativeTime(related[0].publishedAt)} · {getReadTime(related[0].body)}分で読める
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {related[0].title}
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* タグリンク */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2">タグ</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="text-xs px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900 hover:bg-pink-100 dark:hover:bg-pink-950/60 transition-colors"
                >
                  # {tag}
                </Link>
              ))}
            </div>
          </div>

          <ShareButtons
            title={article.title}
            url={`${siteBase}/articles/${article.id}`}
          />

          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-300">情報元: {article.source}</span>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-pink-600 hover:underline"
            >
              原文を読む ↗
            </a>
          </div>
        </div>
      </article>

      {/* ニュースレター */}
      <div className="mt-8">
        <NewsletterForm />
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">関連記事</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/articles/${r.id}`}
                className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative w-full h-28 overflow-hidden">
                  <Image
                    src={getArticleImageUrl(r, allArticles)}
                    alt={r.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 224px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-3">
                  <div className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                    {getRelativeTime(r.publishedAt)} · {getReadTime(r.body)}分
                  </div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-pink-600 transition-colors line-clamp-2">
                    {r.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 前後の記事ナビ */}
      {(newerArticle || olderArticle) && (
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div>
            {newerArticle && (
              <Link
                href={`/articles/${newerArticle.id}`}
                className="flex flex-col gap-1 p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-700 transition-all group h-full"
              >
                <span className="text-xs text-pink-500 font-semibold">← 新しい記事</span>
                <span className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2 group-hover:text-pink-600 transition-colors">
                  {newerArticle.title}
                </span>
              </Link>
            )}
          </div>
          <div>
            {olderArticle && (
              <Link
                href={`/articles/${olderArticle.id}`}
                className="flex flex-col gap-1 p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-700 transition-all group text-right h-full"
              >
                <span className="text-xs text-pink-500 font-semibold">前の記事 →</span>
                <span className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2 group-hover:text-pink-600 transition-colors">
                  {olderArticle.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: article.title,
              description: article.summary,
              datePublished: article.publishedAt,
              publisher: {
                "@type": "Organization",
                name: "Beauty Tech Japan",
                url: siteBase,
              },
              ...(article.imageUrl ? { image: article.imageUrl } : {}),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "ホーム", item: siteBase },
                ...(article.tags[0]
                  ? [{ "@type": "ListItem", position: 2, name: article.tags[0], item: `${siteBase}/tags/${encodeURIComponent(article.tags[0])}` }]
                  : []),
                { "@type": "ListItem", position: article.tags[0] ? 3 : 2, name: article.title, item: `${siteBase}/articles/${article.id}` },
              ],
            },
          ]),
        }}
      />

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="inline-block text-sm text-gray-500 hover:text-pink-600 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}
