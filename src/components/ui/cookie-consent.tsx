"use client";

import { useState, useEffect } from "react";
import styles from "./cookie-consent.module.css";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("nws-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("nws-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("nws-cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.inner}>
        <p className={styles.text}>
          This website uses cookies to improve your experience. By continuing, you agree to our{" "}
          <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>.
        </p>
        <div className={styles.actions}>
          <button className={styles.declineBtn} onClick={decline} type="button">
            Decline
          </button>
          <button className={styles.acceptBtn} onClick={accept} type="button">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
