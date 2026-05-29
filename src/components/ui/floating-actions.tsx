"use client";

import Link from "next/link";
import { trackLandingEvent } from "@/lib/analytics";
import styles from "./floating-actions.module.css";

export function FloatingActions() {
  return (
    <div className={styles.container} aria-label="Quick actions">
      <a
        href="tel:+12812992309"
        className={styles.action}
        onClick={() => trackLandingEvent("floating_call_click")}
        aria-label="Call NWS at (281) 299-2309"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.icon}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className={styles.label}>Call Us</span>
      </a>
      <Link
        href="/contact"
        className={styles.action}
        onClick={() => trackLandingEvent("floating_contact_click")}
        aria-label="Contact NWS"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.icon}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span className={styles.label}>Contact</span>
      </Link>
    </div>
  );
}
