export type Heading = { level: number; text: string; id: string };

// 見出しの通し番号からジャンプ用のid（見出し本文が日本語のため、連番ベースのidにする）
export function headingId(index: number): string {
  return `heading-${index}`;
}

export function extractHeadings(body: string): Heading[] {
  if (!body) return [];
  let index = 0;
  return body
    .split("\n")
    .filter((line) => /^#{1,3}\s/.test(line))
    .map((line) => {
      const m = line.match(/^(#{1,3})\s+(.+)/);
      const heading = { level: m![1].length, text: m![2].trim(), id: headingId(index) };
      index += 1;
      return heading;
    });
}

type Props = { headings: Heading[] };

export default function TableOfContents({ headings }: Props) {
  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="目次"
      className="my-6 bg-pink-50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900 rounded-xl p-5"
    >
      <p className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-3">
        📋 この記事の内容
      </p>
      <ol className="space-y-2">
        {headings.map((h, i) => (
          <li
            key={h.id}
            className={`flex items-start gap-2 text-sm ${h.level >= 3 ? "ml-4" : ""}`}
          >
            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-pink-200 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-xs flex items-center justify-center font-bold">
              {i + 1}
            </span>
            <a
              href={`#${h.id}`}
              className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors underline-offset-2 hover:underline"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
