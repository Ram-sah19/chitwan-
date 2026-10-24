import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { CalendarCheck, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PlanSection } from "@/components/PlanSection";
import { Reveal } from "@/components/Reveal";
import { expRiverside, getExperience } from "@/data/experiences";
import { site, whatsappLink } from "@/data/site";

const searchSchema = z.object({
  experience: z.string().trim().min(1).max(80).optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => searchSchema.parse(search),
  head: () => ({
    meta: [
      {
        title: "Contact & Safari Inquiry | Chitwan Jungle Experiences",
        description:
          "Tell us your dates, group and interests and we will reply with a personal Chitwan safari plan. No payment or commitment until we have spoken.",
      },
      { property: "og:title", content: "Contact & Safari Inquiry | Chitwan Jungle Experiences" },
      {
        property: "og:description",
        content:
          "Tell us your dates, group and interests and we will reply with a personal Chitwan safari plan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const steps = [
  {
    icon: CalendarCheck,
    title: "Tell us your shape of trip",
    text: "Dates, group, pace and what you most want to see. Rough ideas are enough — the form has room for it.",
  },
  {
    icon: Mail,
    title: "We reply with a plan",
    text: "A personal response shaped around your interests and the season, with the experiences that genuinely fit.",
  },
  {
    icon: MapPin,
    title: "Nothing is confirmed until you say so",
    text: "There is nothing to pay or commit to until we have spoken and you are happy with the plan.",
  },
];

function ContactPage() {
  const { experience: slug } = Route.useSearch();
  const picked = slug ? getExperience(slug) : undefined;
  const wa = whatsappLink();

  return (
    <main>
      <PageHero
        eyebrow="Plan Your Adventure"
        title="Let's Plan Your Chitwan Story."
        description="Share what you would love to experience and we will shape a safari around it — led by local guides, paced for the landscape."
        image={expRiverside}
        imageAlt="Sunset over the river with a wooden dugout canoe resting on the sandy bank"
      />

      <section
        className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24"
        aria-labelledby="how-it-works-heading"
      >
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">How it works</p>
          <h2 id="how-it-works-heading" className="mt-4 font-display text-4xl text-foreground">
            Three Steps, No Pressure.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 110} className="border-t border-gold/50 pt-6">
              <step.icon className="h-6 w-6 text-gold" aria-hidden />
              <p className="mt-4 font-display text-xs tracking-[0.3em] text-gold/80 uppercase">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-display text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-forest py-20 lg:py-24" aria-labelledby="reach-us-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">Reach Us Directly</p>
            <h2 id="reach-us-heading" className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
              Prefer to Message First?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ivory/65">
              The inquiry form is the surest way to reach us, but these channels appear here as soon
              as they are published by the team.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="border border-ivory/10 bg-forest-deep/50 p-6">
              <MapPin className="h-5 w-5 text-gold" aria-hidden />
              <h3 className="mt-4 text-xs tracking-widest text-ivory/60 uppercase">Location</h3>
              <p className="mt-2 text-sm text-ivory">{site.address}</p>
            </Reveal>

            <Reveal delay={90} className="border border-ivory/10 bg-forest-deep/50 p-6">
              <Mail className="h-5 w-5 text-gold" aria-hidden />
              <h3 className="mt-4 text-xs tracking-widest text-ivory/60 uppercase">Email</h3>
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-sm text-ivory transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              ) : (
                <p className="mt-2 text-sm text-ivory/55">Not published yet.</p>
              )}
            </Reveal>

            <Reveal delay={180} className="border border-ivory/10 bg-forest-deep/50 p-6">
              <Phone className="h-5 w-5 text-gold" aria-hidden />
              <h3 className="mt-4 text-xs tracking-widest text-ivory/60 uppercase">Phone</h3>
              {site.phone ? (
                <a
                  href={`tel:${site.phone}`}
                  className="mt-2 block text-sm text-ivory transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              ) : (
                <p className="mt-2 text-sm text-ivory/55">Not published yet.</p>
              )}
            </Reveal>

            <Reveal delay={270} className="border border-ivory/10 bg-forest-deep/50 p-6">
              <MessageCircle className="h-5 w-5 text-gold" aria-hidden />
              <h3 className="mt-4 text-xs tracking-widest text-ivory/60 uppercase">WhatsApp</h3>
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm text-ivory transition-colors hover:text-gold"
                >
                  Message us
                </a>
              ) : (
                <p className="mt-2 text-sm text-ivory/55">Not published yet.</p>
              )}
            </Reveal>
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              to="/travel-guide"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-gold transition-colors hover:text-ivory"
            >
              Before you write — read the travel guide
            </Link>
          </Reveal>
        </div>
      </section>

      {picked && (
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <p className="border-l-2 border-gold bg-ivory-warm px-5 py-4 text-sm text-foreground/80">
            You are inquiring about <span className="font-semibold">{picked.title}</span> — it is
            already selected below. Add anything else you would like to combine it with.
          </p>
        </div>
      )}

      <PlanSection defaultExperience={picked?.title} />
    </main>
  );
}
