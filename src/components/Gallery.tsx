import { useState } from "react";
import { Expand } from "lucide-react";
import { galleryImages } from "@/data/experiences";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Full-width editorial gallery with a functional lightbox. */
export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {galleryImages.map((img, i) => (
          <Reveal
            key={img.src + i}
            delay={(i % 4) * 80}
            className={cn(
              (i === 0 || i === 5) && "col-span-2 row-span-1",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open image: ${img.alt}`}
              className="img-zoom group relative block h-full w-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-jungle/0 opacity-0 transition-all duration-500 group-hover:bg-jungle/35 group-hover:opacity-100">
                <Expand className="h-6 w-6 text-ivory" aria-hidden />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
