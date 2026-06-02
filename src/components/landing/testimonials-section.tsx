"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/types";
import styles from "./testimonials-section.module.css";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

type CardState = "active" | "prev" | "next" | "hidden";

function getCardState(i: number, active: number, total: number): CardState {
  if (i === active) return "active";
  if (i === (active + total - 1) % total) return "prev";
  if (i === (active + 1) % total) return "next";
  return "hidden";
}

const STATE_CLASSES: Record<CardState, string> = {
  active: styles.cardActive,
  prev:   styles.cardPrev,
  next:   styles.cardNext,
  hidden: styles.cardHidden,
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  function prev() { setActive((a) => (a === 0 ? total - 1 : a - 1)); }
  function next() { setActive((a) => (a === total - 1 ? 0 : a + 1)); }

  const t = testimonials[active];
  if (!t) return null;

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.inner}>

        <div className={styles.headRow}>
          <div>
            <p className={styles.eyebrow}>DON&apos;T TAKE OUR WORD FOR IT</p>
            <h2 id="testimonials-heading" className={styles.heading}>
              What Our Clients Say
            </h2>
            <div className={styles.rule} aria-hidden="true" />
          </div>
          <div className={styles.headMeta}>
            <span className={styles.headRating}>4.9</span>
            <div className={styles.headStars} aria-label="4.9 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} aria-hidden="true">★</span>
              ))}
            </div>
            <span className={styles.headReviews}>130+ Google Reviews</span>
          </div>
        </div>

        {/* Stacked card fan */}
        <div className={styles.stackOuter}>
          <div className={styles.cardStack}>
            {testimonials.map((item, i) => {
              const state = getCardState(i, active, total);
              return (
                <div
                  key={`${item.name}-${i}`}
                  className={`${styles.card} ${STATE_CLASSES[state]}`}
                  aria-hidden={state !== "active"}
                >
                  <div className={styles.cardAccent} aria-hidden="true" />
                  <div className={styles.cardTop}>
                    <div className={styles.avatar}>
                      <span className={styles.avatarText}>{item.initial}</span>
                    </div>
                    <div>
                      <div className={styles.stars} aria-label={`${item.rating} out of 5 stars`}>
                        {Array.from({ length: item.rating }, (_, j) => (
                          <span key={j} aria-hidden="true">★</span>
                        ))}
                      </div>
                      <p className={styles.source}>{item.source}</p>
                    </div>
                  </div>
                  <blockquote className={styles.quote}>
                    &ldquo;{item.text}&rdquo;
                  </blockquote>
                  <div className={styles.meta}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.dot} aria-hidden="true">·</span>
                    <span className={styles.date}>{item.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls row */}
        <div className={styles.controls}>
          <button
            className={styles.navBtn}
            onClick={prev}
            aria-label="Previous testimonial"
            type="button"
          >
            ‹
          </button>

          <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dotBtn} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1}`}
                type="button"
              />
            ))}
          </div>

          <button
            className={styles.navBtn}
            onClick={next}
            aria-label="Next testimonial"
            type="button"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
