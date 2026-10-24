import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  sections: LegalSection[];
}

/** Shared editorial layout for the policy pages — ivory prose on the brand base. */
export function LegalPage({ eyebrow, title, summary, updated, sections }: LegalPageProps) {
  return (
    <main>
      <section className="section-jungle pt-40 pb-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <Reveal>
            <p className="eyebrow text-gold">{eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">{summary}</p>
            <p className="mt-5 text-xs tracking-widest text-ivory/45 uppercase">
              Last updated {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16 lg:px-10 lg:py-20">
        <Reveal className="border-l-2 border-gold bg-ivory-warm px-5 py-4">
          <p className="text-sm leading-relaxed text-foreground/80">
            This policy is written for this site as it is built today.{" "}
            <span className="font-semibold">
              It is a plain-language draft for the team to review with their own legal advice before
              it is treated as formal terms
            </span>
            . If anything here changes, this page is updated.
          </p>
        </Reveal>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                {section.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Questions about this page: write to us through the{" "}
            <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
              inquiry form
            </Link>{" "}
            and ask for {site.brandName}.
          </p>
        </div>
      </article>
    </main>
  );
}
