import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.nws-homes.com/sitemap.xml",
    host: "https://www.nws-homes.com",
  };
}
