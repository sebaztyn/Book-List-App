const { ApolloServer } = require("apollo-server-lambda");
const mongoose = require("mongoose");
const typeDefs = require('./typeDefs/index.js');
const resolvers = require('./resolvers/index.js');
const Book = require("./models/book.js");
const Author = require("./models/author.js");


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
