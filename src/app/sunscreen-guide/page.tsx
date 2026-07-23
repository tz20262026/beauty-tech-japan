import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/sunscreen-guide" },
  title: "日焼け止め完全ガイド2026年版【SPF・PA・種類・正しい塗り方・おすすめ】",
  description:
    "日焼け止めの選び方を2026年版で完全解説。SPF・PAの意味・違い・正しい塗り方・塗り直しのタイミング・クリーム/スプレー/スティック種類別おすすめ・敏感肌向け選び方まで詳しく解説。",
  keywords: [
    "日焼け止め", "日焼け止め おすすめ", "SPF PA 違い", "日焼け止め 塗り方",
    "紫外線対策", "日焼け止め 種類", "敏感肌 日焼け止め", "日焼け止め 2026"
  ],
  openGraph: {
    title: "日焼け止め完全ガイド2026年版【SPF・PA・種類・正しい塗り方】",
    description: "SPF・PAの意味・正しい塗り方・種類別おすすめ・敏感肌向け選び方を2026年最新情報で完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "日焼け止め完全ガイド2026年版",
    description: "SPF・PA・塗り方・種類別おすすめを完全解説",
  },
};

interface SunscreenType {
  name: string;
  icon: string;
  spf: string;
  texture: string;
  best: string;
  avoid: string;
  color: string;
}

interface SkinTypeRec {
  type: string;
  icon: string;
  rec: string;
  avoid: string;
  color: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const SUNSCREEN_TYPES: SunscreenType[] = [
  {
    name: "クリームタイプ",
    icon: "🧴",
    spf: "SPF30〜50+/PA++〜++++",
    texture: "クリーミー・しっかり",
    best: "保湿力が高く乾燥肌・日焼け予防を重視する方に最適。1回の量が多くても伸びが良い。砂浜・海水浴など強いUV環境向き。スポーツ・アウトドアで長時間使うなら最も安心。",
    avoid: "テクスチャーが重く感じる方・混合肌・オイリー肌の方・メイクの上から使用したい場合",
    color: "#f59e0b",
  },
  {
    name: "ミルク・ローションタイプ",
    icon: "💧",
    spf: "SPF30〜50+/PA+++〜++++",
    texture: "軽い・さらさら",
    best: "伸びが良く軽いテクスチャーで普段使いに最適。日常の外出・通勤・デートに最も向いている。化粧下地として使えるものも多くトータルで時短になる。最も人気の定番タイプ。",
    avoid: "海水浴・アウトドアなど汗・水に長時間さらされる場面（こまめな塗り直しが必要）",
    color: "#06b6d4",
  },
  {
    name: "スプレータイプ",
    icon: "💨",
    spf: "SPF30〜50/PA++〜+++",
    texture: "ミスト・超軽い",
    best: "塗り直しに最適。手が届かない背中・頭皮にも使える。メイクの上からも使用可能（UV粉末スプレー）。屋外イベント・スポーツ・夏フェスに便利。子どもの全身に使いやすい。",
    avoid: "初回の塗布には不向き（塗りムラができやすい）。1回の噴射量が少なく塗り残しが出やすい",
    color: "#8b5cf6",
  },
  {
    name: "スティックタイプ",
    icon: "🖊️",
    spf: "SPF30〜50+/PA+++〜++++",
    texture: "固形・べたつきなし",
    best: "塗り直しが簡単でメイクの上からも使いやすい。目元・口元など細部の塗布に適している。外出時のバッグに入れやすいコンパクトサイズ。顔専用として携帯するのがおすすめ。",
    avoid: "顔全体の初回塗布には時間がかかる。量の調整が難しくムラが生じやすい",
    color: "#ec4899",
  },
  {
    name: "パウダータイプ",
    icon: "✨",
    spf: "SPF25〜50/PA++〜+++",
    texture: "サラサラ・軽い",
    best: "化粧直しに最適。日中のメイクの上から簡単にUV補充できる。サラサラ感を保ちながら皮脂吸収も。皮脂崩れしやすいオイリー肌にも◎。ナチュラルな仕上がりが好みの方に。",
    avoid: "日焼け止めとしての効果が他タイプより弱い傾向あり。初回の単独使用には不向き",
    color: "#10b981",
  },
];

const SKIN_TYPE_RECS: SkinTypeRec[] = [
  {
    type: "乾燥肌",
    icon: "🌵",
    rec: "保湿成分（セラミド・ヒアルロン酸・スクワラン）配合のクリーム・ミルクタイプを選ぶ。SPF30〜50+/PA++++でしっかり守りながら潤いをキープ。",
    avoid: "アルコール（エタノール）高配合の製品・スプレータイプ（乾燥しやすい）",
    color: "#06b6d4",
  },
  {
    type: "オイリー肌（脂性肌）",
    icon: "💦",
    rec: "オイルフリー・皮脂吸収成分（シリカ・クレイ）配合のミルク・パウダータイプ。ウォータープルーフで長時間テカリを抑えられるものがベスト。",
    avoid: "こってりしたクリームタイプ・オイル成分多めの製品",
    color: "#f59e0b",
  },
  {
    type: "混合肌",
    icon: "⚖️",
    rec: "軽いテクスチャーのミルクタイプで全顔塗布後、Tゾーンだけパウダータイプを追加するのがおすすめ。オールシーズン使いやすいバランス型を選ぶ。",
    avoid: "全体が重すぎるもの・Tゾーンに厚塗りしすぎること",
    color: "#a855f7",
  },
  {
    type: "敏感肌",
    icon: "🌸",
    rec: "ノンケミカル（紫外線散乱剤：酸化亜鉛・酸化チタン使用）・無香料・無着色・アルコールフリー・パラベンフリーの製品を選ぶ。「敏感肌向け」表示があるものを。",
    avoid: "紫外線吸収剤（メトキシケイヒ酸エチルヘキシル等）配合の製品、香料・着色料入り",
    color: "#ec4899",
  },
];

const HOW_TO_APPLY = [
  { step: 1, title: "スキンケア後15〜20分おく", detail: "化粧水・乳液・美容液を肌に十分なじませてから日焼け止めを塗る。スキンケアが完全に浸透していないと、日焼け止めが均一に伸びない。" },
  { step: 2, title: "外出15〜20分前に塗る", detail: "化学フィルター（紫外線吸収剤）タイプは肌に吸収されてから効果を発揮するため、外出前に余裕をもって塗るのがポイント。" },
  { step: 3, title: "適量（顔はパール粒2個分）を取る", detail: "顔全体ならパール粒大2個分（約1.5〜2g）が目安。量が少ないと記載のSPF効果が発揮されない。最も多い失敗が「量不足」。" },
  { step: 4, title: "5点置きで均一に伸ばす", detail: "額・両頬・鼻・あごの5点に均等に置き、内側から外側に向かって優しくなじませる。こすらず、押さえるように伸ばすのがコツ。" },
  { step: 5, title: "二度塗りで効果UP", detail: "1回目が乾いたら（2〜3分後）もう1回薄く塗り重ねると、均一性が上がりSPF効果が安定する。特にアウトドアやレジャーで有効。" },
  { step: 6, title: "2〜3時間おきに塗り直す", detail: "汗・皮脂・摩擦で日焼け止め効果は落ちる。こまめな塗り直しが最大の防衛策。外出先ではスプレーまたはスティックが便利。" },
];

const FAQ: FAQItem[] = [
  {
    q: "SPFとPAの違いと選び方の目安を教えてください。",
    a: "SPFはUV-B（主に肌を焼く紫外線）の防御力を示す数値です。数字が大きいほど効果が高く、日常使いはSPF30、炎天下・海水浴はSPF50+が目安です。PAはUV-A（シミ・しわ・老化を促進する紫外線）の防御力を示す記号で、+の数が多いほど強力です。PA++は外出、PA++++は最高防御レベルです。日常使いならSPF30・PA+++、夏のレジャーはSPF50+・PA++++を選ぶと安心です。",
  },
  {
    q: "日焼け止めの正しい塗り方と量を教えてください。",
    a: "顔の場合はパール粒大2個分（約1.5〜2g）が適量です。外出の15〜20分前にスキンケア後の肌に塗ります。額・両頬・鼻・顎の5点に分けて置き、内側から外側へ優しく伸ばします。こすらず押さえるように塗るのがポイントです。二度塗りすることでSPF効果が安定します。最も多い失敗は量が少なすぎることで、少ないと記載のSPF効果が得られません。",
  },
  {
    q: "日焼け止めはどれくらいの頻度で塗り直すべきですか？",
    a: "日常の外出は2〜3時間おき、汗をかく・水に入る場合は1〜2時間おき、夏の海水浴・炎天下は30〜60分おきが目安です（ウォータープルーフでも塗り直しが必要です）。外出先での塗り直しにはスプレータイプかスティックタイプが便利です。メイクの上からでも使えるUV粉末スプレーを持ち歩くと日中の塗り直しが簡単になります。",
  },
  {
    q: "敏感肌向けの日焼け止めはどう選べばいいですか？",
    a: "敏感肌には「ノンケミカル（紫外線散乱剤のみ使用）」の製品が最適です。酸化亜鉛・酸化チタンを使用した製品は肌刺激が少ないです。さらに無香料・無着色・アルコールフリー・パラベンフリーの表示があるものを選ぶと安心です。初めて使う製品は腕の内側にパッチテスト（24時間放置）してから使用することをおすすめします。",
  },
  {
    q: "日焼け止めは冬・雨の日・室内でも必要ですか？",
    a: "はい、必要です。UV-A（シミ・老化の原因）は雲や窓ガラスを透過し、冬でも夏の50〜70%程度が降り注ぎます。一方UV-Bは雲や窓ガラスにある程度遮られます。室内でも窓際の席・日差しの入る場所では毎日のUVケアが推奨されます。冬・室内ではSPF20〜30・PA++程度の軽いもので十分です。化粧下地に日焼け止め効果があるものを選ぶと手間が省けます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SunscreenGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full px-4 py-1 mb-4">
            ☀️ 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            日焼け止め完全ガイド<br />
            <span className="text-yellow-400">2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【SPF・PA・種類・正しい塗り方・おすすめ】</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            日焼け止めのSPF・PAの意味・種類の違い・正しい塗り方・<br />
            塗り直しタイミング・肌タイプ別おすすめを2026年最新情報で完全解説。
          </p>
        </div>

        {/* SPFとPA早わかり表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-yellow-500 pl-3">
            ☀️ SPF・PA早わかり表【数値の意味と選び方】
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4">
              <h3 className="text-orange-300 font-black text-sm mb-3">SPF（UV-B防御）</h3>
              <div className="space-y-2 text-xs">
                {[
                  { val: "SPF15〜20", use: "室内・普段使い" },
                  { val: "SPF30", use: "日常の外出・通勤" },
                  { val: "SPF50", use: "炎天下・アウトドア" },
                  { val: "SPF50+", use: "海水浴・登山・スポーツ" },
                ].map((row) => (
                  <div key={row.val} className="flex justify-between border-b border-orange-900/30 pb-1">
                    <span className="text-orange-200 font-bold">{row.val}</span>
                    <span className="text-gray-600">{row.use}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
              <h3 className="text-purple-300 font-black text-sm mb-3">PA（UV-A防御）</h3>
              <div className="space-y-2 text-xs">
                {[
                  { val: "PA+", use: "室内・普段使い" },
                  { val: "PA++", use: "外出・野外活動" },
                  { val: "PA+++", use: "炎天下・スポーツ" },
                  { val: "PA++++", use: "最強防御・海水浴・登山" },
                ].map((row) => (
                  <div key={row.val} className="flex justify-between border-b border-purple-900/30 pb-1">
                    <span className="text-purple-200 font-bold">{row.val}</span>
                    <span className="text-gray-600">{row.use}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 text-sm">
            <p className="text-yellow-300 font-bold mb-1">💡 日常使いの目安</p>
            <p className="text-gray-300 text-xs leading-relaxed">
              普段の外出なら <span className="text-yellow-300 font-bold">SPF30〜50・PA+++</span> が最もコスパよく使いやすいバランスです。
              SPFが高いほど肌への負担が増えるため、用途に合わせて使い分けがおすすめです。
            </p>
          </div>
        </section>

        {/* 種類5選 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">
            🧴 日焼け止めの種類5選【テクスチャー・用途比較】
          </h2>
          <div className="space-y-4">
            {SUNSCREEN_TYPES.map((type) => (
              <div key={type.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-2xl">{type.icon}</span>
                  <h3 className="text-white font-black text-sm">{type.name}</h3>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${type.color}15`, color: type.color, border: `1px solid ${type.color}30` }}
                  >
                    {type.texture}
                  </span>
                </div>
                <div className="bg-gray-800 rounded px-3 py-2 text-xs mb-3">
                  <span className="text-gray-600">🌟 SPF/PA目安：</span>
                  <span className="text-gray-200">{type.spf}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-900/10 border border-green-500/20 rounded px-3 py-2">
                    <p className="text-green-400 font-bold mb-1">✅ おすすめ：</p>
                    <p className="text-gray-300 leading-relaxed">{type.best}</p>
                  </div>
                  <div className="bg-red-900/10 border border-red-500/20 rounded px-3 py-2">
                    <p className="text-red-400 font-bold mb-1">⚠️ 注意：</p>
                    <p className="text-gray-300 leading-relaxed">{type.avoid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA：早期に読者の目に触れるアフィリエイト導線 */}
        <ArticleAffiliateCard tags={[]} articleId="sunscreen-guide" />

        {/* 肌タイプ別おすすめ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">
            🌸 肌タイプ別おすすめ日焼け止めの選び方
          </h2>
          <div className="space-y-4">
            {SKIN_TYPE_RECS.map((rec) => (
              <div
                key={rec.type}
                className="bg-gray-900 border border-gray-700 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{rec.icon}</span>
                  <h3
                    className="font-black text-sm"
                    style={{ color: rec.color }}
                  >
                    {rec.type}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-800 rounded px-3 py-2">
                    <p className="text-gray-600 font-bold mb-1">✅ おすすめ</p>
                    <p className="text-gray-300 leading-relaxed">{rec.rec}</p>
                  </div>
                  <div className="bg-gray-800 rounded px-3 py-2">
                    <p className="text-gray-600 font-bold mb-1">⚠️ 避けるべき</p>
                    <p className="text-gray-300 leading-relaxed">{rec.avoid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 正しい塗り方ステップ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">
            📋 日焼け止めの正しい塗り方6ステップ
          </h2>
          <div className="space-y-3">
            {HOW_TO_APPLY.map((s) => (
              <div key={s.step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center font-black text-sm">
                    {s.step}
                  </div>
                </div>
                <div>
                  <p className="font-black text-white text-sm mb-1">{s.title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 成分チェック表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-yellow-500 pl-3">
            🔬 紫外線吸収剤 vs 散乱剤【成分の違い】
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="px-4 py-3 font-bold text-gray-300">比較項目</th>
                  <th className="px-4 py-3 font-bold text-yellow-300">紫外線吸収剤</th>
                  <th className="px-4 py-3 font-bold text-blue-300">紫外線散乱剤（ノンケミカル）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "仕組み", absorb: "紫外線を吸収して熱に変換", scatter: "紫外線を物理的に反射・散乱" },
                  { item: "代表成分", absorb: "メトキシケイヒ酸エチルヘキシル等", scatter: "酸化亜鉛・酸化チタン" },
                  { item: "テクスチャー", absorb: "軽い・伸びが良い", scatter: "やや重い・白浮きしやすい" },
                  { item: "刺激性", absorb: "敏感肌に刺激になる場合あり", scatter: "低刺激・敏感肌向き" },
                  { item: "おすすめ肌質", absorb: "普通肌・オイリー肌", scatter: "敏感肌・乾燥肌・赤ちゃん" },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-950"}>
                    <td className="px-4 py-3 font-semibold text-gray-600">{row.item}</td>
                    <td className="px-4 py-3 text-gray-300">{row.absorb}</td>
                    <td className="px-4 py-3 text-gray-300">{row.scatter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🌸 スキンケアと合わせてUV対策を完璧に
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            日焼け止めと合わせてスキンケアルーティンを整えることで<br />
            美肌を長く維持できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/skincare-guide"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              スキンケア完全ガイドを見る →
            </Link>
            <Link
              href="/anti-aging-guide"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              エイジングケアガイドを見る →
            </Link>
            <Link
              href="/summer-makeup-guide"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              夏のメイク崩れ防止ガイド →
            </Link>
            <Link
              href="/sensitive-skin-guide"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              敏感肌スキンケアガイド →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-yellow-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQ.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
