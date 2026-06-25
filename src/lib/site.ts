export const brand = {
  void: "#0A0A0A",
  surface: "#1A1A1A",
  cream: "#F5F0E8",
  gold: "#C9A96E",
} as const;

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
