import Image from "next/image";
import type { ServicesContent } from "@/lib/types";
import styles from "./services-section.module.css";

interface ServicesSectionProps {
  content: ServicesContent;
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={styles.inner}>
        <div className={styles.topBand}>
          <div className={styles.copyCol}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2 id="services-heading" className={styles.heading}>
              {content.headline}
            </h2>
          </div>

          <div className={styles.cards}>
            {content.cards.map((card, index) => (
              <article key={card} className={styles.card}>
                <Image
                  src={content.cardImages[index]}
                  alt={card}
                  fill
                  sizes="(max-width: 1400px) 33vw, 286px"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <h3>{card}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.testimonialBand}>
          <div className={styles.quoteCol}>
            <p className={styles.quoteMark}>“</p>
            <blockquote className={styles.quote}>{content.testimonial}</blockquote>
            <p className={styles.attribution}>{content.attribution}</p>
          </div>

          <div className={styles.mediaCol}>
            <Image
              src={content.testimonialImage}
              alt="Completed NWS feature remodel"
              fill
              sizes="(max-width: 1200px) 100vw, 1040px"
              className={styles.testimonialImage}
            />
            <div className={styles.reviewChip}>
              <p className={styles.stars}>★★★★★</p>
              <p>{content.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
