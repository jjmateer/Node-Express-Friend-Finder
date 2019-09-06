
'use strict';

var friends = require('../data/friends.js');
var fs = require('fs')

module.exports = (app)=>{
    app.get('/api/friends', (req, res)=>{
        res.json(friends);
    });
}