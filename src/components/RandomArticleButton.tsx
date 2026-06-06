"use client";

import { useRouter } from "next/navigation";
import { Shuffle } from "lucide-react";

export default function RandomArticleButton({ ids }: { ids: string[] }) {
  const router = useRouter();

  const go = () => {
    const id = ids[Math.floor(Math.random() * ids.length)];
    router.push(`/articles/${id}`);
  };

  return (
    <button
      onClick={go}
      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors border border-white/30"
    >
      <Shuffle size={13} />
      気分でランダムに読む
    </button>
  );
}
