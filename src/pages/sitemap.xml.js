import { SiteMetadata } from '../common/config'

const documents = import.meta.glob('../data/*.json', { import: 'default', eager: true })
const docs = Object.keys(documents)
  .map((doc) => documents[doc])
  .flat(3)
const tags = [
  ...new Set(
    Object.keys(documents)
      .map((doc) => documents[doc].map((entry) => (entry.tags ? entry.tags.split(':') : [])))
      .flat(3)
  )
]

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${import.meta.env.SITE}</loc>
    <lastmod>${SiteMetadata.buildTime.toISOString()}</lastmod>
  </url>
  <url>
    <loc>${import.meta.env.SITE + '/tags'}</loc>
    <lastmod>${SiteMetadata.buildTime.toISOString()}</lastmod>
  </url>
  <url>
    <loc>${import.meta.env.SITE + '/trips'}</loc>
    <lastmod>${SiteMetadata.buildTime.toISOString()}</lastmod>
  </url>
${tags
  .map(
    (tag) => `  <url>
    <loc>${import.meta.env.SITE + '/tag/' + encodeURIComponent(tag)}</loc>
    <lastmod>${SiteMetadata.buildTime.toISOString()}</lastmod>
  </url>`
  )
  .join('\n')}
${docs
  .map(
    (post) => `  <url>
    <loc>${import.meta.env.SITE + post.url}</loc>
    <lastmod>${post.date}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
