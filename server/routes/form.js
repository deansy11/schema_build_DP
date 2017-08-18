const express = require("express");
const router = express.Router();
const Book = require("../models/data");

router.get("/", (req, res) => {
  res.render("homepage")
  });

router.get("/index", (req, res) => {
  res.render("index")
});


// Book.find()
// .then((data) => {

router.post("/books", (req, res) => {
  new Book(req.body).save()
    .then((mongoObj) => {
      res.send(mongoObj);
      // res.redirect(`/books/${ mongoObj._id }`)
      console.log("Post get?");
    })
    .catch(() => {
      console.log("Error");
    });
});

module.exports = router;
