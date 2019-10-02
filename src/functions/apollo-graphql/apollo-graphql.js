const { ApolloServer } = require("apollo-server-lambda");
const mongoose = require("mongoose");
const Book = require("../../models/book");
const Author = require("../../models/author");
const typeDefs = require('../../typeDefs');
const resolvers = require('../../resolvers');
const dotenv = require("dotenv");
dotenv.config()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:{Book, Author}
});


mongoose.connect(process.env.mongoDB, {
useUnifiedTopology: true,
useNewUrlParser: true,
});
mongoose.connection.once('open', ()=>{
  console.log('Connected to database!');
})

exports.handler = server.createHandler();
