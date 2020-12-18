const { ApolloServer, gql } = require('apollo-server')

const data = [
  {
    id: 1,
    title: 'Sach 1',
    author: 'Dai 1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Sach 2',
    author: 'Dai 2',
    createdAt: new Date().toISOString(),
  },
]

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    createdAt: String!
  }

  type Query {
    books: [Book]
  }

  input AddBookInput {
    title: String!
    author: String!
  }

  type Mutation {
    addBook(input: AddBookInput!): Book
  }
`

const resolvers = {
  Query: {
    books: () => data,
  },
  Mutation: {
    addBook(parent, args, context, info) {
      const { title, author } = args.input
      const newBook = {
        id: Date.now(),
        title,
        author,
        createdAt: new Date().toISOString(),
      }

      data.push(newBook)

      return newBook
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
