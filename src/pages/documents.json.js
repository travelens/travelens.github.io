const documents = import.meta.glob('../data/*.json', { import: 'default', eager: true })
const docs = Object.keys(documents).map(doc => documents[doc]).flat(3)

export async function get() {
  const body = JSON.stringify(docs)
  return { body }
}