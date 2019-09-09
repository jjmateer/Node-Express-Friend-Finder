var bodyParser = require('body-parser')
var express = require('express')
var path = require('path');
var app = express()
var PORT = process.env.PORT || 8080
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./app/routing/apiroutes.js')(app);
require('./app/routing/htmlroutes.js')(app);
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});