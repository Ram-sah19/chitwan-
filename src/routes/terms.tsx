import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Chitwan Jungle Experiences" },
      {
        name: "description",
        content:
          "The terms for using this site: what an inquiry does and does not commit you to, and what we commit to in return.",
      },
    ],
  }),
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    heading: "What this site is",
    body: (
      <p>
        This website introduces {site.brandName} and the experiences we plan in and around Chitwan.
        It is an information and inquiry channel, not a booking engine. Nothing on it is a confirmed
        reservation, a published price list, or a guarantee of availability.
      </p>
    ),
  },
  {
    heading: "An inquiry is not a booking",
    body: (
      <>
        <p>
          Sending the inquiry form asks us to plan with you. It commits you to nothing and nothing
          is charged through this site. A booking exists only when we have issued a written plan and
          quotation for your group and dates, and you have confirmed it on those terms.
        </p>
        <p>
          Those booking terms — inclusions, payment schedule, changes and cancellations — come with
          your quotation and take precedence over anything described on this site.
        </p>
      </>
    ),
  },
  {
    heading: "Nature is not in our control",
    body: (
      <p>
        Wildlife sightings, animal behaviour, river levels, weather, park access, permit
        requirements and fees are set by nature and by the authorities. We describe what is possible
        and plan patiently for it; we cannot promise what you will see, and no description on this
        site is a guarantee of an encounter.
      </p>
    ),
  },
  {
    heading: "Information on this site",
    body: (
      <p>
        We publish no invented prices, reviews, timetables or credentials. Where a detail depends on
        your group, dates or current regulations, we say so rather than guessing. Durations and
        descriptions are indicative. If you spot something out of date, tell us and we correct it.
      </p>
    ),
  },
  {
    heading: "Your responsibilities",
    body: (
      <>
        <p>
          Please send accurate details, including ages, health considerations and fitness where an
          activity involves walking, boating or time outdoors. Our guides need the truth in order to
          keep the plan safe and enjoyable.
        </p>
        <p>
          During any experience you follow your guide's instructions, respect park rules and
          wildlife distances, and take responsibility for your own conduct. Refusing a safety
          instruction may end an activity without compensation.
        </p>
      </>
    ),
  },
  {
    heading: "Content and images",
    body: (
      <p>
        The text, layout and imagery on this site are provided to present these experiences. You may
        share links to our pages freely; copying or reusing the material commercially requires our
        written permission. Third-party names and places are used only to describe the destination.
      </p>
    ),
  },
  {
    heading: "Links and other platforms",
    body: (
      <p>
        If a WhatsApp or other external link is published here, using it takes you outside this site
        and that provider's terms apply to the conversation.
      </p>
    ),
  },
  {
    heading: "Liability",
    body: (
      <p>
        This site is provided as it is. To the fullest extent the law allows, we are not liable for
        losses arising from reliance on website text that a later quotation, regulation or weather
        condition changed. Nothing here limits liability that cannot lawfully be limited, including
        for our own negligence.
      </p>
    ),
  },
  {
    heading: "Governing terms and contact",
    body: (
      <p>
        These terms are governed by the law of Nepal. Questions about them — or about anything you
        read here — can be raised through the inquiry form and we will answer as {site.brandName}.
      </p>
    ),
  },
];

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      summary="Plain terms for using this site: an inquiry costs nothing and commits nothing, a booking begins with your written quotation, and the wildlife remains its own."
      updated="24 October 2026"
      sections={sections}
    />
  );
}
