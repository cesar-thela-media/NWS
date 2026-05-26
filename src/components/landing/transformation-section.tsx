"use client";

import { useState } from "react";
import Image from "next/image";
import { trackLandingEvent } from "@/lib/analytics";
import type { TransformationContent } from "@/lib/types";
import styles from "./transformation-section.module.css";

interface TransformationSectionProps {
  content: TransformationContent;
}

function getChipIcon(chip: string) {
  if (chip.includes("Week")) return "◷";
  if (chip.includes("$") || chip.includes("Investment")) return "$";
  return "⌂";
}

export function TransformationSection({ content }: TransformationSectionProps) {
  const [position, setPosition] = useState(50);

  return (
    <section className={styles.section} id="case-study" aria-labelledby="transformation-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="transformation-heading" className={styles.heading}>
          {content.headline}
        </h2>

        <div className={styles.compareFrame}>
          <Image
            src={content.beforeImage}
            alt="Before remodel view"
            fill
            sizes="(max-width: 1200px) 100vw, 2044px"
            className={styles.beforeImage}
          />

          <div className={styles.afterLayer} style={{ width: `${100 - position}%` }}>
            <Image
              src={content.afterImage}
              alt="After remodel view"
              fill
              sizes="(max-width: 1200px) 100vw, 2044px"
              className={styles.afterImage}
            />
          </div>

          <p className={styles.beforeLabel}>BEFORE</p>
          <p className={styles.afterLabel}>AFTER</p>

          <div className={styles.sliderLine} style={{ left: `${position}%` }} />
          <div className={styles.sliderHandle} style={{ left: `${position}%` }}>
            ⇆
          </div>

          <input
            aria-label="Before and after comparison position"
            className={styles.sliderInput}
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            onPointerUp={() => trackLandingEvent("landing_transformation_slider_adjust")}
            onKeyUp={() => trackLandingEvent("landing_transformation_slider_adjust")}
          />
        </div>

        <ul className={styles.chips}>
          {content.chips.map((chip) => (
            <li key={chip} className={styles.chip}>
              <span className={styles.chipIcon} aria-hidden="true">
                {getChipIcon(chip)}
              </span>
              <span className={styles.chipText}>{chip}</span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className={styles.caseStudyLink}
          onClick={() => trackLandingEvent("landing_transformation_case_study_click")}
        >
          {content.caseStudyCta}
        </a>
      </div>
    </section>
  );
}
