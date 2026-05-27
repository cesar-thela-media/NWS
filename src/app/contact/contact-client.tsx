"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./contact.module.css";

const SERVICES = [
  "Custom Home Building",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Room Addition",
  "Open Concept Remodeling",
  "Whole Home Remodeling",
  "Garage Remodel",
  "Basement Remodeling",
  "Other / Not Sure",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactPageClient() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    /* Simulate submit — replace with real API call or form service */
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Page Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80&auto=format&fit=crop"
            alt="NWS project consultation"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>GET IN TOUCH</p>
            <h1 className={styles.heroHeading}>Start Your Project</h1>
            <p className={styles.heroSub}>
              Free consultations. Honest estimates. No pressure.
            </p>
          </div>
        </section>

        {/* ── Contact layout ── */}
        <section className={styles.contactSection}>
          <div className={styles.contactInner}>
            {/* ── Left: info ── */}
            <div className={styles.infoCol}>
              <p className={styles.eyebrow}>CONTACT NWS</p>
              <h2 className={styles.heading}>Let&apos;s Talk About Your Home</h2>
              <div className={styles.rule} />
              <p className={styles.infoBody}>
                Whether you&apos;re ready to start or just exploring, we&apos;re happy to answer questions and walk you through what&apos;s possible for your budget and timeline.
              </p>

              <ul className={styles.contactDetails}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">☎</span>
                  <div>
                    <p className={styles.contactLabel}>Phone</p>
                    <a href="tel:+12812992309" className={styles.contactValue}>(281) 299-2309</a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">✉</span>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <a href="mailto:info@nws-homes.com" className={styles.contactValue}>info@nws-homes.com</a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">⊙</span>
                  <div>
                    <p className={styles.contactLabel}>Office</p>
                    <p className={styles.contactValue}>1234 Monroe Rd, Ste 500<br />Richmond, TX 77469</p>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">◷</span>
                  <div>
                    <p className={styles.contactLabel}>Hours</p>
                    <p className={styles.contactValue}>Mon–Fri: 8am – 6pm<br />Sat: 9am – 2pm</p>
                  </div>
                </li>
              </ul>

              <div className={styles.areasBox}>
                <p className={styles.areasLabel}>Areas We Serve</p>
                <p className={styles.areasText}>Richmond · Sugar Land · Katy · Fulshear · Cinco Ranch · Missouri City · Stafford · Pearland · Greater Houston Area</p>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className={styles.formCol}>
              {status === "success" ? (
                <div className={styles.successMsg}>
                  <span className={styles.successIcon} aria-hidden="true">✓</span>
                  <h3 className={styles.successTitle}>Message Received!</h3>
                  <p className={styles.successBody}>
                    Thank you, {form.name.split(" ")[0]}. We&apos;ll be in touch within 1 business day to schedule your free consultation.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                    type="button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <h3 className={styles.formTitle}>Free Consultation Request</h3>
                  <p className={styles.formSub}>Typically responds within 24 hours</p>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={styles.input}
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(281) 555-0100"
                        className={styles.input}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={styles.input}
                      autoComplete="email"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="service" className={styles.label}>Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Tell us about your project</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, timeline, and any specific questions…"
                      className={styles.textarea}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending…" : "Request Free Consultation →"}
                  </button>

                  <p className={styles.formDisclaimer}>
                    By submitting, you agree to be contacted about your project. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
