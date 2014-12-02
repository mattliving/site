var express = require("express");

var app = express();

app.use(express.static(__dirname + "/_public"));

app.get("/places", function(req, res) {
  res.json("myplaces.json");
});

app.listen(process.env.PORT || 8000);
