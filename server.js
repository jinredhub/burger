var express = require("express");
var methodoverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


var app = express();
var port = process.env.PORT || 3000;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routs
// var routes = require("./controllers/planController.js");
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(port, function() {
  console.log("listening on port", port);
});