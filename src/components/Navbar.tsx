import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Compass } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-jungle/95 shadow-lg shadow-jungle/40 backdrop-blur-md"
          : "bg-gradient-to-b from-jungle/70 to-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10"
        aria-label="Main navigation"
      >
        <Link to="/" className="group flex items-center gap-3" aria-label={`${site.brandName} — home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-jungle">
            <Compass className="h-4 w-4" aria-hidden />
          </span>
          <span className="font-display text-lg leading-tight tracking-wide text-ivory sm:text-xl">
            {site.brandName}
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                data-active={pathname === item.to}
                className="nav-link text-[13px] font-medium tracking-wide text-ivory/85 transition-colors hover:text-ivory data-[active=true]:text-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-gold/70 px-5 py-2.5 text-[13px] font-semibold tracking-wide text-gold transition-all hover:bg-gold hover:text-jungle"
          >
            Plan Your Safari
          </Link>
        </div>

        <button
          type="button"
          className="text-ivory lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ivory/10 bg-jungle/95 backdrop-blur-md lg:hidden">
          <ul className="space-y-1 px-5 py-4">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "block px-2 py-3 text-sm tracking-wide",
                    pathname === item.to ? "text-gold" : "text-ivory/85",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                to="/contact"
                className="block bg-gold px-4 py-3 text-center text-sm font-semibold text-jungle"
              >
                Plan Your Safari
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
