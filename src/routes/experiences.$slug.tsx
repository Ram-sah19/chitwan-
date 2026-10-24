import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Binoculars, Backpack, ShieldCheck, CalendarRange, Tag, Clock } from "lucide-react";
import { getExperience, relatedExperiences, categoryLabels } from "@/data/experiences";
import { Reveal } from "@/components/Reveal";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Lightbox } from "@/components/Lightbox";
import { useState } from "react";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const experience = getExperience(params.slug);
    if (!experience) throw notFound();
    return { experience };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Experience unavailable" }] };
    const { experience } = loaderData;
    return {
      meta: [
        { title: `${experience.title} — Chitwan Jungle Experience | Nepal` },
        {
          name: "description",
          content: experience.excerpt.slice(0, 155),
        },
        { property: "og:title", content: `${experience.title} — Chitwan Jungle Experience` },
        { property: "og:description", content: experience.excerpt.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ExperienceDetail,
});

function InfoBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Backpack;
  title: string;
  items: string[];
}) {
  return (
    <Reveal className="border-t border-border pt-6">
      <Icon className="h-5 w-5 text-gold" aria-hidden />
      <h2 className="mt-3 font-display text-2xl text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function ExperienceDetail() {
  const { experience } = Route.useLoaderData();
  const related = relatedExperiences(experience.slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <main>
      {/* Cover */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <img
          src={experience.cover}
          alt={experience.coverAlt}
          width={1200}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle via-jungle/60 to-jungle/35" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-40 lg:px-10">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-xs tracking-widest text-ivory/60 uppercase">
              <Link to="/experiences" className="hover:text-gold">
                Experiences
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ivory/80">{experience.title}</span>
            </nav>
            <p className="mt-4 font-display text-lg italic text-gold">{experience.tagline}</p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
              {experience.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-gold">Experience {experience.number}</p>
              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">The Experience</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{experience.overview}</p>
            </Reveal>

            {experience.note && (
              <Reveal delay={100} className="mt-8 border-l-2 border-gold bg-ivory-warm p-5">
                <p className="text-sm leading-relaxed text-foreground/80">{experience.note}</p>
              </Reveal>
            )}

            {/* Gallery */}
            <Reveal className="mt-12">
              <h2 className="font-display text-3xl text-foreground">From the Field</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {experience.gallery.map((img, i) => (
                  <button
                    key={img.src + i}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Open image: ${img.alt}`}
                    className="img-zoom block focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      width={1200}
                      height={912}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Details sidebar */}
          <aside className="lg:col-span-5">
            <div className="space-y-8 border border-border bg-card p-8">
              <div>
                <p className="eyebrow text-gold">What you may experience</p>
                <ul className="mt-4 space-y-2.5">
                  {experience.mayExperience.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Binoculars className="mt-1 h-3.5 w-3.5 shrink-0 text-gold/70" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start gap-3 border-t border-border pt-6">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">Suggested duration</p>
                  <p className="mt-1 text-sm text-foreground">{experience.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-border pt-6">
                <Tag className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">Price</p>
                  <p className="mt-1 text-sm text-foreground">
                    Request a Quote — pricing is confirmed personally for your group and dates.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-border pt-6">
                {experience.categories.map((c) => (
                  <span
                    key={c}
                    className="border border-border px-2.5 py-1 text-[11px] tracking-widest text-muted-foreground uppercase"
                  >
                    {categoryLabels[c]}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                search={{ experience: experience.slug }}
                className="block bg-gold px-6 py-4 text-center text-sm font-semibold tracking-wider text-jungle transition-all hover:bg-gold-soft"
              >
                Inquire About This Experience
              </Link>
            </div>
          </aside>
        </div>

        {/* Practical guidance */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <InfoBlock icon={Backpack} title="What to Bring" items={experience.whatToBring} />
          <InfoBlock icon={ShieldCheck} title="Safety Considerations" items={experience.safety} />
          <InfoBlock icon={CalendarRange} title="Seasonal Considerations" items={experience.seasonal} />
        </div>
      </section>

      {/* Related */}
      <section className="section-forest py-20 lg:py-24" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 id="related-heading" className="font-display text-3xl text-ivory sm:text-4xl">
              Continue Exploring
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((exp) => (
              <ExperienceCard key={exp.slug} experience={exp} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-gold transition-colors hover:text-ivory"
            >
              View all experiences
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={experience.gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </main>
  );
}
