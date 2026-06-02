"use client";

import Link from "next/link";
import Image from "next/image";
import { trackLandingEvent } from "@/lib/analytics";
import type { CtaFooterContent } from "@/lib/types";
import styles from "./cta-band.module.css";

const CDN = "https://www.nws-homes.com/wp-content/uploads/2023/01";

const STRIP_PHOTOS = [
  { src: `${CDN}/hero-home-remodeled-richmond-tx-1024x576.webp`, alt: "Custom home remodel" },
  { src: `${CDN}/kitchen-remodeling-richmond-tx.jpg`,            alt: "Kitchen remodeling" },
  { src: `${CDN}/bathroom-remodeling-richmond-tx.jpg`,           alt: "Bathroom remodeling" },
  { src: `${CDN}/remodeling-1.jpeg`,                             alt: "Living room remodel" },
  { src: `${CDN}/remodeling-2.jpeg`,                             alt: "Interior detail" },
  { src: `${CDN}/remodeling-3.jpeg`,                             alt: "Kitchen detail" },
  { src: `${CDN}/remodeling-4.jpeg`,                             alt: "Bathroom detail" },
  { src: `${CDN}/custom-homes-2.jpeg`,                           alt: "Custom home" },
];

interface CtaBandProps {
  content: CtaFooterContent;
}

export function CtaBand({ content }: CtaBandProps) {
  return (
    <section className={styles.section} id="final-cta" aria-labelledby="cta-heading">

      {/* ── Photo strip ── */}
      <div className={styles.photoStrip} aria-hidden="true">
        <div className={styles.photoTrack}>
          {[...STRIP_PHOTOS, ...STRIP_PHOTOS].map((photo, i) => (
            <div key={i} className={styles.photoItem}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="220px"
                className={styles.photoImg}
              />
            </div>
          ))}
        </div>
        {/* Fade masks on both edges */}
        <div className={styles.fadeMaskLeft}  aria-hidden="true" />
        <div className={styles.fadeMaskRight} aria-hidden="true" />
      </div>

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
