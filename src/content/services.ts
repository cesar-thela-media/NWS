export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  details: string[];
  features: string[];
  heroImage: string;
  galleryImages: string[];
  startingPrice?: string;
}

function ux(id: string, w: number): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "custom-home-building",
    title: "Custom Home Building",
    shortTitle: "Custom Home\nBuilding",
    tagline: "Your vision. Our craftsmanship.",
    description:
      "From raw land to move-in ready — NWS manages every phase of custom home construction. We work with your architect or connect you with one of our design partners, then build your home to exact specifications using premium materials and licensed trades.",
    details: [
      "Full design-build process from lot selection to final walkthrough",
      "Licensed general contractor with 18+ years in Fort Bend County",
      "Dedicated project manager for single point of contact throughout",
      "3D rendering and material selection consultations included",
      "Energy-efficient building practices and HERS rating available",
    ],
    features: ["Custom Floor Plans", "Premium Materials", "Energy Efficient", "Dedicated PM", "Warranty Included"],
    heroImage: "https://picsum.photos/seed/nws-exterior/1600/900",
    galleryImages: [
      "https://picsum.photos/seed/nws-ext1/800/600",
      "https://picsum.photos/seed/nws-ext2/800/600",
      "https://picsum.photos/seed/nws-ext3/800/600",
      "https://picsum.photos/seed/nws-ext4/800/600",
    ],
    startingPrice: "$350,000",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    shortTitle: "Kitchen\nRemodeling",
    tagline: "The heart of your home, elevated.",
    description:
      "Our kitchen remodels transform dated or inefficient kitchens into stunning, functional spaces. Whether you're opening a wall, upgrading appliances, or doing a full gut remodel with custom cabinetry — NWS delivers results that add lasting value.",
    details: [
      "Full gut remodels, cabinet refreshes, and everything in between",
      "Custom and semi-custom cabinetry options",
      "Countertop selection: quartz, granite, quartzite, marble",
      "Appliance coordination and installation",
      "Plumbing and electrical upgrades to current code",
    ],
    features: ["Custom Cabinetry", "Stone Countertops", "Appliance Install", "Open Concept", "Island Design"],
    heroImage: ux("1556909114-f6e7ad7d3136", 1600),
    galleryImages: [
      ux("1484154218962-a197022b5858", 800),
      ux("1556909114-f6e7ad7d3136", 800),
      "https://picsum.photos/seed/nws-kit1/800/600",
      "https://picsum.photos/seed/nws-kit2/800/600",
    ],
    startingPrice: "$35,000",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortTitle: "Bathroom\nRemodeling",
    tagline: "Luxury bathrooms that restore and renew.",
    description:
      "From spa-inspired master baths to efficient guest bathrooms — NWS bathroom remodels blend beautiful design with lasting durability. We handle everything from layout changes to custom tile work and fixture selection.",
    details: [
      "Layout reconfiguration including wall removal and relocation",
      "Custom tile showers, freestanding tubs, and dual vanities",
      "Heated flooring, smart mirrors, and luxury fixture packages",
      "Waterproofing, ventilation, and moisture control",
      "ADA-accessible designs available",
    ],
    features: ["Custom Tile", "Freestanding Tubs", "Heated Floors", "Smart Fixtures", "ADA Options"],
    heroImage: ux("1552321554-5fefe8c9ef14", 1600),
    galleryImages: [
      ux("1552321554-5fefe8c9ef14", 800),
      "https://picsum.photos/seed/nws-bath1/800/600",
      "https://picsum.photos/seed/nws-bath2/800/600",
      "https://picsum.photos/seed/nws-bath3/800/600",
    ],
    startingPrice: "$18,000",
  },
  {
    slug: "room-additions",
    title: "Room Additions",
    shortTitle: "Room\nAdditions",
    tagline: "More space. Seamlessly integrated.",
    description:
      "Growing family? Need a home office, sunroom, or master suite expansion? NWS room additions are engineered to match your home's existing architecture — so the addition looks like it was always there.",
    details: [
      "Second-story additions, bump-outs, and full room expansions",
      "Structural engineering and permit management included",
      "Foundation work, framing, roofing tie-in — complete turnkey",
      "Interior matching: flooring, trim, paint, and finishes",
      "ADU (accessory dwelling unit) design and builds",
    ],
    features: ["Permit Managed", "Structural Engineering", "Roofing Tie-In", "ADU Capable", "Interior Match"],
    heroImage: "https://picsum.photos/seed/nws-addition/1600/900",
    galleryImages: [
      "https://picsum.photos/seed/nws-add1/800/600",
      "https://picsum.photos/seed/nws-add2/800/600",
      "https://picsum.photos/seed/nws-add3/800/600",
      "https://picsum.photos/seed/nws-add4/800/600",
    ],
    startingPrice: "$60,000",
  },
  {
    slug: "open-concept-remodeling",
    title: "Open Concept Remodeling",
    shortTitle: "Open Concept\nRemodeling",
    tagline: "Remove walls. Reveal potential.",
    description:
      "Open concept remodeling is one of the highest-ROI renovations you can make. NWS handles load-bearing wall removal, beam installation, and seamless floor and ceiling transitions so your home feels spacious and connected.",
    details: [
      "Load-bearing wall removal with structural engineering sign-off",
      "LVL beam design and installation",
      "Floor continuity across merged spaces",
      "Electrical, HVAC, and plumbing relocation as needed",
      "Complete finishing — drywall, paint, trim",
    ],
    features: ["Load-Bearing Removal", "Beam Install", "Floor Continuity", "HVAC Reroute", "Full Finish"],
    heroImage: ux("1586023492125-27b2c045efd7", 1600),
    galleryImages: [
      ux("1586023492125-27b2c045efd7", 800),
      ux("1560448204-e02f11c3d0e2", 800),
      "https://picsum.photos/seed/nws-open1/800/600",
      "https://picsum.photos/seed/nws-open2/800/600",
    ],
    startingPrice: "$25,000",
  },
  {
    slug: "whole-home-remodeling",
    title: "Whole Home Remodeling",
    shortTitle: "Whole Home\nRemodeling",
    tagline: "A complete transformation, start to finish.",
    description:
      "When a home needs more than one room upgraded, a whole home remodel offers the best value. NWS coordinates all trades under one contract — minimizing disruption, ensuring design cohesion, and delivering a transformed home.",
    details: [
      "Single contract covering all rooms, trades, and phases",
      "Phased project scheduling to minimize family disruption",
      "Cohesive design consultation for finishes across the home",
      "All permits, inspections, and code compliance managed by NWS",
      "Dedicated superintendent on-site daily",
    ],
    features: ["Single Contract", "All Trades", "Design Cohesion", "Phased Schedule", "On-Site Super"],
    heroImage: "https://picsum.photos/seed/nws-whole/1600/900",
    galleryImages: [
      "https://picsum.photos/seed/nws-wh1/800/600",
      "https://picsum.photos/seed/nws-wh2/800/600",
      "https://picsum.photos/seed/nws-wh3/800/600",
      "https://picsum.photos/seed/nws-wh4/800/600",
    ],
    startingPrice: "$120,000",
  },
  {
    slug: "garage-remodel",
    title: "Garage Remodel",
    shortTitle: "Garage\nRemodel",
    tagline: "Turn wasted space into valued space.",
    description:
      "From garage conversions to workshop buildouts and epoxy flooring — NWS transforms neglected garages into functional, attractive extensions of your home.",
    details: [
      "Garage-to-living-space conversions with proper insulation and HVAC",
      "Epoxy and polyurea floor coating systems",
      "Custom storage wall and cabinetry systems",
      "Electrical panel upgrades for EV charging",
      "Overhead storage and organization systems",
    ],
    features: ["Conversion Ready", "Epoxy Flooring", "Custom Storage", "EV Charging", "Insulation"],
    heroImage: "https://picsum.photos/seed/nws-garage/1600/900",
    galleryImages: [
      "https://picsum.photos/seed/nws-gar1/800/600",
      "https://picsum.photos/seed/nws-gar2/800/600",
      "https://picsum.photos/seed/nws-gar3/800/600",
      "https://picsum.photos/seed/nws-gar4/800/600",
    ],
    startingPrice: "$12,000",
  },
  {
    slug: "basement-remodeling",
    title: "Basement Remodeling",
    shortTitle: "Basement\nRemodeling",
    tagline: "Unlock the full potential of your home.",
    description:
      "A finished basement adds immediate livable square footage and significant resale value. NWS handles waterproofing, insulation, framing, electrical, and all finishes to deliver a truly finished lower level.",
    details: [
      "Waterproofing and moisture barrier installation",
      "Egress window installation for bedroom compliance",
      "Framing, insulation, drywall, and all finishes",
      "Wet bar and home theater buildouts",
      "Bathroom rough-in and full bath installation",
    ],
    features: ["Waterproofing", "Egress Windows", "Home Theater", "Wet Bar", "Full Bath"],
    heroImage: "https://picsum.photos/seed/nws-basement/1600/900",
    galleryImages: [
      "https://picsum.photos/seed/nws-bas1/800/600",
      "https://picsum.photos/seed/nws-bas2/800/600",
      "https://picsum.photos/seed/nws-bas3/800/600",
      "https://picsum.photos/seed/nws-bas4/800/600",
    ],
    startingPrice: "$40,000",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
