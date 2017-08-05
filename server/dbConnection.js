const mongoose = require('mongoose');
// What is the 'bluebird' promise
mongoose.Promise = require('bluebird');

// const MONGO_DB = "booksdb";
mongoose.connect(`mongodb://localhost:27017/booksdb`);

// This is not a necessary addition, but is helpful to have a console print out in the event that there's an error so that you know what's going on
mongoose.connection.on("error", function handleDBErrors(err) {
  console.error("DB Error", err);
  process.exit(128)
});
