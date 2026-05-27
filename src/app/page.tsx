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
    streetAddress: "1234 Monroe Rd, Ste 500", // ⚠️ TODO: Replace with real NWS address before launch
    addressLocality: "Richmond",
    addressRegion: "TX",
    postalCode: "77469",               // ⚠️ TODO: Confirm real zip
    addressCountry: "US",
  },
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/NWSHomes/",    // ⚠️ TODO: Confirm real Facebook URL
    "https://www.instagram.com/nwshomes/",  // ⚠️ TODO: Confirm real Instagram handle
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
