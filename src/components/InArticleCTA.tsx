// 記事本文の中間に挿入するテキストリンク型CTA
// タグに応じて ORBIS Mr.（スキンケア）／ラサーナ（ヘアケア）を出し分ける
type CtaContent = {
  href: string;
  lead: string;
  linkText: string;
  trust: string[];
};

const ORBIS: CtaContent = {
  href: "https://px.a8.net/svt/ejp?a8mat=4B7USZ+G7GTMA+1USQ+2Z68LU",
  lead: "この記事のようなスキンケアを今日から始めるなら、洗顔・化粧水・乳液がこれ1本の ORBIS Mr. が手軽です。",
  linkText: "▶ ORBIS Mr. を初回990円で試してみる",
  trust: ["初回送料無料", "公式サイト直販", "1本で洗顔・化粧水・乳液の3役"],
};

const LASANA: CtaContent = {
  href: "https://px.a8.net/svt/ejp?a8mat=4B7USZ+G8NOTU+8UW+69HA9",
  lead: "乾燥・パサつきなど髪の悩みには、海藻由来の人気ヘアケアブランド ラサーナ のヘアエッセンスが定番です。",
  linkText: "▶ ラサーナの海藻ヘアエッセンスを公式で見る",
  trust: ["海藻由来の保湿成分", "公式サイト直販", "ダメージヘア・アウトバス向け"],
};

type Props = { tags: string[] };

export default function InArticleCTA({ tags }: Props) {
  const isHair = tags.some((t) => /ヘア|髪|hair/i.test(t));
  const item = isHair ? LASANA : ORBIS;

  return (
    <aside className="my-8 rounded-xl border border-pink-200 dark:border-pink-900 bg-pink-50/70 dark:bg-pink-950/20 px-5 py-4">
      <p className="text-[10px] font-bold text-gray-600 dark:text-gray-300 tracking-widest mb-1.5">PR</p>
      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-2">💡 {item.lead}</p>
      <a
        href={item.href}
        rel="nofollow sponsored noopener"
        target="_blank"
        className="inline-flex items-center min-h-[44px] py-2 text-sm font-bold text-pink-600 dark:text-pink-400 underline underline-offset-4 decoration-2 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
      >
        {item.linkText}
      </a>
      <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
        {item.trust.map((t) => (
          <li key={t} className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            <span className="text-emerald-600 dark:text-emerald-400">✓</span> {t}
          </li>
        ))}
      </ul>
    </aside>
  );
}
