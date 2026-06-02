import { landingContent } from "@/content/landing";
import { AboutSection } from "./about-section";
import { CtaBand } from "./cta-band";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { ProcessSection } from "./process-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ServicesSection } from "./services-section";
import { TestimonialsSection } from "./testimonials-section";
import { TransformationSection } from "./transformation-section";
import styles from "./landing-page.module.css";

export function LandingPage() {
  return (
    <main className={styles.page}>
      <Hero content={landingContent.hero} />
      <ScrollReveal className={styles.sectionWrap}>
        <AboutSection content={landingContent.about} />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <TransformationSection content={landingContent.transformation} />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <ServicesSection content={landingContent.services} />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <TestimonialsSection testimonials={landingContent.testimonials} />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <CtaBand content={landingContent.ctaFooter} />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
