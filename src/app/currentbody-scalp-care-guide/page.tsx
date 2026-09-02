import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import MoshimoSectionBeauty from "@/components/MoshimoSectionBeauty";
import ArticleAffiliateCard from "@/components/ArticleAffiliateCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beauty-tech-japan.vercel.app/currentbody-scalp-care-guide" },
  title: "40〜50代男性の頭皮ケア完全ガイド｜自宅ケアにカレントボディLEDデバイスという選択肢【2026年版】",
  description:
    "40〜50代で気になり始める頭皮のベタつき・抜け毛・ボリューム低下。加齢で頭皮に何が起きるのか、今日から見直せるシャンプー・マッサージ・ドライヤー・生活習慣、そして自宅ケアの新しい選択肢としてカレントボディのLED頭皮・頭髪ケアデバイスを解説。クーポンコードFANCBで10%OFF。",
  openGraph: {
    images: [{ url: "https://beauty-tech-japan.vercel.app/api/og", width: 1200, height: 630, alt: "Beauty Tech Japan" }],
    title: "40〜50代男性の頭皮ケア完全ガイド｜カレントボディLEDデバイスという選択肢",
    description: "加齢で頭皮に起きる変化と、自宅でできる頭皮ケア。LEDデバイスの取り入れ方まで解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    images: ["https://beauty-tech-japan.vercel.app/api/og"],
    card: "summary_large_image",
    title: "40〜50代男性の頭皮ケア完全ガイド｜カレントボディLEDデバイス",
    description: "加齢で頭皮に起きる変化と、自宅でできる頭皮ケア。",
  },
};

const PUBLISHED = "2026年9月2日";

// CurrentBody（A8・beauty-tech-japan / websiteId=004）
const CB_DEVICE_LINK = "https://px.a8.net/svt/ejp?a8mat=4B82L5+AQZUAY+54TM+60OXE";
const CB_OFFICIAL_LINK = "https://px.a8.net/svt/ejp?a8mat=4B82L5+AQZUAY+54TM+5YJRM";
const CB_PIXEL = "https://www17.a8.net/0.gif?a8mat=4B82L5+AQZUAY+54TM+60OXE";

interface CareStep {
  icon: string;
  title: string;
  body: string;
}

const CARE_STEPS: CareStep[] = [
  {
    icon: "🧴",
    title: "① シャンプーは「洗浄力」より「頭皮に合うか」で選ぶ",
    body:
      "40代を過ぎると頭皮の皮脂量は変化し、洗いすぎると乾燥やかゆみ、逆に洗い足りないとニオイやベタつきが出ます。高級アルコール系（ラウレス硫酸など）で強く洗うより、アミノ酸系・ベタイン系のマイルドな洗浄成分のものを選び、1日1回・夜に洗うのが基本です。シャンプー前に38〜40℃のお湯で1〜2分すすぐ「予洗い」だけで汚れの7割は落ちるといわれ、シャンプー剤の使用量も減らせます。",
  },
  {
    icon: "🖐️",
    title: "② 洗うのは「髪」ではなく「頭皮」。指の腹で動かす",
    body:
      "爪を立ててゴシゴシ洗うと頭皮を傷つけ、フケや炎症の原因になります。指の腹を頭皮に当て、生え際から頭頂部へ、少しずつ位置をずらしながら地肌を「動かす」ように洗います。時間の目安は60〜90秒。すすぎはその倍の時間をかけ、耳の後ろ・襟足・生え際にシャンプーが残らないよう丁寧に流します。すすぎ残しは頭皮トラブルの大きな原因です。",
  },
  {
    icon: "💨",
    title: "③ 自然乾燥はNG。ドライヤーは「根元→毛先」20cm離して",
    body:
      "濡れたまま放置すると雑菌が繁殖しやすく、ニオイ・かゆみ・頭皮環境の悪化につながります。タオルで髪を挟んで押さえるように水分を取り（こすらない）、ドライヤーは頭から20cmほど離し、まず根元を乾かしてから毛先へ。最後に冷風を当てるとキューティクルが引き締まり、ツヤとまとまりが出ます。8割乾いたら止めてOKで、乾かしすぎも乾燥の原因になります。",
  },
  {
    icon: "💆",
    title: "④ 頭皮マッサージで血流を促す（1日3分）",
    body:
      "頭皮は顔の皮膚とつながっており、加齢や運動不足、長時間のデスクワークで硬くなりがちです。両手の指の腹を側頭部に当て、円を描くように少しずつ頭頂部へ引き上げます。生え際・こめかみ・襟足を各20秒ずつ。入浴中やドライヤー前など「ついで」のタイミングで習慣化すると続きます。強く押しすぎず、気持ちいい強さで行うのがポイントです。",
  },
  {
    icon: "🥗",
    title: "⑤ 頭皮環境は生活習慣で決まる（睡眠・食事・禁煙）",
    body:
      "髪はタンパク質（ケラチン）でできています。肉・魚・卵・大豆などのタンパク質、亜鉛（牡蠣・レバー・ナッツ）、ビタミンB群を意識してとりましょう。睡眠不足は成長ホルモンの分泌を妨げ、喫煙は末梢血管を収縮させて頭皮の血流を下げます。過度な飲酒・脂質の多い食事の連続も皮脂バランスを崩します。まずは「7時間睡眠」と「タンパク質を毎食1品」から。",
  },
  {
    icon: "☀️",
    title: "⑥ 頭皮も紫外線で老化する。分け目と頭頂部を守る",
    body:
      "顔の日焼け止めは塗っても、頭皮は無防備という人がほとんどです。頭頂部や分け目は体の中でもっとも紫外線を浴びる部位のひとつで、乾燥・ごわつき・将来的なボリュームダウンにつながります。屋外に長くいる日は帽子をかぶる、髪・頭皮用のUVスプレーを使う、日差しの強い時間帯を避ける、といった対策を。分け目を時々変えるだけでも負担が分散します。",
  },
];

interface DeviceRow {
  label: string;
  value: string;
}

const DEVICE_SPECS: DeviceRow[] = [
  { label: "使い方", value: "頭にかぶって電源を入れるだけ。1回およそ10分・週数回が目安（製品の説明書に従ってください）" },
  { label: "光の種類", value: "低出力の赤色光・近赤外光。医療機関のレーザー治療ではなく、家庭で継続することを前提にした光ケア機器" },
  { label: "続けやすさ", value: "スマホを見ながら・テレビを見ながら装着できる。塗る・洗い流す手間がなく、習慣化しやすい" },
  { label: "こんな人に", value: "40〜50代で分け目・頭頂部のボリュームが気になる / これまで頭皮ケアをしてこなかった / 通院やクリニックはハードルが高いと感じる" },
  { label: "価格", value: "125,000円相当（クーポン FANCB で10%OFF・後述）" },
];

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "40〜50代になって急に髪のボリュームが減った気がします。何から始めればいいですか？",
    a: "まずは「洗い方」と「乾かし方」の見直しから始めてください。マイルドな洗浄成分のシャンプーで頭皮を指の腹でやさしく洗い、すすぎを2倍の時間かけ、ドライヤーで根元から素早く乾かす——この基本だけで頭皮環境はかなり変わります。あわせて、1日3分の頭皮マッサージ、タンパク質を意識した食事、7時間睡眠を習慣に。その上で「自宅で手軽に続けられるケア」を足したい場合の選択肢が、かぶるだけで使えるLED頭皮・頭髪ケアデバイスです。",
  },
  {
    q: "頭皮ケアのデバイスは本当に意味がありますか？",
    a: "デバイスは「魔法の道具」ではなく、あくまで毎日の頭皮ケアを底上げするための選択肢です。効果の感じ方には個人差があり、数日で劇的に変わるものではありません。大切なのは、シャンプー・乾かし方・マッサージ・生活習慣という土台を整えたうえで、継続して使うことです。塗る・流す手間がなく「かぶるだけ」で続けやすいという点が、忙しい40〜50代にとってのメリットです。",
  },
  {
    q: "クリニックのAGA治療とどう違いますか？",
    a: "医療機関でのAGA治療は、医師の診断のもとで内服薬・外用薬などを使う医療行為です。抜け毛・薄毛が急に進んでいる、家族に薄毛が多い、といった場合は自己判断せず皮膚科やAGA専門クリニックに相談してください。家庭用のLED頭皮・頭髪ケアデバイスや市販のヘアケアは、あくまでセルフケアの範囲で頭皮環境を整えるためのものです。両者は対立するものではなく、目的が異なります。",
  },
  {
    q: "カレントボディのLED頭皮・頭髪ケアデバイスはどうやって使うのですか？",
    a: "基本は「頭にかぶって電源を入れ、規定時間そのまま過ごす」だけです。1回10分前後・週に数回が目安で、詳しい頻度や使用時間は必ず製品同梱の説明書に従ってください。塗布や洗い流しが不要なので、スマホやテレビを見ている時間に組み込みやすく、頭皮ケアを「続ける」という一番の壁を越えやすいのが特徴です。",
  },
  {
    q: "クーポンコードはどこで使えますか？",
    a: "カレントボディ公式サイトで購入する際、決済画面のクーポンコード欄に「FANCB」と入力すると10%OFFが適用されます。公式サイトで販売されているLEDデバイスに常時利用できます。すでに個別のクーポンを案内されている場合は、そちらを優先してください。",
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

export default function CurrentBodyScalpCareGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <img src={CB_PIXEL} width={1} height={1} alt="" style={{ position: "absolute", opacity: 0 }} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* ヒーロー */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-4 py-1 mb-4">
            💈 40〜50代男性の頭皮ケア
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            40〜50代男性の頭皮ケア完全ガイド
            <br />
            <span className="text-blue-300 text-2xl">
              自宅ケアにカレントボディLEDデバイスという選択肢
            </span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            加齢で頭皮に何が起きるのか、今日から見直せる6つのケア、
            <br />
            そして「かぶるだけ」で続けられるLED頭皮・頭髪ケアデバイスまで。
          </p>
          <p className="text-gray-400 text-xs mt-3">公開日：{PUBLISHED}</p>
        </div>

        {/* 導入 */}
        <section className="mb-10">
          <p className="text-gray-300 text-sm leading-7">
            30代までは気にならなかったのに、40代・50代に入ってから「分け目が目立つ」「夕方になると頭皮がベタつく」「ドライヤーのあとに髪が立ち上がらない」——そんな変化を感じていませんか。
            これは珍しいことではなく、加齢にともなって頭皮の皮脂バランス・血流・ハリが変わっていくために起こる、いわば自然な現象です。
            大事なのは「年齢のせい」とあきらめることではなく、<span className="text-white font-bold">洗い方・乾かし方・生活習慣という土台を整えたうえで、続けられるケアを足していく</span>ことです。
            この記事では、40〜50代の男性が日常に取り入れやすい頭皮ケアを6つにまとめ、最後に「自宅で手軽に続けられる選択肢」としてカレントボディのLED頭皮・頭髪ケアデバイスを紹介します。
          </p>
        </section>

        {/* なぜ変わるのか */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-3">
            なぜ40〜50代で頭皮・髪が変わるのか
          </h2>
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 space-y-3">
            <p className="text-gray-300 text-sm leading-7">
              <span className="text-white font-bold">① 血流の低下。</span>
              運動不足・長時間のデスクワーク・喫煙などで頭皮の毛細血管の巡りが悪くなると、毛根に届く酸素と栄養が減ります。頭皮を触ってみて「硬い・動きにくい」と感じたら、血流が落ちているサインです。
            </p>
            <p className="text-gray-300 text-sm leading-7">
              <span className="text-white font-bold">② 皮脂バランスの変化。</span>
              加齢で皮脂の質が変わり、酸化しやすくなります。酸化した皮脂は特有のニオイやベタつき、毛穴づまりの原因に。洗いすぎると今度は乾燥してフケ・かゆみが出るため、「適切に洗う」ことが重要になります。
            </p>
            <p className="text-gray-300 text-sm leading-7">
              <span className="text-white font-bold">③ ハリ・コシの低下。</span>
              1本1本の髪が細くなると、同じ本数でも全体のボリュームは減って見えます。分け目や頭頂部から気になり始めるのはこのためです。
            </p>
            <p className="text-gray-300 text-sm leading-7">
              <span className="text-white font-bold">④ 生活習慣の蓄積。</span>
              睡眠不足・栄養の偏り・ストレス・紫外線。ひとつひとつは小さくても、20年30年の積み重ねが頭皮に表れます。逆に言えば、今日からの習慣は将来の頭皮に効いてきます。
            </p>
          </div>
        </section>

        {/* 6つのケア */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            今日から見直したい頭皮ケア6つ
          </h2>
          <div className="space-y-4">
            {CARE_STEPS.map((step, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-white font-black text-sm">{step.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-7">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 中間CTA */}
        <ArticleAffiliateCard tags={["ヘアケア", "メンズ", "美容家電"]} articleId="currentbody-scalp-care-guide" />

        {/* LEDという選択肢 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-3">
            自宅ケアに「LED」という選択肢：カレントボディ LED頭皮・頭髪ケアデバイス
          </h2>
          <p className="text-gray-300 text-sm leading-7 mb-4">
            ここまでの土台（シャンプー・乾かし方・マッサージ・生活習慣）を整えたうえで、
            「もう一段、自宅ケアを足したい」「でも塗ったり洗い流したりが続かない」という人に向いているのが、
            <span className="text-white font-bold">かぶるだけで使えるLED頭皮・頭髪ケアデバイス</span>です。
            イギリス発の美容機器ブランド<a href={CB_OFFICIAL_LINK} target="_blank" rel="nofollow sponsored noopener" className="text-blue-300 underline">カレントボディ（CurrentBody）</a>
            は、LEDライトセラピー機器で知られ、フェイスマスクなどでも実績のあるメーカーです。
            その頭皮・頭髪向けモデルが、低出力の赤色光・近赤外光を頭皮に当てて、毎日のヘアケアを底上げすることを狙った家庭用デバイスです。
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {DEVICE_SPECS.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <th className="text-left align-top py-2.5 pr-3 text-gray-400 font-bold whitespace-nowrap w-24">
                      {row.label}
                    </th>
                    <td className="py-2.5 text-gray-300 leading-7">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 text-sm leading-7 mb-4">
            ポイントは<span className="text-white font-bold">「続けやすさ」</span>です。
            頭皮ケアで一番むずかしいのは、効果が出るより先に「面倒でやめてしまう」こと。
            塗布や洗い流しが不要で、スマホを見ている10分に組み込めるという設計は、忙しい40〜50代がケアを習慣化するうえで大きな助けになります。
            もちろんデバイスだけで完結するものではなく、あくまで日々のケアの土台があってこそ活きる、という点は忘れないでください。
          </p>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-500/40 rounded-2xl p-6 text-center">
            <p className="text-white font-bold mb-1">🎟️ クーポンコード「FANCB」で 10%OFF</p>
            <p className="text-gray-300 text-xs leading-6 mb-4">
              カレントボディ公式サイトの決済画面で、クーポンコード欄に <span className="text-white font-bold">FANCB</span> と入力すると
              10%OFFが適用されます（公式サイトで販売されているLEDデバイスに常時利用可）。
            </p>
            <a
              href={CB_DEVICE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              カレントボディ LED頭皮・頭髪ケアデバイスを見る →
            </a>
            <p className="text-gray-500 text-[11px] mt-3">
              ※本記事はアフィリエイトプログラム（A8.net）を利用しており、リンク経由の購入で報酬を得ることがあります。
            </p>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-3">
            まとめ：土台を整えて、続けられるケアを足す
          </h2>
          <p className="text-gray-300 text-sm leading-7">
            40〜50代の頭皮の変化は、加齢による自然な現象です。あきらめる必要も、あわてる必要もありません。
            やることはシンプルで、<span className="text-white font-bold">①マイルドに洗う ②しっかりすすぐ ③根元から素早く乾かす ④1日3分マッサージ ⑤タンパク質と睡眠 ⑥頭皮の紫外線対策</span>。
            この6つを回したうえで、「もう一段ケアを足したい」「続けられる形にしたい」という人にとって、
            かぶるだけで使えるカレントボディのLED頭皮・頭髪ケアデバイスは現実的な選択肢になります。
            購入時はクーポンコード <span className="text-white font-bold">FANCB</span> で10%OFF。
            抜け毛が急に増えた・地肌が明らかに透けてきたという場合は、セルフケアと並行して皮膚科やAGAクリニックへの相談も検討してください。
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-blue-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-300 text-sm leading-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 関連 */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-white mb-2">🧑‍🦱 メンズ美容の基本も</h2>
          <p className="text-gray-300 text-sm mb-4">
            スキンケア・眉毛・ヘアケアなど、男性の美容ケア全体は
            <br />
            メンズ美容入門ガイドで解説しています。
          </p>
          <a
            href="/mens-beauty-guide"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            メンズ美容入門ガイドを見る →
          </a>
        </section>

        <MoshimoSectionBeauty />
        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
