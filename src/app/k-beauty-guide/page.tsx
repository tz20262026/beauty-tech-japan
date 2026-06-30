import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "韓国コスメ・K-Beautyルーティン完全ガイド2026年版【10ステップ＆おすすめ成分】",
  description: "韓国美容（K-Beauty）の10ステップスキンケアを日本語で完全解説。おすすめの成分・使い方・肌質別の選び方から、K-Beautyブームの秘密まで2026年最新版で網羅。",
  keywords: ["韓国コスメ おすすめ", "K-Beauty スキンケア", "韓国スキンケア 順番", "トナーパッド 使い方", "韓国コスメ 成分"],
  openGraph: {
    title: "韓国コスメ・K-Beautyルーティン完全ガイド2026年版",
    description: "韓国美容10ステップを完全解説。成分・使い方・肌質別の選び方まで全網羅",
    type: "article",
    locale: "ja_JP",
  },
};

const K_BEAUTY_STEPS = [
  { step: 1, name: "オイルクレンジング（Oil Cleanser）", emoji: "🫧", point: "メイク・日焼け止めをオイルで溶かす。低刺激のシカオイルやライスオイルが人気。" },
  { step: 2, name: "泡洗顔（Foam Cleanser）", emoji: "💧", point: "W洗顔でよりクリーンな肌に。低pH（5〜6）の弱酸性洗顔料がK-Beautyの定番。" },
  { step: 3, name: "エクスフォリエーター（Exfoliator）", emoji: "✨", point: "週1〜2回使用。AHA（グリコール酸）・BHA（サリチル酸）・ピーリングパッドが代表的。" },
  { step: 4, name: "トナー（Toner）", emoji: "🌊", point: "日本の化粧水より水分量が多い。7スキン法（7回重ねづけ）が話題に。ヒアルロン酸・センテラが人気成分。" },
  { step: 5, name: "エッセンス（Essence）", emoji: "💫", point: "K-Beautyの核心。発酵成分・EGF・フェルラ酸など高機能成分を凝縮。肌の「第二の水分補給」。" },
  { step: 6, name: "セラム・アンプル（Serum/Ampoule）", emoji: "🔬", point: "特定の悩みに特化。ビタミンC（美白）・ナイアシンアミド（毛穴）・プロポリス（抗酸化）が人気。" },
  { step: 7, name: "シートマスク（Sheet Mask）", emoji: "💆", point: "週2〜3回のスペシャルケア。就寝前30分が最も効果的。美白・保湿・リフトアップ系を目的別に使い分ける。" },
  { step: 8, name: "アイクリーム（Eye Cream）", emoji: "👁️", point: "目元は皮膚が薄い。ペプチド・コラーゲン・カフェインなど抗老化成分を目元専用クリームで。" },
  { step: 9, name: "モイスチャライザー（Moisturizer）", emoji: "🧴", point: "全ステップの「蓋」をする重要なステップ。クリーム・ジェルクリーム・水分クリームなど肌質で選ぶ。" },
  { step: 10, name: "日焼け止め（SPF/PA）", emoji: "☀️", point: "昼のみ。K-Beautyブランドの日焼け止めは使用感が軽く「サンスクリーン嫌い」を変えると話題。" },
];

const HERO_INGREDIENTS = [
  {
    name: "ナイアシンアミド",
    emoji: "⚗️",
    benefit: "美白・毛穴・ニキビ跡改善",
    color: "#ec4899",
    explain: "K-Beautyで最も注目される成分。くすみ・色ムラ・毛穴の広がりを改善。刺激が少なく初心者でも使いやすい。",
  },
  {
    name: "センテラアジアティカ（ツボクサ）",
    emoji: "🌿",
    benefit: "炎症鎮静・肌荒れ修復",
    color: "#10b981",
    explain: "敏感肌・ニキビ肌に特に有効。抗炎症・肌再生効果が高く「シカクリーム」として大ブレイク。",
  },
  {
    name: "ビタミンC誘導体",
    emoji: "🍋",
    benefit: "美白・ハリ・抗酸化",
    color: "#f59e0b",
    explain: "朝の美容液に最適。シミ・くすみ・ハリ不足に有効。Lアスコルビン酸より安定性の高い誘導体が人気。",
  },
  {
    name: "発酵成分（Fermented）",
    emoji: "🍶",
    benefit: "肌の微生物バランスを整える",
    color: "#8b5cf6",
    explain: "K-Beautyの発祥成分。発酵ガルクタン・ガリクトミセス・発酵酵母エキスが肌の奥まで浸透を助ける。",
  },
  {
    name: "ヒアルロン酸",
    emoji: "💧",
    benefit: "超保湿・水分保持",
    color: "#0ea5e9",
    explain: "自重の1,000倍の水を保持。低分子・中分子・高分子を組み合わせた多重保湿がK-Beautyの特徴。",
  },
  {
    name: "レチノール（A誘導体）",
    emoji: "🌙",
    benefit: "抗老化・ターンオーバー促進",
    color: "#f97316",
    explain: "夜のみ使用。ニキビ跡・シワ・たるみに有効な最強エイジングケア成分。低濃度から始めるのがK-Beautyルール。",
  },
];

const SKIN_TYPES = [
  {
    type: "乾燥肌 / ドライスキン",
    emoji: "🏜️",
    color: "#f97316",
    tips: ["保湿力重視のトナーを2〜3度重ねづけ", "エッセンスはヒアルロン酸・グリセリン系を選ぶ", "クリームはセラミド・スクワランが入ったリッチタイプ", "シートマスクは週3〜5回でもOK"],
  },
  {
    type: "脂性肌 / オイリースキン",
    emoji: "💦",
    color: "#0ea5e9",
    tips: ["低pH洗顔料でしっかり洗浄（ただし乾燥させない）", "BHA（サリチル酸）配合トナーで毛穴ケア", "モイスチャライザーはオイルフリーのジェルタイプ", "ナイアシンアミドで皮脂コントロール"],
  },
  {
    type: "混合肌 / コンビネーション",
    emoji: "🎭",
    color: "#8b5cf6",
    tips: ["Tゾーンと頬で別々のケアを考える", "化粧水は全顔・クリームは乾燥部分のみに重ねる", "ゾーン別パックを試してみる", "シートマスクは週2回が目安"],
  },
  {
    type: "敏感肌 / センシティブ",
    emoji: "🌸",
    color: "#ec4899",
    tips: ["センテラ・アラントイン・ベータグルカン配合を優先", "香料・アルコール（エタノール）は避ける", "新製品は首の後ろでパッチテスト必須", "ステップ数を少なく（7〜8ステップに絞る）"],
  },
];

const FAQ = [
  { q: "韓国コスメは本当に効果がありますか？", a: "はい、K-Beautyは成分の研究・開発力が世界トップレベルで、ナイアシンアミド・センテラ・発酵成分など効果が実証された成分を高配合しています。韓国人の美容意識の高さがイノベーションを生んでいます。ただし肌質・アレルギーによって合う合わないはあるため、パッチテストをおすすめします。" },
  { q: "韓国スキンケアの10ステップは毎日全部やる必要がありますか？", a: "毎日全10ステップを行う必要はありません。エクスフォリエーターは週1〜2回、シートマスクは週2〜3回が目安です。忙しい朝は「洗顔→トナー→美容液→日焼け止め」の4ステップでも十分です。丁寧にケアしたい夜に多めのステップをとる生活リズムが現実的です。" },
  { q: "韓国コスメはどこで買えますか？", a: "日本でも入手しやすくなりました。OLIVE YOUNG（オンライン）・コスメキッチン・@cosme STOREなどで購入可能です。日本未入荷の人気アイテムは直送通販（スタイルコリアン・YESSTYLE等）も利用されています。最近はQoo10でのメガ割セールが人気です。" },
  { q: "韓国コスメの7スキン法とは何ですか？", a: "化粧水（トナー）を7回重ねづけする韓国発の保湿法です。一度に多量をつけるより少量を7回に分けてハンドプレスすることで、より深く浸透するとされています。特に乾燥が気になる季節・乾燥肌の方に人気です。全部やらなくても3スキン法から始めることもできます。" },
  { q: "韓国コスメを使う場合、日本のコスメと混ぜて使っていいですか？", a: "問題ありません。自分の肌に合うアイテムを国籍に関係なく組み合わせてOKです。ただし成分の相性（ビタミンCとAHA/BHAは同時使用に注意）には気をつけてください。使用順は「水分→油分」の原則を守れば日本・韓国・欧米コスメを混在させても大丈夫です。" },
];

export default function KBeautyGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      })}} />

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* ヘッダー */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-pink-100 text-pink-700 border border-pink-200">
            🇰🇷 K-Beautyガイド
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            韓国コスメ・<span className="text-pink-600">K-Beauty</span><br className="sm:hidden" />
            ルーティン完全ガイド
            <span className="text-base font-normal ml-2 text-gray-600">2026年版</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            世界が注目する韓国美容（K-Beauty）の10ステップスキンケアを日本語で完全解説。
            おすすめ成分・使い方・肌質別の選び方から、日本未入荷の最新トレンドまで紹介します。
          </p>
          <div className="flex flex-wrap gap-2">
            {["10ステップ解説", "成分辞典", "肌質別ケア", "2026年最新"].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-semibold">{tag}</span>
            ))}
          </div>
        </section>

        {/* 10ステップ */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">K-Beautyの10ステップスキンケア完全ガイド</h2>
          <p className="text-sm text-gray-500">※ すべてのステップを毎日行う必要はありません。自分の肌状態・生活スタイルに合わせてアレンジしてください。</p>
          <div className="space-y-3">
            {K_BEAUTY_STEPS.map(s => (
              <div key={s.step} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-pink-100 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-black flex-shrink-0 text-sm">
                  {s.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="font-black text-gray-900 text-sm">{s.name}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.point}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注目成分 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">K-Beautyで注目の成分6選</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {HERO_INGREDIENTS.map(ing => (
              <div key={ing.name} className="rounded-2xl border p-5 space-y-3 bg-white" style={{ borderColor: `${ing.color}25` }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ing.emoji}</span>
                  <div>
                    <div className="font-black text-gray-900 text-sm">{ing.name}</div>
                    <div className="text-xs font-semibold mt-0.5 px-2 py-0.5 rounded-full inline-block" style={{ background: `${ing.color}12`, color: ing.color }}>
                      {ing.benefit}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{ing.explain}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 肌質別ケア */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-gray-900">肌質別 K-Beautyケアのポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SKIN_TYPES.map(st => (
              <div key={st.type} className="rounded-2xl border p-5 space-y-3 bg-white" style={{ borderColor: `${st.color}25` }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{st.emoji}</span>
                  <span className="font-black text-gray-900 text-sm">{st.type}</span>
                </div>
                <ul className="space-y-1.5">
                  {st.tips.map(t => (
                    <li key={t} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: st.color }}>•</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA → skincare-guide */}
        <section className="rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 p-8 text-center space-y-4">
          <h2 className="font-black text-white text-xl">日本のスキンケア基本もマスターしよう</h2>
          <p className="text-pink-100 text-sm">K-Beautyと組み合わせることで相乗効果が生まれます。</p>
          <Link href="/skincare-guide"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-pink-700 text-base transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "white" }}>
            スキンケア基本ガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-gray-900">よくある質問</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-pink-50 border border-pink-100 rounded-xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q. {q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
