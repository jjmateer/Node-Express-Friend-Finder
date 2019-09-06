var express = require("express");
var app = express();
var PORT = 3000;
var externalRoutes = require('../Node-Express-Friend-Finder/app/routing/htmlRoutes');
app.use('/', externalRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});