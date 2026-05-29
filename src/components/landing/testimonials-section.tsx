"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/types";
import styles from "./testimonials-section.module.css";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

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
        <p className={styles.eyebrow}>DON&apos;T TAKE OUR WORD FOR IT</p>
        <h2 id="testimonials-heading" className={styles.heading}>
          What Our Clients Say
        </h2>
        <div className={styles.rule} aria-hidden="true" />

        <div className={styles.carousel}>
          <button
            className={styles.navBtn}
            onClick={prev}
            aria-label="Previous testimonial"
            type="button"
          >
            ‹
          </button>

          <div className={styles.card}>
            <div className={styles.avatar}>
              <span className={styles.avatarText}>{t.initial}</span>
            </div>
            <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }, (_, i) => (
                <span key={i} aria-hidden="true">★</span>
              ))}
            </div>
            <blockquote className={styles.quote}>
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <div className={styles.meta}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.dot} aria-hidden="true">·</span>
              <span className={styles.date}>{t.date}</span>
              <span className={styles.dot} aria-hidden="true">·</span>
              <span className={styles.source}>{t.source}</span>
            </div>
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

        {/* Dots */}
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
      </div>
    </section>
  );
}
