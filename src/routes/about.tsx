import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HandCoins, Leaf, Landmark, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { expJungleWalk, expTharu, wildlifeFeatures } from "@/data/experiences";
import { site } from "@/data/site";
import aboutGuideImg from "@/assets/about-guide.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "Our Story | Chitwan Jungle Experiences",
        description:
          "Rooted in Chitwan and inspired by the wild — how we plan responsible jungle experiences with local guides and respect for the Tharu communities around the park.",
      },
      { property: "og:title", content: "Our Story | Chitwan Jungle Experiences" },
      {
        property: "og:description",
        content:
          "Rooted in Chitwan and inspired by the wild — responsible jungle experiences led by local guides.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Users,
    title: "Local knowledge first",
    text: "Our guides are from the communities around the park. They read tracks, weather and river conditions the way an itinerary can never plan for.",
  },
  {
    icon: Leaf,
    title: "Respect for nature",
    text: "We observe, we do not disturb. Animal behaviour, park rules and the season decide what happens on a given day — not a schedule.",
  },
  {
    icon: Landmark,
    title: "Heritage that belongs here",
    text: "Tharu culture is part of this landscape, not a show staged for visitors. Cultural experiences are shaped with the people who live them.",
  },
  {
    icon: HandCoins,
    title: "Honest commercial terms",
    text: "We publish no invented prices, reviews or timetables. Pricing is confirmed personally for your group, and we only tell you what we know.",
  },
];

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="Rooted in Chitwan. Inspired by the Wild."
        description="We believe the best way to experience Chitwan is to slow down, listen to the forest, follow the river, and learn from the people who know this landscape."
        image={expJungleWalk}
        imageAlt="A guide walking a forest trail through dappled morning light in Chitwan"
      />

      <section
        className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28"
        aria-labelledby="why-heading"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-gold">Why We Do This</p>
              <h2
                id="why-heading"
                className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl"
              >
                Where the Wild Still Calls.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Chitwan is a landscape of winding rivers, vast grasslands, peaceful wetlands and
                  ancient forests. Every trail tells a story, every river bend holds a possibility,
                  and every encounter offers a deeper connection with nature.
                </p>
                <p>
                  Our aim is simple: to help visitors discover the region's wildlife, natural beauty
                  and cultural heritage through thoughtfully planned experiences and responsible
                  exploration — and to leave the landscape better for the visit.
                </p>
                <p>
                  We plan around you: your interests, your available time, your pace. Some journeys
                  begin with a gentle riverside evening; others start before dawn on a jeep track
                  looking for movement in the grass.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <Link
                to="/experiences"
                className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold tracking-wider text-foreground transition-colors hover:text-gold"
              >
                Browse the nine experiences
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6">
            <div className="img-zoom relative">
              <img
                src={aboutGuideImg}
                alt="A local guide at golden hour"
                width={1200}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-8 -left-4 hidden w-44 border-4 border-ivory shadow-xl sm:block lg:-left-8 lg:w-56">
                <img
                  src={expTharu}
                  alt="Tharu cultural performance at dusk"
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-forest py-20 lg:py-28" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">How We Work</p>
            <h2
              id="principles-heading"
              className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl"
            >
              Four Commitments We Hold To.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className="border-t border-gold/40 pt-6">
                <p.icon className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-4 font-display text-xl text-ivory">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28"
        aria-labelledby="wildlife-heading"
      >
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">The Landscape We Protect</p>
          <h2
            id="wildlife-heading"
            className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl"
          >
            A Living Ecosystem, Not an Exhibition.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Chitwan National Park is a UNESCO World Heritage Site, and the experiences we plan sit
            inside that wider conservation landscape — sal forest, oxbow lakes, river grassland and
            the wetlands beyond. Sightings are shaped by nature and are never guaranteed, which is
            exactly what makes each one worth remembering.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {wildlifeFeatures.slice(0, 4).map((f, i) => (
            <Reveal key={f.name} delay={(i % 4) * 90}>
              <figure className="img-zoom group relative aspect-[3/4] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.alt}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jungle/95 via-jungle/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-base leading-snug text-ivory">{f.name}</h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            to="/wildlife"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary transition-colors hover:text-gold"
          >
            Explore Wildlife &amp; Nature
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24 text-center lg:px-10">
        <Reveal>
          <p className="font-display text-2xl italic text-foreground">“{site.tagline}”</p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Plan an experience with us
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
