// 1. Import your utilities and schemas
import { z, defineCollection, image } from 'astro:content'

// 2. Define your collections

const placeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    width: z.number(),
  }),
})

const tripCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    place: z.string(),
    location: z.string(),
    title: z.string(),
    description: z.string(),
    start: z.date(),
    end: z.date(),
    image: image(),
    tags: z.array(z.string()).optional(),
    href: z.string(),
  }),
})

// 3. Export multiple collections to register them
export const collections = {
  place: placeCollection,
  trip: tripCollection,
}
