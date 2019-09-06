  module.exports = (function() {
    var path = require("path");
    'use strict';
    var externalRoutes = require('express').Router();

    externalRoutes.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    externalRoutes.get('/survey.html', function (req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    return externalRoutes;
})();