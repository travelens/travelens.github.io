const documents = import.meta.glob('../data/*.json', { import: 'default', eager: true })
const docs = Object.keys(documents).map(doc => documents[doc]).flat(3)

export async function GET() {
  return new Response(JSON.stringify(docs), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}