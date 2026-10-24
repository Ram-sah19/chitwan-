import { useMemo, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  categoryLabels,
  experiences as allExperiences,
  type Experience,
  type ExperienceCategory,
} from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const filterOrder: (ExperienceCategory | "all")[] = [
  "all",
  "wildlife",
  "river-wetlands",
  "adventure",
  "birdwatching",
  "culture",
  "overnight",
];

export function ExperiencesExplorer({
  experiences = allExperiences,
  className,
}: {
  experiences?: Experience[];
  className?: string;
}) {
  const [filter, setFilter] = useState<(ExperienceCategory | "all")>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? experiences
        : experiences.filter((e) => e.categories.includes(filter)),
    [filter, experiences],
  );

  return (
    <div className={className}>
      <div
        className="flex flex-wrap justify-center gap-2 sm:gap-3"
        role="tablist"
        aria-label="Filter experiences"
      >
        {filterOrder.map((f) => {
          const count =
            f === "all"
              ? experiences.length
              : experiences.filter((e) => e.categories.includes(f)).length;
          if (count === 0) return null;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "border px-4 py-2 text-[12px] font-medium tracking-widest uppercase transition-all duration-300",
                filter === f
                  ? "border-gold bg-gold text-jungle"
                  : "border-border text-muted-foreground hover:border-gold hover:text-foreground",
              )}
            >
              {categoryLabels[f]}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {filtered.map((exp, i) => (
          <ExperienceCard
            key={exp.slug}
            experience={exp}
            variant={i % 3 === 0 ? "feature" : "compact"}
            className={cn(i % 3 === 0 && "md:col-span-2")}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          No experiences in this category yet — check back soon.
        </p>
      )}

      <Reveal className="mt-16 text-center">
        <p className="text-muted-foreground">Not sure where to begin?</p>
        <Link
          to="/contact"
          className="mt-3 inline-flex items-center gap-2 font-display text-xl text-primary transition-colors hover:text-gold"
        >
          Let us help you plan your adventure
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Reveal>
    </div>
  );
}
