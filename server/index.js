const fs = require("fs");
const path = require("path");
const url = require("url");
const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const form = require("./routes/form");
const mongoose = require("./dbConnection");
const app = express();

// Check if there is an ENV variable and set it as an app variable.
app.set("port", process.env.PORT || 3000);

// Expose the public folder to the internet to serve CSS / Frontend JS
app.use("/public", express.static(path.join(__dirname, "public")));

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({extended: false}));

app.use(expressValidator());

// **************** ROUTES ↓

app.use("/", require("./routes/form"));
app.use("/create", form);

// **************** ROUTES ↑

// Start the server if run directly
if (require.main === module) {
  // Start a db connect and list after it's connected.

  app.listen(app.get("port"), err => {
    if (err) {
      throw err;
      exit(1);
    }

    console.log(
      `Node running in ${app.get("env")} mode @ http://localhost:${app.get(
        "port"
      )}`
    );
  });
}

module.exports = app;
