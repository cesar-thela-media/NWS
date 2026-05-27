import { landingContent } from "@/content/landing";
import { AboutSection } from "./about-section";
import { CtaBand } from "./cta-band";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { ServicesSection } from "./services-section";
import { TransformationSection } from "./transformation-section";
import styles from "./landing-page.module.css";

export function LandingPage() {
  return (
    <main className={styles.page}>
      <Hero content={landingContent.hero} />
      <AboutSection content={landingContent.about} />
      <TransformationSection content={landingContent.transformation} />
      <ServicesSection content={landingContent.services} />
      <CtaBand content={landingContent.ctaFooter} />
      <Footer />
    </main>
  );
}
