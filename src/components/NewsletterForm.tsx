"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setErrorMsg("");
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("_subject", "Beauty Tech Japan メルマガ登録");
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("_replyto", email);
      const response = await fetch("https://formsubmit.co/ajax/tz77772014@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result: unknown = await response.json();
      if (
        result !== null &&
        typeof result === "object" &&
        "success" in result &&
        (result as Record<string, unknown>).success === "true"
      ) {
        setSubmitted(true);
      } else {
        setErrorMsg("送信に失敗しました。再度お試しください。");
      }
    } catch {
      setErrorMsg("送信に失敗しました。再度お試しください。");
    } finally {
      setLoading(false);
    }
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
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
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
          disabled={loading}
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-pink-500 text-white text-sm font-bold hover:bg-pink-600 transition-colors disabled:opacity-60"
        >
          {loading ? "送信中..." : "メルマガに登録する"}
        </button>
      </form>
      {errorMsg && (
        <p className="mt-2 text-xs text-red-500">{errorMsg}</p>
      )}
    </div>
  );
}
