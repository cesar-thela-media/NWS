import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { PromoBar } from "@/components/ui/promo-bar";
import { SocialProofBadges } from "@/components/ui/social-proof-badges";
import { FloatingActions } from "@/components/ui/floating-actions";
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      {/* ── Google Tag Manager ── Add NEXT_PUBLIC_GTM_ID=GTM-XXXXXX to .env.local */}
      {gtmId && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      )}
      <body>
        {/* GTM noscript fallback */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <PromoBar />
        {children}
        <FloatingActions />
        <CookieConsent />
      </body>
    </html>
  );
}
