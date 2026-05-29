import styles from "./areas-section.module.css";

const AREAS = [
  { name: "Richmond, TX", desc: "Home of our headquarters. We've built and remodeled hundreds of homes here since 2007." },
  { name: "Sugar Land, TX", desc: "From master bathrooms to whole-home remodels — a trusted partner for Sugar Land homeowners." },
  { name: "Katy, TX", desc: "Serving Katy families with custom home builds, kitchen remodels, and room additions." },
  { name: "Fulshear, TX", desc: "One of the fastest-growing communities we serve — new builds and expansions welcome." },
  { name: "Cinco Ranch, TX", desc: "Kitchen and bathroom remodels for one of Houston's most established master-planned communities." },
  { name: "Rosenberg, TX", desc: "Full-service remodeling and new construction for Rosenberg homeowners." },
  { name: "Weston Lakes, TX", desc: "Custom home building and luxury remodeling in this exclusive gated community." },
  { name: "West Houston, TX", desc: "Serving the greater West Houston area including Memorial, Energy Corridor, and more." },
];

export function AreasSection() {
  return (
    <section className={styles.section} aria-labelledby="areas-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>WHERE WE SERVE</p>
        <h2 id="areas-heading" className={styles.heading}>Areas We Serve</h2>
        <div className={styles.rule} aria-hidden="true" />
        <p className={styles.subtext}>
          Proudly serving Greater Houston and Fort Bend County with premium custom home building and remodeling services.
        </p>
        <div className={styles.grid}>
          {AREAS.map((area) => (
            <div key={area.name} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">⊙</span>
              <h3 className={styles.areaName}>{area.name}</h3>
              <p className={styles.areaDesc}>{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
