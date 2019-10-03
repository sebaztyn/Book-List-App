const mongoose = require('mongoose');
require("dotenv").config();

const connect = mongoose.connect(process.env.mongoDB, {
useUnifiedTopology: true,
useNewUrlParser: true,
});

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
});


const author =  mongoose.model('Author', authorSchema);
module.exports = author;