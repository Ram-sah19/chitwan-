import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { experiences } from "@/data/experiences";

function makeRouter() {
  return createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
  });
}

const pages = [
  "/",
  "/experiences",
  "/wildlife",
  "/about",
  "/travel-guide",
  "/contact",
  "/privacy",
  "/terms",
];

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each(pages)("matches a page for %s instead of falling back to not found", (path) => {
    const matches = makeRouter().matchRoutes(path);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("resolves every experience slug to a detail route", () => {
    const router = makeRouter();
    for (const exp of experiences) {
      const matches = router.matchRoutes(`/experiences/${exp.slug}`);
      expect(matches.at(-1)?.routeId).toBe("/experiences/$slug");
    }
  });

  it("falls back to not found for an unknown path", () => {
    const matches = makeRouter().matchRoutes("/no-such-trail");
    expect(matches.at(-1)?.routeId).toBe(rootRouteId);
  });
});

describe("Sitemap", () => {
  it("lists every static page and experience url with the request origin", async () => {
    const { buildSitemapXml } = await import("@/lib/sitemap");
    const xml = buildSitemapXml("https://example.test");

    for (const path of [...pages, ...experiences.map((e) => `/experiences/${e.slug}`)]) {
      expect(xml).toContain(`<loc>https://example.test${path}</loc>`);
    }
    expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  });
});
