import styles from "./social-proof-badges.module.css";

const BADGES = [
  {
    href: "https://www.instagram.com/nwshomes/?hl=en",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    href: "https://www.houzz.com/professionals/home-builders/nws-custom-homes-and-remodeling-pfvwus-pf~849721310",
    label: "Houzz",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L3 9v13h7v-7h4v7h7V9L12 2zm0 2.5 7 5.8V20h-3v-7H8v7H5V10.3l7-5.8z"/>
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/NWSHomes/",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "https://g.page/r/CRyZ8e5jvBiVEBM/review",
    label: "Google Reviews",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.8 10.2H12v3.6h5.6c-.5 2.6-2.8 4.4-5.6 4.4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.8.5 3.8 1.4l2.6-2.6C16.7 3.5 14.5 2.6 12 2.6 6.8 2.6 2.6 6.8 2.6 12s4.2 9.4 9.4 9.4c5.4 0 9-3.8 9-9.2 0-.6-.1-1.3-.2-2z"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/channel/UCeJ8l_IhyNplw76bt0yk4NA",
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.5 6.1c-.3-1-1-1.7-2-2C18.9 3.5 12 3.5 12 3.5s-6.9 0-8.5.6c-1 .3-1.7 1-2 2C1 8.2 1 12 1 12s0 3.8.5 5.9c.3 1 1 1.7 2 2 1.6.6 8.5.6 8.5.6s6.9 0 8.5-.6c1-.3 1.7-1 2-2 .5-2.1.5-5.9.5-5.9s0-3.8-.5-5.9zM9.5 15.5V8.5l6 3.5-6 3.5z"/>
      </svg>
    ),
  },
];

export function SocialProofBadges() {
  return (
    <div className={styles.strip} aria-label="Social media and review badges">
      <div className={styles.inner}>
        {BADGES.map((badge) => (
          <a
            key={badge.label}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badge}
            aria-label={`NWS on ${badge.label}`}
          >
            <span className={styles.icon}>{badge.svg}</span>
            <span className={styles.label}>{badge.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
