"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // メール送信 (mailto フォールバック — 本番では Resend / Buttondown に差し替え)
    window.location.href = `mailto:hello@beauty-tech-japan.vercel.app?subject=メルマガ登録&body=${encodeURIComponent(email)} からの登録リクエスト`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <p className="text-2xl mb-2">💌</p>
        <p className="text-sm font-semibold text-pink-600 dark:text-pink-400">ありがとうございます！</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">登録を受け付けました。最新情報をお届けします。</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/30 dark:to-purple-950/30 rounded-2xl border border-pink-100 dark:border-pink-900 p-6">
      <div className="flex items-center gap-2 mb-2">
        <Mail size={18} className="text-pink-500" />
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">最新情報をメールで受け取る</h3>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
        海外美容トレンド・新コスメ情報を週1回お届けします。登録無料。
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-pink-500 text-white text-sm font-bold hover:bg-pink-600 transition-colors whitespace-nowrap"
        >
          登録
        </button>
      </form>
    </div>
  );
}
