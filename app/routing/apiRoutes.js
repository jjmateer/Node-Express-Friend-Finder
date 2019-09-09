var friends = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });
    app.post('/api/friends', (req, res) => {
        if (friends.length > 10) {
            friends.push(req.body);
            res.json(true);
        } else {
            friends.push(req.body);
            res.json(false);
        }
    })
}