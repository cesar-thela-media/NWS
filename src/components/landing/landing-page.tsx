import { landingContent } from "@/content/landing";
import { AboutSection } from "./about-section";
import { AreasSection } from "./areas-section";
import { CtaBand } from "./cta-band";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ServicesSection } from "./services-section";
import { SocialProofBadges } from "@/components/ui/social-proof-badges";
import { TestimonialsSection } from "./testimonials-section";
import { TransformationSection } from "./transformation-section";
import styles from "./landing-page.module.css";

export function LandingPage() {
  return (
    <main className={styles.page}>
      <Hero content={landingContent.hero} />
      <ScrollReveal><SocialProofBadges /></ScrollReveal>
      <ScrollReveal><AboutSection content={landingContent.about} /></ScrollReveal>
      <ScrollReveal><TransformationSection content={landingContent.transformation} /></ScrollReveal>
      <ScrollReveal><ServicesSection content={landingContent.services} /></ScrollReveal>
      <ScrollReveal><TestimonialsSection testimonials={landingContent.testimonials} /></ScrollReveal>
      <ScrollReveal><AreasSection /></ScrollReveal>
      <ScrollReveal><CtaBand content={landingContent.ctaFooter} /></ScrollReveal>
      <Footer />
    </main>
  );
}
