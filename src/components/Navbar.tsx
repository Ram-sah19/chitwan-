import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandLockup } from "@/components/BrandMark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative">
        {/* The bar is built from two flat, borderless layers instead of one translucent panel:
            a permanent scrim for logo/link contrast, and the dark bar fading in on scroll.
            No backdrop-filter, border or shadow — any of those paint a hairline at the bottom edge. */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-jungle/80 via-jungle/40 to-transparent"
          aria-hidden
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-jungle transition-opacity duration-500 ease-out",
            scrolled ? "opacity-95" : "opacity-0",
          )}
          aria-hidden
        />

        <nav
          className={cn(
            "relative mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding] duration-500 ease-out lg:px-10",
            scrolled ? "py-2.5" : "py-5",
          )}
          aria-label="Main navigation"
        >
          <Link to="/" className="group flex items-center" aria-label={`${site.brandName} — home`}>
            <BrandLockup tailClassName="hidden xl:block" />
          </Link>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  data-active={pathname === item.to}
                  aria-current={pathname === item.to ? "page" : undefined}
                  className="nav-link whitespace-nowrap text-[13px] font-medium tracking-[0.04em] text-ivory/80 transition-colors duration-300 hover:text-ivory focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold data-[active=true]:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <SafariCta className="px-5 py-2.5" />
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-ivory transition-colors hover:text-gold focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </nav>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity,visibility] duration-500 ease-out lg:hidden",
          open
            ? "visible grid-rows-[1fr] bg-jungle opacity-100"
            : "invisible grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="space-y-1 px-5 pb-5 pt-3">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "block py-3 text-sm tracking-[0.04em] transition-colors",
                    pathname === item.to ? "text-gold" : "text-ivory/80 hover:text-ivory",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <SafariCta className="w-full px-4 py-3.5 text-center" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function SafariCta({ className }: { className?: string }) {
  return (
    <Link
      to="/contact"
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-gold/60 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold transition-colors duration-500 hover:text-jungle focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold",
        className,
      )}
    >
      <span
        className="absolute inset-0 z-0 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
        aria-hidden
      />
      <span className="relative z-10">Plan Your Safari</span>
      <ArrowRight
        className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}
