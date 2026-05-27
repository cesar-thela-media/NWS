import Image from "next/image";
import Link from "next/link";
import type { AboutContent } from "@/lib/types";
import styles from "./about-section.module.css";

interface AboutSectionProps {
  content: AboutContent;
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

      {/* ── Stats row ── */}
      <div className={styles.statsRow} role="list">
        {content.stats.map((stat) => (
          <div key={stat.label} className={styles.statItem} role="listitem">
            <p className={styles.statValue}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
