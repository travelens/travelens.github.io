import type { ImageMetadata } from 'astro'

export default interface Document {
    id: string
    slug: string
    base: string
    collection: string
    body: string
    trip: string
    place: string
    timezone: string
    location: string
    title: string
    description: string
    date: Date
    image: ImageMetadata
    map: number[]
    tags: string[]
  }