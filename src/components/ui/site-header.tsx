"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NavDrawer } from "./nav-drawer";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <button
            className={styles.menuButton}
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <span className={styles.hamburger} aria-hidden="true">☰</span>
            <span>Menu</span>
          </button>

          <Link href="/" className={styles.logo} aria-label="NWS — Home">
            NWS
          </Link>

          <Link href="/contact" className={styles.contactButton}>
            Contact Us <span aria-hidden="true">›</span>
          </Link>
        </div>
      </header>

      <NavDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
