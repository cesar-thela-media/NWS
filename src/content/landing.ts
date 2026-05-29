import type { LandingContent } from "@/lib/types";

// ---------------------------------------------------------------------------
// All images are Unsplash placeholders — confirmed-working photo IDs.
// Replace with real NWS photography before launch.
// ---------------------------------------------------------------------------

/** Build a clean Unsplash URL: photo-ID?w=W&q=80&auto=format&fit=crop */
function ux(id: string, w: number): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

/** picsum.photos guaranteed placeholder — seeded so it's always the same image */
function pic(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

// ── Photo IDs (all unique — no image is used twice across the codebase) ────
const PH = {
  // Hero
  heroBg:       "1556909114-f6e7ad7d3136",  // dark kitchen island
  heroSlide1:   "1600585154340-be6161a56a0c", // modern house exterior
  heroSlide2:   "1600607687939-ce8a6c25118c", // modern architecture
  heroSlide3:   "1560448204-e02f11c3d0e2",   // bright open living room
  heroSlide4:   "1522771739844-6a9f6d5f14af", // styled master bedroom
  heroRecent:   "1552321554-5fefe8c9ef14",   // luxury freestanding bath

  // About collage
  aboutMain:    "1484154218962-a197022b5858", // bright open kitchen
  aboutTop:     "1600566753376-12c8ab7fb75b", // modern bathroom
  aboutBottom:  "1600047509807-ba8f99d2cdde", // modern home exterior

  // Transformation
  transBefore:  "1586023492125-27b2c045efd7", // open concept dining

  // Services cards — each unique
  srvCustom:    "1600585154526-990dced4db0d", // house exterior
  srvKitchen:   "1600210492486-724fe5c67fb0", // living room with fireplace
  srvBath:      "1618220179428-22790b4617f5", // modern living room
  srvShower:    "1621607512514-6c39d1e8a6d3", // bathroom vanity
  srvBathtub:   "1600566753086-713c9bb4bf3e", // kitchen renovation
  srvAddition:  "1616594039962-c0ba6d7080b8", // construction blueprint
  srvOpen:      "1590573743760-0c0b2b2f9d5c", // renovation tools

  // Testimonial section
  testimonialBg: "1565007994092-92f1c52b187a", // architectural plans
};

// Picsum seeds — each used exactly once
const PICS = {
  exterior: pic("nws-exterior", 600, 900),
  addition: pic("nws-addition", 600, 900),
  aboutBot: pic("nws-openplan", 1000, 700),
};

export const landingContent: LandingContent = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    headline:        "Designing Homes\nBuilt to Last",
    subcopy:         "Custom homes and remodeling across Richmond, Katy, Sugar Land, and Greater Houston",
    primaryCta:      "Explore Our Work",
    secondaryCta:    "Book a Consultation",
    recentLabel:     "Recently Completed",
    recentProject:   "Master Bath · Sugar Land, TX",
    backgroundImage: ux(PH.heroBg, 1920),
    slideshowImages: [
      ux(PH.heroSlide1, 1920),
      ux(PH.heroSlide2, 1920),
      ux(PH.heroSlide3, 1920),
      ux(PH.heroSlide4, 1920),
    ],
    recentImage:     ux(PH.heroRecent, 400),
  },

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    eyebrow:  "ABOUT NWS",
    headline: "Timeless Craftsmanship.\nElevated Living.",
    body:     "Since 2007, NWS has built and remodeled hundreds of homes across Houston. Every project is personal.",
    collage: {
      main:   ux(PH.aboutMain,   1200),
      top:    ux(PH.aboutTop,     800),
      bottom: ux(PH.aboutBottom, 1000),
    },
    stats: [
      { value: "18+",  label: "Years"      },
      { value: "500+", label: "Projects"  },
      { value: "98%",  label: "Satisfied" },
      { value: "8",    label: "Cities"    },
    ],
  },

  // ── Transformation ────────────────────────────────────────────────────────
  transformation: {
    eyebrow:      "THE TRANSFORMATION",
    headline:     "See the Difference We Make",
    caseStudyCta: "Browse Our Work",
    chips:        ["6 Week Timeline", "$52,000 Investment", "Full Gut Remodel"],
    beforeImage:  ux(PH.transBefore, 1400),
    afterImage:   pic("nws-trans-after", 1400, 900),
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: {
    eyebrow:  "WHAT WE BUILD",
    headline: "Every Space.\nEvery Detail.",
    cards: [
      "Custom Home\nBuilding",
      "Kitchen\nRemodeling",
      "Bathroom\nRemodeling",
      "Shower\nRemodel",
      "Bathtub\nRemodel",
      "Room\nAdditions",
      "Open Concept\nRemodeling",
    ],
    cardImages: [
      ux(PH.srvCustom,  600),     // Custom Home Building
      ux(PH.srvKitchen, 600),     // Kitchen Remodeling
      ux(PH.srvBath,    600),     // Bathroom Remodeling
      ux(PH.srvShower,  600),     // Shower Remodel
      ux(PH.srvBathtub, 600),     // Bathtub Remodel
      ux(PH.srvAddition,600),     // Room Additions
      ux(PH.srvOpen,    600),     // Open Concept Remodeling
    ],
    testimonial:
      "NWS remodeled the downstairs of our house including the kitchen, dining, 2 living rooms, and a half bath. It turned out beautifully and they were great to work with.",
    attribution:      "— Allison Crane, Richmond TX",
    rating:           "4.9 — 130+ Google Reviews",
    testimonialImage: ux(PH.testimonialBg, 900),
  },

  // ── CTA Band ──────────────────────────────────────────────────────────────
  ctaFooter: {
    heading:      "Ready to Build Something Lasting?",
    body:         "Call us today and mention the website to receive a free consultation and 5% off your next project.",
    primaryCta:   "Start Your Project",
    secondaryCta: "Call Our Office",
    serviceAreas: "Serving Richmond · Sugar Land · Katy · Fulshear · Rosenberg · Weston Lakes · Park Row · Houston",
  },

  // ── Testimonials ──────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Allison Crane",
      date: "08/30/2023",
      text: "NWS remodeled the downstairs of our house including the kitchen, dining, 2 living rooms, and a half bath. It turned out beautifully and they were great to work with.",
      rating: 5,
      source: "Google",
      initial: "A",
    },
    {
      name: "Katie Jacob",
      date: "08/15/2023",
      text: "NWS took care of our full home build during the middle of the pandemic. Giovani and Alejandro are great communicators and kept us up to date on everything throughout the entire process.",
      rating: 5,
      source: "Google",
      initial: "K",
    },
    {
      name: "Carrie Neal",
      date: "07/21/2023",
      text: "We have used NWS for several home projects, from minor things to major renovations. We keep going back to them because they do good work!",
      rating: 5,
      source: "Google",
      initial: "C",
    },
    {
      name: "Amy Heinz",
      date: "07/04/2023",
      text: "These guys are top notch. Contractors are usually tough, but Alejandro and crew always responded, always showed up and made sure the job was done right.",
      rating: 5,
      source: "Google",
      initial: "A",
    },
    {
      name: "Drew Lowery",
      date: "06/16/2021",
      text: "First class operation and team from building scope of work to final punch list. Alejandro was the Manager over our home renovation and did a great job.",
      rating: 5,
      source: "Google",
      initial: "D",
    },
    {
      name: "Sheila Ventura",
      date: "03/19/2020",
      text: "NWS has just remodeled all 4 of our bathrooms and did a fantastic job. They are friendly and easy to work with and the quality of their work is excellent.",
      rating: 5,
      source: "Google",
      initial: "S",
    },
    {
      name: "Mark Dixon",
      date: "05/16/2018",
      text: "NWS did a great job doing the concrete work and building a 12′ x 40′ covered patio along with a total remodel. Highly recommend.",
      rating: 5,
      source: "Google",
      initial: "M",
    },
    {
      name: "Tim O.",
      date: "03/31/2017",
      text: "Excellent! Very pleased with NWS remodeling. Great value and they can do anything! NWS remodeled our master bathroom and added an outdoor kitchen.",
      rating: 5,
      source: "Angi",
      initial: "T",
    },
  ],
};
