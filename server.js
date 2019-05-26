// dependencies
var express = require("express");
var path = require('path');

// initialitze app & set port
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts app
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });