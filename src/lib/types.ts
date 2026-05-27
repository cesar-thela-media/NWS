export interface HeroContent {
  headline: string;
  subcopy: string;
  primaryCta: string;
  secondaryCta: string;
  recentLabel: string;
  recentProject: string;
  backgroundImage: string;
  recentImage: string;
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  body: string;
  collage: {
    main: string;
    top: string;
    bottom: string;
  };
  stats: Array<{ label: string; value: string }>;
}

export interface TransformationContent {
  eyebrow: string;
  headline: string;
  caseStudyCta: string;
  chips: string[];
  beforeImage: string;
  afterImage: string;
}

export interface ServicesContent {
  eyebrow: string;
  headline: string;
  cards: string[];
  cardImages: string[];
  testimonial: string;
  attribution: string;
  rating: string;
  testimonialImage: string;
}

export interface CtaFooterContent {
  heading: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  serviceAreas: string;
}

export interface LandingContent {
  hero: HeroContent;
  about: AboutContent;
  transformation: TransformationContent;
  services: ServicesContent;
  ctaFooter: CtaFooterContent;
}
