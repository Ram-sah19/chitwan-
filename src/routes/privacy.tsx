import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Chitwan Jungle Experiences" },
      {
        name: "description",
        content:
          "What the inquiry form collects, why it is stored, who hosts it, and how to ask us to correct or delete your details.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections: LegalSection[] = [
  {
    heading: "What we collect",
    body: (
      <>
        <p>
          The only personal information this site asks you to give us is what you type into the
          safari inquiry form: your name, email address and — if you choose to add them — your phone
          or WhatsApp number, preferred visit dates, number of travellers, country of residence, the
          experiences that interest you, and your message.
        </p>
        <p>
          Every field except your name and email address is optional. Send less and we will still
          plan with you.
        </p>
      </>
    ),
  },
  {
    heading: "Why we collect it",
    body: (
      <p>
        To reply to you with a plan, and to remember what you told us so you never have to repeat
        it. We do not add you to a marketing list, sell your details, or use your inquiry to
        advertise anything else to you.
      </p>
    ),
  },
  {
    heading: "Where it is stored",
    body: (
      <p>
        Inquiries are written to this site's own database on our hosting platform, which stores it
        on our behalf as a service provider. Access is limited to the people who answer inquiries.
        We keep an inquiry for as long as it takes to plan and follow up on your trip, then it is
        removed on request or when it no longer serves a purpose.
      </p>
    ),
  },
  {
    heading: "Cookies and technical data",
    body: (
      <p>
        This site does not place advertising or cross-site tracking cookies. Like any hosted
        website, our platform may record standard technical details (IP address, browser type, page
        requested, timestamp) in server logs to keep the site running and to diagnose failures. That
        log data is not used to build a profile about you.
      </p>
    ),
  },
  {
    heading: "If you use WhatsApp",
    body: (
      <p>
        When you tap a WhatsApp link, you leave this site and WhatsApp's own privacy policy governs
        what happens next. We do not see the contents of any chat that starts outside the inquiry
        form.
      </p>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <>
        <p>
          You can ask us to see, correct or delete the details you have sent us, and you can
          withdraw an inquiry at any time. Write through the inquiry form and mark it as a privacy
          request.
        </p>
        <p>
          This site is not directed at children, and we ask that no one under sixteen submits
          personal information without a parent or guardian.
        </p>
      </>
    ),
  },
  {
    heading: "How long we keep things, and security",
    body: (
      <p>
        We use the protections our hosting platform provides — access control, encrypted transport,
        and a database that anonymous visitors may only write to, never read from. No system is
        perfectly secure, so we also keep only what we need: there is no password to steal here and
        no payment card is ever collected on this site.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        If our practices change, this page changes with them and the date at the top is updated.
        Material changes affecting an inquiry already in hand are communicated directly to you.
      </p>
    ),
  },
];

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      summary={`${site.brandName} collects the minimum it needs to plan your trip, keeps it on our own infrastructure, and answers to you when you ask.`}
      updated="24 October 2026"
      sections={sections}
    />
  );
}
