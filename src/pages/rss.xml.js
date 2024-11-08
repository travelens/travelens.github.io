import rss from '@astrojs/rss'
import { SiteMetadata } from 'astro-travelens/config'

const documents = import.meta.glob('../data/*.json', { import: 'default', eager: true })
const docs = Object.keys(documents)
  .map((doc) => documents[doc])
  .flat(3)
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export async function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: SiteMetadata.title,
    // `<description>` field in output xml
    description: SiteMetadata.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: context.site,
    // add `xmlns:media="http://search.yahoo.com/mrss/"`
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom'
    },
    // add atom:link to be compatible with atom
    customData: `<atom:link href="${import.meta.env.BASE_URL}rss.xml" rel="self" type="application/rss+xml" />`,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required data and advanced use cases
    items: await Promise.all(
      docs.map(async (doc) => {
        return {
          link: import.meta.env.SITE + doc.base + doc.slug,
          title: doc.title,
          description: doc.description,
          author: SiteMetadata.author.email,
          pubDate: doc.date,
          // custom data for media. The url must be the full url (including https://)
          customData: `<media:content
          type="image/${doc.image.format == 'jpg' ? 'jpeg' : 'png'}"
          width="${doc.image.width}"
          height="${doc.image.height}"
          medium="image"
          url="${import.meta.env.SITE + doc.image.src}" />
      `
        }
      })
    )
  })
}
