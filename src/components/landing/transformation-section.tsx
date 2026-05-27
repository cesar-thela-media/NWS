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
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="transformation-heading" className={styles.heading}>
          {content.headline}
        </h2>

        {/* ── Before / After slider ── */}
        <div className={styles.compareFrame}>
          {/* Before image (fills whole frame, clipped by afterLayer) */}
          <Image
            src={content.beforeImage}
            alt="Kitchen before remodel"
            fill
            sizes="(max-width: 1200px) 100vw, 1288px"
            className={styles.beforeImage}
          />

          {/* After image — right-side reveal */}
          <div
            className={styles.afterLayer}
            style={{ width: `${100 - position}%` }}
          >
            <Image
              src={content.afterImage}
              alt="Kitchen after remodel"
              fill
              sizes="(max-width: 1200px) 100vw, 1288px"
              className={styles.afterImage}
            />
          </div>

          {/* Labels */}
          <span className={styles.beforeLabel} aria-hidden="true">Before</span>
          <span className={styles.afterLabel} aria-hidden="true">After</span>

          {/* Drag line + handle */}
          <div className={styles.sliderLine} style={{ left: `${position}%` }} />
          <div className={styles.sliderHandle} style={{ left: `${position}%` }}>
            <span aria-hidden="true">‹›</span>
          </div>

          {/* Invisible range input drives the slider */}
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            onPointerUp={() =>
              trackLandingEvent("landing_transformation_slider_adjust")
            }
            onKeyUp={() =>
              trackLandingEvent("landing_transformation_slider_adjust")
            }
            className={styles.sliderInput}
            aria-label="Drag to compare before and after"
          />
        </div>

        {/* ── Info chips ── */}
        <ul className={styles.chips}>
          {content.chips.map((chip) => (
            <li key={chip} className={styles.chip}>
              <span className={styles.chipIcon} aria-hidden="true">
                {chipIcon(chip)}
              </span>
              <span>{chip}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/galleries"
          className={styles.caseStudyLink}
          onClick={() =>
            trackLandingEvent("landing_transformation_case_study_click")
          }
        >
          {content.caseStudyCta} →
        </Link>
      </div>
    </section>
  );
}
