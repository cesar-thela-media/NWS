"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { trackLandingEvent } from "@/lib/analytics";
import { NavDrawer } from "@/components/ui/nav-drawer";
import { MarqueeStrip } from "@/components/ui/marquee-strip";
import type { HeroContent } from "@/lib/types";
import styles from "./hero.module.css";

interface HeroProps {
  content: HeroContent;
}

const HERO_FACTS = [
  { value: "18+", label: "Years building in Fort Bend" },
  { value: "500+", label: "Custom homes and remodels" },
  { value: "4.9", label: "Average rating across reviews" },
];

export function Hero({ content }: HeroProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <section className={styles.section} aria-labelledby="hero-heading" id="top">
        <div className={styles.mediaFrame}>
          <Image
            src={content.backgroundImage}
            alt="NWS custom remodeling project"
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.overlay} />
          <div className={styles.overlayGlow} aria-hidden="true" />

          <div className={styles.inner}>
            <header className={styles.header}>
              <button
                className={styles.menuButton}
                type="button"
                onClick={() => {
                  setDrawerOpen(true);
                  trackLandingEvent("landing_hero_menu_click");
                }}
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
              >
                <span className={styles.hamburger} aria-hidden="true">☰</span>
                <span>Menu</span>
              </button>

              <Link href="/" className={styles.logo} aria-label="NWS — Home">NWS</Link>

              <Link
                className={styles.contactButton}
                href="/contact"
                onClick={() => trackLandingEvent("landing_hero_contact_click")}
              >
                Contact Us <span aria-hidden="true">›</span>
              </Link>
            </header>

            <div className={styles.contentGrid}>
              <div className={styles.content}>
                <p className={styles.kicker}>Custom Homes and Remodeling</p>
                <h1 id="hero-heading" className={styles.title}>
                  {content.headline}
                </h1>
                <p className={styles.subcopy}>{content.subcopy}</p>

                <div className={styles.ctaRow}>
                  <Link
                    className={styles.primaryCta}
                    href="/services"
                    onClick={() => trackLandingEvent("landing_hero_primary_cta_click")}
                  >
                    {content.primaryCta} <span aria-hidden="true">›</span>
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href="/contact"
                    onClick={() => trackLandingEvent("landing_hero_secondary_cta_click")}
                  >
                    {content.secondaryCta}
                  </Link>
                </div>

                <ul className={styles.factRow} aria-label="Company highlights">
                  {HERO_FACTS.map((fact) => (
                    <li key={fact.label} className={styles.factItem}>
                      <span className={styles.factValue}>{fact.value}</span>
                      <span className={styles.factLabel}>{fact.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                className={styles.projectPanel}
                href="/galleries"
                onClick={() => trackLandingEvent("landing_hero_recent_project_click")}
              >
                <div className={styles.projectImageWrap}>
                  <Image
                    src={content.recentImage}
                    alt="Recently completed NWS remodel"
                    fill
                    sizes="(max-width: 960px) 100vw, 28vw"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectBody}>
                  <p className={styles.projectEyebrow}>{content.recentLabel}</p>
                  <p className={styles.projectTitle}>{content.recentProject}</p>
                  <p className={styles.projectMeta}>Richmond, Sugar Land, Katy, and Greater Houston</p>
                  <span className={styles.projectLink}>View project gallery →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />
      <NavDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
