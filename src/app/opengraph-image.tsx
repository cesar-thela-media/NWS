import { ImageResponse } from "next/og";

export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt         = "NWS Custom Homes & Remodeling — Richmond, TX";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c0f14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Gold rule */}
        <div
          style={{
            width: 56,
            height: 2,
            background: "#a07840",
            marginBottom: 28,
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            color: "#a07840",
            fontSize: 16,
            letterSpacing: "0.18em",
            marginBottom: 20,
            fontFamily: "sans-serif",
          }}
        >
          NWS CUSTOM HOMES &amp; REMODELING
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#f4f1ec",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.08,
            maxWidth: 780,
          }}
        >
          Building Timeless Homes Across Greater Houston
        </div>

        {/* Sub */}
        <div
          style={{
            color: "#c8c4bc",
            fontSize: 22,
            marginTop: 36,
            fontFamily: "sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          Richmond · Sugar Land · Katy · Fulshear · Since 2007
        </div>

        {/* NWS wordmark bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 90,
            color: "#f4f1ec",
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: "0.14em",
            opacity: 0.15,
          }}
        >
          NWS
        </div>
      </div>
    ),
    { ...size },
  );
}
