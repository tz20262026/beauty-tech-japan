import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href?: string;
};

const SITE_URL = "https://beauty-tech-japan.vercel.app";

// ガイド・ツールページ共通のパンくずリスト。
// 視覚的なナビゲーション(現在地の把握・ホームへの導線)とBreadcrumbList構造化データを同時に出す。
// variant="dark": 常時ダーク背景(bg-gray-950固定、.darkトグルに依存しないページ)専用。
// 通常のtext-gray-600 dark:text-gray-300だとライトモード時にも常時ダーク背景と重なりコントラスト不足になるため、
// 常に明るいグレーで表示する。
export default function Breadcrumb({
  items,
  variant = "light",
}: {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  const textClass = variant === "dark" ? "text-gray-300" : "text-gray-600 dark:text-gray-300";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="パンくずリスト" className={`text-xs ${textClass} flex items-center gap-1.5 flex-wrap`}>
        {items.map((item, i) => (
          <span key={item.name} className="flex items-center gap-1.5">
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-pink-500 transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className={`${textClass} truncate max-w-[220px]`}>{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
