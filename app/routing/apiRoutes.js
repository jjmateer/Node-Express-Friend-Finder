var friendsData = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    });
    app.post('/api/friends', (req, res) => {
        if (friendsData.length < 11) {
            friendsData.push(req.body);
            res.json(true);
            getSmallestDiff()
            // getArrTotals()
        } else {
            friendsData.push(req.body);
            res.json(false);
        }
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
            var sortedArr = totalsArr.sort(function (a, b) { return a - b });
            var lowestNum = sortedArr[1]
            var numIndex = totalsArr.indexOf(lowestNum);
            console.log(friendsData[numIndex])
        }
    })
}