import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

/**
 * Discreet floating WhatsApp button. Rendered only when the operator's
 * WhatsApp number is configured in src/data/site.ts.
 */
export function WhatsAppFloat() {
  const [prefill, setPrefill] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Pick up a prefilled message set by experience pages (selected experience, date, travellers).
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setPrefill(detail);
    };
    window.addEventListener("whatsapp-prefill", handler);
    return () => window.removeEventListener("whatsapp-prefill", handler);
  }, []);

  const href = whatsappLink(prefill ?? undefined);
  if (!href || dismissed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <span className="hidden rounded-full bg-jungle/90 px-4 py-2 text-xs tracking-wide text-ivory shadow-lg backdrop-blur sm:block">
        Chat with us on WhatsApp
      </span>
      <div className="group relative">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" aria-hidden />
        </a>
        <button
          type="button"
          aria-label="Hide WhatsApp button"
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-jungle text-ivory opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 hover:text-gold"
          onClick={() => setDismissed(true)}
        >
          <X className="h-3 w-3" aria-hidden />
        </button>
      </div>
    </div>
  );
}
