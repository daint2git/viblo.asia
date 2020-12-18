import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
  useMutation,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author
      createdAt
    }
  }
`

const ADD_BOOK = gql`
  mutation($input: AddBookInput!) {
    addBook(input: $input) {
      id
      title
      author
      createdAt
    }
  }
`

function AddBookForm() {
  const titleRef = useRef('')
  const authorRef = useRef('')

  const resetInput = () => {
    titleRef.current.value = ''
    authorRef.current.value = ''
  }

  const [addBook] = useMutation(ADD_BOOK, {
    update(cache, { data }) {
      // Fetch the books from the cache
      const existingBooks = cache.readQuery({ query: GET_BOOKS })

      // Add the new book to the cache
      const newBook = data.addBook

      cache.writeQuery({
        query: GET_BOOKS,
        data: { books: [newBook, ...existingBooks.books] },
      })
    },
    onCompleted: resetInput,
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        addBook({
          variables: {
            input: {
              title: titleRef.current.value,
              author: authorRef.current.value,
            },
          },
        })
      }}
    >
      <h3>Add book form</h3>
      <div>
        <label htmlFor="title">title</label>
        <input id="title" type="text" ref={titleRef} />
      </div>
      <div>
        <label htmlFor="author">author</label>
        <input id="author" type="text" ref={authorRef} />
      </div>
      <button type="submit">Add book</button>
    </form>
  )
}

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <div>
      <AddBookForm />
      <br />
      <div>
        {data.books.map((book) => (
          <div key={book.id} style={{ borderBottom: '1px solid gray' }}>
            <h3>Title: {book.title}</h3>
            <p>Author {book.author}</p>
            <span>{book.createdAt}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'),
)
