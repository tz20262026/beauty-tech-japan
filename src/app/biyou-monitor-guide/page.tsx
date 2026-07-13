import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";

export const metadata: Metadata = {
  title: "美容モニターの始め方完全ガイド2026年版【コスメ・エステを実質無料で試す方法】",
  description:
    "美容モニターの仕組み・始め方を2026年版で完全解説。コスメ・エステ・脱毛を実質無料で体験して謝礼までもらえる美容モニターの登録方法・報酬の目安・注意点・怪しい案件の見分け方を紹介します。",
  keywords: ["美容モニター", "コスメ モニター", "エステ モニター", "美容 モニター 始め方", "ヴィーナスウォーカー", "美容 副業"],
  openGraph: {
    title: "美容モニターの始め方完全ガイド2026年版｜コスメ・エステを実質無料で試す",
    description: "美容モニターの仕組み・報酬・始め方・注意点を完全解説",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "美容モニターの始め方完全ガイド2026年版",
    description: "コスメ・エステを実質無料で試せる美容モニターの始め方を解説",
  },
};

interface FAQItem {
  q: string;
  a: string;
}

const FAQ: FAQItem[] = [
  {
    q: "美容モニターは本当に無料でコスメやエステを試せるのですか？",
    a: "はい。企業が新商品の感想・口コミデータを集めるために、モニターに商品やサービスを提供し、体験後のアンケート回答と引き換えに謝礼を支払う仕組みです。商品代金相当かそれ以上の謝礼が出る案件では「実質無料＋おこづかい」になります。",
  },
  {
    q: "どのくらい稼げますか？",
    a: "案件によりますが、コスメの在宅モニターで数百〜数千円、エステ・脱毛などの来店型モニターでは1件で数千〜1万円以上の謝礼が出ることもあります。副業というより「美容代を浮かせながらおこづかいを得る」感覚が実態に近いです。",
  },
  {
    q: "怪しい案件を見分けるコツはありますか？",
    a: "「先にお金を払わせる」案件は避けてください。正規のモニターは登録も参加も無料が原則です。運営会社の実態が確認できること、謝礼の支払い条件が明記されていることをチェックし、大手のモニターサイト経由で始めるのが安全です。",
  },
  {
    q: "男性でも美容モニターはできますか？",
    a: "女性限定の案件が多いのは事実ですが、メンズコスメ・メンズ脱毛の市場拡大に伴い男性向け案件も増えています。ただし本記事で紹介しているヴィーナスウォーカーは女性向けのサービスです。",
  },
  {
    q: "確定申告は必要ですか？",
    a: "謝礼も所得になるため、副業の合計所得が年20万円を超える場合は確定申告が必要です。モニター謝礼だけで超えるケースは多くありませんが、他の副業と合算する場合は注意しましょう。",
  },
];

const STEPS = [
  {
    num: "STEP 1",
    title: "モニターサイトに無料登録",
    desc: "氏名・メールアドレスなどの基本情報を登録します。登録自体にお金は一切かかりません。",
  },
  {
    num: "STEP 2",
    title: "無料セミナー・説明を受ける",
    desc: "仕組みや案件の受け方の説明を受けます。ヴィーナスウォーカーの場合は電話セミナー形式なので、自宅にいながら参加できます。",
  },
  {
    num: "STEP 3",
    title: "案件に応募して体験→アンケート回答",
    desc: "気になるコスメ・エステ案件に応募し、体験後にアンケートを提出すると謝礼が支払われます。慣れれば月に複数案件の掛け持ちも可能です。",
  },
];

export default function BiyouMonitorGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      {/* ヒーロー */}
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-rose-50 text-rose-600 border border-rose-200">
          💝 2026年最新版・PR
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          美容モニターの始め方
          <br />
          <span className="text-rose-500">完全ガイド2026年版</span>
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          コスメ・エステ・脱毛を実質無料で体験して、謝礼までもらえる。
          <br />
          美容好きにいちばん相性のいい「お得な仕組み」を解説します。
        </p>
      </header>

      {/* 仕組み */}
      <section>
        <h2 className="text-xl font-black text-gray-900 mb-4 border-l-4 border-rose-400 pl-3">
          💡 美容モニターとは？仕組みを1分で理解
        </h2>
        <div className="space-y-4 text-sm text-gray-700 leading-[1.9]">
          <p>
            美容モニターとは、<strong>企業の新商品・新サービスを体験して感想を提出する代わりに、謝礼を受け取れる仕組み</strong>です。
            化粧品メーカーやエステサロンは、発売前・販促中の商品に対するリアルな声を必要としています。
            その「声」を提供するのがモニターの役割で、体験にかかった費用相当〜それ以上の謝礼が支払われます。
          </p>
          <p>
            つまり、どうせ買うはずだったコスメやずっと気になっていたエステを、
            <strong>実質無料（場合によってはプラス収支）で試せる</strong>ということ。
            美容費が毎月かさんでいる人ほど、節約効果が大きい仕組みです。
          </p>
        </div>
      </section>

      {/* 始め方 */}
      <section>
        <h2 className="text-xl font-black text-gray-900 mb-4 border-l-4 border-rose-400 pl-3">
          📝 始め方は3ステップ
        </h2>
        <div className="space-y-4">
          {STEPS.map((s, i) => (
            <div key={i} className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm">
              <p className="text-rose-500 font-black text-xs mb-1">{s.num}</p>
              <h3 className="text-gray-900 font-black text-sm mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* メインCTA（ヴィーナスウォーカー） */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-6 text-center">
        <span className="inline-block text-xs font-bold bg-rose-100 text-rose-600 border border-rose-200 rounded-full px-3 py-1 mb-3">
          PR・女性向け美容モニター
        </span>
        <h2 className="text-xl font-black text-gray-900 mb-3">
          まずは無料の電話セミナーから
        </h2>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          ヴィーナスウォーカーは、コスメ・エステ・脱毛の案件がそろう女性向け美容モニターサイト。
          <br />
          登録も電話セミナーも無料で、自宅にいながら始められます。
        </p>
        <a
          href="https://px.a8.net/svt/ejp?a8mat=4B7QWS+6TW1MA+58KC+5YJRM"
          rel="nofollow sponsored noopener"
          target="_blank"
          className="inline-block min-h-[44px] bg-rose-500 hover:bg-rose-400 text-white font-black px-8 py-3 rounded-xl transition-colors text-sm"
        >
          無料セミナーに申し込む →
        </a>
        <p className="text-xs text-gray-500 mt-3">※ 登録・参加無料。合わなければ案件を受けなくてもOKです</p>
      </section>

      {/* 注意点 */}
      <section>
        <h2 className="text-xl font-black text-gray-900 mb-4 border-l-4 border-rose-400 pl-3">
          ⚠️ 始める前に知っておきたい注意点
        </h2>
        <div className="space-y-3 text-sm text-gray-700 leading-[1.9]">
          <div className="bg-white border border-rose-100 rounded-xl p-4 shadow-sm">
            <strong className="text-gray-900">① 「先払い」を求める案件は避ける</strong>
            <br />
            正規のモニターは登録無料が原則。教材費・登録料などの名目で先にお金を求められたら、その案件は見送りましょう。
          </div>
          <div className="bg-white border border-rose-100 rounded-xl p-4 shadow-sm">
            <strong className="text-gray-900">② アンケートは期日までに丁寧に</strong>
            <br />
            謝礼はアンケート提出が条件です。提出漏れ・期日遅れは謝礼が支払われない原因になるので、体験したらすぐ回答する習慣を。
          </div>
          <div className="bg-white border border-rose-100 rounded-xl p-4 shadow-sm">
            <strong className="text-gray-900">③ 謝礼も「所得」になる</strong>
            <br />
            他の副業と合わせて年20万円を超えると確定申告が必要です。念のため受け取った謝礼はメモしておきましょう。
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-black text-gray-900 mb-4 border-l-4 border-rose-400 pl-3">
          よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          {FAQ.map((faq, i) => (
            <div key={i} className="bg-white border border-rose-100 rounded-xl p-4 shadow-sm">
              <p className="text-gray-900 font-bold text-sm mb-2">Q. {faq.q}</p>
              <p className="text-gray-600 text-sm leading-relaxed">A. {faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク */}
      <section className="bg-white border border-rose-100 rounded-2xl p-6 text-center shadow-sm">
        <h2 className="text-lg font-black text-gray-900 mb-2">🧴 美容の最新情報もチェック</h2>
        <p className="text-gray-600 text-sm mb-4">
          モニターで試す前に、成分・ケア方法の基礎知識をつけておくとアンケートの質も上がります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/skincare-guide"
            className="inline-block min-h-[44px] bg-rose-100 hover:bg-rose-200 text-rose-600 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            スキンケア完全ガイド →
          </Link>
          <Link
            href="/cosme-ranking"
            className="inline-block min-h-[44px] bg-rose-100 hover:bg-rose-200 text-rose-600 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            コスメランキング →
          </Link>
        </div>
      </section>

      <AffiliateSectionBeauty />
    </div>
  );
}
