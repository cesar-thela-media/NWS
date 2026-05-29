"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./nav-drawer.module.css";

/* ── Navigation tree ───────────────────────────────────────────── */
const NAV = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Home Building",    href: "/services/custom-home-building" },
      { label: "Kitchen Remodeling",      href: "/services/kitchen-remodeling" },
      { label: "Bathroom Remodeling",     href: "/services/bathroom-remodeling" },
      { label: "Shower Remodel",          href: "/services/shower-remodel" },
      { label: "Bathtub Remodel",         href: "/services/bathtub-remodeling" },
      { label: "Room Additions",          href: "/services/room-additions" },
      { label: "Open Concept Remodeling", href: "/services/open-concept-remodeling" },
      { label: "Whole Home Remodeling",   href: "/services/whole-home-remodeling" },
      { label: "Garage Remodel",          href: "/services/garage-remodel" },
      { label: "Basement Remodeling",     href: "/services/basement-remodeling" },
    ],
  },
  { label: "Galleries", href: "/galleries" },
  { label: "FAQs",      href: "/faqs" },
  { label: "Contact",   href: "/contact" },
];

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  /* close on route change */
  useEffect(() => { onClose(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  /* lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        aria-label="Site navigation"
        aria-hidden={!isOpen}
      >
        {/* ── Panel top ── */}
        <div className={styles.panelTop}>
          <Link href="/" className={styles.drawerLogo} onClick={onClose} aria-label="NWS — Home">
            NWS
          </Link>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation"
            type="button"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        {/* ── Nav links ── */}
        <ul className={styles.navList}>
          {NAV.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const hasChildren = item.children && item.children.length > 0;

            if (hasChildren) {
              return (
                <li key={item.href} className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${styles.navLinkToggle} ${isActive ? styles.active : ""}`}
                    onClick={() => setServicesOpen((p) => !p)}
                    type="button"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <span className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ""}`} aria-hidden="true">›</span>
                  </button>
                  <ul className={`${styles.subList} ${servicesOpen ? styles.subListOpen : ""}`}>
                    {item.children!.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`${styles.subLink} ${pathname === child.href ? styles.subLinkActive : ""}`}
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Panel bottom: contact info + CTA ── */}
        <div className={styles.panelBottom}>
          <a href="tel:+12812992309" className={styles.phoneLink}>
            <span className={styles.phoneIcon} aria-hidden="true">☎</span>
            (281) 299-2309
          </a>
          <Link href="/contact" className={styles.ctaButton} onClick={onClose}>
            Start Your Project
          </Link>
          <p className={styles.areas}>Richmond · Sugar Land · Katy · Houston</p>
        </div>
      </nav>
    </>
  );
}
