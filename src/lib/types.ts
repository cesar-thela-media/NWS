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

export interface ReviewsContent {
  eyebrow: string;
  headline: string;
  body: string;
  rating: string;
  reviewCta: string;
  reviewCtaUrl: string;
  cards: Array<{
    name: string;
    date: string;
    quote: string;
    source: string;
  }>;
  proof: {
    value: string;
    label: string;
    body: string;
  };
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  body: string;
  supportEmail: string;
  officePhone: string;
  mobilePhone: string;
  hours: string[];
  mapImage: string;
  formHeading: string;
  formIntro: string;
  serviceOptions: string[];
}

export interface AreasContent {
  eyebrow: string;
  heading: string;
  body: string;
  areas: string[];
  closingNote: string;
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
  reviews: ReviewsContent;
  contact: ContactContent;
  areas: AreasContent;
  ctaFooter: CtaFooterContent;
}
