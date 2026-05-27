import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found | NWS Custom Homes & Remodeling",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.code} aria-hidden="true">404</p>
          <h1 className={styles.heading}>Page Not Found</h1>
          <p className={styles.body}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>Back to Home</Link>
            <Link href="/contact" className={styles.outlineBtn}>Contact Us</Link>
          </div>
          <nav className={styles.quickLinks} aria-label="Quick navigation">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/galleries">Galleries</Link>
            <Link href="/faqs">FAQs</Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
