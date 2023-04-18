const documents = import.meta.glob('../data/*.json', { import: 'default', eager: true })
const docs = Object.keys(documents).map(doc => documents[doc]).flat(3)

export async function get() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${docs.map((post) => `  <url>
    <loc>${import.meta.env.SITE + post.base + post.slug}</loc>
    <lastmod>${post.date}</lastmod>
  </url>`).join('\n')}
</urlset> 
`
  return {
    body,
  }
}
