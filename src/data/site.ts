/**
 * Central site settings — the single place to edit brand details,
 * contact information and integrations. The operator updates values here
 * without touching page code.
 *
 * Values marked TODO are intentionally placeholders: nothing is fabricated
 * until the business provides verified details.
 */

export const site = {
  brandName: "Chitwan Jungle Experiences",
  tagline: "Welcome to the Heart of the Jungle.",
  description:
    "Discover the wild beauty of Chitwan through immersive jungle walks, river journeys, wildlife safaris, birdwatching, and authentic Tharu culture.",
  locationLabel: "Chitwan National Park · Nepal",

  // TODO(operator): replace with real contact details.
  email: "", // e.g. "hello@yourbrand.com"
  phone: "", // e.g. "+977-XX-XXXXXXX"
  address: "Chitwan, Nepal",

  // TODO(operator): WhatsApp business number in international format, digits only.
  // Example: "97798XXXXXXXX". Leave "" until the number is confirmed —
  // the floating WhatsApp button only appears once this is set.
  whatsappNumber: "",

  whatsappDefaultMessage:
    "Hello! I found your website and would like to plan a jungle experience in Chitwan.",

  // TODO(operator): add real social profile URLs; empty entries are hidden.
  social: [
    { label: "Instagram", url: "" },
    { label: "Facebook", url: "" },
    { label: "YouTube", url: "" },
  ],

  nav: [
    { label: "Home", to: "/" },
    { label: "Experiences", to: "/experiences" },
    { label: "Wildlife & Nature", to: "/wildlife" },
    { label: "Our Story", to: "/about" },
    { label: "Travel Guide", to: "/travel-guide" },
    { label: "Contact", to: "/contact" },
  ],
} as const;

/** Builds a wa.me link with a prefilled message. Returns null while no number is configured. */
export function whatsappLink(message?: string): string | null {
  if (!site.whatsappNumber) return null;
  const text = encodeURIComponent(message ?? site.whatsappDefaultMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
