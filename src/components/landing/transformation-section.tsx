"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackLandingEvent } from "@/lib/analytics";
import type { TransformationContent } from "@/lib/types";
import styles from "./transformation-section.module.css";

interface TransformationSectionProps {
  content: TransformationContent;
}

const CHIP_ICONS: Record<string, string> = {
  Week: "◷",
  Investment: "$",
  Remodel: "⌂",
};

function chipIcon(text: string): string {
  const match = Object.keys(CHIP_ICONS).find((k) => text.includes(k));
  return match ? CHIP_ICONS[match] : "◇";
}

export function TransformationSection({ content }: TransformationSectionProps) {
  const [position, setPosition] = useState(50);

  return (
    <section
      className={styles.section}
      id="case-study"
      aria-labelledby="transformation-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* ── Left: project context ── */}
          <div className={styles.detailsCol}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2 id="transformation-heading" className={styles.heading}>
              {content.headline}
            </h2>
            <div className={styles.rule} aria-hidden="true" />

            <ul className={styles.statList}>
              {content.chips.map((chip) => (
                <li key={chip} className={styles.statItem}>
                  <span className={styles.statIcon} aria-hidden="true">
                    {chipIcon(chip)}
                  </span>
                  <span className={styles.statText}>{chip}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/galleries"
              className={styles.caseStudyLink}
              onClick={() => trackLandingEvent("landing_transformation_case_study_click")}
            >
              {content.caseStudyCta} →
            </Link>
          </div>

          {/* ── Right: before / after slider ── */}
          <div className={styles.sliderCol}>
            <div className={styles.compareFrame}>
              <Image
                src={content.beforeImage}
                alt="Room before remodel"
                fill
                sizes="(max-width: 1000px) 100vw, 62vw"
                className={styles.beforeImage}
              />

              <div
                className={styles.afterLayer}
                style={{ clipPath: `inset(0 0 0 ${position}%)` }}
              >
                <Image
                  src={content.afterImage}
                  alt="Room after remodel"
                  fill
                  sizes="(max-width: 1000px) 100vw, 62vw"
                  className={styles.afterImage}
                />
              </div>

              <span className={styles.beforeLabel} aria-hidden="true">Before</span>
              <span className={styles.afterLabel} aria-hidden="true">After</span>

              <div className={styles.sliderLine} style={{ left: `${position}%` }} />
              <div className={styles.sliderHandle} style={{ left: `${position}%` }}>
                <span aria-hidden="true">‹›</span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                onPointerUp={() => trackLandingEvent("landing_transformation_slider_adjust")}
                onKeyUp={() => trackLandingEvent("landing_transformation_slider_adjust")}
                className={styles.sliderInput}
                aria-label="Drag to compare before and after"
              />
            </div>

            <p className={styles.sliderHint} aria-hidden="true">
              ← Drag to reveal →
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
