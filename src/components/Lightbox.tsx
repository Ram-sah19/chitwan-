import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/experiences";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const total = images.length;

  const prev = useCallback(() => onNavigate((index - 1 + total) % total), [index, total, onNavigate]);
  const next = useCallback(() => onNavigate((index + 1) % total), [index, total, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-jungle/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${total}: ${image.alt}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        autoFocus
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>

      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold sm:left-6"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
      )}

      <figure
        className="max-h-[85vh] max-w-[90vw] sm:max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain"
        />
        <figcaption className="mt-4 text-center text-sm tracking-wide text-ivory/75">
          {image.alt}
          <span className="mt-1 block text-xs text-ivory/45">
            {index + 1} / {total}
          </span>
        </figcaption>
      </figure>

      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next image"
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold sm:right-6"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      )}
    </div>
  );
}
