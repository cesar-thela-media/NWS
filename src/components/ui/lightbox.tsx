"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import styles from "./lightbox.module.css";

export interface LightboxImage {
  src:    string;
  alt:    string;
  label?: string;
}

interface LightboxProps {
  images:  LightboxImage[];
  index:   number;
  onClose: () => void;
  onPrev:  () => void;
  onNext:  () => void;
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const img = images[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!img) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${img.alt}`}
    >
      {/* Close */}
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close photo viewer"
        type="button"
      >
        ✕
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className={styles.prevBtn}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
          type="button"
        >
          ‹
        </button>
      )}

      {/* Image — stop click propagation so clicking the image doesn't close */}
      <div className={styles.frame} onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          className={styles.img}
          draggable={false}
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className={styles.nextBtn}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
          type="button"
        >
          ›
        </button>
      )}

      {/* Caption */}
      {(img.label || images.length > 1) && (
        <div className={styles.caption} onClick={(e) => e.stopPropagation()}>
          {img.label && <span className={styles.captionLabel}>{img.label}</span>}
          {images.length > 1 && (
            <span className={styles.captionCount}>{index + 1} / {images.length}</span>
          )}
        </div>
      )}
    </div>,
    document.body,
  );
}
