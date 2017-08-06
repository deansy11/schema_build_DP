const mongoose = require('mongoose');

const comicsSchema = new mongoose.Schema({
  title:  { type: String, required: true, unique: true },
  author: String,
  issue: Number,
  summary: String,
  characters: [{
    name: String,
    age: Number,
    job: String
 }]
});

const Books = mongoose.model('Books', comicsSchema);

module.exports = Books;
