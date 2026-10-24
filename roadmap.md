# Chitwan Jungle Experiences — Build Roadmap

Source brief: user upload (eco-luxury wildlife tourism website).

## Tasks
- [x] Enable Lovable Cloud (backend for inquiry form)
- [x] Design system: forest green / ivory / gold tokens, Cormorant Garamond + Inter, in src/styles.css
- [x] Fonts via <link> in \_\_root.tsx
- [x] Central data: src/data/site.ts (brand, contacts, WhatsApp), src/data/experiences.ts (9 experiences)
- [x] Generate photography assets (4 batches of 4)
- [x] Homepage: hero, spirit of Chitwan, 9 experience cards, wildlife panels, why-us, seasons, gallery, testimonials, about teaser, inquiry form, WhatsApp float
- [x] Routes: /experiences, /experiences/$slug (9 detail pages), /wildlife, /about, /travel-guide, /contact
- [x] Gallery lightbox (next/prev/close, keyboard)
- [x] Inquiry form: validated, server fn, inquiries table + RLS + GRANTs
- [x] Footer, 404, sitemap.xml, robots.txt check
- [x] SEO head per route + OG
- [ ] Verify: Playwright walkthrough incl. live form submit (needs real Supabase credentials)

## Remaining before launch
- Operator details still empty in `src/data/site.ts`: email, phone, `whatsappNumber`, social URLs.
  The floating WhatsApp button and the direct-contact cards stay hidden until these are filled.
- `og:image` is not published per route: needs the live domain plus a hosted image URL.
- `/privacy` and `/terms` are plain-language drafts for the team to review with proper advice.
- Repo-wide `npm run lint` still fails on files that were never prettier-formatted (`npm run format`
  fixes it in one sweep, but it touches every `src/components/ui/*` file — do it as its own commit).
- `.env` is committed and not gitignored — check it holds only publishable values.
