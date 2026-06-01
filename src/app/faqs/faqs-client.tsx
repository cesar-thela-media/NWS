"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./faqs.module.css";

// ⚠️  TODO: Replace picsum hero image with real NWS photography.
const CDN = "https://www.nws-homes.com/wp-content/uploads/2023/01";

const FAQ_GROUPS = [
  {
    category: "Getting Started",
    faqs: [
      {
        q: "How do I get started with a project?",
        a: "The easiest way is to call us at (281) 299-2309 or fill out our contact form. We'll schedule a free in-home consultation where we walk through your vision, take measurements, and discuss your budget and timeline — no commitment required.",
      },
      {
        q: "Is the initial consultation really free?",
        a: "Yes. Our initial consultation is always free of charge. We'll visit your home, discuss your project, and provide a ballpark estimate on the spot. If you'd like to move forward, we provide a detailed written estimate within 3-5 business days.",
      },
      {
        q: "How far in advance should I start planning?",
        a: "For kitchen and bathroom remodels, we recommend starting the planning process 2-3 months before your desired start date. For custom home builds or large additions, 6-12 months is ideal to allow time for design, permitting, and material lead times.",
      },
      {
        q: "What areas do you serve?",
        a: "NWS primarily serves Richmond, Sugar Land, Katy, Fulshear, Cinco Ranch, Missouri City, Stafford, Pearland, and the Greater Houston metropolitan area. Contact us if you're outside these areas — we consider projects case by case.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    faqs: [
      {
        q: "How does NWS price their projects?",
        a: "We provide detailed line-item estimates that break down labor, materials, and project management fees. We do not use vague &ldquo;allowances&rdquo; to artificially lower estimates — every cost is itemized so you can compare accurately.",
      },
      {
        q: "What payment schedule do you use?",
        a: "A typical project uses a three-payment schedule: a deposit at contract signing (typically 10-15%), a draw at project midpoint when major work is complete, and a final payment upon your satisfactory walkthrough and sign-off.",
      },
      {
        q: "Do you offer financing?",
        a: "Yes. NWS has relationships with several lending partners who specialize in home improvement financing. We can connect you with options including HELOCs, home improvement loans, and construction financing for new builds.",
      },
      {
        q: "What's included in the estimate?",
        a: "Our estimates include all labor, materials, permit fees, project management, and site cleanup. We specify every material by brand and spec so there's no ambiguity. Any allowances are clearly labeled with their expected real costs.",
      },
    ],
  },
  {
    category: "Project Process",
    faqs: [
      {
        q: "Who will be managing my project day-to-day?",
        a: "Every NWS project is assigned a dedicated project manager who is your single point of contact throughout the build. They coordinate all trades, manage the schedule, and provide you with regular updates — typically daily check-ins and a weekly summary.",
      },
      {
        q: "How do you handle unexpected issues or changes?",
        a: "It happens on every project. When we discover something unexpected (like hidden water damage during demo), we stop, document it with photos, explain the issue to you clearly, and provide a written change order with costs before proceeding. No surprises.",
      },
      {
        q: "How long does a typical remodel take?",
        a: "A kitchen remodel typically takes 4-8 weeks. Bathroom remodels run 2-4 weeks. Room additions range from 8-16 weeks. Custom homes typically take 9-18 months from groundbreaking to completion. We provide a detailed project schedule with milestones at contract signing.",
      },
      {
        q: "Do I need to move out during the remodel?",
        a: "For kitchen and bathroom remodels, most clients stay in the home. We seal off work areas and maintain functional alternatives (temporary kitchen, adjacent bath). For whole-home remodels and most custom builds, temporary relocation is recommended.",
      },
    ],
  },
  {
    category: "Licensing & Warranty",
    faqs: [
      {
        q: "Is NWS licensed and insured?",
        a: "Yes. NWS holds a Texas General Contractor license, maintains active general liability insurance, and requires all subcontractors to carry their own licenses and insurance. We provide proof of coverage at contract signing.",
      },
      {
        q: "What warranty do you provide?",
        a: "NWS provides a 1-year craftsmanship warranty on all workmanship. Structural elements carry a 2-year warranty. New construction homes carry a builder's warranty aligned with Texas regulations. Manufacturer warranties on products are passed through to the homeowner.",
      },
      {
        q: "Do you pull permits?",
        a: "Always. NWS pulls all required permits and manages inspections from start to finish. We never suggest skipping permits to save money — unpermitted work creates serious issues at resale and can void insurance coverage.",
      },
      {
        q: "Can I supply my own materials or appliances?",
        a: "Yes, with some limitations. Client-supplied items must meet our specifications and be delivered on time. We install client-supplied appliances and fixtures but cannot warranty installation if the item has a pre-existing defect or doesn't meet code requirements.",
      },
    ],
  },
];

const HERO_POINTS = [
  "Questions on pricing, permits, process, and project planning.",
  "Answers written for homeowners comparing builders and remodelers.",
  "If you still need clarity, the team can walk through it directly.",
];

const FAQ_HELP = [
  "Start with the category closest to your current concern.",
  "Use Contact for project-specific pricing or scope questions.",
  "Call directly if you want a fast answer before booking a consultation.",
];

function AccordionItem({ q, a, itemId }: { q: string; a: string; itemId: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${itemId}`;
  const btnId   = `faq-btn-${itemId}`;
  return (
    <div className={`${styles.accordionItem} ${open ? styles.accordionOpen : ""}`}>
      <button
        id={btnId}
        className={styles.accordionBtn}
        onClick={() => setOpen((o) => !o)}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className={styles.accordionQ}>{q}</span>
        <span className={`${styles.accordionIcon} ${open ? styles.accordionIconOpen : ""}`} aria-hidden="true">+</span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={styles.accordionBody}
        aria-hidden={!open}
      >
        <p className={styles.accordionA}>{a}</p>
      </div>
    </div>
  );
}

export function FaqsClient() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src={`${CDN}/remodeling-1.jpeg`}
            alt="NWS consultation"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>FREQUENTLY ASKED QUESTIONS</p>
              <h1 className={styles.heroHeading}>Your Questions,<br />Answered.</h1>
              <p className={styles.heroSub}>
                Everything homeowners usually want to know before starting a build, remodel, or major home upgrade with NWS.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryBtn}>Ask About Your Project</Link>
                <a href="tel:+12812992309" className={styles.secondaryBtn}>Call (281) 299-2309</a>
              </div>
              <ul className={styles.heroPoints}>
                {HERO_POINTS.map((point) => (
                  <li key={point} className={styles.heroPoint}>{point}</li>
                ))}
              </ul>
            </div>
            <aside className={styles.heroPanel}>
              <p className={styles.panelEyebrow}>Fast guidance</p>
              <h2 className={styles.panelTitle}>Most answers live here. Project-specific ones start with a quick call.</h2>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{FAQ_GROUPS.length}</span>
                  <span className={styles.heroStatLabel}>Question groups</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{FAQ_GROUPS.reduce((sum, group) => sum + group.faqs.length, 0)}</span>
                  <span className={styles.heroStatLabel}>Common answers</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── FAQ section ── */}
        <section className={styles.faqSection}>
          <div className={styles.faqInner}>
            <div className={styles.faqIntro}>
              <div className={styles.faqCopy}>
                <p className={styles.sectionEyebrow}>BEFORE YOU START</p>
                <h2 className={styles.sectionHeading}>Answers Organized by What Homeowners Ask Most</h2>
                <p className={styles.sectionBody}>
                  Browse by topic to understand how NWS handles consultations, pricing, scheduling, permits, warranties, and day-to-day project communication.
                </p>
              </div>
              <div className={styles.helpCard}>
                <p className={styles.helpEyebrow}>How to use this page</p>
                <ul className={styles.helpList}>
                  {FAQ_HELP.map((item) => (
                    <li key={item} className={styles.helpItem}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Category tabs ── */}
            <nav className={styles.tabs} aria-label="FAQ categories">
              {FAQ_GROUPS.map((group, i) => (
                <button
                  key={group.category}
                  className={`${styles.tab} ${activeGroup === i ? styles.tabActive : ""}`}
                  onClick={() => setActiveGroup(i)}
                  type="button"
                >
                  {group.category}
                </button>
              ))}
            </nav>

            <div className={styles.groupHeader}>
              <div>
                <p className={styles.groupEyebrow}>Current topic</p>
                <h3 className={styles.groupTitle}>{FAQ_GROUPS[activeGroup].category}</h3>
              </div>
              <span className={styles.groupCount}>{FAQ_GROUPS[activeGroup].faqs.length} answers</span>
            </div>

            {/* ── Accordion ── */}
            <div className={styles.accordionList}>
              {FAQ_GROUPS[activeGroup].faqs.map((item, i) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} itemId={`${activeGroup}-${i}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Still have questions strip ── */}
        <section className={styles.contactStrip}>
          <div className={styles.stripInner}>
            <div className={styles.stripText}>
              <h2 className={styles.stripHeading}>Still have questions?</h2>
              <p className={styles.stripSub}>We&apos;re happy to answer anything before you commit to a single dollar.</p>
            </div>
            <div className={styles.stripActions}>
              <Link href="/contact" className={styles.primaryBtn}>Contact Us</Link>
              <a href="tel:+12812992309" className={styles.phoneBtn}>
                <span aria-hidden="true">☎</span> (281) 299-2309
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
