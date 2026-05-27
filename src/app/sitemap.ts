import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/content/services";

const BASE = "https://www.nws-homes.com";
const GALLERY_TYPES = [
  "custom-homes",
  "kitchen-remodeling",
  "bathroom-remodeling",
  "room-additions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                     priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${BASE}/about`,          priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services`,       priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/galleries`,      priority: 0.8, changeFrequency: "weekly"  as const },
    { url: `${BASE}/contact`,        priority: 0.9, changeFrequency: "yearly"  as const },
    { url: `${BASE}/faqs`,           priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/privacy-policy`, priority: 0.2, changeFrequency: "yearly"  as const },
    { url: `${BASE}/terms`,          priority: 0.2, changeFrequency: "yearly"  as const },
  ].map((r) => ({ ...r, lastModified: now }));

  const serviceRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url:             `${BASE}/services/${slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.85,
  }));

  const galleryRoutes: MetadataRoute.Sitemap = GALLERY_TYPES.map((type) => ({
    url:             `${BASE}/galleries/${type}`,
    lastModified:    now,
    changeFrequency: "weekly" as const,
    priority:        0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...galleryRoutes];
}
