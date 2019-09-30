import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery,getBooksQuery, addBookMutation} from '../queries/queries'



class AddBook extends Component {
  state = {
    name: '',
    genre: '',
    authorId: ''
  }
  displayAuthors(){
    const data = this.props.getAuthorsQuery;
    if(data.loading){
      return (<option disabled>Loading Authors..</option>)
    }else{
      if(!data.authors.length) return (<option disabled> No author found</option>)
      return (data.authors.map(author=>{
        return (<option key={author.id} value={author.id}>{author.name}</option>)
      }))
    }
  }

  handleChange =(event)=>{
    const value = event.target.value;
    return this.setState({
      [event.target.name]: value
    })
  }

  submitForm =(event)=>{
    event.preventDefault();
    this.props.addBookMutation({
      variables:{
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{query: getBooksQuery}]
    });
        return this.setState({
      name: '',
      genre: '',
      authorId: ''
    })
  }
  render(){
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" name="name" value={this.state.name} onChange ={this.handleChange}/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" name="genre" value={this.state.genre} onChange ={this.handleChange} />
        </div>
        <div className="field">
          <label>Author:</label>
            <select name="authorId" value={this.state.authorId} onChange ={this.handleChange}>
              <option>Select author</option>
              {this.displayAuthors()}
            </select>
        </div>
        <button>+</button>
      </form>
    )
  }
};

export default compose(
  graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
  graphql(addBookMutation,{name:"addBookMutation"}),
  graphql(getBooksQuery,{name:"getBooksQuery"})
)(AddBook);