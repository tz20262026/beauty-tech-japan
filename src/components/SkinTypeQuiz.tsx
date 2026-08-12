"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButtons from "./ShareButtons";

type SkinType = "dry" | "oily" | "combination" | "sensitive" | "normal";

type Question = {
  q: string;
  options: { label: string; scores: Partial<Record<SkinType, number>> }[];
};

const QUESTIONS: Question[] = [
  {
    q: "洗顔後、何もつけずに30分放置すると肌は？",
    options: [
      { label: "つっぱって粉をふくことがある", scores: { dry: 3, sensitive: 1 } },
      { label: "特に変化なし、ちょうどいい状態", scores: { normal: 3 } },
      { label: "Tゾーン（額・鼻）だけテカる", scores: { combination: 3 } },
      { label: "顔全体がすぐにテカってくる", scores: { oily: 3 } },
    ],
  },
  {
    q: "毛穴の目立ち方は？",
    options: [
      { label: "ほとんど目立たない", scores: { dry: 2, normal: 2 } },
      { label: "頬は目立たないがTゾーンは目立つ", scores: { combination: 3 } },
      { label: "顔全体で毛穴・黒ずみが気になる", scores: { oily: 3 } },
      { label: "赤みと一緒に目立つことがある", scores: { sensitive: 2 } },
    ],
  },
  {
    q: "新しい化粧品を使うと肌がヒリヒリ・赤くなることは？",
    options: [
      { label: "よくある", scores: { sensitive: 4 } },
      { label: "たまにある", scores: { sensitive: 2, dry: 1 } },
      { label: "ほとんどない", scores: { oily: 1, normal: 2, combination: 1 } },
    ],
  },
  {
    q: "季節による肌の変化は？",
    options: [
      { label: "冬は特に乾燥がひどくなる", scores: { dry: 3 } },
      { label: "夏はベタつき、冬は乾燥する", scores: { combination: 3 } },
      { label: "一年中あまり変わらずベタつく", scores: { oily: 3 } },
      { label: "季節を問わず安定している", scores: { normal: 3 } },
    ],
  },
  {
    q: "メイクが崩れるときの特徴は？",
    options: [
      { label: "皮脂でテカってヨレる", scores: { oily: 3 } },
      { label: "乾燥して粉をふきヨレる", scores: { dry: 3 } },
      { label: "Tゾーンは崩れ、頬は乾燥する", scores: { combination: 3 } },
      { label: "崩れにくいが、肌荒れしやすい", scores: { sensitive: 2 } },
    ],
  },
  {
    q: "ニキビ・吹き出物の頻度は？",
    options: [
      { label: "よくできる（特に顎・Tゾーン）", scores: { oily: 3 } },
      { label: "生理前など特定のタイミングだけ", scores: { combination: 2 } },
      { label: "ほとんどできない", scores: { dry: 1, normal: 2 } },
      { label: "できると同時に赤み・かゆみも出る", scores: { sensitive: 2 } },
    ],
  },
  {
    q: "紫外線やエアコンなど気温差への反応は？",
    options: [
      { label: "すぐ赤くなる・ヒリつく", scores: { sensitive: 4 } },
      { label: "とにかく乾燥がひどくなる", scores: { dry: 2 } },
      { label: "特に問題を感じない", scores: { normal: 2, oily: 1 } },
    ],
  },
];

const RESULTS: Record<
  SkinType,
  {
    name: string;
    emoji: string;
    color: string;
    tagline: string;
    desc: string;
    am: string[];
    pm: string[];
    good: string[];
    avoid: string[];
    href: string;
    hrefLabel: string;
  }
> = {
  dry: {
    name: "乾燥肌",
    emoji: "🌵",
    color: "#3b82f6",
    tagline: "水分・油分ともに不足しがちな渇きタイプ",
    desc: "皮脂の分泌が少なく、つっぱり感や小じわが出やすいタイプ。保湿を「重ねる」ことが最優先です。",
    am: [
      "低刺激の洗顔料でやさしく洗う（ゴシゴシこすらない）",
      "保湿化粧水をハンドプレスで2〜3回重ね付け",
      "セラミド配合の美容液で水分を閉じ込める",
      "乳液・クリームでしっかりフタをする",
      "保湿タイプの日焼け止みを塗る",
    ],
    pm: [
      "オイルかバームのクレンジングで摩擦レスにオフ",
      "高保湿タイプの化粧水をたっぷり",
      "慣れてきたらレチノールやペプチド美容液を追加",
      "夜用クリームでとにかく保湿を厚めに",
    ],
    good: ["セラミド", "ヒアルロン酸", "スクワラン", "グリセリン"],
    avoid: ["高濃度アルコールの収れん化粧水", "強い洗浄力のスクラブ洗顔"],
    href: "/skincare-guide",
    hrefLabel: "スキンケア完全ガイドを読む",
  },
  oily: {
    name: "脂性肌",
    emoji: "✨",
    color: "#f59e0b",
    tagline: "皮脂分泌が活発なテカリ・毛穴タイプ",
    desc: "テカリ・毛穴・ニキビが出やすい一方、乾燥による小じわができにくい肌質でもあります。皮脂を「落としすぎない」バランスが鍵。",
    am: [
      "皮脂を落としすぎないマイルドな洗顔料を使う",
      "さっぱり系の化粧水でひたひたに保湿",
      "ノンコメドジェニック表示の軽い乳液",
      "崩れにくいタイプの日焼け止め",
    ],
    pm: [
      "ダブル洗顔でメイク・皮脂をしっかりオフ",
      "収れん化粧水でキメを整える",
      "ナイアシンアミド美容液で皮脂・毛穴ケア",
      "軽めのジェルやローションで保湿を仕上げる",
    ],
    good: ["ナイアシンアミド", "サリチル酸（BHA）", "緑茶エキス"],
    avoid: ["重いオイル・バターを含む濃厚すぎるクリーム"],
    href: "/pore-care-guide",
    hrefLabel: "毛穴ケア完全ガイドを読む",
  },
  combination: {
    name: "混合肌",
    emoji: "🌗",
    color: "#8b5cf6",
    tagline: "Tゾーンは脂性・頬は乾燥のパーツ違いタイプ",
    desc: "日本人に最も多いといわれるタイプ。顔全体を同じケアで済ませず、パーツごとに使い分けるのが上達のコツです。",
    am: [
      "マイルドな洗顔料で顔全体を洗う",
      "保湿化粧水はTゾーン薄め・頬は重ねづけ",
      "部分使いできる軽めの乳液",
      "日焼け止めは顔全体に均一に",
    ],
    pm: [
      "しっかりクレンジングでメイクをオフ",
      "保湿ケアをベースに、Tゾーンだけ皮脂対策美容液をプラス",
      "頬は乾燥しやすいので重ね保湿を忘れずに",
    ],
    good: ["ナイアシンアミド（Tゾーン）", "セラミド（頬）", "軽めのジェルクリーム"],
    avoid: ["顔全体に均一に重いクリームを塗ること"],
    href: "/skincare-guide",
    hrefLabel: "肌質別ケアガイドを読む",
  },
  sensitive: {
    name: "敏感肌",
    emoji: "🩹",
    color: "#ec4899",
    tagline: "バリア機能が揺らぎやすい反応タイプ",
    desc: "外的刺激やちょっとした変化に反応しやすいタイプ。新しい成分は少しずつ試し、バリア機能を守るケアを最優先しましょう。",
    am: [
      "低刺激・無香料の洗顔料でやさしく洗う",
      "アルコールフリーの化粧水",
      "セラミド・パンテノール配合の美容液",
      "紫外線吸収剤フリーの敏感肌用日焼け止め",
    ],
    pm: [
      "摩擦を避けたクレンジング（ゴシゴシ厳禁）",
      "パッチテスト済みの化粧水を選ぶ",
      "バリア機能サポート成分の乳液で仕上げる",
    ],
    good: ["セラミド", "パンテノール", "アラントイン", "ヒト型セラミド"],
    avoid: ["香料・エタノール配合品", "スクラブ", "美白・ピーリング成分の急な導入"],
    href: "/sensitive-skin-guide",
    hrefLabel: "敏感肌スキンケア完全ガイドを読む",
  },
  normal: {
    name: "普通肌",
    emoji: "🌿",
    color: "#10b981",
    tagline: "水分と油分のバランスが取れた理想タイプ",
    desc: "皮脂と水分のバランスが取れた肌質です。今の状態を「キープ」しつつ、年齢に応じて先取りケアを取り入れるのがおすすめ。",
    am: [
      "標準的な洗顔料で洗う",
      "化粧水でしっかり保湿",
      "乳液で水分を守る",
      "日焼け止めを毎日欠かさない",
    ],
    pm: [
      "クレンジングでメイクをオフ",
      "化粧水のあと、エイジングケア美容液を先取り",
      "乳液で仕上げる",
    ],
    good: ["季節や年齢に応じて成分を変えていくのがおすすめ"],
    avoid: ["過剰なケア（オーバーケアでバランスを崩すことも）"],
    href: "/anti-aging-guide",
    hrefLabel: "エイジングケアガイドを読む",
  },
};

const PRIORITY: SkinType[] = ["sensitive", "dry", "oily", "combination", "normal"];

function computeResult(scores: Record<SkinType, number>): SkinType {
  let best: SkinType = "normal";
  let bestScore = -1;
  for (const type of PRIORITY) {
    if (scores[type] > bestScore) {
      bestScore = scores[type];
      best = type;
    }
  }
  return best;
}

const SHARE_URL = "https://beauty-tech-japan.vercel.app/skin-type-diagnosis";

export default function SkinTypeQuiz() {
  const [step, setStep] = useState(0); // -1: 未開始扱いはしない。0〜length-1: 質問中。length: 結果
  const [answers, setAnswers] = useState<Partial<Record<SkinType, number>>[]>([]);

  const total = QUESTIONS.length;
  const isResult = step >= total;

  function handleAnswer(scores: Partial<Record<SkinType, number>>) {
    const next = [...answers, scores];
    setAnswers(next);
    setStep(step + 1);
  }

  function handleBack() {
    if (step === 0) return;
    setAnswers(answers.slice(0, -1));
    setStep(step - 1);
  }

  function handleRestart() {
    setAnswers([]);
    setStep(0);
  }

  if (!isResult) {
    const question = QUESTIONS[step];
    const progress = Math.round((step / total) * 100);
    return (
      <div className="rounded-2xl border border-pink-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 sm:p-8 shadow-sm">
        {/* 進捗バー */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-pink-600 dark:text-pink-400">
            質問 {step + 1} / {total}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{progress}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 mb-6 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-5 leading-relaxed">
          {question.q}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleAnswer(opt.scores)}
              className="text-left min-h-[44px] px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              {opt.label}
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={handleBack}
            className="mt-6 text-xs font-semibold text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            ← 前の質問に戻る
          </button>
        )}
      </div>
    );
  }

  // 結果集計
  const totals: Record<SkinType, number> = { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 0 };
  for (const a of answers) {
    for (const key of Object.keys(a) as SkinType[]) {
      totals[key] += a[key] ?? 0;
    }
  }
  const resultType = computeResult(totals);
  const r = RESULTS[resultType];

  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl p-6 sm:p-8 text-white shadow-lg"
        style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}cc)` }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">診断結果</p>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-5xl">{r.emoji}</span>
          <h2 className="text-2xl sm:text-3xl font-black">{r.name}</h2>
        </div>
        <p className="text-white/90 text-sm font-semibold mb-3">{r.tagline}</p>
        <p className="text-white/90 text-sm leading-relaxed">{r.desc}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <p className="font-black text-gray-900 dark:text-white text-sm mb-3">☀️ 朝のルーティン</p>
          <ol className="space-y-2">
            {r.am.map((step, i) => (
              <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                <span className="font-bold" style={{ color: r.color }}>{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <p className="font-black text-gray-900 dark:text-white text-sm mb-3">🌙 夜のルーティン</p>
          <ol className="space-y-2">
            {r.pm.map((step, i) => (
              <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                <span className="font-bold" style={{ color: r.color }}>{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-5">
          <p className="font-black text-emerald-700 dark:text-emerald-400 text-sm mb-2">✅ おすすめ成分</p>
          <div className="flex flex-wrap gap-1.5">
            {r.good.map((g) => (
              <span key={g} className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-semibold">
                {g}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900 p-5">
          <p className="font-black text-rose-700 dark:text-rose-400 text-sm mb-2">⚠️ 注意した方がよいもの</p>
          <div className="flex flex-wrap gap-1.5">
            {r.avoid.map((g) => (
              <span key={g} className="text-xs px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 font-semibold">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={r.href}
        className="flex items-center justify-center min-h-[44px] w-full rounded-xl font-black text-sm text-white py-3 transition-opacity hover:opacity-90"
        style={{ background: r.color }}
      >
        {r.hrefLabel} →
      </Link>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleRestart}
          className="flex-1 min-h-[44px] rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          🔄 もう一度診断する
        </button>
      </div>

      <ShareButtons title={`私の肌タイプは「${r.name}」でした🌸 #BeautyTechJapan 肌タイプ診断`} url={SHARE_URL} />
    </div>
  );
}
