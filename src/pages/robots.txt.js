export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: ${import.meta.env.SITE}${import.meta.env.BASE_URL}sitemap-index.xml
`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain'
      }
    }
  )
}
