import {gql} from 'apollo-server-express';

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

export default rootValues;