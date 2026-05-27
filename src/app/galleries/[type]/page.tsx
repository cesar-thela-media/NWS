import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import { CtaBand } from "@/components/landing/cta-band";
import { landingContent } from "@/content/landing";
import styles from "./gallery-type.module.css";

interface GalleryCategory {
  slug: string;
  title: string;
  description: string;
  images: { src: string; alt: string; label?: string }[];
}

function pic(seed: string, w = 800, h = 600) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
function ux(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

const GALLERY_DATA: GalleryCategory[] = [
  {
    slug: "custom-homes",
    title: "Custom Homes",
    description: "Each home is designed to exact client specifications. Browse completed custom builds from NWS across Greater Houston.",
    images: Array.from({ length: 12 }, (_, i) => ({
      src: pic(`nws-homes-${i + 1}`),
      alt: `Custom home build ${i + 1}`,
      label: i % 3 === 0 ? "Richmond, TX" : i % 3 === 1 ? "Sugar Land, TX" : "Katy, TX",
    })),
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description: "From dark dramatic islands to bright open kitchens — see the range of kitchen transformations NWS has delivered.",
    images: [
      { src: ux("1556909114-f6e7ad7d3136", 800), alt: "Dark modern kitchen island", label: "Sugar Land, TX" },
      { src: ux("1484154218962-a197022b5858", 800), alt: "Bright open kitchen", label: "Katy, TX" },
      ...Array.from({ length: 10 }, (_, i) => ({
        src: pic(`nws-kit-${i + 1}`),
        alt: `Kitchen remodel project ${i + 1}`,
        label: "Greater Houston",
      })),
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description: "Spa-like master baths, clean guest bathrooms, and accessible ADA designs — explore NWS bathroom projects.",
    images: [
      { src: ux("1552321554-5fefe8c9ef14", 800), alt: "Luxury freestanding bath", label: "Richmond, TX" },
      ...Array.from({ length: 11 }, (_, i) => ({
        src: pic(`nws-bath-${i + 1}`),
        alt: `Bathroom remodel ${i + 1}`,
        label: "Greater Houston",
      })),
    ],
  },
  {
    slug: "room-additions",
    title: "Room Additions",
    description: "Seamlessly integrated additions that match the existing home architecture inside and out.",
    images: Array.from({ length: 12 }, (_, i) => ({
      src: pic(`nws-add-gallery-${i + 1}`),
      alt: `Room addition ${i + 1}`,
      label: i % 2 === 0 ? "Fulshear, TX" : "Katy, TX",
    })),
  },
];

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return GALLERY_DATA.map((g) => ({ type: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const gallery = GALLERY_DATA.find((g) => g.slug === type);
  if (!gallery) return {};
  return {
    title: `${gallery.title} Gallery | NWS Custom Homes & Remodeling`,
    description: gallery.description.slice(0, 160),
  };
}

export default async function GalleryTypePage({ params }: Props) {
  const { type } = await params;
  const gallery = GALLERY_DATA.find((g) => g.slug === type);
  if (!gallery) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Top bar ── */}
        <section className={styles.topBar}>
          <div className={styles.topBarInner}>
            <Link href="/galleries" className={styles.backLink}>← All Galleries</Link>
            <h1 className={styles.pageTitle}>{gallery.title}</h1>
            <p className={styles.pageDesc}>{gallery.description}</p>
          </div>
        </section>

        {/* ── Photo grid ── */}
        <section className={styles.gridSection}>
          <div className={styles.gridInner}>
            <div className={styles.photoGrid}>
              {gallery.images.map((img, i) => (
                <div key={i} className={`${styles.photoItem} ${i % 7 === 0 ? styles.photoWide : ""}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {img.label && (
                    <div className={styles.photoLabel}>{img.label}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other galleries ── */}
        <section className={styles.otherSection}>
          <div className={styles.otherInner}>
            <p className={styles.eyebrow}>BROWSE MORE</p>
            <h2 className={styles.sectionHeading}>Other Galleries</h2>
            <div className={styles.otherGrid}>
              {GALLERY_DATA.filter((g) => g.slug !== type).map((g) => (
                <Link key={g.slug} href={`/galleries/${g.slug}`} className={styles.otherCard}>
                  <div className={styles.otherImgWrap}>
                    <Image
                      src={g.images[0].src}
                      alt={g.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      style={{ objectFit: "cover", transition: "transform 380ms ease" }}
                      className={styles.otherImg}
                    />
                    <div className={styles.otherOverlay} />
                    <span className={styles.otherTitle}>{g.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand content={landingContent.ctaFooter} />
      </main>
      <Footer />
    </>
  );
}
