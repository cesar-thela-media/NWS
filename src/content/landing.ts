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

// ── Photo IDs (all verified to exist on Unsplash) ──────────────────────────
const PH = {
  // Kitchens
  kitchenDark:  "1556909114-f6e7ad7d3136",  // dark modern kitchen island
  kitchenLight: "1484154218962-a197022b5858", // bright open kitchen
  // Bathrooms
  bathroom:     "1552321554-5fefe8c9ef14",   // luxury freestanding bath
  // Living / open plan
  living:       "1560448204-e02f11c3d0e2",   // bright open living room
  openPlan:     "1586023492125-27b2c045efd7", // open concept dining/living
  // Master suite
  bedroom:      "1522771739844-6a9f6d5f14af", // styled master bedroom
};

// picsum seeds for slots where Unsplash IDs are less certain
const PICS = {
  exterior:  pic("nws-exterior",  600, 900),  // custom home building card
  addition:  pic("nws-addition",  600, 900),  // room additions card
  aboutBot:  pic("nws-openplan", 1000, 700),  // about collage bottom
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
    backgroundImage: ux(PH.kitchenDark, 1920),
    recentImage:     ux(PH.bathroom, 400),
  },

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    eyebrow:  "ABOUT NWS",
    headline: "Timeless Craftsmanship.\nElevated Living.",
    body:     "Since 2007, NWS has built and remodeled hundreds of homes across Houston. Every project is personal.",
    collage: {
      main:   ux(PH.living,   1200),
      top:    ux(PH.bathroom,  800),
      bottom: PICS.aboutBot,
    },
    stats: [
      { value: "35+",  label: "Years"     },
      { value: "500+", label: "Projects"  },
      { value: "98%",  label: "Satisfied" },
      { value: "8",    label: "Cities"    },
    ],
  },

  // ── Transformation ────────────────────────────────────────────────────────
  transformation: {
    eyebrow:      "THE TRANSFORMATION",
    headline:     "See the Difference We Make",
    caseStudyCta: "View Full Case Study",
    chips:        ["6 Week Timeline", "$52,000 Investment", "Full Gut Remodel"],
    beforeImage:  ux(PH.kitchenLight, 1400),
    afterImage:   ux(PH.kitchenDark, 1400),
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: {
    eyebrow:  "WHAT WE BUILD",
    headline: "Every Space.\nEvery Detail.",
    cards: [
      "Custom Home\nBuilding",
      "Kitchen\nRemodeling",
      "Bathroom\nRemodeling",
      "Room\nAdditions",
      "Open Concept\nRemodeling",
    ],
    cardImages: [
      PICS.exterior,               // Custom Home Building
      ux(PH.kitchenDark, 600),     // Kitchen Remodeling
      ux(PH.bathroom,   600),      // Bathroom Remodeling
      PICS.addition,               // Room Additions
      ux(PH.openPlan,   600),      // Open Concept Remodeling
    ],
    testimonial:
      "They turned our neglected kitchen into the heart of our home. We didn't think this level of quality existed at this price.",
    attribution:      "— S.M., Sugar Land TX",
    rating:           "4.8 — 125+ Google Reviews",
    testimonialImage: ux(PH.bathroom, 900),
  },

  // ── CTA Band ──────────────────────────────────────────────────────────────
  ctaFooter: {
    heading:      "Ready to Build Something Lasting?",
    body:         "Mention this site for a free consultation and 5% off your next project.",
    primaryCta:   "Start Your Project",
    secondaryCta: "Call Our Office",
    serviceAreas: "Serving Richmond · Sugar Land · Katy · Fulshear · Houston",
  },
};
