"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox, type LightboxImage } from "@/components/ui/lightbox";
import styles from "./gallery-type.module.css";

interface GalleryGridClientProps {
  images: LightboxImage[];
}

export function GalleryGridClient({ images }: GalleryGridClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = ()           => setLightboxIndex(null);
  const prev  = ()           => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  const next  = ()           => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  return (
    <>
      <div className={styles.photoGrid}>
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.photoItem} ${i % 7 === 0 ? styles.photoWide : ""} ${styles.photoBtn}`}
            onClick={() => open(i)}
            aria-label={`View photo: ${img.alt}`}
          >
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
            {/* Hover expand hint */}
            <div className={styles.photoHoverOverlay} aria-hidden="true">
              <span className={styles.expandIcon}>⤢</span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
