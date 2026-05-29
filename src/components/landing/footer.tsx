"use client";

import Link from "next/link";
import { trackLandingEvent } from "@/lib/analytics";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Back to top */}
      <button
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        type="button"
      >
        <span aria-hidden="true">↑</span>
      </button>
      <div className={styles.inner}>
        {/* ── Brand column ── */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand} aria-label="NWS — Home">NWS</Link>
          <p className={styles.brandSub}>Custom Homes &amp; Remodeling</p>
          <p className={styles.tagline}>Built on Integrity. Designed for Life.</p>

          <nav className={styles.socials} aria-label="Social media links">
            {/* ⚠️ TODO: Verify all social URLs with client before launch */}
            <a
              href="https://www.facebook.com/NWSHomes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NWS on Facebook"
              className={styles.socialLink}
            >
              {/* Facebook */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nwshomes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NWS on Instagram"
              className={styles.socialLink}
            >
              {/* Instagram */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.houzz.com/professionals/home-builders/nws-custom-homes-and-remodeling-pfvwus-pf~849721310"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NWS on Houzz"
              className={styles.socialLink}
            >
              {/* Houzz house-mark */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L3 9v13h7v-7h4v7h7V9L12 2zm0 2.5 7 5.8V20h-3v-7H8v7H5V10.3l7-5.8z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCeJ8l_IhyNplw76bt0yk4NA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NWS on YouTube"
              className={styles.socialLink}
            >
              {/* YouTube */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.5 6.1c-.3-1-1-1.7-2-2C18.9 3.5 12 3.5 12 3.5s-6.9 0-8.5.6c-1 .3-1.7 1-2 2C1 8.2 1 12 1 12s0 3.8.5 5.9c.3 1 1 1.7 2 2 1.6.6 8.5.6 8.5.6s6.9 0 8.5-.6c1-.3 1.7-1 2-2 .5-2.1.5-5.9.5-5.9s0-3.8-.5-5.9zM9.5 15.5V8.5l6 3.5-6 3.5z"/>
              </svg>
            </a>
            <a
              href="https://g.page/r/CRyZ8e5jvBiVEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leave a Google review"
              className={styles.socialLink}
            >
              {/* Google G */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.8 10.2H12v3.6h5.6c-.5 2.6-2.8 4.4-5.6 4.4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.8.5 3.8 1.4l2.6-2.6C16.7 3.5 14.5 2.6 12 2.6 6.8 2.6 2.6 6.8 2.6 12s4.2 9.4 9.4 9.4c5.4 0 9-3.8 9-9.2 0-.6-.1-1.3-.2-2z"/>
              </svg>
            </a>
          </nav>
        </div>

        {/* ── Services ── */}
        <div>
          <h3 className={styles.colHeading}>Services</h3>
          <ul className={styles.list}>
            <li><Link href="/services/custom-home-building">Custom Home Building</Link></li>
            <li><Link href="/services/kitchen-remodeling">Kitchen Remodeling</Link></li>
            <li><Link href="/services/bathroom-remodeling">Bathroom Remodeling</Link></li>
            <li><Link href="/services/shower-remodel">Shower Remodel</Link></li>
            <li><Link href="/services/bathtub-remodeling">Bathtub Remodel</Link></li>
            <li><Link href="/services/room-additions">Room Additions</Link></li>
            <li><Link href="/services/open-concept-remodeling">Open Concept Remodeling</Link></li>
            <li><Link href="/services/whole-home-remodeling">Whole Home Remodeling</Link></li>
            <li><Link href="/services">All Services →</Link></li>
          </ul>
        </div>

        {/* ── Where we serve ── */}
        <div>
          <h3 className={styles.colHeading}>Where We Serve</h3>
          <ul className={styles.list}>
            <li>Richmond, TX</li>
            <li>Sugar Land, TX</li>
            <li>Katy, TX</li>
            <li>Fulshear, TX</li>
            <li>Cinco Ranch, TX</li>
            <li>Greater Houston Area</li>
          </ul>
        </div>

        {/* ── Quick links + Contact ── */}
        <div>
          <h3 className={styles.colHeading}>Quick Links</h3>
          <ul className={styles.list}>
            <li><Link href="/about">About NWS</Link></li>
            <li><Link href="/galleries">Photo Galleries</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
          <h3 className={`${styles.colHeading} ${styles.colHeadingSpacer}`}>Contact</h3>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">☎</span>
              <a
                href="tel:+12812992309"
                onClick={() => trackLandingEvent("landing_footer_phone_click")}
              >
                (281) 299-2309
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">✉</span>
              <a
                href="mailto:info@nws-homes.com"
                onClick={() => trackLandingEvent("landing_footer_email_click")}
              >
                info@nws-homes.com
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">⊙</span>
              <span>Richmond, TX 77469</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.legalRow}>
        <p>© 2026 NWS Custom Homes &amp; Remodeling. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
