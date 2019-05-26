// dependency
var path = require("path");

// import friends data
var friendsData = require('../data/friends.js');

// routes
module.exports = function (app) {
    // get friends data
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {

        var newFriendData = req.body;
        var newFriendScore = newFriendData.scores;
        var matchName = '';
        var matchImage = '';
        var totalDifference = 1000;

        for (let i = 0; i < friendsData.length; i++) {
            var diff = 0;

        }

        console.log('newFriend = ' + JSON.stringify(newFriendData));

    });

}