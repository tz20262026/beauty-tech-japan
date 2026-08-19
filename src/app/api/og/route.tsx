import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "海外美容・コスメ最新情報を日本語で";
  const tag = searchParams.get("tag") ?? "";

  // 背景写真（上品なベージュトーンのポートレート）をbase64化して敷き込む。
  // edge runtimeでは相対fetchが安定して動くため、public配下の静的画像を都度取得する。
  const bgUrl = new URL("/images/og-bg-woman.jpg", req.url);
  let bgDataUri = "";
  try {
    const bgRes = await fetch(bgUrl);
    const bgBuffer = await bgRes.arrayBuffer();
    const bgBase64 = Buffer.from(bgBuffer).toString("base64");
    bgDataUri = `data:image/jpeg;base64,${bgBase64}`;
  } catch {
    bgDataUri = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          fontFamily: "sans-serif",
          background: "#2b1420",
        }}
      >
        {/* 背景写真（右側に人物の顔が来るクロップ済み画像） */}
        {bgDataUri && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bgDataUri}
            width={1200}
            height={630}
            style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
          />
        )}

        {/* 左から右へ暗いワインレッド→透明のグラデーション（文字の視認性確保＋人物の顔は右側でクリアに見せる） */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
            background:
              "linear-gradient(100deg, rgba(30,10,20,0.94) 0%, rgba(41,14,26,0.88) 32%, rgba(58,20,36,0.55) 52%, rgba(80,30,48,0.14) 70%, rgba(80,30,48,0) 82%)",
            display: "flex",
          }}
        />

        {/* コンテンツ */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "1200px",
            height: "630px",
            padding: "64px 72px",
          }}
        >
          {/* 上段: ブランドバッジ + タグ */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 24,
                fontWeight: 700,
                color: "#ffffff",
                background: "rgba(255,255,255,0.14)",
                border: "1.5px solid rgba(255,255,255,0.55)",
                borderRadius: 100,
                padding: "10px 24px",
                letterSpacing: "0.02em",
              }}
            >
              <span>💄</span>
              <span>Beauty Tech Japan</span>
            </div>

            {tag && (
              <div
                style={{
                  display: "flex",
                  marginTop: 22,
                  fontSize: 20,
                  fontWeight: 700,
                  background: "#e8447a",
                  color: "#ffffff",
                  borderRadius: 100,
                  padding: "8px 22px",
                }}
              >
                {tag}
              </div>
            )}
          </div>

          {/* 中段: タイトル */}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 34 ? 46 : 56,
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "left",
              lineHeight: 1.35,
              maxWidth: 700,
              letterSpacing: "0.01em",
            }}
          >
            {title}
          </div>

          {/* 下段: URL */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 20,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <div style={{ display: "flex", width: 36, height: 2, background: "#e8447a" }} />
            beauty-tech-japan.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
