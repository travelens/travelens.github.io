import { SiteMetadata } from 'astro-travelens/config'

const documents = import.meta.glob('../data/*.json', { import: 'default', eager: true })
const docs = Object.keys(documents).map(doc => documents[doc]).flat(3).sort((a,b) => new Date(b.date) - new Date(a.date))

export async function get() {
  return { body: `<?xml version="1.0"?>
<rss version="2.0">
  <channel>
    <title>${SiteMetadata.title}</title>
    <link>${import.meta.env.SITE}</link>
    <description>${SiteMetadata.description}</description>
    <language>en</language>
    <pubDate>${SiteMetadata.buildTime.toISOString()}</pubDate>
    <lastBuildDate>${SiteMetadata.buildTime.toISOString()}</lastBuildDate>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>Astro</generator>
    <managingEditor>${SiteMetadata.author.email} (${SiteMetadata.author.name})</managingEditor>
    <webMaster>${SiteMetadata.author.email} (${SiteMetadata.author.name})</webMaster>
${docs.map((doc) => `    <item>
      <title>${doc.title}</title>
      <link>${import.meta.env.SITE + doc.base + doc.slug}</link>
      <author>${SiteMetadata.author.email} (${SiteMetadata.author.name})</author>
      <description>${doc.description}</description>
      <pubDate>${doc.date}</pubDate>
      <guid>${import.meta.env.SITE + doc.base + doc.slug}</guid>
      <category domain="trip">${doc.trip}</category>
      <category domain="place">${doc.place}</category>
      <category domain="location">${doc.location}</category>
    </item>`).join('\n')}
  </channel>
</rss>
`,}
}