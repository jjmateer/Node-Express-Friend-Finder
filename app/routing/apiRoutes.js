var friendsData = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    });
    app.post('/api/friends', (req, res) => {
        if (friendsData.length < 20) {
            friendsData.push(req.body);
            res.json(true);
        } else {
            friendsData.push(req.body);
            res.json(false);
        }
        console.log(req.body)
        // friendsData.push(req.body);
    })
}