// バリューコマース経由の広告カード（2026-07-14作成）
// ※ A8の AffiliateSectionBeauty / もしもの MoshimoSectionBeauty とは完全に独立した別セクション。
//    既存の広告リンクには一切手を触れないこと。

/** バリューコマース広告カード1件分の型定義 */
type VcItem = {
  /** バリューコマースのサイトID（sid） */
  sid: string;
  /** バリューコマースの広告リンクID（pid） */
  pid: string;
  /** カード上部のバッジ文言（絵文字つき） */
  badge: string;
  /** バッジのアクセントカラー */
  badgeColor: string;
  /** サービス名 */
  title: string;
  /** ひとことキャッチ */
  tagline: string;
  /** 紹介文（誇大表現なし） */
  desc: string;
  /** CTAボタンの文言 */
  cta: string;
  /** CTAボタンのアクセントカラー */
  color: string;
};

/** バリューコマースの計測用クリックURLを組み立てる */
const refUrl = (sid: string, pid: string): string =>
  `https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=${sid}&pid=${pid}`;

/** バリューコマースのインプレッション計測用1x1 gifのURLを組み立てる */
const impUrl = (sid: string, pid: string): string =>
  `https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=${sid}&pid=${pid}`;

/** 最上位で大きく見せる注目案件（成果報酬が最も高い） */
const featured: VcItem = {
  // 成果報酬 22,000円（本セクション最高単価）
  sid: "3775849",
  pid: "892658464",
  badge: "🧴 ヘアケアの定期便",
  badgeColor: "#a855f7",
  title: "ホソカワミクロン【薬用ナノインパクト8】",
  tagline: "ナノ化技術を使った薬用ヘアケアの定期購入プログラム",
  desc: "粉体工学のメーカーが手がける、有効成分をナノカプセル化した薬用育毛剤。頭皮環境のケアを続けたい方向けの定期購入プランです。公式サイトで成分と使い方を確認できます。",
  cta: "公式サイトで詳細を見る →",
  color: "#a855f7",
};

/** 通常グリッドに並べる案件（成果報酬の高い順） */
const items: VcItem[] = [
  {
    // 成果報酬 11,000円
    sid: "3775849",
    pid: "892658465",
    badge: "✨ スペシャルケアに",
    badgeColor: "#ec4899",
    title: "WAVEWAVE Radiant Grace",
    tagline: "スキンケアの特別セット",
    desc: "肌の見た目のハリ・つやを整えたい方向けのスキンケア特別セット。まとまった量を試したい方や、ギフト用途にも選ばれています。",
    cta: "セット内容を見る →",
    color: "#ec4899",
  },
  {
    // 成果報酬 最大27.5%
    sid: "3775849",
    pid: "892658466",
    badge: "🧬 ヒト幹細胞美容液",
    badgeColor: "#8b5cf6",
    title: "バイオステム",
    tagline: "ヒト幹細胞培養液を配合した美容液",
    desc: "ヒト幹細胞培養液を配合した美容液の公式販売サイト。エイジングケア（年齢に応じたお手入れ）を意識した成分設計が特徴です。",
    cta: "美容液を見てみる →",
    color: "#8b5cf6",
  },
  {
    // 成果報酬 最大11%
    sid: "3775849",
    pid: "892658474",
    badge: "💰 人気コスメを比較して買う",
    badgeColor: "#f43f5e",
    title: "コスメティックタイムズ",
    tagline: "人気コスメを取り扱う通販ストア",
    desc: "デパコスからドラッグストアコスメまで幅広く扱う通販サイト。欲しいアイテムが決まっている人が価格を見比べて買うのに向いています。",
    cta: "コスメを探す →",
    color: "#f43f5e",
  },
  {
    // 成果報酬 3.3%
    sid: "3775849",
    pid: "892658469",
    badge: "🔬 ドクターズコスメ",
    badgeColor: "#0ea5e9",
    title: "ドクターシーラボ",
    tagline: "公式オンラインショップ｜ゲル状美容液の定番",
    desc: "オールインワンゲルで知られるドクターズコスメブランドの公式ショップ。スキンケアの工程を減らしたい方に選ばれています。",
    cta: "公式ショップを見る →",
    color: "#0ea5e9",
  },
  {
    // 成果報酬 1,980円
    sid: "3775849",
    pid: "892658467",
    badge: "🌿 スキンケアの入門に",
    badgeColor: "#22c55e",
    title: "オルビス（ORBIS）",
    tagline: "新規購入キャンペーン｜オイルカットのスキンケア",
    desc: "オイルカット処方のスキンケアで知られる国産ブランド。まずはトライアルセットから試せるので、肌に合うか確かめたい方に。",
    cta: "トライアルを見る →",
    color: "#22c55e",
  },
  {
    // 成果報酬 3.15%
    sid: "3775849",
    pid: "892658476",
    badge: "🏬 デパコスをオンラインで",
    badgeColor: "#d946ef",
    title: "DEPACO",
    tagline: "大丸松坂屋のコスメオンラインストア",
    desc: "百貨店で扱うコスメブランドをオンラインでまとめて買えるストア。カウンターに行く時間がとれない方でもデパコスを揃えられます。",
    cta: "ブランド一覧を見る →",
    color: "#d946ef",
  },
  {
    // 成果報酬 2.2%
    sid: "3775849",
    pid: "892658472",
    badge: "💊 インナーケアも",
    badgeColor: "#f59e0b",
    title: "DHC オンラインショップ",
    tagline: "サプリメント・化粧品の総合オンラインショップ",
    desc: "サプリメントとスキンケアを同じ店でまとめたい方向け。外側のケアと合わせて、内側からのコンディション管理を考えている方に。",
    cta: "商品を探す →",
    color: "#f59e0b",
  },
  {
    // 成果報酬 1.1%
    sid: "3775849",
    pid: "892658478",
    badge: "💇 サロンを予約する",
    badgeColor: "#14b8a6",
    title: "ヘア・ネイル・エステサロン予約",
    tagline: "美容サロンのネット予約",
    desc: "ヘアサロン・ネイル・エステをネットから予約できるサービス。セルフケアだけでなくプロの施術も取り入れたいときに。",
    cta: "サロンを探す →",
    color: "#14b8a6",
  },
  {
    // 成果報酬 2%
    sid: "3775849",
    pid: "892658480",
    badge: "🛒 美容家電もまとめて",
    badgeColor: "#6366f1",
    title: "Yahoo!ショッピング",
    tagline: "美容家電・コスメの総合ネットショッピング",
    desc: "美顔器やドライヤーなどの美容家電、コスメの詰め替えまで幅広く。PayPayポイントが貯まる・使える大手ショッピングモールです。",
    cta: "商品を探しに行く →",
    color: "#6366f1",
  },
];

/** このセクションのProps */
type VcSectionBeautyProps = {
  /** 通常グリッドに表示する件数の上限（未指定なら全件表示。注目案件は常に表示） */
  limit?: number;
  /** 外側に足したいクラス名 */
  className?: string;
};

/** バリューコマース広告セクション */
export default function VcSectionBeauty({ limit, className = "" }: VcSectionBeautyProps) {
  /** limit 指定時は上位のみ表示（成果報酬の高い順に並んでいる） */
  const shownItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className={`py-14 bg-gradient-to-b from-rose-50/60 to-white ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-rose-700 uppercase tracking-widest bg-rose-100 px-4 py-1.5 rounded-full mb-3">
            PR / 広告
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            スキンケア・ヘアケアの人気ブランドをチェック
          </h2>
          <p className="text-gray-700 text-sm">公式ショップ・サロン予約の厳選サービス</p>
        </div>

        {/* 注目案件（PCは横1枚・スマホは縦積み） */}
        <a
          href={refUrl(featured.sid, featured.pid)}
          rel="nofollow sponsored noopener"
          target="_blank"
          className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 mb-4 rounded-2xl border border-purple-300 bg-gradient-to-br from-purple-100/70 to-white hover:border-purple-400 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
        >
          {/* バリューコマースのインプレッション計測用1x1画像 */}
          <img
            src={impUrl(featured.sid, featured.pid)}
            height={1}
            width={1}
            alt=""
            aria-hidden="true"
            className="absolute h-px w-px opacity-0"
          />
          <div className="flex-1 min-w-0">
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full"
              style={{
                background: `${featured.badgeColor}18`,
                color: featured.badgeColor,
                border: `1px solid ${featured.badgeColor}40`,
              }}
            >
              {featured.badge}
            </span>
            <p className="font-black text-gray-900 text-lg md:text-xl leading-tight mt-3 break-words">{featured.title}</p>
            <p className="text-xs md:text-sm text-gray-700 mt-1">{featured.tagline}</p>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-3">{featured.desc}</p>
          </div>
          <span
            className="inline-flex items-center justify-center text-sm font-bold py-3 px-6 rounded-xl whitespace-nowrap text-white transition-all group-hover:opacity-90 md:shrink-0"
            style={{ background: featured.color }}
          >
            {featured.cta}
          </span>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shownItems.map((item) => (
            <a
              key={item.pid}
              href={refUrl(item.sid, item.pid)}
              rel="nofollow sponsored noopener"
              target="_blank"
              className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shadow-sm"
            >
              {/* バリューコマースのインプレッション計測用1x1画像 */}
              <img
                src={impUrl(item.sid, item.pid)}
                height={1}
                width={1}
                alt=""
                aria-hidden="true"
                className="absolute h-px w-px opacity-0"
              />
              <div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: `${item.badgeColor}18`,
                    color: item.badgeColor,
                    border: `1px solid ${item.badgeColor}40`,
                  }}
                >
                  {item.badge}
                </span>
              </div>
              <div>
                <p className="font-black text-gray-900 text-base leading-tight break-words">{item.title}</p>
                <p className="text-xs text-gray-700 mt-0.5">{item.tagline}</p>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed flex-1">{item.desc}</p>
              <span
                className="inline-flex items-center text-xs font-bold mt-auto py-2 px-4 rounded-xl text-white transition-all group-hover:opacity-90"
                style={{ background: item.color }}
              >
                {item.cta}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          ※ 本セクションはPR・広告（バリューコマース）を含みます
        </p>
      </div>
    </section>
  );
}
