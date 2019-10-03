import { hot } from 'react-hot-loader/root';
import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import BookList from './BookList.jsx'
import AddBook from './AddBook.jsx'


const client = new ApolloClient({uri: '/.netlify/functions/apollo-graphql'})

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
      </ApolloProvider>
    )
  }
}

export default hot(App);
