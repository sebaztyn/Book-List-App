import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails.jsx'

export class BookList extends Component {
  state = {
    bookId: null
  }
  clickBookHandler(id){
    this.setState({bookId: id});
  }
  displaybooks(){
    const data = this.props.data;
    if(data.loading){
      return (<div>Loading books...</div>);
    }else{
      return (data.books.map(book=>{
        return (<li key={book.id} onClick={()=>this.clickBookHandler(book.id)}>{book.name}</li>)
    }));
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displaybooks()}
        </ul>
        <BookDetails bookId={this.state.bookId}/>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
