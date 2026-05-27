import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import { CtaBand } from "@/components/landing/cta-band";
import { landingContent } from "@/content/landing";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About NWS | Custom Homes & Remodeling — Richmond, TX",
  description:
    "Since 2007, NWS has built and remodeled hundreds of homes across Greater Houston. Family-owned, licensed, and built on integrity.",
};

const TEAM = [
  {
    name: "Founder & Principal",
    bio: "With over 18 years leading residential construction across Fort Bend County, our founder built NWS on the belief that every homeowner deserves the craftsmanship once reserved for luxury builds.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Director of Design",
    bio: "Our design director brings a decade of interior architecture to every project — ensuring that structural and aesthetic decisions work hand-in-hand from the first sketch.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Head of Construction",
    bio: "Our construction lead has overseen 300+ completed builds, applying meticulous standards to scheduling, material sourcing, and on-site execution.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&q=80&auto=format&fit=crop",
  },
];

const VALUES = [
  {
    icon: "◆",
    title: "Integrity First",
    body: "We give honest estimates, clear timelines, and keep you informed every step of the way. No surprises.",
  },
  {
    icon: "⬡",
    title: "Craftsmanship",
    body: "Premium materials, licensed trades, and hands-on project management — because your home deserves it.",
  },
  {
    icon: "●",
    title: "Client-Centered",
    body: "Your vision drives every decision. We listen, adapt, and deliver results that exceed expectations.",
  },
  {
    icon: "▲",
    title: "Community Roots",
    body: "Born and built in Richmond, TX. We're your neighbors — invested in the homes and neighborhoods we serve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Page Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80&auto=format&fit=crop"
            alt="NWS custom home exterior"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>ABOUT NWS</p>
            <h1 className={styles.heroHeading}>Built on Integrity.<br />Designed for Life.</h1>
            <p className={styles.heroSub}>
              Serving Greater Houston since 2007 — 500+ homes built and remodeled with the same family values we started with.
            </p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className={styles.storySection}>
          <div className={styles.storyInner}>
            <div className={styles.storyText}>
              <p className={styles.eyebrow}>OUR STORY</p>
              <h2 className={styles.sectionHeading}>Timeless Craftsmanship.<br />Elevated Living.</h2>
              <div className={styles.rule} />
              <p className={styles.bodyText}>
                NWS was founded in Richmond, TX in 2007 with a single mission: bring big-builder quality to locally-owned, personally-managed projects. What started as a two-crew operation has grown to a full-service custom home builder and remodeling firm — without losing the personal touch that defines us.
              </p>
              <p className={styles.bodyText}>
                Every project is led by a dedicated NWS project manager who communicates with you directly — no call centers, no runaround. We hire licensed, insured trades we&apos;d trust in our own homes, use premium materials, and back every project with our craftsmanship guarantee.
              </p>
              <p className={styles.bodyText}>
                From custom new construction to kitchen gut remodels, bathroom transformations, and whole-home overhauls — we build homes that last and spaces that truly feel like yours.
              </p>
              <div className={styles.storyActions}>
                <Link href="/contact" className={styles.primaryBtn}>Start Your Project</Link>
                <Link href="/galleries" className={styles.outlineBtn}>View Our Work</Link>
              </div>
            </div>
            <div className={styles.storyMedia}>
              <div className={styles.storyImgMain}>
                <Image
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80&auto=format&fit=crop"
                  alt="NWS completed kitchen remodel"
                  fill
                  sizes="(max-width: 1100px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.storyImgSide}>
                <Image
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80&auto=format&fit=crop"
                  alt="NWS luxury bathroom"
                  fill
                  sizes="(max-width: 1100px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className={styles.statsSection}>
          <div className={styles.statsInner}>
            {landingContent.about.stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Values ── */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesInner}>
            <p className={styles.eyebrow}>WHY NWS</p>
            <h2 className={styles.sectionHeading}>What Sets Us Apart</h2>
            <div className={styles.rule} />
            <div className={styles.valuesGrid}>
              {VALUES.map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueBody}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className={styles.teamSection}>
          <div className={styles.teamInner}>
            <p className={styles.eyebrowLight}>OUR TEAM</p>
            <h2 className={styles.sectionHeadingLight}>The People Behind Every Build</h2>
            <div className={styles.teamGrid}>
              {TEAM.map((member) => (
                <div key={member.name} className={styles.teamCard}>
                  <div className={styles.teamImgWrap}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.teamInfo}>
                    <h3 className={styles.teamName}>{member.name}</h3>
                    <p className={styles.teamBio}>{member.bio}</p>
                  </div>
                </div>
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
