import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Beauty Tech Japan";
  const tag = searchParams.get("tag") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 40%, #e1bee7 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* brand */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#c2185b",
            marginBottom: 32,
            letterSpacing: "0.05em",
          }}
        >
          💄 Beauty Tech Japan
        </div>

        {/* tag badge */}
        {tag && (
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              background: "#c2185b",
              color: "#fff",
              borderRadius: 100,
              padding: "6px 20px",
              marginBottom: 24,
            }}
          >
            {tag}
          </div>
        )}

        {/* title */}
        <div
          style={{
            fontSize: title.length > 40 ? 36 : 44,
            fontWeight: 800,
            color: "#1a1a2e",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: 920,
          }}
        >
          {title}
        </div>

        {/* bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            fontSize: 16,
            color: "#880e4f",
            opacity: 0.7,
          }}
        >
          beauty-tech-japan.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
