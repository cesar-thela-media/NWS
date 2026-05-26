import type { AreasContent } from "@/lib/types";
import styles from "./areas-section.module.css";

interface AreasSectionProps {
  content: AreasContent;
}

export function AreasSection({ content }: AreasSectionProps) {
  return (
    <section className={styles.section} id="areas" aria-labelledby="areas-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="areas-heading" className={styles.heading}>
          {content.heading}
        </h2>
        <p className={styles.body}>{content.body}</p>

        <div className={styles.grid}>
          {content.areas.map((area) => (
            <div key={area} className={styles.areaPill}>
              {area}
            </div>
          ))}
        </div>

        <p className={styles.note}>{content.closingNote}</p>
      </div>
    </section>
  );
}
