var express = require('express');
const ejs = require("ejs").__express;

var app = express();
app.set("view engine", "ejs");
// app.engine('.ejs', ejs); // <-- this line fixes the error
app.set("views", "./src/views");
var serveIndex = function(req, res, next){
  res.render('index');
};
app.get('/', serveIndex);
app.listen(8000);
