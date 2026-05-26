"use client";

import Image from "next/image";
import { trackLandingEvent } from "@/lib/analytics";
import type { ContactContent } from "@/lib/types";
import styles from "./contact-section.module.css";

interface ContactSectionProps {
  content: ContactContent;
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="contact-heading" className={styles.heading}>
          {content.heading}
        </h2>
        <p className={styles.body}>{content.body}</p>
      </div>

      <div className={styles.topGrid}>
        <div className={styles.infoStack}>
          <article className={styles.infoCard}>
            <p className={styles.cardLabel}>Support</p>
            <a
              className={styles.cardValue}
              href={`mailto:${content.supportEmail}`}
              onClick={() => trackLandingEvent("landing_contact_email_click")}
            >
              {content.supportEmail}
            </a>
            <p className={styles.cardMeta}>Our friendly team is here to help.</p>
          </article>

          <article className={styles.infoCard}>
            <p className={styles.cardLabel}>Phone</p>
            <a
              className={styles.cardValue}
              href="tel:+12812992309"
              onClick={() => trackLandingEvent("landing_contact_phone_click")}
            >
              Office: {content.officePhone}
            </a>
            <a className={styles.secondaryValue} href="tel:+17138846571">
              Mobile: {content.mobilePhone}
            </a>
          </article>

          <article className={styles.infoCard}>
            <p className={styles.cardLabel}>Hours</p>
            <ul className={styles.hoursList}>
              {content.hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className={styles.mapCard}>
          <Image
            src={content.mapImage}
            alt="Map showing NWS Custom Homes & Remodeling service area"
            fill
            sizes="(max-width: 960px) 100vw, 720px"
            className={styles.mapImage}
          />
          <div className={styles.mapOverlay}>
            <p className={styles.mapTitle}>Richmond, TX</p>
            <p className={styles.mapCaption}>Serving Fort Bend County and surrounding Greater Houston communities.</p>
          </div>
        </div>
      </div>

      <div className={styles.formCard}>
        <div className={styles.formIntro}>
          <p className={styles.formEyebrow}>START YOUR PROJECT</p>
          <h3 className={styles.formHeading}>{content.formHeading}</h3>
          <p className={styles.formBody}>{content.formIntro}</p>
        </div>

        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            trackLandingEvent("landing_contact_submit_click");
          }}
        >
          <input className={styles.field} type="text" placeholder="First Name" aria-label="First Name" />
          <input className={styles.field} type="text" placeholder="Last Name" aria-label="Last Name" />
          <input className={styles.field} type="email" placeholder="Email" aria-label="Email" />
          <input className={styles.field} type="tel" placeholder="Phone Number" aria-label="Phone Number" />
          <input className={styles.field} type="text" placeholder="Zip Code" aria-label="Zip Code" />
          <select className={styles.field} aria-label="Services" defaultValue="">
            <option value="" disabled>
              Services
            </option>
            {content.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <textarea className={styles.textarea} placeholder="Tell us about your project" aria-label="Message" />
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
