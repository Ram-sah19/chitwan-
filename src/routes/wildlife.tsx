import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { wildlifeFeatures } from "@/data/experiences";
import { wlForest } from "@/data/experiences";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/wildlife")({
  head: () => ({
    meta: [
      {
        title: "Wildlife & Nature of Chitwan National Park | Nepal",
        description:
          "Meet the wildlife of Chitwan — greater one-horned rhinos, Bengal tigers, Asian elephants, gharials, marsh crocodiles, spotted deer and remarkable birdlife.",
      },
      { property: "og:title", content: "Wildlife & Nature of Chitwan National Park | Nepal" },
      {
        property: "og:description",
        content:
          "Meet the wildlife of Chitwan — greater one-horned rhinos, Bengal tigers, Asian elephants, gharials, marsh crocodiles, spotted deer and remarkable birdlife.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WildlifePage,
});

function WildlifePage() {
  return (
    <main>
      <PageHero
        eyebrow="Wildlife & Nature"
        title="Wild Encounters. Lasting Memories."
        description="Chitwan is a living ecosystem, not a wildlife exhibition. Every encounter is shaped by nature, the season, and the movements of wild animals."
        image={wlForest}
        imageAlt="Forest and wetland landscape in Chitwan National Park"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28" aria-label="Wildlife of Chitwan">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wildlifeFeatures.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 100}>
              <figure className="img-zoom group relative aspect-[4/5] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.alt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jungle/95 via-jungle/25 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <h2 className="font-display text-xl leading-snug text-ivory">{f.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {f.blurb}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center">
          <span className="gold-rule" aria-hidden />
          <p className="mt-6 font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
            “We explore with patience, follow responsible wildlife practices, and respect the space
            these animals call home. Sightings are shaped by nature — never guaranteed — and that is
            exactly what makes each one unforgettable.”
          </p>
        </Reveal>
      </section>
    </main>
  );
}
