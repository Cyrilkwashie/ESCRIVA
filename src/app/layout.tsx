import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { siteConfig } from "@/data/content";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = getSiteUrl();
const title = "XIX";
const description = siteConfig.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${title}`,
  },
  description,
  applicationName: title,
  authors: [{ name: "Cyril" }],
  creator: "Cyril",
  keywords: [
    "Escriva",
    "birthday",
    "19th birthday",
    "love letter",
  ],
  category: "personal",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: title,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "XIX — Happy 19th Birthday",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "XIX",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#0A0A0A" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} bg-void text-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
