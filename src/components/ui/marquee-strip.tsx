import styles from "./marquee-strip.module.css";

const ITEMS = [
  "Custom Home Building",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Room Additions",
  "Open Concept",
  "Whole Home Remodel",
  "Shower Remodel",
  "Garage Remodel",
  "Basement Remodeling",
  "Bathtub Remodel",
];

export function MarqueeStrip() {
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.diamond}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
