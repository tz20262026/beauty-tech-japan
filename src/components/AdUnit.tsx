"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdUnit({ slot }: { slot: string }) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense初期化エラーを無視
    }
  }, []);

  if (!clientId) return null;

  return (
    // min-height を確保し、広告読み込み前後でのレイアウトシフト（CLS悪化）を防ぐ
    <div className="overflow-hidden min-h-[100px]">
      <ins
        className="adsbygoogle block"
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
