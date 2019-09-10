var friendsData = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    });
    app.post('/api/friends', (req, res) => {
        if (friendsData.length < 11) {
            friendsData.push(req.body);
            res.json(true);
        } else {
            friendsData.push(req.body);
            res.json(false);
        }
        // console.log(req.body.score)
        for (var i = 0; i < friendsData.length; i++) {
            // console.log(friendsData[i].score)
            var diff = friendsData[i].score.filter(x => !req.body.score.includes(x));
            console.log("==================")
            console.log("==================")
            console.log("user score: " + req.body.score)
            console.log("==================")
            console.log("friends scores: " + friendsData[i].score)
            console.log("==================")
            console.log("difference: " + diff)
        }

        // console.log(diff);
    });
}