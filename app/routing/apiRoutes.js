var friendsData = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    });
    var match = "";
    app.post('/api/friends', (req, res) => {
        // if (friendsData.length < 11) {
        //     friendsData.push(req.body);
        //     // res.json(true);
        //     getSmallestDiff()
        //     res.json(match)
        // } else {
        //     friendsData.push(req.body);
        //     // res.json(false);
        //     res.json(match)
        // }
        // getSmallestDiff()
        function getSmallestDiff() {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var totalsArr = [];
            var compareArr = [];
            var isComplete = 0;
            for (var i = 0; i < friendsData.length; i++) {
                var diff = friendsData[i].score.filter(x => !req.body.score.includes(x));
                var total = 0;
                for (var j = 0; j < diff.length; j++) {
                    total += parseInt(diff[j])
                }
                totalsArr.push(total)
            }
            var sortedArr = totalsArr.slice().sort(function (a, b) { return a - b });
            var lowestNum = sortedArr[1]
            var numIndex = totalsArr.indexOf(lowestNum);
            match = friendsData[numIndex]
            console.log(match)
            // console.log(sortedArr)
            // console.log(totalsArr)
            // res.json(match)
            res.json(match)
        }


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
