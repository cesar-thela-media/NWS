import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import { CtaBand } from "@/components/landing/cta-band";
import { landingContent } from "@/content/landing";
import { GalleryMosaicClient } from "./gallery-mosaic-client";
import styles from "./galleries.module.css";

// ⚠️  TODO: Replace all picsum gallery images with real NWS project photography.
const CDN = "https://www.nws-homes.com/wp-content/uploads/2023/01";

export const metadata: Metadata = {
  title: "Photo Galleries | NWS Custom Homes & Remodeling",
  description:
    "Browse NWS photo galleries: custom homes, kitchen remodels, bathroom remodels, and room additions across Greater Houston.",
};

const GALLERY_CATEGORIES = [
  {
    slug: "custom-homes",
    title: "Custom Homes",
    count: 24,
    coverImage: "https://picsum.photos/seed/nws-gallery-homes/800/600",
    description: "Ground-up custom home builds from foundation to move-in ready.",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    count: 38,
    coverImage: "https://picsum.photos/seed/nws-gallery-kitchen/800/600",
    description: "Full gut remodels, cabinet refreshes, and open concept transformations.",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    count: 31,
    coverImage: "https://picsum.photos/seed/nws-gallery-bath/800/600",
    description: "Spa-inspired master baths, tub-to-shower conversions, and more.",
  },
  {
    slug: "room-additions",
    title: "Room Additions",
    count: 18,
    coverImage: "https://picsum.photos/seed/nws-gallery-add/800/600",
    description: "Seamlessly integrated additions that look like they were always there.",
  },
];

const HERO_POINTS = [
  "Custom homes, kitchens, baths, and additions from real NWS projects.",
  "Browse by project type to find inspiration that matches your scope.",
  "Every gallery is focused on finished work, materials, and layout ideas.",
];

const CURATION_NOTES = [
  "Start with the category closest to your planned scope.",
  "Use the featured mosaic to compare material palettes and layout styles.",
  "Open any photo for a cleaner, larger look inside the lightbox.",
];

function pic(seed: string) {
  return `https://picsum.photos/seed/${seed}/600/450`;
}

const FEATURED = [
  { src: "https://picsum.photos/seed/nws-featured-kitchen/700/525", alt: "Bright open kitchen" },
  { src: "https://picsum.photos/seed/nws-featured-bath/700/525", alt: "Luxury bathroom" },
  { src: pic("nws-f1"), alt: "Custom home exterior" },
  { src: "https://picsum.photos/seed/nws-featured-living/700/525", alt: "Open living room" },
  { src: "https://picsum.photos/seed/nws-featured-dining/700/525", alt: "Open concept dining" },
  { src: pic("nws-f2"), alt: "Master bedroom suite" },
  { src: pic("nws-f3"), alt: "Room addition interior" },
  { src: "https://picsum.photos/seed/nws-featured-dark-kitchen/700/525", alt: "Dark modern kitchen" },
];

const TOTAL_PHOTOS = GALLERY_CATEGORIES.reduce((sum, category) => sum + category.count, 0);

export default function GalleriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src={`${CDN}/hero-home-remodeled-richmond-tx-1024x576.webp`}
            alt="NWS portfolio"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>OUR PORTFOLIO</p>
              <h1 className={styles.heroHeading}>Photo Galleries</h1>
              <p className={styles.heroSub}>Real projects, real finishes, and real construction work across Greater Houston.</p>
              <div className={styles.heroActions}>
                <a href="#gallery-categories" className={styles.primaryBtn}>Browse Categories</a>
                <a href="#featured-projects" className={styles.secondaryBtn}>View Featured Work</a>
              </div>
              <ul className={styles.heroPoints}>
                {HERO_POINTS.map((point) => (
                  <li key={point} className={styles.heroPoint}>{point}</li>
                ))}
              </ul>
            </div>
            <aside className={styles.heroPanel}>
              <p className={styles.panelEyebrow}>Portfolio overview</p>
              <h2 className={styles.panelTitle}>A visual library built for homeowners comparing possibilities.</h2>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{GALLERY_CATEGORIES.length}</span>
                  <span className={styles.heroStatLabel}>Main categories</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{TOTAL_PHOTOS}+</span>
                  <span className={styles.heroStatLabel}>Photos available</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Category cards ── */}
        <section className={styles.categoriesSection} id="gallery-categories">
          <div className={styles.sectionInner}>
            <div className={styles.sectionIntro}>
              <div className={styles.sectionCopy}>
                <p className={styles.eyebrow}>BROWSE BY CATEGORY</p>
                <h2 className={styles.sectionHeading}>Choose a Collection</h2>
                <div className={styles.rule} />
                <p className={styles.sectionBody}>
                  Start with the kind of project you are planning. Each gallery groups inspiration by scope so it is easier to compare details, layouts, and finish direction.
                </p>
              </div>
              <div className={styles.curationCard}>
                <p className={styles.curationEyebrow}>How to use this page</p>
                <ul className={styles.curationList}>
                  {CURATION_NOTES.map((note) => (
                    <li key={note} className={styles.curationItem}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.categoryGrid}>
              {GALLERY_CATEGORIES.map((cat, index) => (
                <Link key={cat.slug} href={`/galleries/${cat.slug}`} className={styles.categoryCard}>
                  <div className={styles.categoryImgWrap}>
                    <Image
                      src={cat.coverImage}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                      style={{ objectFit: "cover", transition: "transform 420ms ease" }}
                      className={styles.categoryImg}
                    />
                    <span className={styles.categoryIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <div className={styles.categoryOverlay} />
                  </div>
                  <div className={styles.categoryBody}>
                    <div>
                      <h3 className={styles.categoryTitle}>{cat.title}</h3>
                      <p className={styles.categoryDesc}>{cat.description}</p>
                    </div>
                    <div className={styles.categoryMeta}>
                      <span className={styles.categoryCount}>{cat.count} photos</span>
                      <span className={styles.categoryArrow}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured mosaic (client — handles lightbox) ── */}
        <section className={styles.mosaicSection} id="featured-projects">
          <div className={styles.sectionInner}>
            <div className={styles.mosaicIntro}>
              <div>
                <p className={styles.eyebrowLight}>FEATURED PROJECTS</p>
                <h2 className={styles.sectionHeadingLight}>A Taste of Our Work</h2>
              </div>
              <p className={styles.mosaicLead}>
                These images are a quick cross-section of the finishes, spatial planning, and construction quality clients can expect from NWS work.
              </p>
            </div>
            <GalleryMosaicClient images={FEATURED} />
          </div>
        </section>

        {/* ── CTA ── */}
        <CtaBand content={landingContent.ctaFooter} />
      </main>
      <Footer />
    </>
  );
}
