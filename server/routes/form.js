const express = require("express");
const router = express.Router();
const data = require("../models/data")
// const form = require("../views/form")


router.get("/", (req, res) => {
  res.render("form", data);
});
//
// router.post("/", (req, res) => {
//   console.log(req.body.comment)
// res.redirect("form");
// });

module.exports = router;
