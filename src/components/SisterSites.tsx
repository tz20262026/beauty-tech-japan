// 姉妹サイト一覧（相互リンク）
// 自サイトは SELF_URL で除外する。rel="nofollow" は付けない（自社サイト間でSEO評価を渡すため）
type SisterSite = {
  name: string;
  url: string;
  description: string;
};

const SELF_URL = "https://beauty-tech-japan.vercel.app";

const SISTER_SITES: readonly SisterSite[] = [
  { name: "AI News Japan", url: "https://ai-news-site-wheat.vercel.app", description: "AIの最新ニュースを日本語で毎日配信" },
  { name: "Beauty Tech Japan", url: "https://beauty-tech-japan.vercel.app", description: "海外の美容・コスメ最新トレンド" },
  { name: "暴露仙人のAI占い", url: "https://fortune-site-neon.vercel.app", description: "AIが本音で告げる無料占い・相性診断" },
  { name: "副業タイプ診断AI", url: "https://fukugyou-shindan-eosin.vercel.app", description: "あなたに合う副業を3分で診断" },
  { name: "YouTube伸びない原因診断", url: "https://youtubecons.vercel.app", description: "伸びない原因をAIが診断" },
  { name: "おつまみペアリング研究所", url: "https://otsumami.vercel.app", description: "お酒とおつまみの組み合わせ" },
  { name: "映画レビューDB", url: "https://movie2026.vercel.app", description: "名作映画のレビュー・検索" },
  { name: "金銀相場ナビ", url: "https://kingin-souba.vercel.app", description: "金・銀のリアルタイム相場" },
  { name: "ふるさと納税定期便", url: "https://furusato-teikibin.vercel.app", description: "定期便のふるさと納税ガイド" },
  { name: "新生活家電ガイド", url: "https://shinseikatsu-kaden.vercel.app", description: "一人暮らしの家電選び" },
  { name: "サンゴボディケア", url: "https://sango-bodycare.vercel.app", description: "産後のボディケア" },
  { name: "沖縄県立高校受験", url: "https://jyuken.vercel.app", description: "沖縄の高校受験情報" },
  { name: "公営ギャンブル入門", url: "https://koueigyannburu.vercel.app", description: "競馬・競艇などの基礎知識" },
  { name: "沖縄不動産", url: "https://realestate-ivory.vercel.app", description: "沖縄の不動産情報" },
  { name: "PlanGenius AI", url: "https://plangenius-ai.vercel.app", description: "AI事業計画書ジェネレーター" },
];

export default function SisterSites() {
  const sites = SISTER_SITES.filter((site) => site.url !== SELF_URL);

  return (
    <section className="mb-8 pt-8 border-t border-gray-800" aria-labelledby="sister-sites-heading">
      <h2
        id="sister-sites-heading"
        className="text-xs font-semibold text-white mb-4 uppercase tracking-wide"
      >
        姉妹サイト
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3">
        {sites.map((site) => (
          <li key={site.url}>
            <a
              href={site.url}
              className="block rounded-lg border border-gray-800 bg-gray-900/60 px-3 py-2.5 hover:border-pink-500/60 hover:bg-gray-900 transition-colors"
            >
              <span className="block text-sm font-semibold text-gray-200 leading-snug">
                {site.name}
              </span>
              <span className="block text-xs text-gray-300 mt-1 leading-snug">
                {site.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
