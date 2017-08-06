const express = require("express");
const router = express.Router();
const Book = require("../models/data");

// THis 'find' says "in my 'Book' collection, find this specific item". THEN, return the information rendered from that form on that entry
router.get("/", (req, res) => {
  Book.find()
    .then((data) => {
      res.render("form",
      {title : data}
      )
    console.log("Working?");
  })
})

router.post("/books", (req, res) => {
  console.log(req.body);
  new Book(req.body).save()
    .then((newEntry) => {
      res.send(mongoObj);
      res.redirect(`/${ newEntry._id }`)
      console.log("Post get?");
    })
    .catch(() => {
      console.log("Error");
    });
});

router.get("")

module.exports = router;
