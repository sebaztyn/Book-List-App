const mongoose = require('mongoose');
require("dotenv").config();

const connect = mongoose.connect(process.env.mongoDB, {
useUnifiedTopology: true,
useNewUrlParser: true,
});
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

const book =  mongoose.model('Book', bookSchema);

module.exports = book;
