import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

/* ── Fonts ─────────────────────────────────────────────── */
const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ── Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.nws-homes.com"),
  title: "NWS | Custom Homes & Remodeling — Richmond, TX",
  description:
    "NWS builds and remodels timeless homes across Richmond, Katy, Sugar Land, and Greater Houston. Since 2007.",
  keywords: [
    "custom homes Richmond TX",
    "home remodeling Sugar Land",
    "kitchen remodeling Katy",
    "bathroom remodel Houston",
    "NWS Custom Homes",
  ],
  openGraph: {
    title: "NWS | Custom Homes & Remodeling",
    description:
      "Timeless craftsmanship. Elevated living. Explore NWS custom homes and remodeling services.",
    siteName: "NWS Custom Homes & Remodeling",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NWS | Custom Homes & Remodeling",
    description:
      "Custom homes and remodeling across Richmond, Katy, Sugar Land, and Greater Houston.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ── Root layout ────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
