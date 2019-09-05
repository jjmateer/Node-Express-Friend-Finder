var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "routing/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "routing/survey.html"));
  });