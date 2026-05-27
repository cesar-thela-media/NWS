import { LandingPage } from "@/components/landing/landing-page";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NWS Custom Homes & Remodeling",
  url: "https://www.nws-homes.com",
  telephone: "+1-281-299-2309",
  email: "info@nws-homes.com",
  areaServed: ["Richmond", "Sugar Land", "Katy", "Fulshear", "Houston"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1234 Monroe Rd, Ste 500",
    addressLocality: "Richmond",
    addressRegion: "TX",
    postalCode: "77469",
    addressCountry: "US",
  },
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/NWSHomes/",
    "https://www.instagram.com/nwshomes/",
  ],
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
