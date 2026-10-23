import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categoryLabels, type Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface ExperienceCardProps {
  experience: Experience;
  /** "feature" renders a large editorial card, "compact" a supporting one. */
  variant?: "feature" | "compact";
  className?: string;
}

export function ExperienceCard({ experience, variant = "compact", className }: ExperienceCardProps) {
  const feature = variant === "feature";
  return (
    <Reveal
      as="article"
      className={cn("group relative", className)}
    >
      <Link
        to="/experiences/$slug"
        params={{ slug: experience.slug }}
        className="img-zoom block h-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold"
      >
        <div className={cn("img-zoom relative", feature ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-[4/3]")}>
          <img
            src={experience.cover}
            alt={experience.coverAlt}
            loading="lazy"
            width={1200}
            height={912}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jungle/90 via-jungle/25 to-jungle/10" />
          <span className="absolute left-5 top-5 font-display text-sm tracking-[0.3em] text-gold/90">
            {experience.number}
          </span>
          <div className={cn("absolute inset-x-0 bottom-0 p-5 lg:p-7", feature && "lg:p-9")}>
            <p className="font-display text-base italic text-gold/90">{experience.tagline}</p>
            <h3
              className={cn(
                "mt-1 font-display leading-tight text-ivory",
                feature ? "text-2xl lg:text-4xl" : "text-xl lg:text-2xl",
              )}
            >
              {experience.title}
            </h3>
            {feature && (
              <p className="mt-3 hidden max-w-xl text-sm leading-relaxed text-ivory/75 lg:block">
                {experience.excerpt.split(". ").slice(0, 2).join(". ")}.
              </p>
            )}
            <p className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider text-gold">
              {experience.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
            </p>
          </div>
        </div>
      </Link>
      <div className="mt-3 flex flex-wrap gap-2">
        {experience.categories.map((cat) => (
          <span
            key={cat}
            className="border border-border px-2.5 py-1 text-[11px] tracking-widest text-muted-foreground uppercase"
          >
            {categoryLabels[cat]}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
