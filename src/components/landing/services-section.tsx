import Image from "next/image";
import Link from "next/link";
import type { ServicesContent } from "@/lib/types";
import styles from "./services-section.module.css";

/* Map card title → route slug */
const CARD_SLUGS: Record<string, string> = {
  "Custom Home\nBuilding":     "custom-home-building",
  "Kitchen\nRemodeling":       "kitchen-remodeling",
  "Bathroom\nRemodeling":      "bathroom-remodeling",
  "Shower\nRemodel":           "shower-remodel",
  "Bathtub\nRemodel":          "bathtub-remodeling",
  "Room\nAdditions":           "room-additions",
  "Open Concept\nRemodeling":  "open-concept-remodeling",
};

interface ServicesSectionProps {
  content: ServicesContent;
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={styles.topBand}>
        {/* ── Left: eyebrow + heading ── */}
        <div className={styles.copyCol}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id="services-heading" className={styles.heading}>
            {content.headline}
          </h2>
        </div>

        {/* ── Right: 5 service cards ── */}
        <ul className={styles.cards}>
          {content.cards.map((card, index) => {
            const slug = CARD_SLUGS[card] ?? "services";
            return (
              <li key={card} className={styles.card}>
                <Link href={`/services/${slug}`} className={styles.cardLink} aria-label={card.replace("\n", " ")}>
                  <Image
                    src={content.cardImages[index]}
                    alt={card.replace("\n", " ")}
                    fill
                    sizes="(max-width: 900px) 45vw, (max-width: 1400px) 22vw, 260px"
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{card}</h3>
                    <span className={styles.cardArrow} aria-hidden="true">→</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className={styles.scrollHint} aria-hidden="true">Scroll for more →</p>
      </div>

      {/* ── Bottom: quote + image ── */}
      <div className={styles.testimonialBand}>
        <div className={styles.quoteCol}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <blockquote className={styles.quote}>
            {content.testimonial}
          </blockquote>
          <p className={styles.attribution}>{content.attribution}</p>
        </div>

        <div className={styles.mediaCol}>
          <Image
            src={content.testimonialImage}
            alt="Completed NWS remodel"
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            className={styles.testimonialImage}
          />
          <div className={styles.reviewChip}>
            <span className={styles.stars} aria-label="4.8 stars">★★★★</span>
            <span className={styles.reviewText}>{content.rating}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
