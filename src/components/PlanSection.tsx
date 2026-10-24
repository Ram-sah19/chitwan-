import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";

/** Full-width "Plan Your Adventure" section — dark jungle background, refined form. */
export function PlanSection({
  defaultExperience,
  id,
}: {
  defaultExperience?: string;
  id?: string;
}) {
  return (
    <section id={id} className="section-jungle py-24 lg:py-32" aria-labelledby="plan-heading">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow text-gold">Plan Your Adventure</p>
          <h2 id="plan-heading" className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            Your Jungle Story Starts Here.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/65">
            Tell us what you would love to experience in Chitwan, and let's plan your adventure.
            We reply personally with a plan shaped around you.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-12">
          <InquiryForm defaultExperience={defaultExperience} />
        </Reveal>
      </div>
    </section>
  );
}
