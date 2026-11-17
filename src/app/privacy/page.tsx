import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Beauty Tech Japan のプライバシーポリシーです。個人情報の取り扱い・Cookieの使用・アクセス解析・広告配信について説明します。",
  alternates: {
    canonical: "https://beauty-tech-japan.vercel.app/privacy",
  },
};

const sections = [
  {
    title: "1. 事業者情報",
    content: (
      <p>
        本サイト「Beauty Tech Japan」は、以下の事業者が運営しています。<br />
        事業者名：Kコンサルタント<br />
        運営責任者：瑞慶覧 達成（ズケラン タツナリ）<br />
        所在地：〒903-0815　沖縄県那覇市首里当蔵町１丁目１５番地<br />
        メール：tz77772014@gmail.com
      </p>
    ),
  },
  {
    title: "2. 収集する情報と利用目的",
    content: (
      <div className="space-y-2">
        <p>本サイトでは、以下の情報を収集することがあります。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>お問い合わせフォームからご入力いただいた氏名・メールアドレス・お問い合わせ内容</li>
          <li>アクセスログ（IPアドレス・ブラウザ種別・参照元URLなど）</li>
          <li>Cookie により収集される匿名の利用状況データ</li>
        </ul>
        <p className="mt-2">収集した情報は、お問い合わせへの回答・サービス改善・不正利用防止の目的にのみ利用し、それ以外の目的には使用しません。</p>
      </div>
    ),
  },
  {
    title: "3. 個人情報の第三者提供",
    content: (
      <p>
        収集した個人情報は、法令に基づく場合を除き、事前の同意なく第三者に提供することはありません。
      </p>
    ),
  },
  {
    title: "4. Cookie・アクセス解析",
    content: (
      <div className="space-y-2">
        <p>
          本サイトでは、利用状況の把握と改善のために Cookie およびアクセス解析ツール（Google Analytics・GoatCounter 等）を使用することがあります。
          これらのツールは匿名のデータを収集するものであり、個人を特定する情報は含まれません。
        </p>
        <p>
          Cookie を無効にしたい場合は、ご使用のブラウザの設定から無効化することができます。
          ただし、一部の機能が正常に動作しない場合があります。
        </p>
        <p>
          Google Analytics のデータ収集を無効にするには、
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline mx-1"
          >
            Google Analytics オプトアウトアドオン
          </a>
          をご利用ください。
        </p>
      </div>
    ),
  },
  {
    title: "5. 広告・外部サービス",
    content: (
      <div className="space-y-2">
        <p>
          本サイトは、第三者配信の広告サービス（Google AdSense を含む）を利用する場合があります。
          これらの広告配信事業者は、ユーザーの興味に応じた広告を表示するために Cookie（DART Cookie を含む）を使用することがあります。
        </p>
        <p>
          Google 広告Cookieの詳細設定・無効化については、
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline mx-1"
          >
            Google 広告に関するポリシー
          </a>
          をご確認ください。本サイトはアフィリエイトプログラム（A8.net・楽天アフィリエイト等）にも参加しており、紹介した商品・サービスの成約により報酬を得ることがあります。
        </p>
      </div>
    ),
  },
  {
    title: "6. 個人情報の管理",
    content: (
      <p>
        収集した個人情報は、不正アクセス・紛失・漏洩・改ざん等が生じないよう、適切な安全管理措置を講じます。
        保管が不要になった個人情報は速やかに削除します。
      </p>
    ),
  },
  {
    title: "7. 個人情報の開示・訂正・削除",
    content: (
      <p>
        ご自身の個人情報の開示・訂正・削除をご希望の場合は、下記のお問い合わせ先までご連絡ください。
        本人確認のうえ、合理的な範囲で速やかに対応いたします。
      </p>
    ),
  },
  {
    title: "8. 未成年者の個人情報",
    content: (
      <p>
        18歳未満の方が個人情報を送信される場合は、保護者の方の同意を得た上でご利用ください。
      </p>
    ),
  },
  {
    title: "9. プライバシーポリシーの変更",
    content: (
      <p>
        本ポリシーは、法令の改正やサービス内容の変更に応じて予告なく更新することがあります。
        重要な変更がある場合はサイト上でお知らせします。最新版は常に本ページに掲載します。
      </p>
    ),
  },
  {
    title: "10. お問い合わせ",
    content: (
      <p>
        本ポリシーに関するご質問・個人情報に関するお問い合わせは、以下までご連絡ください。<br />
        メール：
        <a
          href="mailto:tz77772014@gmail.com"
          className="text-pink-500 hover:underline break-all"
        >
          tz77772014@gmail.com
        </a>
        <br />
        対応時間：平日 10:00〜18:00（土日祝日を除く）
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          プライバシーポリシー
        </h1>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-8">
          制定日：{new Date().getFullYear()}年11月18日
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h2>
              {s.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
