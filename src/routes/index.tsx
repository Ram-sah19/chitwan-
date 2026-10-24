import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero, SpiritOfChitwan, WildlifeSection, WhyUs, Seasons, AboutTeaser } from "@/components/home/sections";
import { ExperiencesExplorer } from "@/components/ExperiencesExplorer";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { PlanSection } from "@/components/PlanSection";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Chitwan Jungle Safari & Wildlife Experiences | Nepal",
        description:
          "Discover Chitwan National Park with jungle walks, jeep safaris, Rapti River canoeing, birdwatching, wetlands, and authentic Tharu cultural experiences.",
      },
      { property: "og:title", content: "Chitwan Jungle Safari & Wildlife Experiences | Nepal" },
      {
        property: "og:description",
        content:
          "Discover Chitwan National Park with jungle walks, jeep safaris, Rapti River canoeing, birdwatching, wetlands, and authentic Tharu cultural experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
      <SpiritOfChitwan />

      {/* Signature Experiences */}
      <section id="experiences" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32" aria-labelledby="exp-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Signature Experiences</p>
          <h2 id="exp-heading" className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Nine Ways Into the Wild.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            From your first riverside evening to a night in the canopy — every experience is led by
            local guides and shaped around the wild, not the timetable.
          </p>
        </Reveal>
        <ExperiencesExplorer className="mt-14" />
      </section>

      <WildlifeSection />
      <WhyUs />
      <Seasons />

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32" aria-labelledby="gallery-heading">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow text-gold">Gallery</p>
          <h2 id="gallery-heading" className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Moments From the Wild.
          </h2>
        </Reveal>
        <Gallery />
      </section>

      {/* Testimonials */}
      <section className="section-forest py-24 lg:py-32" aria-label="Visitor stories">
        <Testimonials />
      </section>

      <AboutTeaser />
      <PlanSection id="plan" />

      {/* SEO-friendly closing band */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
        <Reveal className="border-t border-border pt-12 text-center">
          <p className="font-display text-2xl italic text-foreground">
            “Welcome to the Heart of the Jungle.”
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Planning Your Safari
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
