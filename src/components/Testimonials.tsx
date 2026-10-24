import { MessageSquareHeart, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

/**
 * Testimonials. No reviews are fabricated: until the operator supplies
 * verified visitor reviews (with permission), this shows an invitation
 * to share one, with an optional link to a verified review platform.
 *
 * To add real reviews later, extend `reviews` below with
 * { name, date, source?, text } entries — they render automatically.
 */
const reviews: { name: string; date: string; source?: string; text: string }[] = [];

const externalReviewUrl = ""; // TODO(operator): link a verified review platform when connected.

export function Testimonials() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <Star className="mx-auto h-5 w-5 text-gold" aria-hidden />
        <h2 className="mt-4 font-display text-3xl text-ivory sm:text-5xl">Stories From the Journey.</h2>
      </Reveal>

      {reviews.length > 0 ? (
        <div className="mt-12 space-y-8">
          {reviews.map((r) => (
            <Reveal key={r.name} className="border border-ivory/10 bg-forest-deep/60 p-8 text-left">
              <p className="font-display text-xl leading-relaxed text-ivory/90">“{r.text}”</p>
              <p className="mt-4 text-sm tracking-wide text-gold/90">
                {r.name}
                <span className="text-ivory/50"> · {r.date}</span>
                {r.source && <span className="text-ivory/50"> · via {r.source}</span>}
              </p>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={120} className="mt-10">
          <MessageSquareHeart className="mx-auto h-8 w-8 text-gold/70" aria-hidden />
          <p className="mt-5 font-display text-2xl italic text-ivory/85">
            Your story could be the first one told here.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/60">
            We only publish genuine, verified words from travellers who have journeyed with us —
            never invented reviews. If you have experienced Chitwan with us, we would love to hear
            about it and share it here with your permission.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 border border-gold/70 px-6 py-3 text-[13px] font-semibold tracking-wider text-gold transition-all hover:bg-gold hover:text-jungle"
          >
            Share Your Experience
          </Link>
          {externalReviewUrl && (
            <p className="mt-5 text-xs text-ivory/50">
              Read{" "}
              <a href={externalReviewUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
                verified reviews
              </a>{" "}
              on an external platform.
            </p>
          )}
        </Reveal>
      )}
    </div>
  );
}
