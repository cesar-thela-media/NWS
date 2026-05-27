import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | NWS Custom Homes & Remodeling",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: January 2026</p>
          <div className={styles.body}>
            <p>NWS Custom Homes &amp; Remodeling (&ldquo;NWS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy describes how we collect, use, and protect information when you use our website.</p>
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly (name, email, phone, project details) when you use our contact form. We also collect standard web analytics data (pages visited, browser type, referral source) through cookies.</p>
            <h2>How We Use It</h2>
            <p>We use your information solely to respond to your inquiry and provide you with project-related communications. We do not sell or share your personal information with third parties for marketing purposes.</p>
            <h2>Cookies</h2>
            <p>Our site uses functional cookies to ensure the website operates correctly and analytics cookies to understand traffic patterns. You may disable cookies in your browser settings.</p>
            <h2>Contact</h2>
            <p>Questions? Email us at <a href="mailto:info@nws-homes.com">info@nws-homes.com</a> or call (281) 299-2309.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
