const {gql} = require('apollo-server-lambda');

const rootValues = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscritpyion {
    _: String
  }
`;

module.exports = rootValues;