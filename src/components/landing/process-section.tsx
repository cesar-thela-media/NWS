import Link from "next/link";
import styles from "./process-section.module.css";

const STEPS = [
  {
    num: "01",
    title: "Free Consultation",
    body: "We visit your home, listen to your vision, and walk the space — no cost, no commitment, no pressure.",
  },
  {
    num: "02",
    title: "Design & Scope",
    body: "Our team delivers 3D concepts, material selections, a firm price, and a clear timeline before any work begins.",
  },
  {
    num: "03",
    title: "Build & Deliver",
    body: "Licensed craftspeople execute daily with a dedicated site supervisor, photo updates, and a full completion warranty.",
  },
];

export function ProcessSection() {
  return (
    <section className={styles.section} id="process" aria-labelledby="process-heading">
      <div className={styles.inner}>

        <div className={styles.header}>
          <p className={styles.eyebrow}>HOW WE WORK</p>
          <h2 id="process-heading" className={styles.heading}>
            Simple Process.<br />Exceptional Results.
          </h2>
          <p className={styles.sub}>
            Three clear steps — from first conversation to finished space.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.node} aria-hidden="true">
                {step.num}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>

        <Link href="/contact" className={styles.cta}>
          Start with a free consultation →
        </Link>

      </div>
    </section>
  );
}
