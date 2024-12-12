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

// 3. Export multiple collections to register them
export const collections = { place }
