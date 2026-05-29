import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import { CtaBand } from "@/components/landing/cta-band";
import { landingContent } from "@/content/landing";
import { GalleryMosaicClient } from "./gallery-mosaic-client";
import styles from "./galleries.module.css";

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

export default function GalleriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src="https://picsum.photos/seed/nws-galleries-hero/1600/900"
            alt="NWS portfolio"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>OUR PORTFOLIO</p>
            <h1 className={styles.heroHeading}>Photo Galleries</h1>
            <p className={styles.heroSub}>Real projects. Real results. Browse our completed work.</p>
          </div>
        </section>

        {/* ── Category cards ── */}
        <section className={styles.categoriesSection}>
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>BROWSE BY CATEGORY</p>
            <h2 className={styles.sectionHeading}>Choose a Collection</h2>
            <div className={styles.rule} />
            <div className={styles.categoryGrid}>
              {GALLERY_CATEGORIES.map((cat) => (
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
        <section className={styles.mosaicSection}>
          <div className={styles.sectionInner}>
            <p className={styles.eyebrowLight}>FEATURED PROJECTS</p>
            <h2 className={styles.sectionHeadingLight}>A Taste of Our Work</h2>
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
