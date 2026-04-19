import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  author: "Your Brand",
  date: {
    locale: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  description:
    "An Astro template for product and documentation sites. Replace this description in src/site.config.ts.",
  lang: "en-US",
  ogLocale: "en_US",
  title: "Your Brand",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
  {
    path: "/docs/",
    title: "Docs",
  },
  {
    path: "/blog/",
    title: "Blog",
  },
];
