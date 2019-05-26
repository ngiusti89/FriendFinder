// dependency
var path = require("path");

// import friends data
var friends = require('../data/friends.js');

// routes
module.exports = function (app) {
    // get friends data
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var newFriendData = req.body;
        var newFriendScore = newFriendData.scores;
        var matchName = '';
        var matchImage = '';
        var totalDifference = 1000;

        for (var i = 0; i < friends.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < newFriendScore.length; j++) {
                scoreDiff += Math.abs(friends[i].scores[j] - newFriendScore[j])
            }
            console.log('scoreDiff = ' + scoreDiff);

            if (scoreDiff < totalDifference) {
                console.log('Closest match found = ' + diff);
                console.log('Friend name = ' + friends[i].name);
                
                totalDifference = scoreDiff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        friends.push(newFriendData);

        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

        console.log('newFriend = ' + JSON.stringify(newFriendData));

    });
};