"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { trackLandingEvent } from "@/lib/analytics";
import { NavDrawer } from "@/components/ui/nav-drawer";
import type { HeroContent } from "@/lib/types";
import styles from "./hero.module.css";

interface HeroProps {
  content: HeroContent;
}

const SLIDE_INTERVAL = 6000; // 6 seconds per slide

export function Hero({ content }: HeroProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = content.slideshowImages ?? [content.backgroundImage];
  const totalSlides = slides.length;

  const goToSlide = useCallback((index: number) => {
    setSlideIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides <= 1) return;
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide, totalSlides]);

  return (
    <>
      <section className={styles.section} aria-labelledby="hero-heading" id="top">
        <div className={styles.mediaFrame}>
          {/* Background slideshow */}
          {slides.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`NWS project ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`${styles.image} ${i === slideIndex ? styles.imageActive : styles.imageInactive}`}
              style={{ objectFit: "cover", objectPosition: "center 52%" }}
            />
          ))}

          {/* Gradient overlay */}
          <div className={styles.overlay} />

          {/* Slideshow dots */}
          {totalSlides > 1 && (
            <div className={styles.slideDots} role="tablist" aria-label="Hero slideshow">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.slideDot} ${i === slideIndex ? styles.slideDotActive : ""}`}
                  onClick={() => goToSlide(i)}
                  role="tab"
                  aria-selected={i === slideIndex}
                  aria-label={`Slide ${i + 1}`}
                  type="button"
                />
              ))}
            </div>
          )}

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

              <Link href="/" className={styles.logo} aria-label="NWS — Home">NWS</Link>

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

          </div>

          {/* ── Scroll indicator ── */}
          <div className={styles.scrollIndicator} aria-hidden="true">
            <span className={styles.scrollChevron} />
          </div>
        </div>
      </section>

      <NavDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
