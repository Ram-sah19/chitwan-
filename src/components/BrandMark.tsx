import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * Chitwan Jungle Experiences mark: a rhino horn rising above the Rapti's water lines,
 * held in a hairline ring. Drawn as SVG so it stays crisp at navbar and favicon sizes.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("h-9 w-9 shrink-0", className)}
      fill="none"
    >
      <circle cx="24" cy="24" r="22.4" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
      <path
        d="M24 9.6c3.9 5.5 5.7 10.6 5.7 16.2H18.3c0-5.6 1.8-10.7 5.7-16.2Z"
        fill="currentColor"
      />
      <path d="M12.6 31.4h22.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M17.2 35.6h13.6"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/**
 * Two-line lockup: display serif lead word over a letterspaced sub-line.
 * Derived from site.brandName so src/data/site.ts stays the only place to edit the brand.
 * `tailClassName` lets narrow containers drop the sub-line at small desktop widths,
 * where the full lockup squeezes the nav links.
 */
export function BrandLockup({
  className,
  tailClassName,
}: {
  className?: string;
  tailClassName?: string;
}) {
  const words = site.brandName.split(" ");
  const lead = words[0] ?? site.brandName;
  const tail = words.slice(1).join(" ");

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <BrandMark className="text-gold transition-transform duration-500 group-hover:scale-[1.06]" />
      <span className="leading-none">
        <span className="block font-display text-lg tracking-wide text-ivory sm:text-xl">
          {lead}
        </span>
        {tail && (
          <span
            className={cn(
              "mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.28em] text-gold/70",
              tailClassName,
            )}
          >
            {tail}
          </span>
        )}
      </span>
    </span>
  );
}
