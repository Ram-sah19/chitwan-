import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ExperiencesExplorer } from "@/components/ExperiencesExplorer";
import { expBeeshazari } from "@/data/experiences";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      {
        title: "Jungle Safari Experiences in Chitwan National Park | Nepal",
        description:
          "Explore nine signature experiences in Chitwan: jungle walks, jeep safaris, Rapti River canoeing, birdwatching, Tharu culture, overnight tower stays and more.",
      },
      {
        property: "og:title",
        content: "Jungle Safari Experiences in Chitwan National Park | Nepal",
      },
      {
        property: "og:description",
        content:
          "Explore nine signature experiences in Chitwan: jungle walks, jeep safaris, Rapti River canoeing, birdwatching, Tharu culture, overnight tower stays and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Signature Experiences"
        title="Nine Ways Into the Wild."
        description="Each experience is led by local guides, paced for the landscape, and planned around responsible exploration."
        image={expBeeshazari}
        imageAlt="The interconnected lakes of the Beeshazari Tal wetlands winding through forest"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28" aria-label="All experiences">
        <Reveal>
          <ExperiencesExplorer />
        </Reveal>
      </section>
    </main>
  );
}
