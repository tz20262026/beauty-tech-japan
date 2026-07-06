"use client";

const items = [
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+7581E+4GDM+1BMW42",
    badge: "💃 体を動かす美",
    badgeColor: "#ec4899",
    title: "ナユタスダンス",
    tagline: "ダンス習得で内側から輝く美しさへ",
    desc: "K-POP・ヒップホップ・バレエ等60以上のジャンル。体幹・姿勢改善で美しいボディラインに。全国180教室・無料体験あり。",
    cta: "無料体験を予約する →",
    color: "#ec4899",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+5YCTU+5OGK+5YJRM",
    badge: "🎤 声も磨く",
    badgeColor: "#a855f7",
    title: "WACCA MUSIC SCHOOL",
    tagline: "ボイトレで声・滑舌・第一印象を改善",
    desc: "声のトーンや話し方を改善するだけで第一印象が変わる。仕事・プレゼン・日常会話にも効果的。オンライン受講可。",
    cta: "無料体験レッスンを申込 →",
    color: "#a855f7",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+EVUWI+5T74+5YJRM",
    badge: "🎵 オンラインOK",
    badgeColor: "#7c3aed",
    title: "Voice Camp ボイトレ",
    tagline: "オンライン完結ボイトレ ｜ 自宅で声磨き",
    desc: "自宅でプロのボイストレーニング。滑舌・発声・表現力を改善。配信・YouTube・SNS動画発信にも活かせるスキルに。",
    cta: "無料体験レッスンはこちら →",
    color: "#7c3aed",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+9IYGI+408S+60WN6",
    badge: "📚 300資格以上",
    badgeColor: "#0891b2",
    title: "オンスク.JP",
    tagline: "美容系資格もスマホで取得 ｜ 月1,628円〜",
    desc: "メイクアップアドバイザー・カラーコーディネーター・アロマテラピー等の美容系資格もスマホで学習。月額見放題。",
    cta: "7日間無料で始める →",
    color: "#0891b2",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+1SBLE+38W2+5YJRM",
    badge: "🎬 動画で映え",
    badgeColor: "#d97706",
    title: "Aiseesoft 動画ソフト",
    tagline: "美容動画・ルーティン動画を簡単編集",
    desc: "スキンケアルーティン・メイク動画をサクッと編集してSNSに投稿。AI美肌補正・フィルター機能搭載の高機能ソフト。",
    cta: "無料版を試す →",
    color: "#d97706",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+EMWN5E+4V0U+BX3J6",
    badge: "✍️ 発信で収益化",
    badgeColor: "#059669",
    title: "ハンドメイドブログライター",
    tagline: "美容・趣味ブログで副収入を得るスキル習得",
    desc: "美容レビュー・コスメ紹介ブログを収益化するライティング技術を習得。SEOライティング×アフィリエイトで月収アップ。",
    cta: "詳細を確認する →",
    color: "#059669",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B7USZ+G7GTMA+1USQ+2Z68LU",
    badge: "🧴 スキンケア",
    badgeColor: "#db2777",
    title: "ORBIS Mr.",
    tagline: "オルビス発メンズスキンケア｜初回990円",
    desc: "洗顔・化粧水・乳液がこれ1本。ヒゲ剃り後の肌荒れ・テカリ・毛穴悩みに。初回送料無料でお試しできる高評価スキンケアシリーズ。",
    cta: "初回990円で試す →",
    color: "#db2777",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B7USZ+G8NOTU+8UW+69HA9",
    badge: "💇 ヘアケア",
    badgeColor: "#0d9488",
    title: "ラサーナ La Sana",
    tagline: "海藻ヘアエッセンスの人気ヘアケアブランド",
    desc: "ダメージヘア・アウトバストリートメントで話題の海藻由来ヘアケア。乾燥・パサつきが気になる髪に。",
    cta: "公式サイトを見る →",
    color: "#0d9488",
  },
];

export default function AffiliateSectionBeauty() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-4 py-1.5 rounded-full mb-3">
            PR / 広告
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            美しさをもっと高めるおすすめサービス
          </h2>
          <p className="text-gray-500 text-sm">内側から輝くためのスクール・ツール・学習を厳選</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              rel="nofollow sponsored noopener"
              target="_blank"
              className="group flex flex-col gap-3 p-5 rounded-2xl border border-pink-100 bg-white hover:shadow-lg hover:border-pink-200 hover:-translate-y-0.5 transition-all duration-200"
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
                className="inline-flex items-center text-xs font-bold mt-auto py-2 px-4 rounded-xl transition-all group-hover:opacity-80"
                style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}22` }}
              >
                {item.cta}
              </span>
            </a>
          ))}
        </div>
        {/* 新規A8アフィリエイト（2026-06-30追加） */}
        <div className="mt-6 space-y-2">
          <a href="https://px.a8.net/svt/ejp?a8mat=4B67CJ+2W6VN6+3A98+5YZ77" rel="nofollow" target="_blank"
             className="block p-3 bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold text-sm rounded-xl text-center no-underline my-2">
            💄 美容・コスメのお得情報を見る
          </a>
          <img width={1} height={1} src="https://www13.a8.net/0.gif?a8mat=4B67CJ+2W6VN6+3A98+5YZ77" alt="" className="hidden" />
        </div>
        <p className="text-center text-xs text-gray-600 mt-6">※ 広告・PR表示　クリックでアフィリエイトページに移動します</p>
      </div>
    </section>
  );
}
