// import {GraphQLString, GraphQLID, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLSchema } from 'graphql';
// import _ from 'lodash';
// import Book from '../models/book'
// import Author from '../models/author'
// import {gql} from 'apollo-server-express';

// const typeDefs = gql`
//   type Query{
//     user: User
//   }

//   type User{
//     firstname: String!
//     lastname: String!
// }
// `;

// const resolvers = {
//   Query: {
//     user: ()=>({
//       firstname: 'Chima',
//       lastname: 'Ekeneme'
//     })
//   }
// }

// export {typeDefs, resolvers};


// const BookType = new GraphQLObjectType({
//   name: 'Book',
//   fields: ()=>({
//     id: {type: GraphQLID},
//     name: {type: GraphQLString},
//     genre: {type: GraphQLString},
//     author: {
//       type: AuthorType,
//       resolve(parent, args){
//         //return _.find(authors, {id: parent.authorId});
//         return Author.findById(parent.authorId);
//       }
//     }
//   })
// });
// const AuthorType = new GraphQLObjectType({
//   name: 'Author',
//   fields: ()=>({
//     id: {type: GraphQLID},
//     name: {type: GraphQLString},
//     age: {type: GraphQLInt},
//     books: {
//       type: new GraphQLList(BookType),
//       resolve(parent, args){
//         console.log(parent.id);
//         //return _.filter(books, {authorId: parent.id})
//         return Book.find({authorId: parent.id});
//       }
//     }
//   })
// });

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields:{
//     addAuthor: {
//       type: AuthorType,
//       args: {
//         name: {type: new GraphQLNonNull(GraphQLString)},
//         age: {type: new GraphQLNonNull(GraphQLInt)}
//       },
//       resolve(parent,args){
//         let author = new Author({
//           name: args.name,
//           age: args.age
//         })
//         return author.save();
//       }
//     },
//     addBook: {
//       type: BookType,
//       args: {
//         name: {type: new GraphQLNonNull(GraphQLString)},
//         genre: {type: new GraphQLNonNull(GraphQLString)},
//         authorId: {type: new GraphQLNonNull(GraphQLID)},
//       },
//       resolve(parent,args){
//         if(!args.name) return `Book name is required`;
//         if(!args.genre) return `Book genre is required`;
//         if(!args.authorId) return `Book author is required`;
//         let book = new Book({
//           name: args.name,
//           genre: args.genre,
//           authorId: args.authorId
//         })
//         return book.save();
//       }
//     }
//   }
// })

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     book: {
//       type: BookType,
//       args: {id: {type: GraphQLID}},
//       resolve(parent,args){
//        return Book.findById(args.id);
//       }
//      },
//     author: {
//       type: AuthorType,
//       args: {id: {type: GraphQLID}, age:{type: GraphQLInt}},
//       resolve(parent,args){
//         console.log(args);
//        return Author.findById(args.id);
//       }
//     },
//     books:{
//       type: new GraphQLList(BookType),
//       resolve(parent, args){
//         return Book.find({});
//       }
//     },
//     authors:{
//       type: new GraphQLList(AuthorType),
//       resolve(parent, args){
//         return Author.find({});
//       }
//     }
//   }
// })

// export default new GraphQLSchema({
//   query: RootQuery,
//   mutation: Mutation
// });