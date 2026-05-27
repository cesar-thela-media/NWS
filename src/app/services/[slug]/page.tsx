import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import { CtaBand } from "@/components/landing/cta-band";
import { landingContent } from "@/content/landing";
import { SERVICES, getServiceBySlug, getAllSlugs } from "@/content/services";
import styles from "./service-detail.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | NWS Custom Homes & Remodeling`,
    description: service.description.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  /* Related services — exclude current, take first 3 */
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <Link href="/services" className={styles.breadcrumb}>
              ← All Services
            </Link>
            <h1 className={styles.heroHeading}>{service.title}</h1>
            <p className={styles.heroTagline}>{service.tagline}</p>
            {service.startingPrice && (
              <p className={styles.heroPrice}>Starting from {service.startingPrice}</p>
            )}
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.primaryBtn}>Get a Free Estimate</Link>
              <a href="tel:+12812992309" className={styles.phoneBtn}>
                <span aria-hidden="true">☎</span> (281) 299-2309
              </a>
            </div>
          </div>
        </section>

        {/* ── Overview + Details ── */}
        <section className={styles.overviewSection}>
          <div className={styles.overviewInner}>
            <div className={styles.overviewText}>
              <p className={styles.eyebrow}>OVERVIEW</p>
              <h2 className={styles.sectionHeading}>{service.title}</h2>
              <div className={styles.rule} />
              <p className={styles.bodyText}>{service.description}</p>

              {/* Feature pills */}
              <div className={styles.featurePills}>
                {service.features.map((f) => (
                  <span key={f} className={styles.featurePill}>{f}</span>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className={styles.detailsBox}>
              <h3 className={styles.detailsTitle}>What&apos;s Included</h3>
              <ul className={styles.detailsList}>
                {service.details.map((detail) => (
                  <li key={detail} className={styles.detailItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={styles.estimateBtn}>
                Request Free Estimate →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className={styles.gallerySection}>
          <div className={styles.galleryInner}>
            <p className={styles.eyebrowLight}>OUR WORK</p>
            <h2 className={styles.sectionHeadingLight}>Recent {service.title} Projects</h2>
            <div className={styles.galleryGrid}>
              {service.galleryImages.map((img, i) => (
                <div key={i} className={styles.galleryItem}>
                  <Image
                    src={img}
                    alt={`${service.title} project ${i + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            <div className={styles.galleryCta}>
              <Link href="/galleries" className={styles.outlineBtn}>View Full Gallery</Link>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className={styles.processSection}>
          <div className={styles.processInner}>
            <p className={styles.eyebrow}>HOW IT WORKS</p>
            <h2 className={styles.sectionHeading}>Our Simple 4-Step Process</h2>
            <div className={styles.rule} />
            <div className={styles.processGrid}>
              {[
                { step: "01", title: "Free Consultation", body: "We meet at your home to understand your vision, take measurements, and discuss your budget and timeline." },
                { step: "02", title: "Detailed Estimate", body: "You receive a line-item estimate with material selections, labor breakdown, and projected completion date — no surprises." },
                { step: "03", title: "Design & Planning", body: "We finalize materials, pull all permits, and schedule trades before breaking ground — so the job runs on time." },
                { step: "04", title: "Build & Complete", body: "Our crew builds to spec with daily updates. Final walkthrough with you ensures everything meets your expectations." },
              ].map((p) => (
                <div key={p.step} className={styles.processStep}>
                  <span className={styles.stepNum}>{p.step}</span>
                  <h3 className={styles.stepTitle}>{p.title}</h3>
                  <p className={styles.stepBody}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related services ── */}
        <section className={styles.relatedSection}>
          <div className={styles.relatedInner}>
            <p className={styles.eyebrowLight}>EXPLORE MORE</p>
            <h2 className={styles.sectionHeadingLight}>Related Services</h2>
            <div className={styles.relatedGrid}>
              {related.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImgWrap}>
                    <Image
                      src={s.heroImage}
                      alt={s.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      style={{ objectFit: "cover", transition: "transform 380ms ease" }}
                      className={styles.relatedImg}
                    />
                    <div className={styles.relatedOverlay} />
                    <span className={styles.relatedTitle}>{s.title}</span>
                  </div>
                </Link>
              ))}
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
