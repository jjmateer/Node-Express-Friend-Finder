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
        // console.log(req.body.score)
        // function getArrTotals() {

        //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
        //     for (var i = 0; i < friendsData.length; i++) {
        //         console.log(parseInt(req.body.score))

        //         // console.log(parseInt(friendsData[i].score))
        //     }

        // }
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
                totalsArr.sort(function (a, b) { return a - b });
                buildCompareTotals()
            }
            // console.log(lowestNum)
            var lowestNum = totalsArr[1]
            if (parseInt(req.body.score.reduce(reducer)) === lowestNum) {
                console.log('yes')
            }
            function buildCompareTotals() {
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                isComplete++;
                compareArr.push(parseInt(friendsData[i].score))
                if (isComplete === friendsData.length) {
                    // compareTotals()
                    console.log(compareArr.reduce(reducer))
                }
            }
            function compareTotals() {
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                console.log(friendsData.score)
                var totalCompare = friendsData.score.reduce(reducer)
                for (var i = 0; i < friendsData.length; i++) {
                    console.log(totalCompare)
                }

            }



            
        }

    })
    // console.log(friendsData[i].score)
}