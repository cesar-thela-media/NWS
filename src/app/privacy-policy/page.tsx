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
          <p className={styles.updated}>Last updated: May 2026</p>
          <div className={styles.body}>
            <p>NWS Custom Homes &amp; Remodeling (&ldquo;NWS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

            <h2>Information We Collect</h2>
            <p><strong>Personal Information.</strong> We collect information you voluntarily provide when you fill out our contact form or communicate with us, including your name, email address, phone number, project details, and property information.</p>
            <p><strong>Automatically Collected Data.</strong> When you visit our site, we automatically collect certain information through cookies and similar technologies, including your IP address, browser type, operating system, referring URLs, and pages viewed.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and consultation requests</li>
              <li>To provide estimates, project proposals, and service communications</li>
              <li>To improve our website and service offerings</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

            <h2>Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:</p>
            <ul>
              <li><strong>Functional cookies</strong> &mdash; necessary for the website to function properly</li>
              <li><strong>Analytics cookies</strong> &mdash; to understand how visitors interact with our site</li>
            </ul>
            <p>You can control cookie preferences through your browser settings. Disabling certain cookies may affect site functionality.</p>

            <h2>Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>Data Retention</h2>
            <p>We retain your personal information only as long as necessary to fulfill the purposes described in this policy, or as required by applicable law.</p>

            <h2>Third-Party Services</h2>
            <p>We may use third-party service providers (such as Google Analytics and web hosting services) who have their own privacy policies governing the use of your information.</p>

            <h2>Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of certain data collection practices</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

            <h2>Contact</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <p>
              Email: <a href="mailto:info@nws-homes.com">info@nws-homes.com</a><br />
              Phone: <a href="tel:+12812992309">(281) 299-2309</a><br />
              Mail: Richmond, TX 77469
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
