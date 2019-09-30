import {ApolloError} from 'apollo-server-express';

const bookType = {
  Mutation: {
    async addBook(parent, args, {Book}){
      const {name, genre, authorId} = args;
      const bookExists = await Book.find({name});
        if (bookExists.length) throw new ApolloError( "Book already exist");
      const book = new Book({name, genre, authorId});
      return book.save();

    }
  },
  Query: {
        async books(parent, args, {Book}){
      const allBooks = await Book.find({});
      return allBooks;
    },
    async book(parent, args, {Book}){
            const oneBook = await Book.findById(args.id);
      return oneBook;
    }
  },
  Book: {
    async author(book, args, {Author}){
      const bookAuthor = await Author.findById(book.authorId);
      return bookAuthor;
    }
  }
}

export default bookType;