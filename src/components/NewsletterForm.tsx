import { Mail } from "lucide-react";

export default function NewsletterForm() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/30 dark:to-purple-950/30 rounded-2xl border border-pink-100 dark:border-pink-900 p-6">
      <div className="flex items-center gap-2 mb-2">
        <Mail size={18} className="text-pink-500" />
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">最新情報をメールで受け取る</h3>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
        海外美容トレンド・新コスメ情報を週1回お届けします。登録無料。
      </p>
      <form
        action="https://formsubmit.co/tz77772014@gmail.com"
        method="POST"
        className="flex flex-col sm:flex-row gap-2"
      >
        <input type="hidden" name="_subject" value="Beauty Tech Japan メルマガ登録" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://beauty-tech-japan.vercel.app/?thanks=1" />
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="flex-1 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 dark:text-white"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-pink-500 text-white text-sm font-bold hover:bg-pink-600 transition-colors"
        >
          メルマガに登録する
        </button>
      </form>
    </div>
  );
}
