import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_*'],
    base: './site/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    video: z.string().url().optional(),
    github: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    types: z.array(z.enum(['internship', 'open-source', 'youtube', 'hackathon'])).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
    directLink: z.boolean().default(false).optional(),
  }),
});

const research = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_*'],
    base: './site/content/research',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['ongoing', 'under review', 'completed']).default('ongoing'),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    collaborators: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    directLink: z.boolean().default(false),
  }),
});

const publicationsPage = defineCollection({
  loader: glob({
    pattern: ['index.{md,mdx}'],
    base: './site/content/publications',
  }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_*'],
    base: './site/content/about',
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { projects, research, publicationsPage, about };
