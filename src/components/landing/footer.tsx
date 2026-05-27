"use client";

import Link from "next/link";
import { trackLandingEvent } from "@/lib/analytics";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
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
              f
            </a>
            <a
              href="https://www.instagram.com/nwshomes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NWS on Instagram"
              className={styles.socialLink}
            >
              in
            </a>
            <a
              href="https://www.houzz.com/professionals/home-builders/nws-custom-homes-and-remodeling-pfvwus-pf~849721310"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NWS on Houzz"
              className={styles.socialLink}
            >
              h
            </a>
            <a
              href="https://g.page/r/CRyZ8e5jvBiVEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leave a Google review"
              className={styles.socialLink}
            >
              ★
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
              <span>1234 Monroe Rd, Ste 500<br />Richmond, TX 77469</span>
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
