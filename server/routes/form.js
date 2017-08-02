const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("form", { form : form });
});

router.post("/", (req, res) => {
  console.log(req.body.comment)
res.redirect("form");
});

module.exports = router;
