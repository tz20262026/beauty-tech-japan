import extraArticlesData from "@/data/extra_articles.json";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop";

const CATEGORY_IMAGES: Record<string, string> = {
  // 企業・ブランド
  OpenAI:       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
  Anthropic:    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
  Google:       "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80&fit=crop",
  Meta:         "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop",
  Microsoft:    "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&q=80&fit=crop",
  Apple:        "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80&fit=crop",
  Samsung:      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
  Tesla:        "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80&fit=crop",
  Adobe:        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
  // コンテンツ種別
  画像生成:     "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80&fit=crop",
  動画生成:     "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
  動画編集:     "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
  音声AI:       "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80&fit=crop",
  LLM:          "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
  生産性:       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
  オープンソース: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  開発ツール:   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  コーディング: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  クリエイティブ: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
  デザイン:     "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
  ロボット:     "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&fit=crop",
  自動運転:     "https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=800&q=80&fit=crop",
  会議AI:       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop",
  マーケティング: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
  語学学習:     "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
  メンタルヘルス: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&fit=crop",
  SNS:          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80&fit=crop",
  プレゼン:     "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80&fit=crop",
  エンタープライズ: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
  翻訳:         "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
  多言語:       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
  ビジネス:     "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
  文章AI:       "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80&fit=crop",
  AI:           "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
};

export function getArticleImageUrl(article: { imageUrl?: string; tags: string[] }): string {
  if (article.imageUrl) return article.imageUrl;
  for (const tag of article.tags) {
    if (CATEGORY_IMAGES[tag]) return CATEGORY_IMAGES[tag];
  }
  return DEFAULT_IMAGE;
}

/** 記事の本文から「何分で読めるか」を計算する（日本語500文字/分） */
export function getReadTime(body: string): number {
  const chars = body.replace(/\s/g, "").length;
  return Math.max(1, Math.round(chars / 500));
}

/** 日付を「3日前」「今日」などの表現に変換する */
export function getRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "今日";
  if (diffDays === 1) return "昨日";
  if (diffDays < 7) return `${diffDays}日前`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}週間前`;
  return dateStr;
}

/** 3日以内の記事かどうか判定する */
export function isNew(dateStr: string): boolean {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  return diffMs < 1000 * 60 * 60 * 24 * 3;
}

/** タグが一致する関連記事を最大3件返す */
export function getRelatedArticles(article: Article, all: Article[]): Article[] {
  return all
    .filter((a) => a.id !== article.id && a.tags.some((t) => article.tags.includes(t)))
    .slice(0, 3);
}

export type Article = {
  id: string;
  title: string;
  summary: string;
  body: string;
  source: string;
  sourceUrl: string;
  tags: string[];
  publishedAt: string;
  imageUrl?: string;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "Rebel Audio — 初心者向けAIポッドキャストツールが登場",
    summary: "録音・編集・配信をまとめて行えるオールインワンのAIポッドキャストツール。音声品質をAIが自動改善し、専門知識不要でプロ品質の音声制作が可能に。",
    body: `Rebel Audio は、初めてポッドキャストを作る人に向けた新しいAIツールです。

録音から編集、配信までをひとつのツールでカバーします。AIが音声ノイズを除去し、音量を自動で調整してくれるため、専門知識がなくてもプロ品質の音声が作れます。

**主な機能**
- ノイズキャンセリング（AI自動処理）
- 文字起こし＆テキスト編集
- Spotify / Apple Podcasts への直接配信

現在はベータ版で、無料プランあり。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["AI", "ポッドキャスト", "音声"],
    publishedAt: "2026-03-19",
  },
  {
    id: "2",
    title: "Google Workspace の Gemini 機能 — 本当に使える機能はどれ？",
    summary: "メール要約・文書作成・会議記録など、Gemini搭載のWorkspace機能を実際に業務で試したレビュー。本当に役立つ機能を厳選して紹介。",
    body: `Google Workspace に搭載された Gemini の機能は多岐にわたりますが、実際に業務で役立つものを紹介します。

**使える機能ベスト3**
1. Gmail の要約 — 長いスレッドをワンクリックで要約。返信案も自動生成。
2. Docs の文章生成 — プロンプトを入力するだけでドラフト作成。
3. Meet の議事録 — 会議後に自動で要点をまとめてくれる。

ビジネスプラン（月額$12〜）から利用可能です。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["Google", "Gemini", "生産性"],
    publishedAt: "2026-03-19",
  },
  {
    id: "3",
    title: "Unsloth Studio — ブラウザでAIモデルを動かせるオープンソースUI",
    summary: "ローカルでAIモデルを実行・ファインチューニングできるウェブUIが登場。コマンドライン不要でGUIからLLaMA・Mistralなどの人気モデルを操作できる。",
    body: `Unsloth Studio は、ブラウザ上でAIモデルを動かせるオープンソースのWebアプリです。

これまでAIモデルのローカル実行には専門的なコマンドライン操作が必要でしたが、Unsloth Studio はGUIで操作できます。

**特徴**
- LLaMA・Mistral などの人気モデルに対応
- ファインチューニング（追加学習）もGUIで実行可能
- 完全無料・オープンソース`,
    source: "Product Hunt",
    sourceUrl: "https://www.producthunt.com",
    tags: ["オープンソース", "LLM", "ローカルAI"],
    publishedAt: "2026-03-19",
  },
  {
    id: "4",
    title: "OpenAI、GPT-5の一般公開を発表 — 推論能力が大幅向上",
    summary: "OpenAIが次世代モデルGPT-5を発表。数学・コーディング・科学分野での推論精度が前モデル比で40%以上向上したと報告されている。",
    body: `OpenAIは本日、GPT-5の一般公開を発表しました。

新モデルは特に複雑な推論タスクで大幅な改善が見られます。ベンチマークテストでは数学オリンピック問題の正答率が従来比で40%向上しています。

**主な改善点**
- 長文脈（128Kトークン）の理解精度向上
- コード生成の精度・速度が改善
- 画像・音声のマルチモーダル処理強化

APIは即日利用可能で、ChatGPT Plusユーザーも優先的にアクセスできます。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["OpenAI", "GPT-5", "LLM"],
    publishedAt: "2026-03-18",
  },
  {
    id: "5",
    title: "Anthropic、Claude 4.5を企業向けに提供開始 — 安全性とコーディング能力を両立",
    summary: "AnthropicがClaude 4.5を発表。エンタープライズ向けに最適化され、セキュリティ基準を維持しながらコーディング支援の精度が大幅に向上している。",
    body: `Anthropicは最新モデル Claude 4.5 を企業向けに提供開始しました。

同社が重視する「Constitutional AI」の安全設計を維持しつつ、コーディング補完・レビュー機能が強化されています。

**エンタープライズ向け強化点**
- SOC 2 Type II 準拠のデータ処理
- カスタムシステムプロンプトの高度な制御
- 最大200Kトークンのコンテキストウィンドウ

月額$25のProプランから利用可能。`,
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com",
    tags: ["Anthropic", "Claude", "エンタープライズ"],
    publishedAt: "2026-03-18",
  },
  {
    id: "6",
    title: "Midjourney V7 リリース — リアリズムとスタイル制御が進化",
    summary: "画像生成AIのMidjourneyが最新バージョンV7を公開。人物の手や顔の描画精度が大幅に改善され、スタイル参照機能も強化された。",
    body: `Midjourney V7 が正式リリースされました。

従来バージョンで課題だった人物の手や指の描画が劇的に改善。また、参照画像のスタイルを保持しながら新しい画像を生成する「Style Reference」機能が強化されました。

**V7の主な改善**
- 人物の手・指の精度向上
- より高解像度なデフォルト出力（2048×2048）
- プロンプトの日本語対応が改善

Discordサーバーから即時利用可能。`,
    source: "The Decoder",
    sourceUrl: "https://the-decoder.com",
    tags: ["画像生成", "Midjourney", "クリエイティブ"],
    publishedAt: "2026-03-18",
  },
  {
    id: "7",
    title: "Microsoft Copilot、Word・Excel・PowerPointに深く統合 — 実務レポート",
    summary: "Microsoft 365のCopilot機能が大幅アップデート。ExcelでのAIデータ分析、Wordでの長文要約、PowerPointの自動スライド生成が実用レベルに達した。",
    body: `Microsoft Copilot の最新アップデートにより、Office製品との連携が一段と深まりました。

実際に使ってみると、Excelのデータ分析機能が特に強力です。自然言語で「売上の前年比を出して」と入力するだけでグラフと分析コメントが自動生成されます。

**注目機能**
- Excel: 自然言語でのデータ集計・グラフ作成
- Word: 長文ドキュメントの要約と構成提案
- PowerPoint: 箇条書きからスライド自動生成

Microsoft 365 Business以上のプランで利用可能。`,
    source: "ZDNet",
    sourceUrl: "https://www.zdnet.com",
    tags: ["Microsoft", "Copilot", "生産性"],
    publishedAt: "2026-03-17",
  },
  {
    id: "8",
    title: "Meta、LLaMA 4をオープンソースで公開 — 商用利用も無料",
    summary: "MetaがLLaMA 4を公開。前モデル比で推論速度2倍・精度向上を達成し、商用利用も引き続き無料。中小企業のAI活用を大きく後押しする。",
    body: `MetaはLLaMA 4をHugging Faceで公開しました。

**LLaMA 4の特徴**
- パラメータ数: 8B / 70B / 405Bの3サイズ
- 推論速度が前バージョン比2倍
- 日本語を含む多言語性能が向上
- 商用利用無料（条件あり）

特に70Bモデルは、GPT-4oに匹敵するベンチマーク結果を示しており、コスト削減を目指す企業にとって大きな選択肢となります。`,
    source: "Hacker News",
    sourceUrl: "https://news.ycombinator.com",
    tags: ["Meta", "LLaMA", "オープンソース"],
    publishedAt: "2026-03-17",
  },
  {
    id: "9",
    title: "Perplexity AI、企業向けプランを強化 — 社内データとの連携機能追加",
    summary: "AI検索エンジンのPerplexityが企業向け機能を拡充。社内ドキュメントやSlack・Notionと連携し、社内情報を横断検索できる「Enterprise Pro」を発表。",
    body: `Perplexity AIが企業向け「Enterprise Pro」プランを発表しました。

社内のSlack・Notion・Google Driveなどのデータソースと連携し、自然言語で社内情報を横断検索できます。

**Enterprise Proの機能**
- 社内データとの接続（Slack, Notion, Drive対応）
- 回答に引用元の社内ドキュメントを明示
- SSO・ユーザー管理機能
- 月額$40/ユーザー〜

情報セキュリティポリシーに準拠したオンプレミス展開も選択可能。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["Perplexity", "AI検索", "エンタープライズ"],
    publishedAt: "2026-03-17",
  },
  {
    id: "10",
    title: "ElevenLabs、リアルタイム音声翻訳APIを公開 — 話者の声質を保持",
    summary: "音声AI企業ElevenLabsが、話者の声のトーンや感情を保ちながらリアルタイムで別言語に翻訳するAPIを公開。動画コンテンツのローカライズが大幅に効率化。",
    body: `ElevenLabsが新しいリアルタイム音声翻訳APIを公開しました。

従来の翻訳は話者の声質が失われる問題がありましたが、新APIはVoice Cloningと翻訳を組み合わせ、元の声のトーンを維持したまま別言語に変換します。

**対応言語**
- 日本語・英語・中国語・スペイン語など29言語
- 感情表現（怒り・喜び・悲しみ）の保持率が向上

**主なユースケース**
- YouTubeコンテンツの多言語展開
- ポッドキャストの国際化
- オンライン教育コンテンツ

APIプランは月$22から。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["ElevenLabs", "音声AI", "翻訳"],
    publishedAt: "2026-03-16",
  },
  {
    id: "11",
    title: "Runway Gen-4、映像生成AIが映画品質に迫る — プロの現場で導入開始",
    summary: "RunwayのGen-4が公開。一貫したキャラクター表現とカメラワーク制御が可能になり、ハリウッドの制作会社での実導入事例も報告されている。",
    body: `RunwayのGen-4がリリースされ、映像生成AIが新たなステージに入りました。

**Gen-4の革新的な機能**
- キャラクターコンシステンシー: 同一人物をシーン間で一貫して描画
- カメラコントロール: ドリー・パン・ズームなどの動きを指定可能
- 最長60秒の高品質映像生成

ハリウッドの中規模制作会社が既にVFXワークフローに組み込んでいると報告されており、プロの現場での実用化が始まっています。

月額$35のStandardプランから利用可能。`,
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com",
    tags: ["Runway", "映像生成", "クリエイティブ"],
    publishedAt: "2026-03-16",
  },
  {
    id: "12",
    title: "Cursor、AIコードエディタのシェアがVS Codeを猛追 — 開発者調査",
    summary: "AIネイティブなコードエディタCursorの利用者数が急増。最新調査では開発者の28%が主要エディタとして使用しており、VS Codeのシェアに迫りつつある。",
    body: `Stack Overflowの最新調査によると、AIコードエディタ「Cursor」の利用率が急伸しています。

2024年には5%未満だった利用率が、2026年には28%に達しています。

**Cursorが支持される理由**
- コードベース全体を理解した上での補完・リファクタ提案
- チャット形式でのバグ修正・機能追加
- GitHub Copilotより高い補完精度（開発者評価）

月額$20のProプランで、Claude 3.5 SonnetやGPT-4oを切り替えて利用可能。`,
    source: "The Register",
    sourceUrl: "https://www.theregister.com",
    tags: ["Cursor", "開発ツール", "コーディング"],
    publishedAt: "2026-03-15",
  },
  {
    id: "13",
    title: "Suno AI V4、プロンプトから3分の楽曲を生成 — 音楽業界に波紋",
    summary: "音楽生成AIのSunoがV4をリリース。歌詞・ジャンル・楽器編成を細かく指定でき、商用利用可能な楽曲を数秒で生成。著作権問題も議論を呼んでいる。",
    body: `Suno AIのV4がリリースされ、AI音楽生成が新たなレベルに到達しました。

**V4の新機能**
- 最大3分の楽曲生成（従来は90秒）
- インストゥルメント指定（ギター・ピアノ・シンセなど）
- ボーカルスタイルの細かい制御
- 商用ライセンスプランあり（月$96〜）

一方、大手レコード会社はSunoに対して著作権侵害訴訟を提起しており、業界内での議論が続いています。`,
    source: "Ars Technica",
    sourceUrl: "https://arstechnica.com",
    tags: ["音楽生成", "Suno", "クリエイティブ"],
    publishedAt: "2026-03-15",
  },
  {
    id: "14",
    title: "Hugging Face、ローカルで動くAIアシスタントアプリを無料公開",
    summary: "AIコミュニティのHugging FaceがPC上でオフライン動作するAIアシスタントアプリを公開。インターネット不要でプライバシーを守りながらLLMを利用できる。",
    body: `Hugging Faceが「HF Assistant」を無料公開しました。

完全オフラインで動作するため、機密データをクラウドに送信せずにAIを活用できます。

**HF Assistantの特徴**
- インターネット接続不要
- Llama・Mistral・Gemmaなど主要モデルに対応
- Windows・Mac・Linux対応
- 完全無料・オープンソース

**推奨スペック**
- RAM: 16GB以上
- GPU: NVIDIA RTX 3060以上（なくても動作可）

プライバシーを重視する医療・法律・金融分野での活用が期待されています。`,
    source: "Hacker News",
    sourceUrl: "https://news.ycombinator.com",
    tags: ["Hugging Face", "ローカルAI", "プライバシー"],
    publishedAt: "2026-03-15",
  },
  {
    id: "15",
    title: "Notion AI、プロジェクト管理機能と深く統合 — タスク自動生成が便利",
    summary: "NotionのAI機能がアップデート。会議メモからタスクを自動抽出してデータベースに追加したり、プロジェクトの進捗をAIが要約するなど実務直結の機能が充実。",
    body: `Notion AIの最新アップデートで、プロジェクト管理との統合が大幅に強化されました。

**新機能ハイライト**
- 会議メモからタスク・担当者・期日を自動抽出
- プロジェクト全体の進捗をAIが週次でサマリー
- ドキュメント横断の情報検索（Q&A形式）

**実際の使用例**
会議録を貼り付けると「田中さん担当・3/25期日・API設計書作成」のようなタスクが自動でデータベースに追加されます。

Notion Plusプラン（月$10）以上で利用可能。`,
    source: "The Next Web",
    sourceUrl: "https://thenextweb.com",
    tags: ["Notion", "プロジェクト管理", "生産性"],
    publishedAt: "2026-03-14",
  },
  {
    id: "16",
    title: "DeepSeek R3、中国発の推論特化モデルが欧米で話題に",
    summary: "中国のAIスタートアップDeepSeekが推論特化型モデルR3を公開。GPT-4oに匹敵する数学・コーディング性能をはるかに低コストで実現し、AI業界に衝撃を与えた。",
    body: `DeepSeekが公開した推論特化モデルR3が、欧米のAI業界で大きな話題を呼んでいます。

**R3が注目される理由**
- GPT-4o同等の数学・コーディングベンチマーク結果
- トレーニングコストがOpenAIモデルの約10分の1
- オープンソースで公開（商用利用は条件あり）

米国のAI研究者の多くがR3の性能に驚いており、「AIの民主化が加速している」との見方が広がっています。

一方、データの安全性やトレーニングデータの透明性を懸念する声もあります。`,
    source: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com",
    tags: ["DeepSeek", "LLM", "中国AI"],
    publishedAt: "2026-03-14",
  },
  {
    id: "17",
    title: "Adobe Firefly、PhotoshopとIllustratorに完全統合 — プロデザイナーの声",
    summary: "AdobeのAI画像生成エンジンFireflyがPhotoshop・Illustratorに完全統合。生成塗りつぶし・背景拡張・ベクター変換がシームレスに使えるようになった現場レポート。",
    body: `Adobe FireflyがPhotoshop・Illustratorに完全統合され、プロデザイナーの仕事を大きく変えています。

**実務で使える機能**
- 生成塗りつぶし: 選択範囲をAIで自然に補完・置換
- 背景拡張（Generative Expand）: 画像の外側を自動生成
- テキストエフェクト: 文字にテクスチャや素材感を適用
- ベクター生成: ラスター画像からIllustrator用ベクターを自動生成

**デザイナーの評価**
「背景拡張は特に実用的。バナー制作の時間が30%削減できた」（フリーランスデザイナー・Aさん）

Creative Cloudプランに含まれており、追加料金不要。`,
    source: "Wired",
    sourceUrl: "https://www.wired.com",
    tags: ["Adobe", "Firefly", "デザイン"],
    publishedAt: "2026-03-13",
  },
  {
    id: "18",
    title: "AI採用ツール市場が急拡大 — 履歴書選考から面接評価まで自動化の波",
    summary: "HR tech分野でAI採用支援ツールの市場が急成長。履歴書のスクリーニングから動画面接の感情分析まで自動化が進む一方、バイアス問題への懸念も高まっている。",
    body: `AI採用ツールの市場規模が2026年に前年比45%増で成長しており、大手企業を中心に導入が加速しています。

**主なAI採用ツール**
- HireVue: 動画面接の表情・声調・言語を分析
- Workday AI: 職務経歴書の自動スクリーニング
- SeekOut: LinkedInデータを活用した候補者発掘

**懸念点**
AIによる採用判断にはバイアスが入り込むリスクがあります。特定の大学出身者や性別が不当に有利・不利になるケースが報告されており、EUでは規制強化の議論が進んでいます。`,
    source: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com",
    tags: ["HR Tech", "採用AI", "ビジネス"],
    publishedAt: "2026-03-13",
  },
  {
    id: "19",
    title: "Scale AI、合成データ生成プラットフォームを拡張 — AIトレーニングを加速",
    summary: "データラベリング大手Scale AIが合成データ生成サービスを強化。実データ不足の問題をAI生成データで補い、モデルトレーニングのコストと時間を大幅削減できる。",
    body: `Scale AIが合成データ生成プラットフォーム「Synthesis」を大幅アップデートしました。

**Synthesisの活用例**
- 自動運転: 稀なシナリオ（悪天候・夜間・事故）の大量生成
- 医療AI: 患者データのプライバシーを守った学習用データ生成
- 音声認識: 方言・訛り・環境ノイズのバリエーション生成

**コスト効果**
実データの収集・ラベリングと比較して、合成データは平均70%のコスト削減が報告されています。

エンタープライズ向けのカスタムプランで提供。`,
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com",
    tags: ["Scale AI", "合成データ", "MLOps"],
    publishedAt: "2026-03-12",
  },
  {
    id: "20",
    title: "Figma AI、デザインからReactコードを直接生成 — フロントエンド開発が変わる",
    summary: "FigmaのAI機能がデザインファイルからReact・Tailwind CSSのコードを直接生成できるようになった。デザイナーとエンジニアの連携コストを大幅に削減する可能性がある。",
    body: `FigmaのAI機能が大幅にアップデートされ、デザインファイルから実用的なReactコードが生成できるようになりました。

**Dev Mode AIの新機能**
- FigmaデザインからReact + Tailwind CSSのコードを生成
- コンポーネント単位での書き出しに対応
- アニメーション（Framer Motion）のコードも自動生成
- デザイントークン（色・フォント・スペーシング）を変数として出力

**現場の評価**
「ピクセルパーフェクトとはいかないが、80%のコードが再利用できる。実装時間が大幅に短縮された」とフロントエンドエンジニアの間で話題に。

Figma Professionalプラン以上で利用可能（月$15〜）。`,
    source: "The Next Web",
    sourceUrl: "https://thenextweb.com",
    tags: ["Figma", "フロントエンド", "デザイン"],
    publishedAt: "2026-03-12",
  },
  {
    id: "21",
    title: "ChatGPT、音声会話機能が大幅改善 — 感情表現と反応速度が向上",
    summary: "OpenAIがChatGPTの音声会話機能をアップデート。より自然な感情表現と0.3秒以下の応答速度を実現し、外国語学習や電話対応練習に活用するユーザーが急増している。",
    body: `OpenAIはChatGPTの音声会話機能を大幅にアップデートしました。

**主な改善点**
- 応答速度が平均0.3秒以下に短縮
- 喜び・驚き・共感など感情のこもった話し方が可能に
- 会話の途中で割り込んでも自然に対応
- 日本語の発音・イントネーションが改善

**活用事例**
英会話練習、プレゼンのリハーサル、一人暮らしの高齢者との会話相手として活用する事例が増えています。

ChatGPT Plus（月額$20）で利用可能。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["OpenAI", "ChatGPT", "音声AI"],
    publishedAt: "2026-03-19",
  },
  {
    id: "22",
    title: "Canva AI、プレゼン資料を自動生成 — 文章を入れるだけで完成",
    summary: "デザインツールCanvaのAI機能が強化。テーマと箇条書きを入力するだけで、デザイン済みのプレゼンスライドが数秒で完成する「Magic Presentation」機能が注目を集めている。",
    body: `CanvaがAI機能「Magic Presentation」を正式リリースしました。

**使い方はシンプル**
1. プレゼンのテーマを入力（例：「新商品の営業提案」）
2. 伝えたいポイントを箇条書きで入力
3. デザインテーマを選ぶ
4. 数秒でスライドが完成

**生成されるもの**
- 表紙・目次・各スライド・まとめページ
- グラフや図解も自動挿入
- 文章も自動で整えてくれる

Canva無料プランでも月3回まで利用可能。Proプラン（月$15）で無制限。`,
    source: "The Next Web",
    sourceUrl: "https://thenextweb.com",
    tags: ["Canva", "デザイン", "生産性"],
    publishedAt: "2026-03-19",
  },
  {
    id: "23",
    title: "Tesla Optimus、工場での実作業映像を公開 — AIロボットが現実に",
    summary: "TeslaがヒューマノイドロボットOptimusの工場稼働映像を公開。部品の仕分け・搬送・組み立て補助を自律的にこなす様子が映され、AIロボット時代の到来を印象づけた。",
    body: `Teslaは人型ロボット「Optimus」が実際の工場ラインで稼働している映像を公開しました。

**Optimusができること（現時点）**
- 部品の仕分けと搬送
- 製品の検品補助
- 2本の腕で繊細な組み立て作業

**技術的なポイント**
Tesla車で使われているAI（FSD）の技術をロボットに転用。カメラだけで周囲を認識し、LiDARなどの特殊センサーは使っていません。

現在はTeslaの自社工場のみで稼働中。2027年の外部販売を予定。`,
    source: "Ars Technica",
    sourceUrl: "https://arstechnica.com",
    tags: ["Tesla", "ロボット", "AI"],
    publishedAt: "2026-03-18",
  },
  {
    id: "24",
    title: "Grammarly、日本語対応を開始 — ビジネスメールの文章をAIが添削",
    summary: "英語文章校正AIのGrammarlyが日本語に対応。メール・文書の誤字脱字チェックに加え、丁寧語・敬語の適切さも判断し、ビジネス文書の品質向上をサポートする。",
    body: `英語文章校正で知られるGrammarlyが日本語対応を発表しました。

**日本語で使える機能**
- 誤字・脱字・変換ミスの検出
- 敬語・丁寧語の適切さチェック
- 文章の読みやすさスコア
- より自然な言い回しの提案

**対応環境**
- Chrome拡張機能（Gmail・Notion・Slackで動作）
- Windowsアプリ
- Macアプリ

無料プランで基本機能が使えます。Proプラン（月$12）でAIによる文章書き直し提案が使えます。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["Grammarly", "文章AI", "生産性"],
    publishedAt: "2026-03-18",
  },
  {
    id: "25",
    title: "Stability AI、3D画像生成モデルを公開 — テキストから立体モデルを作成",
    summary: "Stability AIがテキストから3Dモデルを生成できる新サービスを公開。ゲーム開発・建築・ECサイトの商品展示など幅広い用途での活用が期待されている。",
    body: `Stability AIが3D生成モデル「Stable 3D 2.0」を公開しました。

**できること**
- テキストの説明から3Dモデルを生成
- 既存の画像を3Dに変換
- obj・glb・fbxなど主要フォーマットで出力

**活用が期待される分野**
- ゲーム開発（背景・アイテム・キャラクター）
- 建築・インテリアのビジュアライゼーション
- ECサイトの商品3D展示
- VR/ARコンテンツ制作

APIプランは月$50から。Blender・Unityとの連携プラグインも提供予定。`,
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com",
    tags: ["Stability AI", "3D生成", "クリエイティブ"],
    publishedAt: "2026-03-17",
  },
  {
    id: "26",
    title: "Apple Intelligence、iPhoneで使えるAI機能まとめ — 実際に試した結果",
    summary: "AppleのAI機能「Apple Intelligence」の全機能を実際に使ってレビュー。通知の要約・写真編集・文章生成など、日常で本当に役立つ機能を正直に評価した。",
    body: `iPhone 16以降で使えるApple Intelligenceを全機能試しました。

**使えると感じた機能**
- 通知の要約: LINEやメールの長い通知をひと言でまとめてくれる
- 写真の消去（Clean Up）: 背景の不要な人物や物を自然に消せる
- 文章の校正・トーン変更: メールをフォーマルにしたりカジュアルにしたり

**まだ改善が必要な機能**
- Siriの賢さ: まだ複雑な質問には答えられないことが多い
- 日本語対応: 一部機能が英語のみ

iPhone 16・15 Pro以降、iOS 18.4以上で利用可能。`,
    source: "Wired",
    sourceUrl: "https://www.wired.com",
    tags: ["Apple", "iPhone", "AI"],
    publishedAt: "2026-03-17",
  },
  {
    id: "27",
    title: "GitHub Copilot、テスト自動生成機能を追加 — コードの品質管理が楽に",
    summary: "GitHubのAIコーディングアシスタントCopilotがテストコードの自動生成に対応。既存コードを解析して適切なテストを生成し、バグの早期発見を支援する。",
    body: `GitHub Copilotに「Copilot Tests」機能が追加されました。

**使い方**
既存のコードを選択して右クリック→「Generate Tests」を選ぶだけ。Copilotがコードを解析してテストコードを自動生成します。

**対応言語**
Python・JavaScript・TypeScript・Java・C#・Go・Rust

**生成されるテストの種類**
- ユニットテスト（関数単体のテスト）
- エッジケース（特殊な入力値のテスト）
- エラーハンドリングのテスト

GitHub Copilot Individual（月$10）で利用可能。`,
    source: "The Register",
    sourceUrl: "https://www.theregister.com",
    tags: ["GitHub", "開発ツール", "コーディング"],
    publishedAt: "2026-03-16",
  },
  {
    id: "28",
    title: "Zoom AI Companion、会議の「次のアクション」を自動まとめ — 議事録不要に",
    summary: "ZoomのAIアシスタントが進化。会議終了後に話し合われた内容から「誰が・何を・いつまでに」するかを自動抽出し、参加者全員にメールで送付できるようになった。",
    body: `ZoomのAI機能「AI Companion」が大幅アップデートされました。

**新機能のハイライト**
- 会議中の発言からアクションアイテムを自動検出
- 担当者と期日を自動で紐付け
- 会議後にサマリーと一緒にメール送付
- Asana・Jiraなどのタスクツールと連携

**実際の効果**
「会議後の議事録作成が不要になった。アクション管理の抜け漏れも減った」という声が多数。

Zoom Pro以上のプランで利用可能（月$15.99〜）。`,
    source: "ZDNet",
    sourceUrl: "https://www.zdnet.com",
    tags: ["Zoom", "会議AI", "生産性"],
    publishedAt: "2026-03-16",
  },
  {
    id: "29",
    title: "Shopify Magic、EC運営者向けAI機能が充実 — 商品説明文を自動生成",
    summary: "ShopifyのAI機能「Shopify Magic」が強化。商品画像をアップロードするだけで商品説明文・SEOタイトル・SNS投稿文を自動生成し、小規模EC事業者の運営コストを削減。",
    body: `ShopifyのAI機能「Shopify Magic」が大幅にアップデートされました。

**主な機能**
- 商品画像からAIが商品説明文を自動生成
- SEOに最適化されたタイトル・メタディスクリプションの提案
- Instagram・X向けの投稿文を自動作成
- 多言語対応（日本語含む）

**導入事例**
ハンドメイド作家が商品登録の時間を「1商品30分→5分」に短縮できたと報告。

Shopifyの全プランで利用可能（Basic: 月$29〜）。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["Shopify", "EC", "生産性"],
    publishedAt: "2026-03-15",
  },
  {
    id: "30",
    title: "Pika 2.0、動画生成AIが感情・動きの制御に対応 — 映像表現が拡大",
    summary: "動画生成AIのPikaがバージョン2.0をリリース。キャラクターの感情・視線・動きの方向をプロンプトで細かく制御できるようになり、ショートフィルム制作での活用が広がっている。",
    body: `Pika 2.0がリリースされ、動画生成の表現力が大幅に向上しました。

**2.0の新機能**
- 感情コントロール: 「悲しそうに」「驚いて」などの指定が効くように
- 視線・頭の向き指定: カメラ目線・横向きなどを制御可能
- 動きの強弱: ゆっくり・素早くなどの速度調整
- 最大10秒の動画生成（従来は4秒）

**活用例**
SNS向けショートフィルム、商品PR動画、絵本のアニメーション化などで使われています。

月$8のBasicプランから利用可能。`,
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com",
    tags: ["Pika", "動画生成", "クリエイティブ"],
    publishedAt: "2026-03-15",
  },
  {
    id: "31",
    title: "Samsung、スマホのAI翻訳機能を強化 — 電話中にリアルタイム通訳",
    summary: "SamsungがGalaxyスマートフォンの通話翻訳機能をアップデート。電話中の会話をリアルタイムで日本語⇔英語・中国語など13言語に翻訳し、海外との電話が格段に楽になった。",
    body: `SamsungはGalaxy AI の通話翻訳機能を大幅に改善しました。

**Live Translate の新仕様**
- 翻訳速度が従来比50%高速化
- 対応言語が7言語から13言語に拡大（日本語・英語・中国語・韓国語など）
- 翻訳の精度が向上（特にビジネス用語）
- 通話録音の自動文字起こしにも対応

**使い方**
通話中に「Live Translate」ボタンを押すだけ。相手の声を翻訳して読み上げ、自分の声も翻訳して相手に届けます。

Galaxy S24以降のモデルで利用可能。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["Samsung", "翻訳", "スマートフォン"],
    publishedAt: "2026-03-14",
  },
  {
    id: "32",
    title: "Duolingo Max、AIとの会話練習機能が語学学習を変える",
    summary: "語学学習アプリDuolingoのプレミアムプラン「Max」でAIとのロールプレイ会話練習が利用可能に。レストランの注文・道案内・面接練習など実践的なシナリオで話す力を鍛えられる。",
    body: `DuolingoのAI会話機能「Roleplay」が大幅に強化されました。

**Roleplayでできること**
- レストランでの注文練習
- 空港・ホテルでのやりとり
- 仕事の面接シミュレーション
- 友人との日常会話

**AIの特徴**
間違えても責めずにやさしく訂正してくれます。また、同じ意味の別の言い方を教えてくれるので自然な表現が身につきます。

Duolingo Max（月$29.99）で利用可能。英語・スペイン語・フランス語・日本語など対応。`,
    source: "The Next Web",
    sourceUrl: "https://thenextweb.com",
    tags: ["Duolingo", "語学学習", "AI"],
    publishedAt: "2026-03-14",
  },
  {
    id: "33",
    title: "Waymo、完全自動運転タクシーが東京でテスト開始",
    summary: "GoogleグループのWaymoが東京都内で完全自動運転タクシーの公道テストを開始。ドライバー不在のロボタクシーが日本の公道を走る初の事例として注目を集めている。",
    body: `GoogleのWaymoが東京都内で完全自動運転タクシー（ロボタクシー）の公道テストを開始しました。

**テストの概要**
- エリア: 渋谷・新宿・港区の一部
- 車両: Waymo One（Jaguar I-PACEベース）
- 乗客: 現在は社員・関係者のみ

**技術的な挑戦**
東京は左側通行・複雑な交差点・歩行者の多さなど、米国とは異なる環境のため、AIの再学習が必要でした。

一般向けサービスの開始時期は未定ですが、2027年を目標としています。`,
    source: "Ars Technica",
    sourceUrl: "https://arstechnica.com",
    tags: ["Waymo", "自動運転", "AI"],
    publishedAt: "2026-03-13",
  },
  {
    id: "34",
    title: "Jasper AI、マーケティング特化の文章生成で企業導入が加速",
    summary: "マーケティング向け文章生成AIのJasperが企業向け機能を拡充。ブランドのトーンや過去コンテンツを学習させることで、一貫したブランドボイスの文章を大量生成できる。",
    body: `Jasper AIがエンタープライズ機能を大幅に強化しました。

**Brand Voice機能**
自社のブログ・広告・SNS投稿を読み込ませると、そのブランドのトーン・言葉遣いを学習。以降の生成文章に一貫性が生まれます。

**生成できるコンテンツ**
- ブログ記事・LP文章
- Google広告・Meta広告のコピー
- メールマガジン
- SNS投稿（複数プラットフォーム対応）

**導入実績**
IBMやAirbnbなど大手企業が導入し、コンテンツ制作コストを平均40%削減したと報告。

月$49のCreatorプランから利用可能。`,
    source: "Marketing AI Institute",
    sourceUrl: "https://www.marketingaiinstitute.com",
    tags: ["Jasper", "マーケティング", "文章AI"],
    publishedAt: "2026-03-13",
  },
  {
    id: "35",
    title: "Claude、PDFや画像を読み込んで質問に答えられる機能を強化",
    summary: "AnthropicのClaudeがPDF・画像・スプレッドシートの読み込み精度を向上。決算資料や契約書などの長文書類を丸ごとアップロードして質問するビジネス活用が増えている。",
    body: `AnthropicのAI「Claude」のファイル読み込み機能が強化されました。

**対応ファイル形式**
- PDF（最大1000ページ）
- 画像（PNG・JPG・WebP）
- Excel・CSV
- Word文書

**ビジネス活用例**
- 決算資料をアップロード→「売上が減少した原因は？」と質問
- 契約書をアップロード→「解約条件を教えて」と質問
- 会議録をアップロード→「アクションアイテムをまとめて」と指示

Claude.ai Pro（月$20）で利用可能。APIでの活用も可能。`,
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com",
    tags: ["Anthropic", "Claude", "ビジネス"],
    publishedAt: "2026-03-12",
  },
  {
    id: "36",
    title: "Notion、AIデータベース機能を追加 — 自然言語でデータを集計・分析",
    summary: "NotionがAIを活用したデータベース分析機能を追加。「先月の売上が高かった商品は？」と入力するだけでデータを集計・グラフ化でき、Excelの知識不要でデータ分析が可能になった。",
    body: `Notionに「AI Analytics」機能が追加されました。

**使い方のイメージ**
Notionのデータベース（表形式のページ）に対して、自然言語で質問するだけでデータを分析できます。

**できること**
- 集計: 「カテゴリ別の合計を出して」
- フィルタ: 「期限が過ぎたタスクだけ見せて」
- グラフ化: 「月別の推移をグラフにして」
- 比較: 「先月と今月を比較して」

ExcelやGoogleスプレッドシートの関数を知らなくても、誰でもデータ分析ができます。

Notionの全プランで利用可能（無料プランは月50回まで）。`,
    source: "The Next Web",
    sourceUrl: "https://thenextweb.com",
    tags: ["Notion", "データ分析", "生産性"],
    publishedAt: "2026-03-11",
  },
  {
    id: "37",
    title: "xAI Grok、X（旧Twitter）上のリアルタイム情報を活用した回答が強化",
    summary: "イーロン・マスクのxAIが開発するGrokが、X上の投稿をリアルタイムで参照しながら回答する機能を強化。速報ニュースや市場動向の即時分析でChatGPTとの差別化を図る。",
    body: `xAIのGrokがリアルタイム情報活用機能を大幅に強化しました。

**Grokの強み**
X（旧Twitter）上の何億もの投稿をリアルタイムで参照できるため、速報ニュースや市場動向に関する質問に即座に答えられます。

**活用例**
- 「今日の株式市場のXでの反応は？」
- 「○○事件について今何が言われている？」
- 「新製品発表への世間の反応は？」

**他のAIとの違い**
ChatGPTやClaudeはリアルタイムのX情報にアクセスできませんが、GrokはX Premiumユーザーなら追加料金なしで利用可能。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["xAI", "Grok", "SNS"],
    publishedAt: "2026-03-11",
  },
  {
    id: "38",
    title: "Adobe Premiere Pro、AIで動画の背景を自動削除・差し替え",
    summary: "Adobe Premiere ProにAIを使った動画背景の自動削除・差し替え機能が追加。グリーンバックなしで撮影した映像でも背景を自然に切り抜き、任意の背景に差し替えられる。",
    body: `Adobe Premiere Proに「Generative Background」機能が追加されました。

**従来の課題**
背景を差し替えるには「グリーンバック（緑色の布）」で撮影する必要がありましたが、準備が大変でした。

**新機能でできること**
- 普通に撮影した動画から人物・物体を自動切り抜き
- 任意の画像・動画を背景に設定
- AIがエッジを自然に処理（髪の毛なども綺麗に切り抜き）
- プロンプトで背景を生成することも可能

YouTuber・ビジネス動画制作・オンライン授業など幅広い用途で活用できます。

Creative Cloudプランに含まれています。`,
    source: "Wired",
    sourceUrl: "https://www.wired.com",
    tags: ["Adobe", "動画編集", "クリエイティブ"],
    publishedAt: "2026-03-10",
  },
  {
    id: "39",
    title: "Salesforce Einstein、営業担当者向けAIが商談成功率を向上",
    summary: "SalesforceのAI機能Einsteinが進化。過去の商談データを学習し、成約確率が高い顧客の特定・最適なアプローチタイミングの提案・次のアクション自動生成を実現。",
    body: `SalesforceのAI機能「Einstein Copilot」が大幅に強化されました。

**営業担当者が使える機能**
- リード優先度付け: 成約確率が高い見込み客を自動でスコアリング
- 最適な連絡タイミングの提案
- 商談履歴から次に言うべきトークスクリプトを生成
- 競合他社の情報を踏まえた提案内容のアドバイス

**導入実績**
パイロット導入企業では商談成功率が平均17%向上したと報告されています。

Salesforce Sales Cloud（月$25/ユーザー〜）で利用可能。`,
    source: "ZDNet",
    sourceUrl: "https://www.zdnet.com",
    tags: ["Salesforce", "営業AI", "ビジネス"],
    publishedAt: "2026-03-10",
  },
  {
    id: "40",
    title: "Replit AI、プログラミング未経験者がアプリを作れる時代が来た",
    summary: "ブラウザ上で動くコーディング環境ReplitのAI機能が強化。「日記アプリを作って」と話しかけるだけでコードが生成・実行され、プログラミング経験ゼロでもWebアプリが完成する。",
    body: `ReplitのAI機能「Replit Agent」が強化され、プログラミング未経験者でもアプリ開発が可能になりました。

**使い方**
1. Replitにアクセス（ブラウザのみ、インストール不要）
2. 作りたいものを日本語で説明
3. AIが自動でコードを書いて実行
4. 修正したい点を言葉で伝えると反映される

**作れるものの例**
- ToDoアプリ
- 家計簿ツール
- 簡単なゲーム
- 社内向けフォーム

プログラミングの知識がなくても、アイデアをアプリにできる時代が来ています。

無料プランあり。Coreプラン（月$25）でAI機能がフルで使えます。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["Replit", "開発ツール", "ノーコード"],
    publishedAt: "2026-03-09",
  },
  {
    id: "41",
    title: "Perplexity Pages — AIがWebページをまるごと自動作成",
    summary: "AI検索エンジンPerplexityが新機能「Pages」を公開。テーマを入力するだけで、リサーチ・構成・文章・デザインまでAIが自動で完成させたWebページを作れる。",
    body: `Perplexityが「Pages」機能を公開し、Webコンテンツ作成の概念を変えようとしています。

**Pagesの仕組み**
テーマを入力するだけで、AIが以下をすべて自動実行します。
- 最新情報のリサーチと情報収集
- 読みやすい構成の設計
- 日本語・英語での文章生成
- 画像付きの見やすいレイアウト

**活用例**
- 商品比較ページ
- 旅行ガイド
- 技術解説ページ
- 市場調査レポート

Perplexity Proユーザー（月$20）から利用可能。生成したページは公開・共有もできます。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["Perplexity", "コンテンツ生成", "AI"],
    publishedAt: "2026-03-08",
  },
  {
    id: "42",
    title: "Gamma AI — パワポ不要！AIが美しいプレゼンを秒速で作る",
    summary: "プレゼン作成AIのGammaが大幅アップデート。文章を貼り付けるだけでデザイン済みのスライドが完成し、ドラッグ＆ドロップで自由に編集できる。日本語対応も強化。",
    body: `Gammaはパワーポイントの知識がなくても、プロ品質のプレゼン資料が作れるAIツールです。

**Gammaが選ばれる理由**
- テキストを貼り付けるだけで自動スライド化
- 100以上のデザインテンプレート
- グラフ・図解を自然言語で追加可能
- Webブラウザで動作（インストール不要）

**日本語対応の強化点**
日本語フォントの表示が改善され、日本語プロンプトでの生成精度も向上。ビジネス資料、学校の発表、社内勉強会など幅広く使えます。

無料プランで月10枚まで作成可能。Proプラン（月$10）で無制限。`,
    source: "Product Hunt",
    sourceUrl: "https://www.producthunt.com",
    tags: ["Gamma", "プレゼン", "生産性"],
    publishedAt: "2026-03-08",
  },
  {
    id: "43",
    title: "Kling AI 2.0 — 中国発の動画生成AIがRunwayに真っ向勝負",
    summary: "中国Kuaishouが開発する動画生成AIのKling AIがバージョン2.0をリリース。映像の滑らかさと物理的なリアリティが大幅に向上し、欧米の競合と互角の性能を誇ると話題に。",
    body: `Kuaishouが開発するKling AI 2.0が動画生成AIの勢力図を塗り替えつつあります。

**Kling 2.0の特徴**
- 最大2分の動画生成（従来比4倍）
- 人物の動きが自然でぬるぬると滑らか
- 物理シミュレーション精度が向上（水・炎・布の動きがリアル）
- テキスト・画像どちらからも動画生成可能

**RunwayやPikaとの比較**
海外メディアのベンチマークではKling 2.0がRunway Gen-4と同等以上の評価を受けています。

月$10のスタンダードプランから利用可能。日本語プロンプトにも対応。`,
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com",
    tags: ["Kling", "動画生成", "クリエイティブ"],
    publishedAt: "2026-03-07",
  },
  {
    id: "44",
    title: "Ideogram 2.0 — 「文字入り画像」生成AIが完成度を高める",
    summary: "画像生成AIの弱点だった「テキスト入り画像の生成」に特化したIdeogramが2.0を公開。ロゴ・バナー・ポスターなど文字を含む画像を高精度で自動生成できる。",
    body: `Ideogram 2.0は、他の画像生成AIが苦手とする「テキスト入り画像」の生成に特化したサービスです。

**Ideogramが得意なこと**
- ポスター・バナーデザイン
- ロゴ・アイコンの生成
- SNS投稿用の文字入り画像
- メニュー・フライヤーのデザイン

**2.0での改善点**
- 日本語テキストの描画精度が大幅向上
- フォントスタイルの指定が可能に
- 背景と文字のコントラストを自動最適化

Midjourney・DALL-Eと異なり、指定した文字を正確に画像内に描画できるのが最大の特徴。

無料プランあり。月$7のBasicプランで月100枚生成可能。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["Ideogram", "画像生成", "デザイン"],
    publishedAt: "2026-03-07",
  },
  {
    id: "45",
    title: "Google NotebookLM Plus — AIが資料を丸ごと学習して質問に答える",
    summary: "GoogleのAI学習ツールNotebookLMが強化版「Plus」を提供開始。PDFや動画・音声ファイルをアップロードするだけで、AIがその内容を完全に学習し、どんな質問にも答えてくれる。",
    body: `GoogleのNotebookLM Plusは、あなただけの専属AIアナリストを作れるツールです。

**使い方の流れ**
1. 資料をアップロード（PDF・Word・YouTube動画・音声ファイルなど）
2. AIが自動で内容を読み込んで学習
3. チャットで自由に質問する

**活用シーン**
- 決算資料・業界レポートの分析
- 論文・技術書のポイント抽出
- 会議録から重要事項を整理
- 勉強・資格試験の学習サポート

**Plusの追加機能**
- 同時処理できる資料数が50→300に拡大
- 音声で質問・回答を聞ける「Audio Overview」機能
- チームでの共有機能

Google Workspace利用者は月$19.99で利用可能。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["Google", "NotebookLM", "生産性"],
    publishedAt: "2026-03-06",
  },
  {
    id: "46",
    title: "Descript 6.0 — 動画編集をテキスト編集と同じくらい簡単に",
    summary: "ポッドキャスト・動画編集AIのDescriptがバージョン6.0に。話した内容を文字起こしして、テキストを編集するだけで動画が編集できる革命的な方法で、YouTuberに人気急上昇。",
    body: `Descript 6.0は「動画編集 = テキスト編集」という革命的な発想のツールです。

**仕組み**
1. 動画・音声をアップロード
2. AIが自動で文字起こし
3. 文章を編集するだけで動画が編集される
   - 文字を消す → その部分の動画が削除
   - 文字を書き換える → AIボイスで音声も変わる

**6.0の新機能**
- 「えー」「あー」などの言い淀みを一括自動削除
- AIによる背景ノイズ除去
- テロップ（字幕）の自動生成と調整
- 複数カメラの映像を自動切り替え

YouTuber・ポッドキャスター・オンライン教育コンテンツ制作者に最適。

月$12のCreatorプランから利用可能。`,
    source: "The Next Web",
    sourceUrl: "https://thenextweb.com",
    tags: ["Descript", "動画編集", "クリエイティブ"],
    publishedAt: "2026-03-06",
  },
  {
    id: "47",
    title: "HeyGen 3.0 — 自分の分身AIアバターで多言語動画を量産",
    summary: "AIアバター動画作成サービスHeyGenが3.0をリリース。自分の顔と声を学習させた分身アバターが40言語で話す動画を生成でき、グローバルな情報発信コストを劇的に削減。",
    body: `HeyGen 3.0は、自分の分身（AIアバター）が世界中の言語で話してくれる動画作成ツールです。

**主なユースケース**
- 一度撮影した動画を40言語に自動翻訳・吹き替え
- 自分の声・顔を使ったAI動画を量産
- 企業の社内研修動画をコスト削減しながら多言語化
- YouTubeチャンネルの海外展開

**3.0での改善点**
- 唇の動きと音声の同期精度が大幅向上
- 日本語・韓国語・中国語の感情表現が自然に
- バックグラウンド（背景）の自動生成機能追加

5分以内の動画なら無料で試せます。Creatorプラン（月$24）で月5本まで生成可能。`,
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com",
    tags: ["HeyGen", "動画生成", "多言語"],
    publishedAt: "2026-03-05",
  },
  {
    id: "48",
    title: "Opus Clip — 長い動画からバズるショート動画をAIが自動切り出し",
    summary: "動画クリッピングAIのOpus Clipが強化。1時間の動画をアップロードするだけで、TikTok・Reels・YouTubeショートに最適化されたクリップをAIが自動で選別・編集する。",
    body: `Opus Clipは、長い動画から「バズりやすい部分」をAIが自動で見つけて切り出すツールです。

**仕組み**
1. YouTubeのURL or 動画ファイルを入力
2. AIが動画全体を解析
3. 「面白い」「重要」「感情的」な部分を自動検出
4. 縦型動画（9:16）に自動リサイズ＋字幕付けで完成

**AI分析の要素**
- 視聴者の感情反応が高い箇所
- キーワードの重要度
- 話のテンポと盛り上がり

**対応プラットフォーム**
TikTok・Instagram Reels・YouTube Shorts・Twitter/X

月$9のStarterプランで月90分分の動画処理が可能。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["Opus Clip", "動画編集", "SNS"],
    publishedAt: "2026-03-05",
  },
  {
    id: "49",
    title: "Synthesia 3.0 — テキストを入力するだけでAIが動画を作る法人向けサービス",
    summary: "企業向けAI動画生成のSynthesiaが3.0を発表。人間そっくりのAIアバターが原稿を読み上げる動画を作成でき、研修・マニュアル・製品紹介動画の制作コストを90%削減できる。",
    body: `Synthesia 3.0は、法人の動画制作コストを革命的に下げるAIサービスです。

**従来の動画制作との比較**
| 項目 | 従来 | Synthesia |
|------|------|-----------|
| 制作時間 | 数日〜数週間 | 数分 |
| 費用 | 数十万円〜 | 月$30〜 |
| カメラ・スタジオ | 必要 | 不要 |
| 出演者 | 必要 | 不要 |

**3.0の新機能**
- AIアバターの表情・ジェスチャーがより自然に
- 日本語対応のアバターを新規追加
- ブランドカラー・ロゴの自動適用
- 複数言語への自動翻訳・吹き替え

社内研修・製品説明・採用動画などの制作に最適。エンタープライズプランで利用可能（要見積もり）。`,
    source: "ZDNet",
    sourceUrl: "https://www.zdnet.com",
    tags: ["Synthesia", "動画生成", "エンタープライズ"],
    publishedAt: "2026-03-04",
  },
  {
    id: "50",
    title: "Cohere Command R+、企業向けRAGシステムに最適化されたLLM",
    summary: "企業向けAIのCohereがCommand R+を発表。社内ドキュメントと組み合わせた「RAG」と呼ばれる検索拡張生成に特化し、GPT-4より低コストで高精度な社内AIを構築できる。",
    body: `CohereのCommand R+は、企業がAIを安全・低コストで導入するために設計されたLLMです。

**RAGとは？**
「Retrieval-Augmented Generation（検索拡張生成）」の略。AIに社内データベースや書類を参照させながら回答させる技術で、「AIが嘘をつく」問題（ハルシネーション）を大幅に減らせます。

**Command R+の強み**
- RAGに特化した設計で、参照文書を正確に引用
- 日本語を含む10言語でネイティブ対応
- GPT-4と比較して約70%のコスト削減
- オンプレミス・プライベートクラウドでの運用も可能

**活用例**
- 社内規程・マニュアルへのQ&Aシステム
- 製品仕様書からの技術サポートBot
- 法務・コンプライアンス文書の検索・要約

APIで利用可能。エンタープライズ向けには専用プランあり。`,
    source: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com",
    tags: ["Cohere", "エンタープライズ", "LLM"],
    publishedAt: "2026-03-04",
  },
  {
    id: "51",
    title: "Poe — ChatGPT・Claude・Geminiを一つのアプリで使い比べ",
    summary: "AIモデル横断プラットフォームのPoeが機能強化。月額一定料金でChatGPT・Claude・Gemini・LLaMAなど主要AIモデルをすべて使い比べられ、用途によって最適なモデルを選べる。",
    body: `Poeは複数のAIモデルを1つのアプリでまとめて使えるサービスです。

**使えるモデル**
- OpenAI: GPT-4o・GPT-4 Turbo
- Anthropic: Claude 3.5 Sonnet・Claude Opus
- Google: Gemini Ultra・Gemini Pro
- Meta: LLaMA 3
- その他100種類以上

**Poeならではの機能**
- モデルを切り替えて同じ質問をして比較
- カスタムボット（特定用途に特化したAI）の作成・公開
- ボット作成者への収益還元プログラム

**料金**
無料プランでも主要モデルを少し試せます。月$19.99のProプランで主要モデルが実質使い放題。

AIをよく使う人が複数サービスを契約するより断然お得です。`,
    source: "Wired",
    sourceUrl: "https://www.wired.com",
    tags: ["Poe", "LLM", "AI"],
    publishedAt: "2026-03-03",
  },
  {
    id: "52",
    title: "Together AI、オープンソースLLMを高速・低価格で使えるAPIを提供",
    summary: "Together AIがLLaMA・Mistral・Qwen などのオープンソースLLMをクラウドで高速実行できるAPIを提供。OpenAI APIの最大10分の1のコストでGPT-4相当の性能を実現できる。",
    body: `Together AIは、オープンソースのAIモデルをクラウドで簡単・低コストで使えるプラットフォームです。

**主要な対応モデル**
- Meta LLaMA 3.3 (70B・8B)
- Mistral Large・Mistral 7B
- Qwen 2.5 (Alibaba製)
- DeepSeek R3
- その他50種類以上

**コスト比較（1Mトークンあたり）**
| モデル | OpenAI GPT-4o | Together AI LLaMA 3.3 |
|-------|--------------|----------------------|
| 価格 | $15 | $0.88 |

**開発者向けの特徴**
- OpenAI互換のAPIで移行が簡単
- Fine-tuning（追加学習）も可能
- 推論速度が速く、レイテンシが低い

スタートアップ・個人開発者がAIアプリを低コストで構築するのに最適。`,
    source: "Hacker News",
    sourceUrl: "https://news.ycombinator.com",
    tags: ["Together AI", "オープンソース", "LLM"],
    publishedAt: "2026-03-03",
  },
  {
    id: "53",
    title: "Captions AI — 動画に自動字幕＋AIによる表情・目線補正",
    summary: "動画編集AIのCaptionsが新機能を追加。字幕の自動生成に加え、AIが話者の目線をカメラに向けたり、表情をより生き生きと補正したりする機能が注目を集めている。",
    body: `Captions AIは動画クリエイターの悩みを一気に解決するAIツールです。

**主な機能**
- 自動字幕生成（日本語含む30言語対応）
- 目線補正: 手元のメモを見ていても、AIがカメラ目線に修正
- 表情強調: 少し暗い表情をより明るく・生き生きと補正
- 不要なシーン（言い間違い・沈黙）の自動カット

**活用例**
- オンライン講師・セミナー動画
- 採用動画・会社紹介
- YouTube・TikTok投稿

**使い方**
スマホアプリで撮影→アップロード→数分で編集完了。一眼レフカメラや照明機材が不要になります。

月$19.99のProプランで主要機能がすべて使えます。`,
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    tags: ["Captions", "動画編集", "クリエイティブ"],
    publishedAt: "2026-03-02",
  },
  {
    id: "54",
    title: "Fireflies.ai — 会議のすべてを記録・要約・検索できるAIアシスタント",
    summary: "会議AIのFireflies.aiが機能を強化。ZoomやGoogle Meetの会議を自動録音・文字起こし・要約し、「先週の会議でAについて何を決めたか」と自然言語で過去の会議を検索できる。",
    body: `Fireflies.aiは会議の記録・管理を完全自動化するAIアシスタントです。

**自動でやってくれること**
- Zoom・Teams・Google Meetに自動参加して録音
- リアルタイムで文字起こし
- 会議終了後に要約・アクションアイテムをメール送付
- 発言者ごとの発言時間・キーワード分析

**強力な検索機能**
「あの件について山田さんが何て言ったっけ？」と入力するだけで、過去の会議の発言を瞬時に検索できます。

**対応ツール**
Slack・Notion・Salesforce・HubSpotと連携してアクションアイテムを自動登録。

無料プランで月800分の文字起こし可能。Proプラン（月$18）で無制限。`,
    source: "ZDNet",
    sourceUrl: "https://www.zdnet.com",
    tags: ["Fireflies", "会議AI", "生産性"],
    publishedAt: "2026-03-02",
  },
  {
    id: "55",
    title: "Luma Dream Machine 2.5 — 物理法則を理解した動画生成AIの最前線",
    summary: "Luma AIのDream Machine 2.5が公開。重力・慣性・液体の流れなど物理的な挙動をAIが正確にシミュレートし、CGを使わなくてもリアルな特殊効果映像が生成できるようになった。",
    body: `Luma AI のDream Machine 2.5は、物理的なリアリティを追求した動画生成AIです。

**物理シミュレーションの精度**
- 水が流れる・こぼれる動きが自然
- 布がなびく・揺れる表現が改善
- 爆発・煙・炎の表現がよりリアルに
- 重力に従って物体が落下・転がる

**クリエイターの評価**
「グリーンバックなしで特殊効果映像が作れるようになった」「CGに数十万円かかっていた案件がこれで対応できる」という声が増えています。

**生成可能な長さ**
最大120秒（2分）の動画。アスペクト比も9:16から16:9まで対応。

月$29.99のStandardプランから利用可能。`,
    source: "Ars Technica",
    sourceUrl: "https://arstechnica.com",
    tags: ["Luma AI", "動画生成", "クリエイティブ"],
    publishedAt: "2026-03-01",
  },
  {
    id: "56",
    title: "Otter.ai、リアルタイム議事録AIが日本語に対応",
    summary: "会議議事録AIのOtter.aiが日本語対応を強化。日本語の会話をリアルタイムで文字起こしし、会議中に参加者全員がスマホで議事録を確認・編集できるコラボレーション機能も追加。",
    body: `Otter.aiの日本語対応が大幅に強化され、国内ビジネスでの実用性が高まりました。

**日本語強化の内容**
- 文字起こし精度が向上（専門用語・固有名詞の認識改善）
- 敬語・話し言葉の自然な変換
- 複数人の声を話者ごとに自動識別

**会議中に使える機能**
- 画面を全員で共有しながら議事録をリアルタイム確認
- 重要な発言にその場でタグ付け・ハイライト
- 会議中に検索して「さっきの数字は？」を即確認

**会議後の機能**
- 要約・アクションアイテムの自動生成
- Slack・Notionへの自動送付
- 音声検索で過去の発言を即座に特定

無料プランで月300分まで利用可能。Proプラン（月$16.99）で無制限。`,
    source: "The Next Web",
    sourceUrl: "https://thenextweb.com",
    tags: ["Otter.ai", "会議AI", "日本語"],
    publishedAt: "2026-03-01",
  },
  {
    id: "57",
    title: "Pi AI — 感情に寄り添う「共感型AI」が心理的サポートに活用",
    summary: "Inflection AIが開発するPiは、論理的な回答よりも感情的な共感を重視したAI。ストレスの相談・目標設定・コーチングなど、心理的サポートとしての活用が世界的に広がっている。",
    body: `PiはChatGPTと異なり、「正しい答えを返す」より「気持ちに寄り添う」ことを優先した設計のAIです。

**Piの特徴**
- 感情を否定せず、まず共感から始まる
- 押しつけがましい提案をしない
- 長期的な目標設定・習慣化のコーチング
- 秘密を守る（会話ログの管理が厳格）

**活用されているシーン**
- 仕事のストレス・悩みの相談相手
- ダイエット・運動習慣の継続サポート
- 孤独感の軽減（一人暮らしの高齢者にも人気）
- 英語練習の会話相手

**注意点**
深刻なメンタルヘルスの問題には専門家への相談を推奨しています。

完全無料で利用可能（Webアプリ・スマホアプリ対応）。`,
    source: "Wired",
    sourceUrl: "https://www.wired.com",
    tags: ["Pi AI", "メンタルヘルス", "AI"],
    publishedAt: "2026-02-28",
  },
  {
    id: "58",
    title: "Meta AI Studio — 誰でも自分専用のAIキャラを作って公開できる",
    summary: "MetaがAI Studio機能をInstagram・Messengerで公開。個人やブランドが独自のAIキャラクターを作成・公開でき、ファンがそのAIと直接チャットできるようになった。",
    body: `Meta AI Studioは、誰でも自分だけのAIキャラクターを作って公開できるプラットフォームです。

**作れるAIの例**
- インフルエンサーの「AIバージョン」（ファンと24時間対応）
- 企業のカスタマーサポートAI
- キャラクターを設定したAIアシスタント
- 特定分野の専門家AI（料理・旅行・美容など）

**作り方**
1. AIの名前・性格・口調を設定
2. 知識や話せる範囲を設定
3. Instagram・Messengerで公開
4. フォロワーがDMでAIと会話できる

**ビジネス活用**
24時間対応のカスタマーサポートや商品案内AIとして、中小企業でも低コストで導入できます。

Meta Business Suiteから無料で利用可能（一部機能は審査が必要）。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["Meta", "AIキャラクター", "SNS"],
    publishedAt: "2026-02-28",
  },
  {
    id: "59",
    title: "Anthropic Economic Index — AIは人間の仕事をどう変えているか？最新報告",
    summary: "AnthropicがAIと労働市場に関する大規模調査「Economic Index」を公開。100万件以上の実際のAI使用データを分析し、AIが補助する職種・置き換える職種の実態を明らかにした。",
    body: `AnthropicはClaudeの実際の使用データを分析した「Economic Index」を公開しました。

**調査の概要**
- 分析データ: 100万件以上の匿名化された会話
- 対象: 800以上の職業カテゴリー

**主な発見**
「AIが仕事を完全に奪う」より「AIが仕事の一部を担当する」ケースが圧倒的に多い。

**AIの活用が多い職種TOP5**
1. ソフトウェアエンジニア（コーディング補助）
2. 作家・ライター（文章生成・編集）
3. マーケター（コンテンツ作成）
4. 教育者（教材作成・説明補助）
5. 研究者（情報収集・要約）

**影響が少ない職種**
現場作業・対人サービス・芸術的な判断を伴う仕事は、まだAIによる影響が小さい。

レポートはAnthropicのウェブサイトで無料公開中。`,
    source: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com",
    tags: ["Anthropic", "AI", "労働市場"],
    publishedAt: "2026-02-27",
  },
  {
    id: "60",
    title: "Google Vids — Googleが動画自動生成ツールをWorkspaceに追加",
    summary: "Googleがスライド・ドキュメントから動画を自動生成する「Google Vids」をWorkspaceに追加。テキストと画像を入れるだけで、ナレーション付きの動画が数分で完成する。",
    body: `Google Vidsは、Googleドキュメントやスライドから動画を自動生成できるWorkspaceの新機能です。

**Vidsの基本的な使い方**
1. Googleドキュメントのテキストを選択
2. 「動画を作成」をクリック
3. テーマ・ナレーターの声を選ぶ
4. AIが自動で動画を生成

**生成される動画の内容**
- テキストに合わせたビジュアル（写真・グラフ・アニメーション）
- AIナレーション（複数の声から選択可能）
- BGMの自動追加
- 字幕の自動生成

**活用シーン**
- 社内向けお知らせ動画
- 製品・サービスの説明動画
- 研修コンテンツの動画化
- 週次レポートの動画化

Google Workspace BusinessプランおよびEducationプランで利用可能。`,
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    tags: ["Google", "動画生成", "生産性"],
    publishedAt: "2026-02-27",
  },
];

// kaigaimeパイプラインから自動追加された記事と結合
const extraArticles: Article[] = extraArticlesData as Article[];
export const allArticles: Article[] = [...extraArticles, ...articles].sort(
  (a, b) => b.publishedAt.localeCompare(a.publishedAt)
);

export function getArticleById(id: string): Article | undefined {
  return allArticles.find((a) => a.id === id);
}
