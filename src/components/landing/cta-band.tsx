"use client";

import Link from "next/link";
import { trackLandingEvent } from "@/lib/analytics";
import type { CtaFooterContent } from "@/lib/types";
import styles from "./cta-band.module.css";

interface CtaBandProps {
  content: CtaFooterContent;
}

export function CtaBand({ content }: CtaBandProps) {
  return (
    <section className={styles.section} id="final-cta" aria-labelledby="cta-heading">
      {/* Decorative watermark */}
      <div className={styles.watermark} aria-hidden="true">NWS</div>

      <div className={styles.inner}>
        <h2 id="cta-heading" className={styles.heading}>
          {content.heading}
        </h2>
        <p className={styles.body}>{content.body}</p>

        <div className={styles.buttonRow}>
          <Link
            className={styles.primaryButton}
            href="/contact"
            onClick={() => trackLandingEvent("landing_finalcta_primary_click")}
          >
            {content.primaryCta}
          </Link>
          <a
            className={styles.secondaryButton}
            href="tel:+12812992309"
            onClick={() => trackLandingEvent("landing_finalcta_secondary_click")}
          >
            {content.secondaryCta}
          </a>
        </div>

        <p className={styles.serviceAreas}>{content.serviceAreas}</p>
      </div>
    </section>
  );
}
