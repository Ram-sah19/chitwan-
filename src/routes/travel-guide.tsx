import { createFileRoute, Link } from "@tanstack/react-router";
import { Backpack, ArrowRight, CloudRain, TicketCheck, Plane, HeartPulse } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Seasons } from "@/components/home/sections";
import { expCanoe } from "@/data/experiences";

export const Route = createFileRoute("/travel-guide")({
  head: () => ({
    meta: [
      {
        title: "Chitwan Travel Guide — Seasons, Permits & What to Pack",
        description:
          "Plan a Chitwan visit with confidence: what each season is really like, access and permit notes, packing essentials, pace and practical answers before you enquire.",
      },
      { property: "og:title", content: "Chitwan Travel Guide — Seasons, Permits & What to Pack" },
      {
        property: "og:description",
        content:
          "What each Chitwan season is really like, access and permit notes, packing essentials and practical answers before you enquire.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TravelGuidePage,
});

const knowBefore = [
  {
    icon: Plane,
    title: "Getting to Chitwan",
    body: [
      "Chitwan sits in the inner Terai of central Nepal, a scenic road journey from Kathmandu, with Bharatpur as the nearby gateway town and its own domestic airport.",
      "Road conditions, flight schedules and transfer options shift with the season and the weather. Tell us your dates and we confirm what is currently running before you commit to anything.",
    ],
  },
  {
    icon: TicketCheck,
    title: "Permits, fees & access",
    body: [
      "Protected areas around Chitwan require entry permits and fees set by the authorities, and rules on where you may walk, drive or boat change over time.",
      "We do not publish figures that may already be out of date. Your permit requirements, current fees and any access restrictions are confirmed personally when we plan your dates.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Pace, fitness & groups",
    body: [
      "Experiences range from a seated canoe drift and an evening cultural programme to full-day jungle walks on uneven ground in humidity.",
      "There is no single right level of fitness — there is only the right experience for your group. Tell us ages, mobility and appetite for effort and we plan accordingly.",
    ],
  },
];

const packing = [
  "Broken-in walking shoes or boots, plus sandals for the evening",
  "Lightweight layers — mornings can be cold, midday hot",
  "Neutral, muted colours for walks and safaris; avoid bright blues",
  "Broad-brim hat, sunglasses and high-SPF sunscreen",
  "A warm layer for winter mornings and tower stays",
  "Rain protection during the monsoon shoulder months",
  "Refillable water bottle and a small dry bag for river trips",
  "Binoculars if you have them — they change birdwatching entirely",
  "Insect repellent and any personal medication",
  "Camera with the lens you can afford to lose in the dust",
];

const faqs = [
  {
    q: "When is the best time to visit Chitwan?",
    a: "There is no wrong season, only different days. October to February brings pleasant daytime conditions and excellent birdwatching across the wetlands and grasslands. March and April warm up before the monsoon. May to September is lush and green, with heat, rain and the possibility of access or schedule changes in protected areas. Each season changes what you see — we plan around the conditions rather than promising a version of them.",
  },
  {
    q: "Can you guarantee a tiger or rhino sighting?",
    a: "No, and anyone who does is selling you something else. Chitwan is a living ecosystem. Rhinos in the grasslands are a regular pleasure; tigers are elusive and solitary, often present only as tracks and alarm calls. What we control is where we go, when we go, and how patiently we look.",
  },
  {
    q: "How far in advance should we plan?",
    a: "Enough time to shape the plan properly rather than fill a slot. Peak months and festival periods are busier, so earlier is calmer. Tell us your window and we work backwards from it.",
  },
  {
    q: "Are the experiences suitable for children?",
    a: "Many are — the riverside tour, canoe drift and Tharu cultural evening suit younger explorers well, while long walks and overnight tower stays suit those with stamina for them. We need ages and attention spans, not a yes or no.",
  },
  {
    q: "What is included in a quote?",
    a: "We publish no fixed prices on this site because a fair quote depends on your group, dates and what you want to do. Each quote sets out guides, activity fees, permits and transfers that apply to your plan, with anything not included named clearly.",
  },
  {
    q: "How do we pay, and what if plans change?",
    a: "Nothing is confirmed or charged until we have spoken and you are happy with the plan. Payment and change terms are set out with your quote. We would rather move your dates than sell you a rushed trip.",
  },
];

function TravelGuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="Travel Guide"
        title="Know Before You Go."
        description="Honest, practical notes on seasons, access, pace and packing — written to help you choose well, not to fill a page."
        image={expCanoe}
        imageAlt="Canoeing along the Rapti River at first light"
      />

      <Seasons eyebrow="Seasons" />

      <section
        className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28"
        aria-labelledby="know-before-heading"
      >
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">Good To Know</p>
          <h2
            id="know-before-heading"
            className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl"
          >
            The Practical Parts.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {knowBefore.map((item, i) => (
            <Reveal key={item.title} delay={i * 110} className="border-t border-gold/50 pt-6">
              <item.icon className="h-6 w-6 text-gold" aria-hidden />
              <h3 className="mt-4 font-display text-xl text-foreground">{item.title}</h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {item.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-jungle py-20 lg:py-28" aria-labelledby="packing-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Backpack className="h-6 w-6 text-gold" aria-hidden />
              <p className="eyebrow mt-4 text-gold">Packing</p>
              <h2
                id="packing-heading"
                className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl"
              >
                Pack Light, Pack Right.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ivory/65">
                Humidity, dust and river spray are the real editors of what you bring. Leave room in
                the bag for the layers you will actually use through a single day.
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {packing.map((item, i) => (
                  <Reveal key={item} as="li" delay={(i % 6) * 70}>
                    <span className="flex gap-3 text-sm leading-relaxed text-ivory/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
                      {item}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <Reveal delay={200} className="mt-14 border border-ivory/10 bg-forest-deep/50 p-6">
            <p className="flex items-start gap-3 text-sm leading-relaxed text-ivory/70">
              <CloudRain className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              Monsoon and early-autumn conditions can close routes or change what is possible on a
              given day. Build a buffer into your dates and we will reshuffle the plan around the
              weather rather than the other way round.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="mx-auto max-w-3xl px-5 py-20 lg:px-10 lg:py-28"
        aria-labelledby="faq-heading"
      >
        <Reveal>
          <p className="eyebrow text-gold">Questions We Get Often</p>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl"
          >
            Straight Answers.
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-14 text-center">
          <p className="text-sm text-muted-foreground">Still unsure what fits your trip?</p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ask us directly
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
