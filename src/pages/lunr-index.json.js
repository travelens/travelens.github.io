import lunr from 'lunr'

const documents = import.meta.glob('../data/*.json', { import: 'default', eager: true })
const docs = Object.keys(documents)
  .map((doc) => documents[doc])
  .flat(3)

// const options = { keys: [
//   'trip',
//   'place',
//   'location',
//   'title',
//   'description',
//   'body'
// ]}

const idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('description')
  this.field('trip')
  this.field('place')
  this.field('location')
  this.field('tags')
  this.field('body')

  docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

export async function GET() {
  return new Response(JSON.stringify(idx), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
