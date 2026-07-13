// もしもアフィリエイト広告セクション（2026-07-13設置3件 + 2026-07-14 第2弾5件＝計8件・全て提携承認済み）
// A8のAffiliateSectionBeautyとは別枠。既存A8リンクには触れないこと
// ※薬機法配慮：効果・効能の断定表現は使わない（「うるおいケア」「ハリを与える」等の穏当な表現に統一）

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
  /** 表示するカード枚数の上限（未指定なら全件表示） */
  limit?: number;
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
  // ───────── 第2弾（2026-07-14追加・提携承認済み5件） ─────────
  {
    // 成果3,462円（初回1,980円のトライアル）
    href: "https://af.moshimo.com/af/c/click?a_id=5692126&p_id=7426&pc_id=21413&pl_id=93274",
    impression: "https://i.moshimo.com/af/i/impression?a_id=5692126&p_id=7426&pc_id=21413&pl_id=93274",
    badge: "🌸 初回1,980円",
    badgeColor: "#db2777",
    title: "フローラ バイオシールド",
    tagline: "ニナファームジャポンのミストローション",
    desc: "シュッとひとふきでうるおいを与えるミストタイプ。肌にすむ常在菌（美肌菌）に着目した設計で、朝の身支度や日中のリフレッシュにも。初回1,980円で試せる。",
    cta: "初回価格をチェック →",
    color: "#db2777",
  },
  {
    // 成果 購入額の20%
    href: "https://af.moshimo.com/af/c/click?a_id=5692124&p_id=2357&pc_id=5097&pl_id=31748",
    impression: "https://i.moshimo.com/af/i/impression?a_id=5692124&p_id=2357&pc_id=5097&pl_id=31748",
    badge: "🇰🇷 人気スキンケア",
    badgeColor: "#e11d48",
    title: "ロベクチン",
    tagline: "低刺激設計で人気のスキンケアブランド",
    desc: "デリケートな肌にも寄り添う処方で支持を集めるスキンケアブランド。乾燥が気になる季節のうるおいケアに。クリーム・美容液など幅広いラインナップ。",
    cta: "ブランド公式を見る →",
    color: "#e11d48",
  },
  {
    // 成果 購入額の10%
    href: "https://af.moshimo.com/af/c/click?a_id=5692131&p_id=3684&pc_id=8994&pl_id=51663",
    impression: "https://i.moshimo.com/af/i/impression?a_id=5692131&p_id=3684&pc_id=8994&pl_id=51663",
    badge: "☀️ 日中の肌まもり",
    badgeColor: "#ea580c",
    title: "unlumie（アンルミエ）",
    tagline: "スキンプロテクトクリーム",
    desc: "日中の外的刺激から肌をまもりながら、うるおいを与えるプロテクトクリーム。スキンケアの仕上げに1本、外出前のベースづくりにも使いやすい。",
    cta: "商品詳細を見る →",
    color: "#ea580c",
  },
  {
    // 成果 購入額の10%
    href: "https://af.moshimo.com/af/c/click?a_id=5692116&p_id=6893&pc_id=19697&pl_id=89957",
    impression: "https://i.moshimo.com/af/i/impression?a_id=5692116&p_id=6893&pc_id=19697&pl_id=89957",
    badge: "🌏 サステナブル",
    badgeColor: "#16a34a",
    title: "CHANT（チャント）",
    tagline: "髪・顔・体が洗える国産の固形シャンプーバー",
    desc: "これ1個で髪も顔も体も洗える国産のシャンプーバー。プラスチック容器を減らせるサステナブルな設計で、旅行やジムの荷物もコンパクトに。",
    cta: "固形シャンプーを見る →",
    color: "#16a34a",
  },
  {
    // 成果3,000円（体験申込）
    href: "https://af.moshimo.com/af/c/click?a_id=5692108&p_id=5452&pc_id=14924&pl_id=84128",
    impression: "https://i.moshimo.com/af/i/impression?a_id=5692108&p_id=5452&pc_id=14924&pl_id=84128",
    badge: "🧘 体験レッスン",
    badgeColor: "#0284c7",
    title: "カルド（CALDO）",
    tagline: "全国展開のホットヨガスタジオ",
    desc: "あたたかいスタジオでじっくり汗をかくホットヨガ。運動習慣づくりやリフレッシュしたい方に。まずは体験レッスンから気軽に始められる。",
    cta: "体験レッスンを予約 →",
    color: "#0284c7",
  },
];

export default function MoshimoSectionBeauty({ className = "", limit }: MoshimoSectionBeautyProps) {
  // limit が指定されていれば上位のみ表示（デフォルトは全件）
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

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
          <p className="text-gray-700 text-sm">
            スキンケア・メンズ美容・ヘアケア・ボディケアのお悩み別に厳選
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleItems.map((item) => (
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
