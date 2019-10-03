const {gql} = require('apollo-server-lambda');


const authorType = gql`
  type Author {
    name: String!
    age: Int!
    id: ID!
    books: [Book]!
  }

  extend type Query {
    authors: [Author]!
    author(id: ID!): Author
  }
  extend type Mutation {
    addAuthor (name: String!, age: Int!): Author!
  }
`;

module.exports =  authorType;
