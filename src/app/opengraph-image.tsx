import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/content";
import { brand } from "@/lib/site";

export const runtime = "edge";
export const alt = `For ${siteConfig.name} — Happy 19th Birthday`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: brand.void,
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${brand.gold}18 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 64,
            right: 64,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${brand.gold}88, transparent)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 64,
            right: 64,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${brand.gold}44, transparent)`,
          }}
        />

        <div
          style={{
            fontSize: 108,
            fontWeight: 300,
            color: brand.cream,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          For {siteConfig.name}
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 36,
            fontWeight: 300,
            color: `${brand.cream}cc`,
          }}
        >
          Happy 19th Birthday
        </div>

        <div
          style={{
            marginTop: 40,
            maxWidth: 720,
            textAlign: "center",
            fontSize: 24,
            fontWeight: 300,
            color: `${brand.cream}88`,
            lineHeight: 1.5,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {siteConfig.tagline}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 56,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: `${brand.gold}99`,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: brand.gold,
            }}
          />
          XIX
          <div
            style={{
              width: 32,
              height: 1,
              background: brand.gold,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
