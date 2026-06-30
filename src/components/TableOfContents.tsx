type Heading = { level: number; text: string };

export function extractHeadings(body: string): Heading[] {
  return body
    .split("\n")
    .filter((line) => /^#{1,3}\s/.test(line))
    .map((line) => {
      const m = line.match(/^(#{1,3})\s+(.+)/);
      return { level: m![1].length, text: m![2].trim() };
    });
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length < 2) return null;

  return (
    <nav className="my-6 bg-pink-50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900 rounded-xl p-5">
      <p className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-3">
        📋 この記事の内容
      </p>
      <ol className="space-y-2">
        {headings.map((h, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200 ${
              h.level >= 3 ? "ml-4" : ""
            }`}
          >
            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-pink-200 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-xs flex items-center justify-center font-bold">
              {i + 1}
            </span>
            <span>{h.text}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
