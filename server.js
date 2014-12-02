var express = require("express");
var fs = require("fs");

var app = express();

app.use(express.static(__dirname + "/_public"));

app.get("/places", function(req, res) {
  var places = fs.readFileSync('./myplaces.json');
  if (places) res.json(places);
});

app.listen(process.env.PORT || 8000);
