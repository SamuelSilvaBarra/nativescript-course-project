const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const books = [
  { id: 1, title: 'Fluent Python', author: 'Luciano Ramalho' },
  { id: 2, title: 'Python Crash Course', author: 'Eric Matthes' },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 4, title: 'Effective TypeScript', author: 'Dan Vanderkam' },
]

app.get('/api/books', (req, res) => {
  const query = String(req.query.q ?? '').trim().toLowerCase()

  if (!query) {
    return res.json(books)
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query)
  )

  res.json(filteredBooks)
})

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
