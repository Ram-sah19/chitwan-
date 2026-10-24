import { experiences } from "@/data/experiences";

interface SitemapPage {
  path: string;
  priority: string;
  changefreq: string;
}

const pages: SitemapPage[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/experiences", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/wildlife", priority: "0.8", changefreq: "monthly" },
  { path: "/travel-guide", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.6", changefreq: "yearly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

/** Build a sitemap from the live request origin so no domain is hardcoded. */
export function buildSitemapXml(origin: string): string {
  const urls: SitemapPage[] = [
    ...pages,
    ...experiences.map((e) => ({
      path: `/experiences/${e.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
  ];

  const body = urls
    .map((u) => {
      const loc = escapeXml(`${origin}${u.path}`);
      return `  <url><loc>${loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
