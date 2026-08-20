"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButtons from "./ShareButtons";

type MenoType = "hot" | "mental" | "sleep" | "hidden";

type Question = {
  q: string;
  options: { label: string; scores: Partial<Record<MenoType, number>> }[];
};

const QUESTIONS: Question[] = [
  {
    q: "急に顔や上半身がカーッと熱くなったり、汗が止まらなくなることは？",
    options: [
      { label: "よくある（人前でも困ることがある）", scores: { hot: 4 } },
      { label: "たまにある", scores: { hot: 2 } },
      { label: "ほとんどない", scores: { mental: 1, sleep: 1 } },
    ],
  },
  {
    q: "理由もなくイライラしたり、急に涙が出そうになることは？",
    options: [
      { label: "よくある。自分でも制御できない", scores: { mental: 4 } },
      { label: "生理前のような波がある", scores: { mental: 2, hidden: 1 } },
      { label: "特に感じない", scores: { hot: 1, sleep: 1 } },
    ],
  },
  {
    q: "夜中に目が覚めてそのまま眠れなくなることは？",
    options: [
      { label: "ほぼ毎晩ある", scores: { sleep: 4 } },
      { label: "週に数回ある", scores: { sleep: 2 } },
      { label: "ぐっすり眠れている", scores: { hidden: 1 } },
    ],
  },
  {
    q: "肩こり・頭痛・関節の痛みなど、原因のわからない体の不調は？",
    options: [
      { label: "あちこち不調で病院にも行ったが原因不明だった", scores: { hidden: 3 } },
      { label: "たまに気になる程度", scores: { hidden: 1, mental: 1 } },
      { label: "特にない", scores: { hot: 1 } },
    ],
  },
  {
    q: "この不調を、周りの人にわかってもらえていますか？",
    options: [
      { label: "見た目は元気そうと言われ、誰にも理解されない", scores: { hidden: 3, mental: 2 } },
      { label: "家族には少し話している", scores: { mental: 1 } },
      { label: "特に困っていない", scores: { hot: 1, sleep: 1 } },
    ],
  },
  {
    q: "年齢と月経の状況は？",
    options: [
      { label: "40代後半〜50代で、月経が不規則・止まった", scores: { hot: 2, hidden: 2 } },
      { label: "40代前半で、最近月経の周期が変わってきた", scores: { hidden: 3 } },
      { label: "まだ規則的で、変化を感じない", scores: { sleep: 1, mental: 1 } },
    ],
  },
  {
    q: "今、一番つらいと感じるのは？",
    options: [
      { label: "体温調節がきかない感覚（ほてり・発汗）", scores: { hot: 4 } },
      { label: "感情のコントロールがきかないこと", scores: { mental: 4 } },
      { label: "疲れが取れず眠れないこと", scores: { sleep: 4 } },
      { label: "何がつらいのか自分でもよくわからない", scores: { hidden: 4 } },
    ],
  },
];

const RESULTS: Record<
  MenoType,
  {
    name: string;
    emoji: string;
    color: string;
    tagline: string;
    desc: string;
    care: string[];
    watch: string[];
    good: string[];
    href: string;
    hrefLabel: string;
  }
> = {
  hot: {
    name: "ホットフラッシュ・自律神経タイプ",
    emoji: "🔥",
    color: "#f97316",
    tagline: "エストロゲン低下で体温調節が乱れやすいタイプ",
    desc: "急なほてりや発汗は、女性ホルモン（エストロゲン）の急激な低下で自律神経のバランスが崩れることで起こります。恥ずかしいことでも、我慢すべきことでもありません。",
    care: [
      "重ね着でこまめに体温調整する（脱ぎ着しやすい服を選ぶ）",
      "カフェイン・アルコール・辛いものは発汗の引き金になりやすいので量を意識する",
      "大豆イソフラボン・エクオールなど、エストロゲンに似た働きの成分を食事やサプリで取り入れる",
      "深呼吸・腹式呼吸で自律神経を落ち着かせる習慣をつける",
    ],
    watch: ["発汗が1日に何度も起き日常生活に支障が出る", "動悸やめまいを伴う"],
    good: ["婦人科・更年期外来への相談", "エクオールサプリ", "漢方（加味逍遙散など）"],
    href: "/beauty-supplements",
    hrefLabel: "更年期ケアに使えるサプリ特集を見る",
  },
  mental: {
    name: "メンタル・イライラタイプ",
    emoji: "💢",
    color: "#a855f7",
    tagline: "感情の波に振り回されやすいタイプ",
    desc: "ホルモンバランスの変化は、脳内の感情をコントロールする働きにも影響します。「性格が変わった」のではなく、「今、体の中で大きな変化が起きている」だけです。自分を責めないでください。",
    care: [
      "「今日は調子が悪い日」と自分で認めて、無理な予定を詰め込みすぎない",
      "紙に今の気持ちを書き出す（ジャーナリング）だけでも気持ちが整理されやすい",
      "誰かに話したいと感じたら、家族でなくても専門の相談窓口や同じ経験をした人のコミュニティを頼ってよい",
      "軽い運動（ウォーキングなど）はホルモンの波によるイライラを和らげる効果が報告されている",
    ],
    watch: ["気分の落ち込みが2週間以上続く", "何も楽しめないと感じる状態が続く"],
    good: ["婦人科・心療内科への相談", "カウンセリング", "セントジョーンズワート等（医師に相談の上で）"],
    href: "/beauty-supplements",
    hrefLabel: "更年期ケアに使えるサプリ特集を見る",
  },
  sleep: {
    name: "不眠・疲労タイプ",
    emoji: "😪",
    color: "#3b82f6",
    tagline: "眠りが浅くなり疲れが抜けにくいタイプ",
    desc: "ホルモンバランスの変化は睡眠の質にも影響します。「歳のせい」と片付けず、眠りの質を取り戻すケアを優先することが、他の不調の軽減にもつながります。",
    care: [
      "就寝1時間前はスマホ・PCの画面を見る時間を減らす",
      "寝室の温度・湿度を整える（発汗がある場合は特に）",
      "日中に軽く体を動かし、寝つきをよくする",
      "睡眠を助けるとされるグリシン・GABA等のサプリを試してみる",
    ],
    watch: ["日中も強い眠気・倦怠感が続き生活に支障が出る", "いびきや無呼吸を指摘されたことがある"],
    good: ["婦人科・更年期外来への相談", "睡眠外来", "漢方（酸棗仁湯など）"],
    href: "/beauty-supplements",
    hrefLabel: "更年期ケアに使えるサプリ特集を見る",
  },
  hidden: {
    name: "隠れ更年期タイプ",
    emoji: "🌫️",
    color: "#14b8a6",
    tagline: "不調がバラバラで自分でも気づきにくいタイプ",
    desc: "肩こり・頭痛・倦怠感など、一見バラバラに見える不調が実は更年期によるものというケースは少なくありません。「病院に行っても異常なし」と言われて、余計につらくなっていませんか？それでも、あなたの不調は本物です。",
    care: [
      "気になる症状を日付とセットでメモしておく（受診時に伝えやすくなる）",
      "婦人科・更年期外来では血液検査でホルモン量を調べてもらえる",
      "「なんとなく不調」を軽視せず、まず一度専門家に相談してみる",
      "同じ経験をしている人のSNSコミュニティを覗いてみると、安心できることがある",
    ],
    watch: ["不調が3ヶ月以上続いている", "日常生活・仕事に支障が出ている"],
    good: ["婦人科・更年期外来への相談", "基礎的な血液検査", "エクオールサプリ"],
    href: "/beauty-supplements",
    hrefLabel: "更年期ケアに使えるサプリ特集を見る",
  },
};

const PRIORITY: MenoType[] = ["hot", "mental", "sleep", "hidden"];

function computeResult(scores: Record<MenoType, number>): MenoType {
  let best: MenoType = "hidden";
  let bestScore = -1;
  for (const type of PRIORITY) {
    if (scores[type] > bestScore) {
      bestScore = scores[type];
      best = type;
    }
  }
  return best;
}

const SHARE_URL = "https://beauty-tech-japan.vercel.app/menopause-check";

export default function MenopauseCheckQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<MenoType, number>>[]>([]);

  const total = QUESTIONS.length;
  const isResult = step >= total;

  function handleAnswer(scores: Partial<Record<MenoType, number>>) {
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

  const totals: Record<MenoType, number> = { hot: 0, mental: 0, sleep: 0, hidden: 0 };
  for (const a of answers) {
    for (const key of Object.keys(a) as MenoType[]) {
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
          <p className="font-black text-gray-900 dark:text-white text-sm mb-3">🌿 今日からできるセルフケア</p>
          <ol className="space-y-2">
            {r.care.map((step, i) => (
              <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                <span className="font-bold" style={{ color: r.color }}>{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <p className="font-black text-gray-900 dark:text-white text-sm mb-3">🏥 病院に相談した方がよいサイン</p>
          <ol className="space-y-2">
            {r.watch.map((step, i) => (
              <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                <span className="font-bold" style={{ color: r.color }}>{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-5">
        <p className="font-black text-emerald-700 dark:text-emerald-400 text-sm mb-2">✅ 頼ってよい選択肢</p>
        <div className="flex flex-wrap gap-1.5">
          {r.good.map((g) => (
            <span key={g} className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-semibold">
              {g}
            </span>
          ))}
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

      <ShareButtons title={`私の更年期タイプは「${r.name}」でした🌿 #BeautyTechJapan 更年期セルフチェック`} url={SHARE_URL} />

      <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">
        ※この診断は一般的な傾向をもとにしたセルフチェックであり、医学的な診断ではありません。症状が続く場合や不安がある場合は、婦人科・更年期外来などの医療機関にご相談ください。
      </p>
    </div>
  );
}
