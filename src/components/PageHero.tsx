import { Reveal } from "@/components/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}

/** Shared immersive page banner with forest-green overlay. */
export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jungle via-jungle/60 to-jungle/40" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 sm:text-base">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
