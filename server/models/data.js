const mongoose = require('mongoose');

const comicBooksSchema = new mongoose.Schema({
  title:  { type: String, required: true, unique: true },
  author: String,
  issue: Number,
  summary: String,
  characters: [{
    name: String,
    age: Number,
    job: String,
    hobbies: String,
 }]
});

const Books = mongoose.model('Books', comicBooksSchema);

module.exports = Books;
