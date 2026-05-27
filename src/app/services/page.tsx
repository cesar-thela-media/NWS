import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import { CtaBand } from "@/components/landing/cta-band";
import { landingContent } from "@/content/landing";
import { SERVICES } from "@/content/services";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | NWS Custom Homes & Remodeling — Richmond, TX",
  description:
    "NWS offers custom home building, kitchen remodeling, bathroom remodeling, room additions, open concept, and more across Greater Houston since 2007.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Page Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
            alt="NWS custom remodeling work"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>WHAT WE BUILD</p>
            <h1 className={styles.heroHeading}>Every Space.<br />Every Detail.</h1>
            <p className={styles.heroSub}>
              From custom homes to kitchen remodels — NWS manages every phase with a single dedicated team.
            </p>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className={styles.gridSection}>
          <div className={styles.gridInner}>
            <p className={styles.eyebrow}>OUR SERVICES</p>
            <h2 className={styles.sectionHeading}>What We Offer</h2>
            <div className={styles.rule} />
            <ul className={styles.serviceGrid}>
              {SERVICES.map((service) => (
                <li key={service.slug} className={styles.serviceCard}>
                  <Link href={`/services/${service.slug}`} className={styles.cardLink}>
                    <div className={styles.cardImgWrap}>
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        style={{ objectFit: "cover", transition: "transform 420ms ease" }}
                        className={styles.cardImg}
                      />
                      <div className={styles.cardOverlay} />
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDesc}>{service.tagline}</p>
                      {service.startingPrice && (
                        <p className={styles.cardPrice}>Starting from {service.startingPrice}</p>
                      )}
                      <div className={styles.cardFeatures}>
                        {service.features.slice(0, 3).map((f) => (
                          <span key={f} className={styles.featureChip}>{f}</span>
                        ))}
                      </div>
                      <span className={styles.cardCta}>Learn More →</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Why NWS strip ── */}
        <section className={styles.whySection}>
          <div className={styles.whyInner}>
            <div className={styles.whyStat}>
              <span className={styles.whyValue}>500+</span>
              <span className={styles.whyLabel}>Projects Completed</span>
            </div>
            <div className={styles.whyDivider} />
            <div className={styles.whyStat}>
              <span className={styles.whyValue}>18+</span>
              <span className={styles.whyLabel}>Years in Business</span>
            </div>
            <div className={styles.whyDivider} />
            <div className={styles.whyStat}>
              <span className={styles.whyValue}>98%</span>
              <span className={styles.whyLabel}>Client Satisfaction</span>
            </div>
            <div className={styles.whyDivider} />
            <div className={styles.whyStat}>
              <span className={styles.whyValue}>8</span>
              <span className={styles.whyLabel}>Cities Served</span>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CtaBand content={landingContent.ctaFooter} />
      </main>
      <Footer />
    </>
  );
}
