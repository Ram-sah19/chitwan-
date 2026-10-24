import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Compass, Leaf, Map, SlidersHorizontal, Snowflake, Flower2, CloudRain, Leaf as LeafIcon } from "lucide-react";
import { site } from "@/data/site";
import { heroRhino, expJungleWalk, wlDeer, wlForest, wildlifeFeatures } from "@/data/experiences";
import { Reveal } from "@/components/Reveal";
import aboutGuideImg from "@/assets/about-guide.jpg";

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden" aria-label="Introduction">
      <img
        src={heroRhino}
        alt="A greater one-horned rhinoceros standing in the misty grasslands of Chitwan National Park at dawn"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jungle via-jungle/55 to-jungle/35" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold">{site.locationLabel}</p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            Step into the wild. Follow ancient trails, drift along quiet rivers, discover
            extraordinary wildlife, and experience the living heritage of Chitwan.
          </p>
        </Reveal>
        <Reveal delay={450}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 bg-gold px-7 py-4 text-sm font-semibold tracking-wider text-jungle transition-all hover:bg-gold-soft"
            >
              Explore Experiences
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-ivory/40 px-7 py-4 text-sm font-semibold tracking-wider text-ivory transition-all hover:border-gold hover:text-gold"
            >
              Plan Your Adventure
            </Link>
          </div>
        </Reveal>

        <div
          className="scroll-hint pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
          aria-hidden
        >
          <ChevronDown className="h-5 w-5 text-ivory/60" />
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Spirit of Chitwan --------------------------- */

export function SpiritOfChitwan() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32" aria-labelledby="spirit-heading">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="img-zoom relative">
            <img
              src={expJungleWalk}
              alt="A guide walking a forest trail through dappled morning light in Chitwan"
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-4 hidden w-52 border-4 border-ivory shadow-xl sm:block lg:-right-10 lg:w-64">
              <img
                src={wlDeer}
                alt="Spotted deer among sal trees"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-gold">The Spirit of Chitwan</p>
            <h2 id="spirit-heading" className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Where the Wild Still Calls.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Chitwan is a landscape of winding rivers, vast grasslands, peaceful wetlands, and
                ancient forests. Every trail tells a story, every river bend holds a possibility,
                and every encounter offers a deeper connection with nature.
              </p>
              <p>
                Our experiences invite you to discover this extraordinary landscape with
                knowledgeable local guides, respect for wildlife, and a genuine appreciation for
                the culture that surrounds it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <Link
              to="/experiences"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold tracking-wider text-foreground transition-colors hover:text-gold"
            >
              Discover Our Experiences
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Wildlife panels ---------------------------- */

export function WildlifeSection() {
  return (
    <section className="section-forest py-24 lg:py-32" aria-labelledby="wildlife-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">Wildlife & Nature</p>
          <h2 id="wildlife-heading" className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            Wild Encounters. Lasting Memories.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wildlifeFeatures.map((f, i) => (
            <Reveal key={f.name} delay={(i % 4) * 90}>
              <figure className="img-zoom group relative aspect-[3/4] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.alt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jungle/95 via-jungle/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg leading-snug text-ivory">{f.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ivory/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {f.blurb}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <span className="gold-rule" aria-hidden />
          <p className="mt-6 font-display text-xl italic leading-relaxed text-ivory/85 sm:text-2xl">
            “Chitwan is a living ecosystem, not a wildlife exhibition. Every encounter is shaped by
            nature, the season, and the movements of wild animals. We explore with patience, follow
            responsible wildlife practices, and respect the space these animals call home.”
          </p>
          <Link
            to="/wildlife"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-gold transition-colors hover:text-ivory"
          >
            Explore Wildlife & Nature
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Why us -------------------------------- */

const features = [
  {
    icon: Compass,
    title: "Local Knowledge",
    text: "Explore with guides who understand the landscape and its wildlife.",
  },
  {
    icon: Map,
    title: "Experiences for Every Explorer",
    text: "Choose from river journeys, walking trails, safaris, birdwatching, and cultural experiences.",
  },
  {
    icon: Leaf,
    title: "Respect for Nature",
    text: "Encourage responsible wildlife observation and respect for local communities.",
  },
  {
    icon: SlidersHorizontal,
    title: "Personalised Planning",
    text: "Build an experience around your interests, available time, and preferred pace.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32" aria-labelledby="why-heading">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-gold">Why Explore With Us</p>
        <h2 id="why-heading" className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
          More Than a Safari. A Deeper Connection.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100} className="border-t border-gold/50 pt-6">
            <f.icon className="h-6 w-6 text-gold" aria-hidden />
            <h3 className="mt-4 font-display text-xl text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Seasons -------------------------------- */

const seasons = [
  {
    icon: Snowflake,
    name: "Winter",
    months: "October – February",
    text: "Pleasant daytime conditions and opportunities for birdwatching across wetlands and grasslands.",
  },
  {
    icon: Flower2,
    name: "Spring",
    months: "March – April",
    text: "Changing vegetation, warmer temperatures, and opportunities to explore before the monsoon.",
  },
  {
    icon: CloudRain,
    name: "Summer & Monsoon",
    months: "May – September",
    text: "Lush landscapes, heat, rain, and possible access or schedule changes in protected areas.",
  },
  {
    icon: LeafIcon,
    name: "Autumn",
    months: "Early October",
    text: "Green landscapes after the monsoon and changing wildlife-viewing conditions as vegetation dries.",
  },
];

export function Seasons() {
  return (
    <section className="section-forest py-24 lg:py-32" aria-labelledby="seasons-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">Travel Guide</p>
          <h2 id="seasons-heading" className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            When to Visit.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ivory/65">
            Every season changes Chitwan. Actual visibility, weather, access and animal activity
            always vary — we plan around the conditions of the moment.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((s, i) => (
            <Reveal key={s.name} delay={i * 90} className="border border-ivory/10 bg-forest-deep/50 p-7">
              <s.icon className="h-6 w-6 text-gold" aria-hidden />
              <h3 className="mt-4 font-display text-xl text-ivory">{s.name}</h3>
              <p className="mt-1 text-[11px] tracking-widest text-gold/80 uppercase">{s.months}</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-gold/70 px-7 py-4 text-sm font-semibold tracking-wider text-gold transition-all hover:bg-gold hover:text-jungle"
          >
            Help Me Plan My Visit
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- About teaser ----------------------------- */

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32" aria-labelledby="about-teaser-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow text-gold">About Us</p>
            <h2 id="about-teaser-heading" className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Rooted in Chitwan. Inspired by the Wild.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                We believe the best way to experience Chitwan is to slow down, listen to the forest,
                follow the river, and learn from the people who know this landscape.
              </p>
              <p>
                Our aim is to help visitors discover the region's wildlife, natural beauty, and
                cultural heritage through thoughtfully planned experiences and responsible
                exploration.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold tracking-wider text-foreground transition-colors hover:text-gold"
            >
              Read Our Story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="img-zoom relative">
            <img
              src={wlForest}
              alt="Forest and wetland landscape in Chitwan"
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute -bottom-8 -left-4 hidden w-48 border-4 border-ivory shadow-xl sm:block lg:-left-8 lg:w-56">
              <img
                src={aboutGuideImg}
                alt="A local guide at golden hour"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
