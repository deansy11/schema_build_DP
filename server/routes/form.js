const express = require("express");
const router = express.Router();
const data = require("../models/data");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("form", {title : true} );
});

router.post("/books", (req, res) => {
  console.log(req.body.title);
  res.redirect("form");
})


module.exports = router;
