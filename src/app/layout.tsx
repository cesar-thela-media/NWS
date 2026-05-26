import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "NWS | Custom Homes & Remodeling",
  description:
    "NWS builds and remodels timeless homes across Richmond, Katy, Sugar Land, and Greater Houston.",
  openGraph: {
    title: "NWS | Custom Homes & Remodeling",
    description:
      "Timeless craftsmanship. Elevated living. Explore NWS custom homes and remodeling services.",
    images: ["/reference/full-page-reference.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NWS | Custom Homes & Remodeling",
    description:
      "Custom homes and remodeling across Richmond, Katy, Sugar Land, and Greater Houston.",
    images: ["/reference/full-page-reference.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
