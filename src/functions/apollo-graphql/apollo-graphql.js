const { ApolloServer } = require("apollo-server-lambda");
const mongoose = require("mongoose");
const Book = require("../../models/book");
const Author = require("../../models/author");
const typeDefs = require('../../typeDefs');
const resolvers = require('../../resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:{Book, Author}
});
console.log("HELOO!!!!!!!!!!!!!!!!!!!!!!!!!!!");

mongoose.connect(process.env.mongoDB, {
useUnifiedTopology: true,
useNewUrlParser: true,
});
//mongoose.on('error', ()=>console.log('Unable to connect to database'))
mongoose.connection.once('open', ()=>{
  console.log('Connected to database!');
})

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
