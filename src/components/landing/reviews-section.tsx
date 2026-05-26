"use client";

import { trackLandingEvent } from "@/lib/analytics";
import type { ReviewsContent } from "@/lib/types";
import styles from "./reviews-section.module.css";

interface ReviewsSectionProps {
  content: ReviewsContent;
}

export function ReviewsSection({ content }: ReviewsSectionProps) {
  return (
    <section className={styles.section} id="reviews" aria-labelledby="reviews-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.copyCol}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2 id="reviews-heading" className={styles.heading}>
              {content.headline}
            </h2>
            <p className={styles.body}>{content.body}</p>
          </div>

          <div className={styles.ratingCard}>
            <p className={styles.stars}>★★★★★</p>
            <p className={styles.rating}>{content.rating}</p>
            <a
              className={styles.reviewLink}
              href={content.reviewCtaUrl}
              onClick={() => trackLandingEvent("landing_reviews_link_click")}
            >
              {content.reviewCta}
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {content.cards.map((card) => (
            <article key={`${card.name}-${card.date}`} className={styles.reviewCard}>
              <p className={styles.cardStars}>★★★★★</p>
              <p className={styles.quote}>{card.quote}</p>
              <div className={styles.meta}>
                <div>
                  <p className={styles.name}>{card.name}</p>
                  <p className={styles.source}>{card.source}</p>
                </div>
                <p className={styles.date}>{card.date}</p>
              </div>
            </article>
          ))}

          <aside className={styles.proofCard}>
            <p className={styles.proofValue}>{content.proof.value}</p>
            <p className={styles.proofLabel}>{content.proof.label}</p>
            <p className={styles.proofBody}>{content.proof.body}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
