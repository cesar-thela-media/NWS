"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { trackLandingEvent } from "@/lib/analytics";
import { NavDrawer } from "@/components/ui/nav-drawer";
import type { HeroContent } from "@/lib/types";
import styles from "./hero.module.css";

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <section className={styles.section} aria-labelledby="hero-heading" id="top">
        <div className={styles.mediaFrame}>
          {/* Background image */}
          <Image
            src={content.backgroundImage}
            alt="NWS featured custom home project"
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />

          {/* Gradient overlay */}
          <div className={styles.overlay} />

          <div className={styles.inner}>
            {/* ── Nav ── */}
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

              <div className={styles.logo} aria-label="NWS">NWS</div>

              <Link
                className={styles.contactButton}
                href="/contact"
                onClick={() => trackLandingEvent("landing_hero_contact_click")}
              >
                Contact Us <span aria-hidden="true">›</span>
              </Link>
            </header>

            {/* ── Copy ── */}
            <div className={styles.content}>
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
            </div>

            {/* ── Recently completed card ── */}
            <Link
              className={styles.recentCard}
              href="/galleries"
              onClick={() => trackLandingEvent("landing_hero_recent_project_click")}
            >
              <Image
                src={content.recentImage}
                alt="Recently completed NWS remodel"
                width={142}
                height={106}
                className={styles.recentThumb}
              />
              <div>
                <p className={styles.recentLabel}>{content.recentLabel}</p>
                <p className={styles.recentProject}>{content.recentProject}</p>
              </div>
            </Link>

            {/* ── Slide indicator ── */}
            <div className={styles.indicator} aria-hidden="true">1</div>
          </div>
        </div>
      </section>

      <NavDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
