import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

function removeDupsAndLowerCase(array: string[]) {
  return [...new Set(array.map((str) => str.toLowerCase()))];
}

const baseSchema = z.object({
  title: z.string().max(60),
});

const post = defineCollection({
  loader: glob({ base: "./src/content/post", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    baseSchema.extend({
      description: z.string(),
      coverImage: z
        .object({
          alt: z.string(),
          src: image(),
        })
        .optional(),
      author: z.string().default("Your Brand"),
      draft: z.boolean().default(false),
      ogImage: z.string().optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
    }),
});

const featureItem = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  href: z.string().optional(),
  featured: z.boolean().default(false),
});

const docs = defineCollection({
  loader: glob({
    base: "./src/content/docs",
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({}) =>
    baseSchema.extend({
      section: z.string(),
      title: z.string(),
      description: z.string(),
      layoutStyle: z.enum(["default", "guide"]).optional(),
      priority: z.number().optional(),
      draft: z.boolean().default(false),
      navGroup: z.string().optional(),
      adminFeatures: z.array(featureItem).optional(),
      userFeatures: z.array(featureItem).optional(),
    }),
});

export const collections = {
  post,
  docs,
};
