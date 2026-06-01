"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./contact.module.css";

// ⚠️  TODO: Replace remaining picsum images with real NWS photography.
const CDN = "https://www.nws-homes.com/wp-content/uploads/2023/01";

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

const HERO_POINTS = [
  "Free consultations with honest guidance on scope, budget, and timing.",
  "Direct contact with the same local team that manages your project.",
  "Serving Richmond, Katy, Sugar Land, Fulshear, and Greater Houston.",
];

const CONTACT_PROMISES = [
  "Clear next steps after the first conversation",
  "No-pressure estimate and planning guidance",
  "Fast follow-up from a real local team",
];

const CONTACT_STEPS = [
  "Tell us about your space, goals, and timeline.",
  "We review scope, answer questions, and discuss budget ranges.",
  "If it is a fit, we schedule the next step for design or estimating.",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormFields {
  name:    string;
  email:   string;
  phone:   string;
  service: string;
  message: string;
}

interface FieldErrors {
  name?:  string;
  email?: string;
}

const EMPTY_FORM: FormFields = { name: "", email: "", phone: "", service: "", message: "" };

export function ContactPageClient() {
  const [status,      setStatus]      = useState<FormStatus>("idle");
  const [form,        setForm]        = useState<FormFields>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    /* Clear the field error as the user types */
    if (name in fieldErrors) {
      setFieldErrors((errs) => { const next = { ...errs }; delete next[name as keyof FieldErrors]; return next; });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFieldErrors({});
    setServerError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 422 && data.fieldErrors) {
        setFieldErrors(data.fieldErrors);
        setStatus("idle");
        return;
      }

      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setServerError("Unable to reach the server. Please call us at (281) 299-2309.");
      setStatus("error");
    }
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Page Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src={`${CDN}/nws-custom-homes-and-remodeling-full-map-1024x576.webp`}
            alt="NWS project consultation"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>GET IN TOUCH</p>
              <h1 className={styles.heroHeading}>Start Your Project</h1>
              <p className={styles.heroSub}>
                Free consultations, honest estimates, and practical guidance for homeowners planning a build,
                remodel, or major upgrade.
              </p>
              <div className={styles.heroActions}>
                <a href="tel:+12812992309" className={styles.primaryBtn}>Call (281) 299-2309</a>
                <a href="mailto:info@nws-homes.com" className={styles.secondaryBtn}>Email the Team</a>
              </div>
              <ul className={styles.heroPoints}>
                {HERO_POINTS.map((point) => (
                  <li key={point} className={styles.heroPoint}>{point}</li>
                ))}
              </ul>
            </div>
            <aside className={styles.heroPanel}>
              <p className={styles.panelEyebrow}>What to expect</p>
              <h2 className={styles.panelTitle}>A clear first conversation, not a hard sell.</h2>
              <ul className={styles.panelList}>
                {CONTACT_PROMISES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ── Contact layout ── */}
        <section className={styles.contactSection}>
          <div className={styles.contactInner}>
            {/* ── Left: info ── */}
            <div className={styles.infoCol}>
              <div className={styles.infoIntro}>
                <p className={styles.eyebrow}>CONTACT NWS</p>
                <h2 className={styles.heading}>Let&apos;s Talk About Your Home</h2>
                <div className={styles.rule} />
                <p className={styles.infoBody}>
                  Whether you&apos;re ready to start or still comparing options, we&apos;ll help you understand what&apos;s realistic,
                  what it may cost, and what the next step should be for your home.
                </p>
              </div>

              <div className={styles.infoCard}>
                <p className={styles.infoCardEyebrow}>Before we meet</p>
                <h3 className={styles.infoCardTitle}>Helpful details to include</h3>
                <ul className={styles.stepsList}>
                  {CONTACT_STEPS.map((step) => (
                    <li key={step} className={styles.stepItem}>{step}</li>
                  ))}
                </ul>
              </div>

              <ul className={styles.contactDetails}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">☎</span>
                  <div>
                    <p className={styles.contactLabel}>Office</p>
                    <a href="tel:+12812992309" className={styles.contactValue}>(281) 299-2309</a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">☎</span>
                  <div>
                    <p className={styles.contactLabel}>Mobile</p>
                    <a href="tel:+17138846571" className={styles.contactValue}>(713) 884-6571</a>
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
                    <p className={styles.contactValue}>Richmond, TX 77469</p>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">◷</span>
                  <div>
                    <p className={styles.contactLabel}>Hours</p>
                    <p className={styles.contactValue}>Mon–Fri: 8am – 6pm<br />Sat: 8am – 12pm<br />Sun: Closed</p>
                  </div>
                </li>
              </ul>

              <div className={styles.areasBox}>
                <p className={styles.areasLabel}>Areas We Serve</p>
                <p className={styles.areasText}>Richmond · Sugar Land · Katy · Fulshear · Cinco Ranch · Missouri City · Stafford · Pearland · Rosenberg · Weston Lakes · Park Row · West Houston · Greater Houston Area</p>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className={styles.formCol}>
              {status === "success" ? (
                <div className={styles.successMsg} role="status" aria-live="polite">
                  <span className={styles.successIcon} aria-hidden="true">✓</span>
                  <h3 className={styles.successTitle}>Message Received!</h3>
                  <p className={styles.successBody}>
                    Thank you, {form.name.split(" ")[0]}. We&apos;ll be in touch within 1 business day to schedule your free consultation.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => { setStatus("idle"); setForm(EMPTY_FORM); }}
                    type="button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formHeader}>
                    <div>
                      <p className={styles.formEyebrow}>Consultation request</p>
                      <h3 className={styles.formTitle}>Free Consultation Request</h3>
                      <p className={styles.formSub}>Typically responds within 24 hours</p>
                    </div>
                    <div className={styles.formMeta}>
                      <span className={styles.formMetaValue}>24h</span>
                      <span className={styles.formMetaLabel}>Typical reply window</span>
                    </div>
                  </div>

                  {/* Server-level error banner */}
                  {status === "error" && serverError && (
                    <div className={styles.errorBanner} role="alert" aria-live="assertive">
                      <span aria-hidden="true">⚠</span> {serverError}
                    </div>
                  )}

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
                        className={`${styles.input} ${fieldErrors.name ? styles.inputError : ""}`}
                        autoComplete="name"
                        aria-describedby={fieldErrors.name ? "name-error" : undefined}
                        aria-invalid={!!fieldErrors.name}
                      />
                      {fieldErrors.name && (
                        <p id="name-error" className={styles.fieldError} role="alert">{fieldErrors.name}</p>
                      )}
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
                      className={`${styles.input} ${fieldErrors.email ? styles.inputError : ""}`}
                      autoComplete="email"
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      aria-invalid={!!fieldErrors.email}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className={styles.fieldError} role="alert">{fieldErrors.email}</p>
                    )}
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
                    aria-busy={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <><span className={styles.spinner} aria-hidden="true" /> Sending…</>
                    ) : (
                      "Request Free Consultation →"
                    )}
                  </button>

                  <p className={styles.formDisclaimer}>
                    By submitting, you agree to be contacted about your project. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── Map ── */}
        <section className={styles.mapSection}>
          <div className={styles.mapInner}>
            <div className={styles.mapIntro}>
              <p className={styles.mapEyebrow}>LOCAL SERVICE AREA</p>
              <h2 className={styles.mapHeading}>Based in Richmond. Building across Greater Houston.</h2>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222220.22117293508!2d-95.93028261328123!3d29.558560449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e0cb9b66330b%3A0x1598bb76ef99c14!2sRichmond%2C%20TX!5e0!3m2!1sen!2sus!4v1!4m4!1m3!2m2!1d-95.7589!2d29.5819"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NWS Service Area — Richmond, TX"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
