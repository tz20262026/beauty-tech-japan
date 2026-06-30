import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "美容ダイエット完全ガイド2026年版【食事・運動・サプリ・痩せる方法・短期間で効果】",
  description:
    "美容ダイエットの方法を2026年版で完全解説。食事制限・有酸素運動・筋トレ・サプリの活用法・短期間で効果を出すコツを医学的根拠を元に初心者向けに解説します。",
  openGraph: {
    title: "美容ダイエット完全ガイド2026年版【食事・運動・サプリ・痩せる方法】",
    description: "食事・運動・サプリを組み合わせた美容ダイエット方法を解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "美容ダイエット完全ガイド2026年版",
    description: "食事・運動・サプリを組み合わせた効果的なダイエット方法を解説。",
  },
};

interface DietMethod {
  name: string;
  icon: string;
  difficulty: "易" | "中" | "難";
  effect: "高" | "中" | "低";
  desc: string;
  dos: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const DIET_METHODS: DietMethod[] = [
  {
    name: "カロリー管理（食事記録）",
    icon: "📊",
    difficulty: "易",
    effect: "高",
    desc: "1日の摂取カロリーを消費カロリー以下に抑える基本原則。アプリ（あすけん・MyFitnessPal）を使った食事記録が最も効果的。",
    dos: ["1日の目標カロリーを設定（例：基礎代謝-300kcal）", "食事の前にアプリに記録する習慣", "間食のカロリーも忘れずに記録"],
  },
  {
    name: "低糖質（ロカボ）ダイエット",
    icon: "🥗",
    difficulty: "中",
    effect: "高",
    desc: "糖質の摂取を制限してインスリン分泌を抑え、脂肪燃焼モードに入る方法。1食20〜40g、1日130g以下が目安。",
    dos: ["白米・パン→玄米・オートミールに置き換え", "お菓子・ジュースを避ける", "タンパク質・脂質は適度に摂る"],
  },
  {
    name: "有酸素運動（ウォーキング・ランニング）",
    icon: "🏃",
    difficulty: "易",
    effect: "中",
    desc: "週3〜5回・1回30分以上の有酸素運動で脂肪燃焼を促進。継続しやすいウォーキングから始めるのがおすすめ。",
    dos: ["毎日同じ時間帯に実施（習慣化）", "心拍数を最大心拍数の60〜70%に保つ", "最初は1日6,000歩から始める"],
  },
  {
    name: "筋力トレーニング（基礎代謝UP）",
    icon: "💪",
    difficulty: "中",
    effect: "高",
    desc: "筋肉量を増やして基礎代謝を上げ、リバウンドしにくい体を作る。スクワット・プランク・腕立て伏せから始めやすい。",
    dos: ["週2〜3回・休息日を挟む", "大筋群（下半身・背中）を優先", "タンパク質をトレーニング後30分以内に摂取"],
  },
  {
    name: "間欠的断食（16:8断食）",
    icon: "⏰",
    difficulty: "中",
    effect: "高",
    desc: "1日のうち8時間だけ食事し残り16時間は断食する方法。オートファジーが活性化し脂肪燃焼と細胞の修復が促進される。",
    dos: ["食事可能時間（例：12〜20時）を決める", "断食中は水・ブラックコーヒー・無糖茶OK", "最初は12時間断食から慣らす"],
  },
];

const FAQS: FaqItem[] = [
  {
    q: "短期間（1ヶ月）で何キロ痩せることが目標として現実的ですか？",
    a: "健康的に1ヶ月で落とせる体重は1〜3kgが現実的な目安です。月4kg以上の急激なダイエットはリバウンドリスクが高く、筋肉量の低下・栄養不足・代謝低下につながります。1ヶ月1〜2kgのペースで継続することで、年間12〜24kgの減量も可能になります。",
  },
  {
    q: "食事制限だけで痩せますか？運動は必要ですか？",
    a: "食事制限だけでも体重は落ちますが、筋肉量が落ちて代謝が下がりリバウンドしやすくなります。最も効果的なのは「食事制限＋筋トレ」の組み合わせです。筋肉を保ちながら脂肪だけを落とすことで、代謝が落ちず長期的に維持しやすい体になります。",
  },
  {
    q: "ダイエット中の食事で何を食べればいいですか？",
    a: "基本は①タンパク質（肉・魚・卵・豆腐）を毎食摂る②野菜・きのこ・海藻を多く食べる③炭水化物は玄米・オートミール等に置き換え少量摂る④揚げ物・お菓子・清涼飲料水を避ける、の4点です。特に「タンパク質」を体重×1〜1.5g（例：60kgなら60〜90g）摂ることで筋肉を保ちながら脂肪を落とせます。",
  },
  {
    q: "ダイエットサプリは効果がありますか？",
    a: "サプリ単体での劇的な効果は期待できませんが、補助的に役立つものはあります。根拠のあるものとして①プロテイン（筋肉維持・食欲抑制）②カテキン・L-カルニチン（脂肪燃焼補助）③食物繊維（腸内環境・血糖値コントロール）④ビタミンD・マグネシウム（代謝サポート）があります。「これだけで痩せる」というサプリは効果が疑わしいため注意が必要です。",
  },
  {
    q: "リバウンドしないダイエットのコツは何ですか？",
    a: "リバウンドの主な原因は①急激な食事制限→体が飢餓状態を記憶して脂肪を溜め込む②筋肉量が落ちて基礎代謝が下がる③我慢のストレスで反動食いをする、です。対策は①ゆっくり落とす（月1〜2kg）②筋トレで筋肉量を維持する③食べてはいけないものを作らず「量と頻度を管理する」考え方にする、の3点です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const effectStyle: Record<DietMethod["effect"], string> = {
  "高": "bg-green-500/20 text-green-300 border-green-500/30",
  "中": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "低": "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

const difficultyStyled: Record<DietMethod["difficulty"], string> = {
  "易": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "中": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "難": "bg-red-500/20 text-red-300 border-red-500/30",
};

export default function DietBeautyGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-4 py-1 mb-4">
            🌿 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            美容ダイエット<br />
            <span className="text-green-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【食事・運動・サプリ・痩せる方法】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            食事・運動・サプリを組み合わせた<br />
            効果的な美容ダイエット方法を2026年版で完全解説。
          </p>
        </div>

        {/* ダイエット方法 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-green-500 pl-3">
            🌿 効果的なダイエット方法5選
          </h2>
          <div className="space-y-4">
            {DIET_METHODS.map((dm, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{dm.icon}</span>
                  <h3 className="text-white font-black text-sm">{dm.name}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${effectStyle[dm.effect]}`}>
                    効果：{dm.effect}
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${difficultyStyled[dm.difficulty]}`}>
                    難易度：{dm.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">{dm.desc}</p>
                <div>
                  <p className="text-green-400 text-xs font-bold mb-1">✅ 実践のコツ</p>
                  <ul className="space-y-0.5">
                    {dm.dos.map((d, j) => <li key={j} className="text-gray-600 text-xs">・{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🌸 スキンケアで外側からも美しく
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ダイエットで内側から整えながら、スキンケアで<br />
            外側も美しく輝かせましょう。
          </p>
          <a
            href="/skincare-guide"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            スキンケア完全ガイドを見る →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-green-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
