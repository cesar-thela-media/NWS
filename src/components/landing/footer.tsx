"use client";

import { trackLandingEvent } from "@/lib/analytics";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.watermark} aria-hidden="true">
        1989
      </div>

      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <p className={styles.brand}>NWS</p>
          <p className={styles.brandSub}>Custom Homes & Remodeling</p>
          <p className={styles.tagline}>Built on Integrity. Designed for Life.</p>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/NWSHomes/" aria-label="Facebook">
              <span className={styles.socialGlyph} aria-hidden="true">
                f
              </span>
            </a>
            <a href="https://www.instagram.com/nwshomes/?hl=en" aria-label="Instagram">
              <span className={styles.socialGlyph} aria-hidden="true">
                ◎
              </span>
            </a>
            <a
              href="https://www.houzz.com/professionals/home-builders/nws-custom-homes-and-remodeling-pfvwus-pf~849721310"
              aria-label="Houzz"
            >
              <span className={styles.socialGlyph} aria-hidden="true">
                h
              </span>
            </a>
            <a href="https://g.page/r/CRyZ8e5jvBiVEBM/review" aria-label="Leave a Review">
              <span className={styles.socialGlyph} aria-hidden="true">
                ★
              </span>
            </a>
          </div>
        </div>

        <div>
          <h3 className={styles.colHeading}>Services</h3>
          <ul className={styles.list}>
            <li>Custom Home Building</li>
            <li>Whole Home Remodeling</li>
            <li>Kitchen Remodeling</li>
            <li>Bathroom Remodeling</li>
            <li>Shower Remodel</li>
            <li>Open Concept Remodeling</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.colHeading}>Areas We Serve</h3>
          <ul className={styles.list}>
            <li>Richmond</li>
            <li>Sugar Land</li>
            <li>Katy</li>
            <li>Fulshear</li>
            <li>West Side of Houston</li>
            <li>Cinco Ranch</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.colHeading}>Contact</h3>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                ☎
              </span>
              <a
                href="tel:+12812992309"
                onClick={() => trackLandingEvent("landing_footer_phone_click")}
              >
                Office: (281) 299-2309
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                ☏
              </span>
              <a href="tel:+17138846571">Mobile: (713) 884-6571</a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                ✉
              </span>
              <a
                href="mailto:info@nws-homes.com"
                onClick={() => trackLandingEvent("landing_footer_email_click")}
              >
                info@nws-homes.com
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                ⌖
              </span>
              <span>Richmond, TX</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.legalRow}>
        <p>© 2026 NWS Custom Homes & Remodeling. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
