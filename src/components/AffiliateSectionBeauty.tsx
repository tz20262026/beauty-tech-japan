"use client";

const programs = [
  {
    id: 1,
    emoji: "💃",
    badge: "⭐ 人気No.1",
    name: "ナユタス ダンススクール",
    desc: "上場企業グループが運営する全国110校以上のダンススクール！K-POP・ヒップホップ・バレエ等多数。体験レッスン無料。",
    tags: ["全国110校以上", "体験レッスン無料", "子どもから大人まで"],
    cta: "無料体験レッスンを予約する",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+7581E+4GDM+1BMW42",
    color: "rose",
  },
  {
    id: 2,
    emoji: "🎤",
    badge: "銀座・全国展開",
    name: "WACCA MUSIC SCHOOL ボイトレ",
    desc: "東京・銀座の本格ボイストレーニングスクール！話し方・歌・声優まで対応。オンラインレッスンも充実。",
    tags: ["無料体験あり", "オンライン対応", "プロ講師陣"],
    cta: "今すぐ無料体験を申し込む",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+5YCTU+5OGK+5YJRM",
    color: "pink",
  },
  {
    id: 3,
    emoji: "🎙️",
    badge: "声優・歌・話し方",
    name: "Voice Camp（ボイスキャンプ）",
    desc: "声優・話し方・歌を総合的に学べるボイトレスクール。無料体験レッスンで自分の声の可能性を発見！",
    tags: ["無料体験4,000円相当", "声優・ナレーターも対応", "オンラインあり"],
    cta: "無料体験レッスンに申し込む",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+EVUWI+5T74+5YJRM",
    color: "fuchsia",
  },
  {
    id: 4,
    emoji: "📖",
    badge: "月額1,628円〜",
    name: "オンスク.JP 資格学習",
    desc: "130以上の資格・スキルが月額定額で学び放題！簿記・FP・宅建・医療事務など美容関連資格も充実。",
    tags: ["130以上の資格対応", "月額1,628円〜", "スマホで学べる"],
    cta: "今すぐ資格学習を始める",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+9IYGI+408S+60WN6",
    color: "purple",
  },
  {
    id: 5,
    emoji: "🎞️",
    badge: "購入額30%還元",
    name: "Aiseesoft 動画・PDF変換ソフト",
    desc: "データ復元・動画変換・PDF変換など多機能ソフト！美容系コンテンツ制作に使える高品質ツール。",
    tags: ["動画・PDF変換対応", "購入額30%OFF", "Win/Mac両対応"],
    cta: "30%割引で今すぐ購入",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+1SBLE+38W2+5YJRM",
    color: "violet",
  },
  {
    id: 6,
    emoji: "✍️",
    badge: "在宅副業",
    name: "ハンドメイドブログライター 養成",
    desc: "在宅でできるブログライターとして副収入を得る！資格認定あり・顧客紹介あり・完全サポートで安心。",
    tags: ["資格認定あり", "在宅完結", "顧客紹介あり"],
    cta: "無料体験に申し込む",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+EMWN5E+4V0U+BX3J6",
    color: "emerald",
  },
];

const colorMap: Record<string, { bg: string; badge: string; cta: string; tag: string; border: string }> = {
  rose:    { bg: "bg-rose-50",    badge: "bg-rose-100 text-rose-700",    cta: "bg-rose-500 hover:bg-rose-600",    tag: "bg-rose-50 text-rose-600 border-rose-200",    border: "border-rose-200 hover:border-rose-400 hover:shadow-rose-100" },
  pink:    { bg: "bg-pink-50",    badge: "bg-pink-100 text-pink-700",    cta: "bg-pink-500 hover:bg-pink-600",    tag: "bg-pink-50 text-pink-600 border-pink-200",    border: "border-pink-200 hover:border-pink-400 hover:shadow-pink-100" },
  fuchsia: { bg: "bg-fuchsia-50", badge: "bg-fuchsia-100 text-fuchsia-700", cta: "bg-fuchsia-500 hover:bg-fuchsia-600", tag: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200", border: "border-fuchsia-200 hover:border-fuchsia-400 hover:shadow-fuchsia-100" },
  purple:  { bg: "bg-purple-50",  badge: "bg-purple-100 text-purple-700", cta: "bg-purple-500 hover:bg-purple-600", tag: "bg-purple-50 text-purple-600 border-purple-200", border: "border-purple-200 hover:border-purple-400 hover:shadow-purple-100" },
  violet:  { bg: "bg-violet-50",  badge: "bg-violet-100 text-violet-700", cta: "bg-violet-500 hover:bg-violet-600", tag: "bg-violet-50 text-violet-600 border-violet-200", border: "border-violet-200 hover:border-violet-400 hover:shadow-violet-100" },
  emerald: { bg: "bg-emerald-50", badge: "bg-emerald-100 text-emerald-700", cta: "bg-emerald-500 hover:bg-emerald-600", tag: "bg-emerald-50 text-emerald-600 border-emerald-200", border: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100" },
};

export default function AffiliateSectionBeauty() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50/50 to-white border-t border-rose-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-rose-50 text-rose-600 text-xs font-bold px-4 py-1.5 rounded-full border border-rose-200 mb-4">
            💄 PR・おすすめサービス
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            美容も<span className="text-rose-500">スキルも</span>もっと輝かせる
          </h2>
          <p className="text-gray-500 text-sm">外見だけでなく内側から輝くための、Beauty Tech Japan厳選サービス。</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => {
            const c = colorMap[p.color];
            return (
              <a
                key={p.id}
                href={p.url}
                rel="nofollow sponsored"
                target="_blank"
                className={`group flex flex-col bg-white rounded-2xl border-2 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${c.border}`}
              >
                <div className={`${c.bg} px-5 py-3 flex items-center gap-2`}>
                  <span className="text-xl">{p.emoji}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${c.badge}`}>{p.badge}</span>
                </div>
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="text-base font-bold text-gray-900 leading-snug">{p.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${c.tag}`}>
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`mt-1 text-center text-sm font-bold text-white py-2.5 rounded-xl ${c.cta} transition-colors`}>
                    {p.cta} →
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-6">※ 本セクションはPR・広告を含みます</p>
      </div>
    </section>
  );
}
