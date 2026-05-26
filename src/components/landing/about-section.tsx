import Image from "next/image";
import type { AboutContent } from "@/lib/types";
import styles from "./about-section.module.css";

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.copyCol}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id="about-heading" className={styles.heading}>
            {content.headline}
          </h2>
          <div className={styles.rule} aria-hidden="true" />
          <p className={styles.body}>{content.body}</p>
        </div>

        <div className={styles.collage}>
          <Image
            src={content.collage.main}
            alt="Luxury remodeled interior"
            width={742}
            height={545}
            className={styles.mainImage}
            priority
          />
          <Image
            src={content.collage.top}
            alt="Architectural detail"
            width={350}
            height={292}
            className={styles.topImage}
          />
          <Image
            src={content.collage.bottom}
            alt="Finished living room"
            width={492}
            height={288}
            className={styles.bottomImage}
          />
        </div>
      </div>

      <div className={styles.statsRow}>
        {content.stats.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <p className={styles.statValue}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
