import { LandingPage } from "@/components/landing/landing-page";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NWS Custom Homes & Remodeling",
  url: "https://www.nws-homes.com",
  areaServed: [
    "Richmond",
    "Sugar Land",
    "Katy",
    "Fulshear",
    "West Side of Houston",
    "Cinco Ranch",
  ],
  telephone: "+1-281-299-2309",
  email: "info@nws-homes.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Richmond",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LandingPage />
    </>
  );
}

