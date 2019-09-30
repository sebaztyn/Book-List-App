import {ApolloError} from 'apollo-server-express';

const authorType = {
  Mutation: {
    async addAuthor(parent, args, {Author}){
      const {name, age} = args;
      const authorExists = await Author.find({name});
      if (authorExists.length) throw new ApolloError( "Author already exist");
      const author = new Author({name, age});
      return author.save();

    }
  },
  Query: {
      async authors(parent, args, {Author}){
      const authors = await Author.find({});
      return authors;
    },
    async author(parent, args, {Author}){
      const author = await Author.findById(args.id);
      return author;
    }
  },

  Author: {
    async books(author, args, {Book}){
      const booksByAuthor = await Book.find({authorId: author.id});
      return booksByAuthor;
      // if(!booksByAuthor.length) throw new ApolloError( "Author has no books listed");
      // console.log(booksByAuthor, 'BBOOOOKS BY AUTHOR!!!!!!!!!!!!!!!!!!!!!');
    }
  }
}

export default authorType;