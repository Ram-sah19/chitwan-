import { Link } from "@tanstack/react-router";
import { Compass, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { experiences } from "@/data/experiences";

export function Footer() {
  const year = new Date().getFullYear();
  const wa = whatsappLink();

  return (
    <footer className="section-jungle border-t border-ivory/10">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Compass className="h-4 w-4" aria-hidden />
              </span>
              <span className="font-display text-xl tracking-wide text-ivory">{site.brandName}</span>
            </Link>
            <p className="mt-5 font-display text-lg italic text-gold/90">“{site.tagline}”</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">{site.description}</p>
          </div>

          <nav aria-label="Quick navigation">
            <h2 className="eyebrow text-gold/80">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              {site.nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Experiences">
            <h2 className="eyebrow text-gold/80">Experiences</h2>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              {experiences.slice(0, 6).map((exp) => (
                <li key={exp.slug}>
                  <Link
                    to="/experiences/$slug"
                    params={{ slug: exp.slug }}
                    className="transition-colors hover:text-gold"
                  >
                    {exp.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/experiences" className="text-gold/90 transition-colors hover:text-gold">
                  View all experiences →
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-gold/80">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" aria-hidden />
                <span>{site.address}</span>
              </li>
              {site.email ? (
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-gold/70" aria-hidden />
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                    {site.email}
                  </a>
                </li>
              ) : null}
              {site.phone ? (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-gold/70" aria-hidden />
                  <a href={`tel:${site.phone}`} className="transition-colors hover:text-gold">
                    {site.phone}
                  </a>
                </li>
              ) : null}
              {wa ? (
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold/70" aria-hidden />
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                    WhatsApp us
                  </a>
                </li>
              ) : null}
              {!site.email && !site.phone && !wa ? (
                <li className="text-ivory/50">
                  Contact details coming soon — use the inquiry form and we will reach you.
                </li>
              ) : null}
            </ul>

            {site.social.some((s) => s.url) && (
              <div className="mt-5 flex gap-4">
                {site.social
                  .filter((s) => s.url)
                  .map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest text-ivory/60 transition-colors hover:text-gold"
                    >
                      {s.label}
                    </a>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brandName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
