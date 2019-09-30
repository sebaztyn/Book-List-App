import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

export class BookDetails extends Component {
  displayBookDetails(){
    const {data} = this.props;
    if(data.loading){
      return (<div>Loading details..</div>)
    } else if (!data.loading && this.props.bookId){
      const books = data.book.author.books;
      const booklist = books.map(book=>{
        return (<li key={book.id}>{book.name}</li>)
      })
      return(<div>
        <h2>{data.book.name}</h2>
        <p><em>{data.book.genre}</em></p>
        <p>{data.book.author.name}</p>
        <p>All books by this author</p>
        <ul className="other-books">
          {booklist}
        </ul>
      </div>)
    }else{
      return (<div>No book selected...</div>)
    }
  }
  render() {
    return (
      <div id="book-details">
        <p>Click on book title to see details on the book</p>
        {this.displayBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookQuery, {options: (props)=>{
  return {
    variables: {
      id: props.bookId
    }
  }
}})(BookDetails)