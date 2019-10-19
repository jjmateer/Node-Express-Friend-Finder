var bodyParser = require('body-parser')
var express = require('express')
var path = require('path');
var app = express()
var PORT = process.env.PORT || 8080
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});