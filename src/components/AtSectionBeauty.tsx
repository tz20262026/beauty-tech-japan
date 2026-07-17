// アクセストレード経由の広告カード（2026-07-14作成）
// ※ A8の AffiliateSectionBeauty / もしもの MoshimoSectionBeauty / バリューコマースの VcSectionBeauty とは
//    完全に独立した別セクション。既存の広告リンクには一切手を触れないこと。
// 訴求：クリニック・サロン・美容家電——「自宅ケアの次の一手」を紹介する

/** アクセストレード広告カード1件分の型定義 */
type AtItem = {
  /** アクセストレードの広告リンクID（rk）。クリック計測とインプレッション計測の両方に使う */
  rk: string;
  /** カード上部のバッジ文言（絵文字つき） */
  badge: string;
  /** バッジのアクセントカラー */
  badgeColor: string;
  /** サービス名 */
  title: string;
  /** ひとことキャッチ */
  tagline: string;
  /** 紹介文（誇大表現なし・効果の断定はしない） */
  desc: string;
  /** CTAボタンの文言 */
  cta: string;
  /** CTAボタンのアクセントカラー */
  color: string;
};

/** アクセストレードの計測用クリックURLを組み立てる */
const ccUrl = (rk: string): string => `https://h.accesstrade.net/sp/cc?rk=${rk}`;

/** アクセストレードのインプレッション計測用1x1画像のURLを組み立てる */
const rrUrl = (rk: string): string => `https://h.accesstrade.net/sp/rr?rk=${rk}`;

/** 最上位で大きく見せる注目案件（成果報酬が最も高い） */
const featured: AtItem = {
  // 成果報酬 12,454円（本セクション最高単価）
  rk: "0100kihe00ovmt",
  badge: "💜 女性の薄毛・抜け毛に",
  badgeColor: "#a855f7",
  title: "AGAスキンクリニック レディース院",
  tagline: "女性専門の薄毛治療クリニック｜無料カウンセリングあり",
  desc: "産後や更年期の抜け毛など、女性特有の悩みを女性専門の診療体制で相談できるクリニック。まずは無料カウンセリングで、自分の状態と選択肢を確認するところから始められます。",
  cta: "無料カウンセリングを見る →",
  color: "#a855f7",
};

/** 通常グリッドに並べる案件（成果報酬の高い順） */
const items: AtItem[] = [
  {
    // 成果報酬 21,978円（2026-07-17追加・本セクション最高単価）
    rk: "0100o24400ovmt",
    badge: "💧 定額で使い放題の浄水",
    badgeColor: "#0ea5e9",
    title: "次世代ウォーターサーバー OCEAN",
    tagline: "ROろ過水が使い放題｜工事不要・置き場所を選ばない",
    desc: "美容ケアは体の内側から、という人向けのウォーターサーバー。ボトル交換不要でろ過した水道水を使い放題で使えるタイプなので、飲む量を気にせず続けやすいのが特徴です。",
    cta: "料金プランを見る →",
    color: "#0ea5e9",
  },
  {
    // 成果報酬 12,454円
    rk: "0100jf6q00ovmt",
    badge: "🩺 薄毛の専門治療",
    badgeColor: "#6366f1",
    title: "AGAスキンクリニック",
    tagline: "AGA（男性型脱毛症）の専門クリニック",
    desc: "薄毛・抜け毛を医師に相談できる専門クリニック。市販品で迷い続けるより、まず現状を診てもらいたい人向けに無料カウンセリングが用意されています。",
    cta: "カウンセリングを見る →",
    color: "#6366f1",
  },
  {
    // 成果報酬 10,256円
    rk: "0100p82500ovmt",
    badge: "🚿 話題の美容シャワーヘッド",
    badgeColor: "#ec4899",
    title: "ミラブル ZERO",
    tagline: "ウルトラファインバブル搭載のシャワーヘッド",
    desc: "毎日のシャワーをそのまま入れ替えるだけで使える美容家電。手間を増やさずにバスタイムのケアを変えたい人に選ばれているシリーズの上位モデルです。",
    cta: "製品の詳細を見る →",
    color: "#ec4899",
  },
  {
    // 成果報酬 10,000円
    rk: "0100hgv000ovmt",
    badge: "✨ 痛みの少ない脱毛",
    badgeColor: "#f43f5e",
    title: "ディオーネ（Dione）全身脱毛",
    tagline: "ハイパースキン脱毛の専門サロン",
    desc: "熱による刺激をおさえた方式を採用している脱毛サロン。敏感肌で今まで脱毛をあきらめていた人向けに、体験メニューが用意されています。",
    cta: "体験メニューを見る →",
    color: "#f43f5e",
  },
  {
    // 成果報酬 10,000円
    rk: "0100fitb00ovmt",
    badge: "🧴 肌悩みを医師に相談",
    badgeColor: "#8b5cf6",
    title: "カルミア美肌クリニック",
    tagline: "美肌治療のクリニック｜カウンセリング無料",
    desc: "毛穴・くすみ・ニキビ跡など、セルフケアで頭打ちになった肌悩みを医師に相談できるクリニック。Web申込後のカウンセリングは無料です。",
    cta: "無料カウンセリングへ →",
    color: "#8b5cf6",
  },
  {
    // 成果報酬 8,000円
    rk: "010035rg00ovmt",
    badge: "💪 骨盤・代謝ケア",
    badgeColor: "#0ea5e9",
    title: "スリムビューティハウス",
    tagline: "骨盤ケアを軸にしたボディエステ",
    desc: "骨盤まわりのケアを中心にしたエステサロン。体験コースが用意されているので、続けるかどうかは実際に受けてから判断できます。",
    cta: "体験コースを見る →",
    color: "#0ea5e9",
  },
  {
    // 成果報酬 7,326円
    rk: "0100428d00ovmt",
    badge: "🧘 ホットヨガで整える",
    badgeColor: "#14b8a6",
    title: "LAVA（ホットヨガスタジオ）",
    tagline: "全国展開のホットヨガスタジオ",
    desc: "肌や体調のコンディションを、汗をかく習慣から整えたい人向け。店舗数が多く通いやすいのが特徴で、体験レッスンから始められます。",
    cta: "体験レッスンを見る →",
    color: "#14b8a6",
  },
  {
    // 成果報酬 6,593円
    rk: "0100o9m100ovmt",
    badge: "🛁 定番モデルのミラブル",
    badgeColor: "#f59e0b",
    title: "ミラブル plus",
    tagline: "シリーズ定番のシャワーヘッド",
    desc: "ミラブルシリーズの定番モデル。ZEROとの違いを比べたうえで、価格と機能のバランスで選びたい人はこちらから確認できます。",
    cta: "ZEROとの違いを見る →",
    color: "#f59e0b",
  },
];

/** このセクションのProps */
type AtSectionBeautyProps = {
  /** 通常グリッドに表示する件数の上限（未指定なら全件表示。注目案件は常に表示） */
  limit?: number;
  /** 外側から余白等を足したい場合のクラス */
  className?: string;
};

/** アクセストレード広告セクション */
export default function AtSectionBeauty({ limit, className = "" }: AtSectionBeautyProps) {
  /** limit 指定時は上位のみ表示（成果報酬の高い順に並んでいる） */
  const shownItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className={`py-14 bg-gradient-to-b from-purple-50/60 to-white ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 px-4 py-1.5 rounded-full mb-3">
            PR / 広告
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            セルフケアで足りないときの、次の一手
          </h2>
          <p className="text-gray-700 text-sm">クリニック・サロン・美容家電の厳選サービス（カウンセリング無料のものも）</p>
        </div>

        {/* 注目案件（PCは横1枚・スマホは縦積み） */}
        <a
          href={ccUrl(featured.rk)}
          rel="nofollow sponsored noopener"
          target="_blank"
          referrerPolicy="no-referrer-when-downgrade"
          className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 mb-4 rounded-2xl border border-purple-300 bg-gradient-to-br from-purple-100/70 to-white hover:border-purple-400 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
        >
          {/* アクセストレードのインプレッション計測用1x1画像 */}
          <img
            src={rrUrl(featured.rk)}
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
                background: `${featured.badgeColor}20`,
                color: featured.badgeColor,
                border: `1px solid ${featured.badgeColor}45`,
              }}
            >
              {featured.badge}
            </span>
            <p className="font-black text-gray-900 text-lg md:text-xl leading-tight mt-3 break-words">
              {featured.title}
            </p>
            <p className="text-xs md:text-sm text-gray-700 mt-1">{featured.tagline}</p>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-3">{featured.desc}</p>
          </div>
          <span
            className="inline-flex items-center justify-center text-sm font-bold py-3 px-6 rounded-xl whitespace-nowrap text-white transition-all group-hover:opacity-85 md:shrink-0"
            style={{ background: featured.color }}
          >
            {featured.cta}
          </span>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shownItems.map((item) => (
            <a
              key={item.rk}
              href={ccUrl(item.rk)}
              rel="nofollow sponsored noopener"
              target="_blank"
              referrerPolicy="no-referrer-when-downgrade"
              className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shadow-sm"
            >
              {/* アクセストレードのインプレッション計測用1x1画像 */}
              <img
                src={rrUrl(item.rk)}
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
                className="inline-flex items-center text-xs font-bold mt-auto py-2 px-4 rounded-xl text-white transition-all group-hover:opacity-85"
                style={{ background: item.color }}
              >
                {item.cta}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          ※ 本セクションはPR・広告（アクセストレード）を含みます。効果には個人差があります
        </p>
      </div>
    </section>
  );
}
