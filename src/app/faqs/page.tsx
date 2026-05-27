import type { Metadata } from "next";
import { FaqsClient } from "./faqs-client";

export const metadata: Metadata = {
  title: "FAQs | NWS Custom Homes & Remodeling — Richmond, TX",
  description:
    "Answers to common questions about working with NWS: pricing, timelines, permits, warranties, and how our process works.",
};

export default function FaqsPage() {
  return <FaqsClient />;
}
