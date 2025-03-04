// 1. Import your utilities and schemas
import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
// 2. Define your collections

const place = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/place' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      width: z.number()
    })
})

const post = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/post' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      trip: z.string(),
      place: z.string(),
      timezone: z.string().default('Australia/Sydney'),
      location: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: image(),
      gallery: z.string().optional(),
      map: z.array(z.number()).optional(),
      tags: z.array(z.string()).optional()
    })
})

const trip = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/trip' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      place: z.string(),
      timezone: z.string().default('Australia/Sydney'),
      location: z.string(),
      title: z.string(),
      description: z.string(),
      start: z.date(),
      end: z.date(),
      image: image(),
      tags: z.array(z.string()).optional()
    })
})

// 3. Export multiple collections to register them
export const collections = {
  post,
  trip,
  place
}
