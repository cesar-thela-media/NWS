import type { Metadata } from "next";
import { ContactPageClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact NWS | Free Consultation — Richmond, TX",
  description:
    "Request a free consultation with NWS Custom Homes & Remodeling. We serve Richmond, Sugar Land, Katy, Fulshear, and Greater Houston.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
