import '@babel/polyfill';
import 'dotenv/config';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from '../src/typeDefs';
import resolvers from '../src/resolvers'
import Book from '../src/models/book'
import Author from '../src/models/author'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors())

const server = new ApolloServer({typeDefs, resolvers, context:{Book, Author}});
server.applyMiddleware({app});


mongoose.connect(process.env.mongoDB, {
useUnifiedTopology: true,
useNewUrlParser: true,
});
mongoose.connection.once('open', ()=>{
  console.log('Connected to database');
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`GraphQL Server is ready on http://localhost:${port}${server.graphqlPath}`));