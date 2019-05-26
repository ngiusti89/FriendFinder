// import friends data
var friendsData = require('../data/friends.js');

// routes
module.exports = function (app) {
    // get friends data
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });
}