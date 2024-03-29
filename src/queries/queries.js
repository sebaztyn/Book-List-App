const {gql} = require('apollo-boost');

const getBooksQuery = gql`
{
  books {
    name
    id
  }
}
`
const getAuthorsQuery = gql`
{
  authors {
    name
    id
  }
}
`

const addBookMutation = gql`
mutation ($name: String!, $genre: String!, $authorId: ID!){
  addBook(name:$name, genre:$genre, authorId:$authorId){
    name
    id
    genre

  }
}
`
const getBookQuery = gql`
query ($id:ID!){
  book(id:$id){
    name
    id
    genre
    author{
      id
      name
      age
      books{
        name
        id
      }
    }
  }
}
`

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery}