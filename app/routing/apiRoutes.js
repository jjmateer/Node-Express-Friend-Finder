var friendsData = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    });
    app.post('/api/friends', (req, res) => {
        function getLeastDiff() {
            var bestmatch = {
                name: "",
                picture: "",
                friendDiff: 1000
            }
            for (var i = 0; i < friendsData.length; i++) {
                var currentfriend = friendsData[i]
                var difference = 0;
                for (var j = 0; j < currentfriend.score.length; j++) {
                    var currentfriendscore = currentfriend.score[j]
                    var userscore = req.body.score[j]
                    difference += Math.abs(parseInt(currentfriendscore) - parseInt(userscore))
                }
                if (difference < bestmatch.friendDiff) {
                    bestmatch.name = currentfriend.name
                    bestmatch.picture = currentfriend.picture
                    bestmatch.friendDiff = difference
                }
            }
            res.json(bestmatch)
        }
        getLeastDiff()
    })
}
