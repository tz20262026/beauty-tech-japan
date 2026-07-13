// もしもアフィリエイト広告セクション（2026-07-13設置・提携承認済み3件）
// A8のAffiliateSectionBeautyとは別枠。既存A8リンクには触れないこと

/** カード1件分のデータ型 */
type MoshimoItem = {
  /** もしもアフィリエイトのクリック計測URL */
  href: string;
  /** インプレッション計測用ピクセルURL */
  impression: string;
  badge: string;
  badgeColor: string;
  title: string;
  tagline: string;
  desc: string;
  cta: string;
  color: string;
};

/** セクションのProps型（現状は追加クラスのみ受け付ける） */
type MoshimoSectionBeautyProps = {
  className?: string;
};

const items: MoshimoItem[] = [
  {
    // 成果3,500円（定期・新規購入）
    href: "https://af.moshimo.com/af/c/click?a_id=5692129&p_id=4461&pc_id=11596&pl_id=93645",
    impression: "https://i.moshimo.com/af/i/impression?a_id=5692129&p_id=4461&pc_id=11596&pl_id=93645",
    badge: "🌿 オールインワン",
    badgeColor: "#0d9488",
    title: "m_f_n モイストバランシングセラム",
    tagline: "1本で完結するオールインワン美容液",
    desc: "化粧水・美容液・乳液の役割をこれ1本に。忙しい朝晩のハリ・うるおいケアをシンプルに続けたい方に。定期便でお得に始められる。",
    cta: "公式サイトで詳細を見る →",
    color: "#0d9488",
  },
  {
    // 成果 商品価格の20%（新規購入）
    href: "https://af.moshimo.com/af/c/click?a_id=5692123&p_id=4739&pc_id=12489&pl_id=75262",
    impression: "https://i.moshimo.com/af/i/impression?a_id=5692123&p_id=4739&pc_id=12489&pl_id=75262",
    badge: "🧔 メンズコスメ",
    badgeColor: "#2563eb",
    title: "ダメリーノ",
    tagline: "男の肌悩みに寄り添うメンズコスメ",
    desc: "テカリ・乾燥・ヒゲ剃り後のケアなど、男性特有の肌悩みに向き合うメンズコスメブランド。身だしなみを整えたい大人の男性に。",
    cta: "ラインナップを見る →",
    color: "#2563eb",
  },
  {
    // 成果4,500円（新規購入）
    href: "https://af.moshimo.com/af/c/click?a_id=5692099&p_id=1403&pc_id=2411&pl_id=21013",
    impression: "https://i.moshimo.com/af/i/impression?a_id=5692099&p_id=1403&pc_id=2411&pl_id=21013",
    badge: "💇 ヘアスタイル",
    badgeColor: "#9333ea",
    title: "かつらオンライン",
    tagline: "自然な仕上がりのかつらを手頃な価格で",
    desc: "髪のボリュームが気になる方へ。オンラインで選べる低価格かつら専門店。自然な見た目と手頃さを両立し、初めての方でも相談しやすい。",
    cta: "商品一覧をチェック →",
    color: "#9333ea",
  },
];

export default function MoshimoSectionBeauty({ className = "" }: MoshimoSectionBeautyProps) {
  return (
    <section className={`py-14 bg-gradient-to-b from-purple-50/40 to-white ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full mb-3">
            PR / 広告
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            編集部ピックアップ｜注目のビューティーアイテム
          </h2>
          <p className="text-gray-700 text-sm">スキンケア・メンズ美容・ヘアスタイルのお悩み別に厳選</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              rel="nofollow sponsored noopener"
              target="_blank"
              className="group flex flex-col gap-3 p-5 rounded-2xl border border-purple-100 bg-white hover:shadow-lg hover:border-purple-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${item.badgeColor}12`, color: item.badgeColor, border: `1px solid ${item.badgeColor}25` }}
                >
                  {item.badge}
                </span>
              </div>
              <div>
                <p className="font-black text-gray-900 text-base leading-tight">{item.title}</p>
                <p className="text-xs text-gray-600 mt-0.5">{item.tagline}</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed flex-1">{item.desc}</p>
              <span
                className="inline-flex items-center justify-center w-full min-h-[44px] text-xs font-bold mt-auto py-2 px-4 rounded-xl transition-all group-hover:opacity-80"
                style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}22` }}
              >
                {item.cta}
              </span>
              {/* もしもアフィリエイトのインプレッション計測ピクセル */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.impression} width={1} height={1} alt="" className="hidden" />
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-gray-600 mt-6">
          ※ 本セクションは広告（もしもアフィリエイト）を含みます。リンク先は各公式サイトです
        </p>
      </div>
    </section>
  );
}
