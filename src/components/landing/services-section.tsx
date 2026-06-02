"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ServicesContent } from "@/lib/types";
import styles from "./services-section.module.css";

const CARD_SLUGS: Record<string, string> = {
  "Custom Home\nBuilding":    "custom-home-building",
  "Kitchen\nRemodeling":      "kitchen-remodeling",
  "Bathroom\nRemodeling":     "bathroom-remodeling",
  "Shower\nRemodel":          "shower-remodel",
  "Bathtub\nRemodel":         "bathtub-remodeling",
  "Room\nAdditions":          "room-additions",
  "Open Concept\nRemodeling": "open-concept-remodeling",
};

const STARTING_PRICES: Record<string, string> = {
  "Custom Home\nBuilding":    "From $350k",
  "Kitchen\nRemodeling":      "From $35k",
  "Bathroom\nRemodeling":     "From $18k",
  "Shower\nRemodel":          "From $8k",
  "Bathtub\nRemodel":         "From $6k",
  "Room\nAdditions":          "From $60k",
  "Open Concept\nRemodeling": "From $25k",
};

interface ServicesSectionProps {
  content: ServicesContent;
}

export function ServicesSection({ content }: ServicesSectionProps) {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">

      {/* ── Header ── */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="services-heading" className={styles.heading}>
          {content.headline}
        </h2>
      </div>

      {/* ── Split panel ── */}
      <div className={styles.split}>

        {/* Left: numbered service list */}
        <ul className={styles.list} role="list">
          {content.cards.map((card, i) => {
            const slug = CARD_SLUGS[card] ?? "services";
            const price = STARTING_PRICES[card];
            const isActive = i === active;
            return (
              <li
                key={card}
                className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <Link href={`/services/${slug}`} className={styles.itemLink} tabIndex={0}>
                  <span className={styles.itemNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.itemTitle}>
                    {card.replace("\n", " ")}
                  </span>
                  {price && <span className={styles.itemPrice}>{price}</span>}
                  <span className={styles.itemArrow} aria-hidden="true">→</span>
                </Link>
                {i < content.cards.length - 1 && (
                  <div className={styles.itemRule} aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right: crossfading image panel */}
        <div className={styles.imagePanel} aria-hidden="true">
          {content.cards.map((card, i) => (
            <div
              key={card}
              className={`${styles.panelSlide} ${i === active ? styles.panelSlideActive : ""}`}
            >
              <Image
                src={content.cardImages[i]}
                alt=""
                fill
                sizes="(max-width: 960px) 100vw, 54vw"
                className={styles.panelImg}
                priority={i === 0}
              />
              <div className={styles.panelOverlay} />
              <p className={styles.panelTag}>{card.replace("\n", " ")}</p>
            </div>
          ))}

          {/* Counter pill */}
          <div className={styles.panelCounter}>
            <span className={styles.panelCountActive}>
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className={styles.panelCountSep}>/</span>
            <span className={styles.panelCountTotal}>
              {String(content.cards.length).padStart(2, "0")}
            </span>
          </div>

          {/* Progress bar */}
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${((active + 1) / content.cards.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Testimonial band ── */}
      <div className={styles.testimonialBand}>
        <div className={styles.quoteCol}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <blockquote className={styles.quote}>{content.testimonial}</blockquote>
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
            <span className={styles.stars} aria-label="4.9 stars">★★★★★</span>
            <span className={styles.reviewText}>{content.rating}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
