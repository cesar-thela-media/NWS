"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox, type LightboxImage } from "@/components/ui/lightbox";
import styles from "./galleries.module.css";

interface GalleryMosaicClientProps {
  images: LightboxImage[];
}

export function GalleryMosaicClient({ images }: GalleryMosaicClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = ()           => setLightboxIndex(null);
  const prev  = ()           => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  const next  = ()           => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  return (
    <>
      <div className={styles.mosaic}>
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.mosaicItem} ${i === 0 ? styles.mosaicLarge : ""} ${styles.mosaicBtn}`}
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
            <div className={styles.mosaicHover} aria-hidden="true">
              <span className={styles.mosaicExpand}>⤢</span>
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
