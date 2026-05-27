import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | NWS Custom Homes & Remodeling",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: January 2026</p>
          <div className={styles.body}>
            <p>By using the NWS website (nws-homes.com), you agree to these terms. If you do not agree, please do not use this site.</p>
            <h2>Use of This Site</h2>
            <p>This website is provided for informational purposes only. All content is the intellectual property of NWS Custom Homes &amp; Remodeling. You may not reproduce, distribute, or create derivative works without written permission.</p>
            <h2>No Warranty</h2>
            <p>Information on this site is provided &ldquo;as-is&rdquo; without warranties of any kind. Project timelines, pricing, and specifications discussed are estimates only and subject to formal written contracts.</p>
            <h2>Limitation of Liability</h2>
            <p>NWS shall not be liable for any damages arising from use of this website or reliance on information contained herein.</p>
            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of the State of Texas. Any disputes shall be resolved in Fort Bend County, Texas.</p>
            <h2>Contact</h2>
            <p>Questions? Email us at <a href="mailto:info@nws-homes.com">info@nws-homes.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
