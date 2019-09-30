import {gql} from 'apollo-server-express';


const bookType = gql`
  type Book {
    name: String!
    genre: String!
    author: Author!
    id: ID!
  }
  extend type Query {
    books: [Book!]!
    book(id: ID!): Book
  }
  extend type Mutation {
    addBook (name: String!, genre: String!, authorId: ID!):Book!
  }
`;

export default bookType;
