import type { Metadata } from "next";
import AffiliateSectionBeauty from "@/components/AffiliateSectionBeauty";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ファンデーション選び方完全ガイド2026年版【種類・肌タイプ別おすすめ・塗り方・崩れない方法】",
  description:
    "ファンデーションの選び方を2026年版で完全解説。リキッド・パウダー・クッション・スティックの違い・肌タイプ別おすすめ・正しい塗り方・崩れない方法を詳しく解説します。",
  openGraph: {
    title: "ファンデーション選び方完全ガイド2026年版【種類・肌タイプ別・崩れない方法】",
    description: "ファンデーションの種類・肌タイプ別おすすめ・正しい塗り方・崩れない方法を完全解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ファンデーション選び方完全ガイド2026年版",
    description: "種類・肌タイプ別おすすめ・正しい塗り方・崩れない方法を完全解説。",
  },
};

interface FoundationType {
  name: string;
  icon: string;
  coverage: "薄め" | "中程度" | "しっかり";
  finish: string;
  bestFor: string;
  notFor: string;
  longevity: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const FOUNDATION_TYPES: FoundationType[] = [
  {
    name: "リキッドファンデーション",
    icon: "💧",
    coverage: "中程度",
    finish: "自然〜セミマット",
    bestFor: "普通肌・乾燥肌・混合肌。カバー力と自然な仕上がりを両立したい方。保湿成分入りも多くスキンケアしながらメイクできる。",
    notFor: "オイリー肌の方（テカリが出やすい）・素早くメイクしたい方",
    longevity: "◎（下地との組み合わせで長時間持続）",
  },
  {
    name: "パウダーファンデーション",
    icon: "✨",
    coverage: "薄め",
    finish: "マット〜ナチュラル",
    bestFor: "オイリー肌・混合肌。崩れにくくサラサラ仕上げ。素早くメイクできて塗り直しも簡単。",
    notFor: "乾燥肌（粉っぽく見えることがある）・カバー力を求める方",
    longevity: "○（皮脂吸収で崩れにくい）",
  },
  {
    name: "クッションファンデーション",
    icon: "🪞",
    coverage: "中程度",
    finish: "ツヤ・セミツヤ",
    bestFor: "普通肌・乾燥肌。ツヤ感重視の方・コンパクトで持ち運びしやすい。塗り直しが簡単。K-Beautyトレンドでツヤ肌を演出。",
    notFor: "マット仕上げが好みの方・オイリー肌（テカリが出やすい）",
    longevity: "△（リキッドよりやや崩れやすい）",
  },
  {
    name: "スティックファンデーション",
    icon: "🖊️",
    coverage: "しっかり",
    finish: "セミマット",
    bestFor: "毛穴・ニキビ跡・くすみなどコンシーラー感覚でカバーしたい方。外出先での塗り直し・部分カバーに便利。",
    notFor: "全顔への塗布に時間がかかる・肌への密着が強すぎる場合あり",
    longevity: "◎（密着感が高く崩れにくい）",
  },
  {
    name: "BBクリーム・CCクリーム",
    icon: "🌸",
    coverage: "薄め",
    finish: "ナチュラル",
    bestFor: "素肌感重視の方・メイク時間を短縮したい方。スキンケア効果と日焼け止めが一体化した多機能アイテム。",
    notFor: "しっかりカバーしたい方・フォーマルシーン",
    longevity: "△（カバー力が低い分崩れが目立ちやすい）",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "ファンデーションの種類（リキッド・パウダー・クッション）の違いを教えてください。",
    a: "ファンデーションの主な種類の違い：【リキッド】液状でカバー力と保湿力を両立。乾燥肌・普通肌に最適。仕上がり：自然〜セミマット。【パウダー】粉状でサラサラ仕上げ。オイリー肌・崩れ防止に最適。仕上がり：マット。【クッション】スポンジにリキッドを含ませたタイプ。ツヤ感重視・手軽な使い方が魅力。仕上がり：ツヤ〜セミツヤ。【スティック】固形で高カバー力。部分カバーや持ち運びに便利。自分の肌タイプと求める仕上がりに合わせて選ぶことが大切です。",
  },
  {
    q: "肌タイプ別のファンデーションの選び方を教えてください。",
    a: "肌タイプ別ファンデーションの選び方：【乾燥肌】保湿成分（ヒアルロン酸・セラミック）入りのリキッドファンデーションが最適。パウダーは乾燥を悪化させることがあるため避ける。【オイリー肌（脂性肌）】皮脂吸収成分入りのパウダーファンデーションかオイルフリーのリキッドを選ぶ。崩れ防止のセッティングパウダーを仕上げに使う。【混合肌】Tゾーンはパウダー・Uゾーンはリキッドを使い分けるか、混合肌向けリキッドを選ぶ。【敏感肌】ノンコメドジェニック・低刺激・アルコールフリーの製品を選ぶ。",
  },
  {
    q: "ファンデーションの正しい塗り方を教えてください。",
    a: "ファンデーションの正しい塗り方：①スキンケア（化粧水・乳液）後に化粧下地を塗る（毛穴・崩れ防止）②ファンデーションを少量（500円玉大）を手の甲や指に取る③顔の中心（鼻・口周り・額・顎）から外側に向かって伸ばす（外側が薄くなるため自然な仕上がりになる）④スポンジやブラシで軽くたたいて密着させる（こすらない）⑤仕上げにフェイスパウダーで固定する。最も大切なのは「下地」で、下地があるとカバー力・持続性が大幅に上がります。",
  },
  {
    q: "ファンデーションの崩れを防ぐ方法を教えてください。",
    a: "ファンデーションが崩れる主な原因と対策：①皮脂崩れ対策：化粧下地（コントロールカラー・皮脂吸収タイプ）を使う・仕上げにセッティングパウダーorスプレーを使う②乾燥崩れ対策：保湿をしっかり行ってからメイクする・乾燥肌向けのリキッドファンデーションを選ぶ③摩擦崩れ対策：こすらない・マスクをするなら摩擦防止スプレーを使う④長時間持続させる：フィキシングスプレー（化粧固定スプレー）を上から全体に一吹き・外出先ではあぶらとり紙＋パウダーで塗り直す。",
  },
  {
    q: "ファンデーションの色選びのコツを教えてください。",
    a: "ファンデーションの色選びのコツ：①手の甲より顎や首に近い部分（フェイスラインの内側）でテストする（手の甲は顔より色が違うことが多い）②自分の肌色より1〜2トーン明るい色を選ぶと白浮きしやすいため、首の色に近い色を選ぶ③室内（蛍光灯）だけでなく自然光下でも確認する（蛍光灯の光は色が変わって見えることがある）④テスター（試供品）を必ず使い、30分後の色を確認する（酸化・皮脂で色が変わることがある）⑤日本人の肌は一般的に黄みよりのトーンが多く、ピンクトーンは白浮きしやすい。",
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

const coverageColor: Record<string, string> = {
  薄め: "bg-green-500/20 text-green-300 border-green-500/30",
  中程度: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  しっかり: "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

export default function FoundationGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-full px-4 py-1 mb-4">
            💄 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            ファンデーション選び方<br />
            <span className="text-rose-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【種類・肌タイプ別おすすめ・正しい塗り方・崩れない方法】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            リキッド・パウダー・クッション・スティックの違いから<br />
            肌タイプ別選び方・崩れない塗り方まで完全解説します。
          </p>
        </div>

        {/* 種類比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-rose-500 pl-3">
            💄 ファンデーションの種類5選【肌タイプ別・仕上がり比較】
          </h2>
          <div className="space-y-4">
            {FOUNDATION_TYPES.map((type, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xl">{type.icon}</span>
                  <h3 className="text-white font-black text-sm">{type.name}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${coverageColor[type.coverage]}`}>
                    カバー：{type.coverage}
                  </span>
                  <span className="text-xs bg-pink-900/20 text-pink-300 border border-pink-700/30 px-2 py-0.5 rounded">
                    {type.finish}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
                  <div className="bg-green-900/10 border border-green-700/20 rounded px-2.5 py-1.5">
                    <span className="text-green-400 font-bold">✅ おすすめ：</span>
                    <span className="text-gray-300">{type.bestFor}</span>
                  </div>
                  <div className="bg-red-900/10 border border-red-700/20 rounded px-2.5 py-1.5">
                    <span className="text-red-400 font-bold">⚠️ 注意：</span>
                    <span className="text-gray-300">{type.notFor}</span>
                  </div>
                </div>
                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs">
                  <span className="text-gray-400">⏱️ 持続性：</span>
                  <span className="text-gray-200">{type.longevity}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-rose-900/20 to-pink-900/20 border border-rose-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            💋 メイクアップを総合的に学びたい方へ
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ファンデーションだけでなくベースメイク全体を<br />
            マスターしてワンランク上の仕上がりを目指しましょう。
          </p>
          <Link
            href="/makeup-guide"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            メイクアップ完全ガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-rose-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionBeauty />
      </div>
    </main>
  );
}
