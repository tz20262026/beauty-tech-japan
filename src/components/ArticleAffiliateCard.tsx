"use client";

type AffiliateItem = {
  href: string;
  emoji: string;
  label: string;
  title: string;
  tagline: string;
  desc: string;
  cta: string;
  gradient: string;
  ctaBg: string;
  ctaText: string;
  /** この商材が関連するtags。一致するtagsを持つ記事では優先的に表示される(省略時は汎用枠としてどのtagsでも候補になる) */
  tags?: string[];
};

const AFFILIATES: AffiliateItem[] = [
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+9IYGI+408S+60WN6",
    emoji: "📚",
    label: "資格・スキルアップ",
    title: "オンスク.JP",
    tagline: "美容系資格をスマホで取得｜月1,628円〜",
    desc: "メイクアップアドバイザー・カラーコーディネーター・アロマテラピーなど美容系資格が月額見放題。スマホでスキマ時間に学べます。",
    cta: "7日間無料で試す →",
    gradient: "from-cyan-500 to-blue-600",
    ctaBg: "bg-white",
    ctaText: "text-blue-600",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+7581E+4GDM+1BMW42",
    emoji: "💃",
    label: "ボディ・姿勢改善",
    title: "ナユタスダンス",
    tagline: "内側から輝く美しさへ｜全国180教室",
    desc: "K-POP・バレエ・ヒップホップなど60以上のジャンル。体幹・姿勢を整えて美しいボディラインに。まずは無料体験から。",
    cta: "無料体験を予約する →",
    gradient: "from-pink-500 to-rose-600",
    ctaBg: "bg-white",
    ctaText: "text-pink-600",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+5YCTU+5OGK+5YJRM",
    emoji: "🎤",
    label: "声・第一印象改善",
    title: "WACCA MUSIC SCHOOL",
    tagline: "声を磨いて第一印象をアップ",
    desc: "声のトーン・滑舌を改善するだけで印象が変わる。仕事・プレゼン・SNS発信にも活かせるボイトレ。オンライン受講可。",
    cta: "無料体験レッスンを申込 →",
    gradient: "from-purple-500 to-violet-600",
    ctaBg: "bg-white",
    ctaText: "text-purple-600",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+EVUWI+5T74+5YJRM",
    emoji: "🎵",
    label: "オンラインボイトレ",
    title: "Voice Camp",
    tagline: "自宅で完結｜プロのボイストレーニング",
    desc: "発声・表現力・滑舌をオンラインで改善。配信・YouTube・SNS動画発信に活かせるスキルが身につく。",
    cta: "無料体験レッスンはこちら →",
    gradient: "from-violet-500 to-indigo-600",
    ctaBg: "bg-white",
    ctaText: "text-violet-600",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+EMWN5E+4V0U+BX3J6",
    emoji: "✍️",
    label: "美容ブログで副収入",
    title: "ブログライター養成",
    tagline: "美容レビューを収益化｜SEO×アフィリエイト",
    desc: "美容レビュー・コスメ紹介ブログを収益化するライティング技術を習得。SEOライティングで月収アップを目指せる。",
    cta: "詳細を確認する →",
    gradient: "from-emerald-500 to-teal-600",
    ctaBg: "bg-white",
    ctaText: "text-emerald-600",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4BACLG+CNGPN6+1KYA+2Z68LU",
    emoji: "🌸",
    label: "更年期・女性ホルモンケア",
    title: "LUNA-ルーナ-",
    tagline: "揺らぐ40代からの女を上げるグラマラスサプリ",
    desc: "更年期世代のゆらぎ・ハリ不足に着目したハーバルサプリメント。全額返金保証付きで初めての方でも試しやすい設計です。",
    cta: "初回価格を見る →",
    gradient: "from-rose-500 to-fuchsia-600",
    ctaBg: "bg-white",
    ctaText: "text-rose-600",
    tags: ["更年期", "サプリメント"],
  },
  // 【2026-08-25追加】スキンケア関連タグ(全記事の約4割を占める最多タグ)が
  // これまでAFFILIATESに1件もマッチせず、資格スクール/ダンス等の無関係な広告が
  // ランダム表示されていたため、既存承認済みリンク(AffiliateSectionBeautyで設置済み)を
  // tags付きでここにも追加し、記事内容と広告の関連性を高める。
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B7USZ+G7GTMA+1USQ+2Z68LU",
    emoji: "🧴",
    label: "スキンケア",
    title: "ORBIS Mr.",
    tagline: "洗顔・化粧水・乳液がこれ1本｜初回990円",
    desc: "肌荒れ・テカリ・毛穴悩みに応えるオールインワンスキンケア。初回送料無料でお試しできる高評価シリーズです。",
    cta: "初回990円で試す →",
    gradient: "from-teal-500 to-cyan-600",
    ctaBg: "bg-white",
    ctaText: "text-teal-600",
    tags: ["スキンケア", "保湿", "美白", "毛穴", "敏感肌", "バリア機能"],
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B7USZ+G8NOTU+8UW+69HA9",
    emoji: "💇",
    label: "ヘアケア",
    title: "ラサーナ La Sana",
    tagline: "海藻ヘアエッセンスの人気ヘアケアブランド",
    desc: "ダメージヘア・アウトバストリートメントで話題の海藻由来ヘアケア。乾燥・パサつきが気になる髪に。",
    cta: "うるツヤ髪ケアを見る →",
    gradient: "from-amber-500 to-orange-600",
    ctaBg: "bg-white",
    ctaText: "text-amber-600",
    tags: ["ヘアケア", "スカルプケア", "ダメージケア"],
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B82L5+B2B0HE+4P4W+C465T",
    emoji: "💊",
    label: "エイジングケア・サプリ",
    title: "GAAH",
    tagline: "医療従事者が推奨するNMNサプリ No.1",
    desc: "エイジングケア・美容意識の高い読者に響くNMNサプリメント。医療従事者推奨という信頼性の高い訴求ポイント。",
    cta: "詳細を見る →",
    gradient: "from-lime-500 to-green-600",
    ctaBg: "bg-white",
    ctaText: "text-green-600",
    tags: ["エイジングケア", "アンチエイジング", "サプリメント", "抗酸化", "インナービューティー", "インナーケア"],
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B82L5+AQZRZM+54TM+5YRHE",
    emoji: "💡",
    label: "美容機器",
    title: "CurrentBody",
    tagline: "イギリス発 美容機器のスペシャリスト",
    desc: "LED光美容マスク・頭皮頭髪ケアデバイスなど、芸能人・美容家も愛用する世界的人気ブランド。クーポン【FANCB】で10%OFF。",
    cta: "公式サイトで詳細を見る →",
    gradient: "from-sky-500 to-blue-600",
    ctaBg: "bg-white",
    ctaText: "text-sky-600",
    tags: ["美容機器", "美容家電", "ビューティーテック", "テクノロジー"],
  },
];

function hashId(id: string): number {
  let h = 5381;
  for (let i = 0; i < id.length; i++) {
    h = ((h << 5) + h) + id.charCodeAt(i);
    h = h & h;
  }
  return Math.abs(h);
}

function pickAffiliate(tags: string[], articleId: string): AffiliateItem {
  // tagsに一致する専用商材があればそちらを優先。無ければ全件からIDハッシュで均等ローテーション。
  const matched = AFFILIATES.filter((a) => a.tags?.some((t) => tags.includes(t)));
  const pool = matched.length > 0 ? matched : AFFILIATES;
  return pool[hashId(articleId) % pool.length];
}

type Props = {
  tags: string[];
  articleId: string;
};

export default function ArticleAffiliateCard({ tags, articleId }: Props) {
  const item = pickAffiliate(tags, articleId);

  return (
    <a
      href={item.href}
      rel="nofollow sponsored noopener"
      target="_blank"
      className="group block my-8 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* グラデーションヘッダー */}
      <div className={`bg-gradient-to-r ${item.gradient} p-5 sm:p-6`}>
        <div className="flex items-start gap-4">
          <div className="text-4xl sm:text-5xl flex-shrink-0 drop-shadow">{item.emoji}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-white/70 uppercase tracking-wider">PR</span>
              <span className="text-xs text-white/60">·</span>
              <span className="text-xs font-semibold text-white/90">{item.label}</span>
            </div>
            <p className="text-white font-black text-lg sm:text-xl leading-tight mb-1">{item.title}</p>
            <p className="text-white/80 text-xs sm:text-sm">{item.tagline}</p>
          </div>
        </div>
      </div>

      {/* 本文＋CTA */}
      <div className="bg-white dark:bg-gray-900 px-5 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-t-0 border-gray-100 dark:border-gray-700 rounded-b-2xl">
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
          {item.desc}
        </p>
        <span
          className={`shrink-0 inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto ${item.ctaBg} ${item.ctaText} font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-sm group-hover:shadow-md transition-all border border-gray-100 whitespace-nowrap`}
        >
          {item.cta}
        </span>
      </div>
    </a>
  );
}
