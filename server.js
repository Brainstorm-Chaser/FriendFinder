// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mathJs = require("mathjs")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));

  // app.get("/friends", function(req, res) {
  // res.sendFile(path.join(__dirname, "public/survey.html"));
});






app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});