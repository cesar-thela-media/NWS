"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import type { AboutContent } from "@/lib/types";
import styles from "./about-section.module.css";

interface AboutSectionProps {
  content: AboutContent;
}

function parseValue(v: string): { num: number; suffix: string } {
  const m = v.match(/^(\d+)(.*)$/);
  return m ? { num: parseInt(m[1], 10), suffix: m[2] } : { num: 0, suffix: v };
}

function AnimatedStat({
  stat,
  delay = 0,
}: {
  stat: { value: string; label: string };
  delay?: number;
}) {
  const { num, suffix } = parseValue(stat.value);
  const [display, setDisplay] = useState(0);
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3, once: true });
  const fired = useRef(false);

  useEffect(() => {
    if (!visible || fired.current) return;
    const timer = setTimeout(() => {
      fired.current = true;
      const duration = 1300;
      const startTime = performance.now();
      function tick(now: number) {
        const p = Math.min((now - startTime) / duration, 1);
        const eased = 1 - (1 - p) ** 3;
        setDisplay(Math.round(eased * num));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, num, delay]);

  return (
    <div ref={ref} className={styles.statItem} role="listitem">
      <p className={styles.statValue}>
        {display}
        <span className={styles.statSuffix}>{suffix}</span>
      </p>
      <p className={styles.statLabel}>{stat.label}</p>
    </div>
  );
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>

        {/* ── Left copy column ── */}
        <div className={styles.copyCol}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id="about-heading" className={styles.heading}>
            {content.headline}
          </h2>
          <div className={styles.rule} aria-hidden="true" />
          <p className={styles.body}>{content.body}</p>
          <Link href="/about" className={styles.learnMore}>
            Learn More About Us →
          </Link>
        </div>

        {/* ── Right image collage ── */}
        <div className={styles.collage} aria-hidden="true">
          <div className={styles.mainImageWrap}>
            <Image
              src={content.collage.main}
              alt="Luxury remodeled living space"
              fill
              sizes="(max-width: 1100px) 100vw, 55vw"
              className={styles.collageImg}
              priority
            />
          </div>
          <div className={styles.sideStack}>
            <div className={styles.sideImageWrap}>
              <Image
                src={content.collage.top}
                alt="Architectural detail"
                fill
                sizes="(max-width: 1100px) 50vw, 26vw"
                className={styles.collageImg}
              />
            </div>
            <div className={styles.sideImageWrap}>
              <Image
                src={content.collage.bottom}
                alt="Finished room remodel"
                fill
                sizes="(max-width: 1100px) 50vw, 26vw"
                className={styles.collageImg}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Animated stats row ── */}
      <div className={styles.statsRow} role="list">
        {content.stats.map((stat, i) => (
          <AnimatedStat key={stat.label} stat={stat} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}
