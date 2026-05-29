import type { Metadata } from "next";
import { FaqsClient } from "./faqs-client";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get started with a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way is to call us at (281) 299-2309 or fill out our contact form. We'll schedule a free in-home consultation where we walk through your vision, take measurements, and discuss your budget and timeline — no commitment required.",
      },
    },
    {
      "@type": "Question",
      name: "Is the initial consultation really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our initial consultation is always free of charge. We'll visit your home, discuss your project, and provide a ballpark estimate on the spot.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I start planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For kitchen and bathroom remodels, we recommend starting 2-3 months before your desired start date. For custom home builds or large additions, 6-12 months is ideal.",
      },
    },
    {
      "@type": "Question",
      name: "How does NWS price their projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide detailed line-item estimates that break down labor, materials, and project management fees. Every cost is itemized so you can compare accurately.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NWS has relationships with several lending partners who specialize in home improvement financing, including HELOCs, home improvement loans, and construction financing for new builds.",
      },
    },
    {
      "@type": "Question",
      name: "Is NWS licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NWS holds a Texas General Contractor license, maintains active general liability insurance, and requires all subcontractors to carry their own licenses and insurance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you pull permits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always. NWS pulls all required permits and manages inspections from start to finish. We never suggest skipping permits to save money.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical remodel take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A kitchen remodel typically takes 4-8 weeks. Bathroom remodels run 2-4 weeks. Room additions range from 8-16 weeks. Custom homes typically take 9-18 months.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "FAQs | NWS Custom Homes & Remodeling — Richmond, TX",
  description:
    "Answers to common questions about working with NWS: pricing, timelines, permits, warranties, and how our process works.",
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <FaqsClient />
    </>
  );
}
