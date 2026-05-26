"use client";

import Image from "next/image";
import { trackLandingEvent } from "@/lib/analytics";
import type { HeroContent } from "@/lib/types";
import styles from "./hero.module.css";

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className={styles.section} aria-labelledby="hero-heading" id="top">
      <div className={styles.mediaFrame}>
        <Image
          src={content.backgroundImage}
          alt="NWS featured custom home project"
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 2160px"
          className={styles.image}
        />

        <div className={styles.overlay} />

        <div className={styles.inner}>
          <header className={styles.header}>
            <button
              className={styles.menuButton}
              type="button"
              onClick={() => trackLandingEvent("landing_hero_menu_click")}
            >
              <span className={styles.hamburger}>☰</span>
              <span>Menu</span>
            </button>

            <div className={styles.logo}>NWS</div>

            <a
              className={styles.contactButton}
              href="#contact"
              onClick={() => trackLandingEvent("landing_hero_contact_click")}
            >
              Contact Us
            </a>
          </header>

          <div className={styles.content}>
            <h1 id="hero-heading" className={styles.title}>
              {content.headline}
            </h1>
            <p className={styles.subcopy}>{content.subcopy}</p>

            <div className={styles.ctaRow}>
              <a
                className={styles.primaryCta}
                href="#services"
                onClick={() => trackLandingEvent("landing_hero_primary_cta_click")}
              >
                {content.primaryCta}
              </a>
              <a
                className={styles.secondaryCta}
                href="#contact"
                onClick={() => trackLandingEvent("landing_hero_secondary_cta_click")}
              >
                {content.secondaryCta}
              </a>
            </div>
          </div>

          <a
            className={styles.recentCard}
            href="#case-study"
            onClick={() => trackLandingEvent("landing_hero_recent_project_click")}
          >
            <Image
              src={content.recentImage}
              alt="Recently completed NWS remodel preview"
              width={142}
              height={106}
              className={styles.recentThumb}
            />
            <div>
              <p className={styles.recentLabel}>{content.recentLabel}</p>
              <p className={styles.recentProject}>{content.recentProject}</p>
            </div>
          </a>

          <button
            className={styles.indicator}
            type="button"
            aria-label="Hero indicator"
            onClick={() => trackLandingEvent("landing_hero_indicator_click")}
          >
            ◯
          </button>
        </div>
      </div>
    </section>
  );
}
