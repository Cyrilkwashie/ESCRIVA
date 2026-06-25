import { ImageResponse } from "next/og";
import { brand } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.void,
          borderRadius: 8,
          border: `1px solid ${brand.gold}55`,
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 300,
            color: brand.gold,
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.02em",
          }}
        >
          E
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 5,
            right: 5,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: brand.gold,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
