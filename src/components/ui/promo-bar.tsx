"use client";

import { trackLandingEvent } from "@/lib/analytics";
import styles from "./promo-bar.module.css";

export function PromoBar() {
  return (
    <div className={styles.bar} role="banner" aria-label="Promotional offer">
      <p className={styles.text}>
        Call us today and mention the website to receive a{" "}
        <strong>free consultation</strong> and{" "}
        <strong>5% off</strong> your next project!
      </p>
      <a
        href="tel:+12812992309"
        className={styles.cta}
        onClick={() => trackLandingEvent("promo_bar_call_click")}
      >
        Call Now
      </a>
    </div>
  );
}
