# Beauty Tech Japan

## 基本情報
- URL: https://beauty-tech-japan.vercel.app
- フレームワーク: Next.js (App Router)
- 実流入あり(TZさんの数少ない実アクセスサイトの一つ)
- デプロイ: `git push` → `npx vercel --prod --yes`(pushだけでは自動反映されない可能性あるため必ずvercel --prodまで実行)

## SEO監査履歴(2026-08-18)
- スコア: 78/100
- 🔴修正: 記事・タグページのcanonicalが全てトップページ固定になっていた(サイトマップ544件中502件=92%に影響)→ 自ページURLを明示するよう修正
- 🟠修正: ホームページのJSON-LD構造化データが重複定義(layout.tsx + page.tsxの両方でWebSite/Organization)→ page.tsx側から冗長分を削除

## 既知の注意点
- 記事・関連記事・タグ画像は意図的に`<img>`タグ使用(next/imageだとVercel無料枠の画像最適化上限で402エラーになるための既知の回避策)。next/imageに戻さないこと
- `/widget`ページは他サイトへのiframe埋め込み機能があるため、X-Frame-Options等のセキュリティヘッダーを追加する際は慎重に設計する(安易に追加すると埋め込み機能を壊す)
- 未着手の宿題(Medium/Low): セキュリティヘッダー未設定、一部titleタグが60字超
