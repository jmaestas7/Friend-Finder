var path = require("path");
var users = require("../data/friends.js");
var fs = require("fs");


module.exports = function(app) {

  app.post("/api/new", function(req, res) {

    var newFriend = req.body;
    console.log(newFriend);

    var bestFriend = "";
    var bestScore = 50;

    console.log(users);

    //get abs
    users.forEach(function(friend) {

      var compScore = 0;
      
      //computes the score
      for (var i = 0; i < friend.scores.length; i++) {
        console.log(friend.scores);
        compScore += Math.abs(friend.scores[i]  - newFriend.scores[i]); 
      }

      if (compScore < bestScore) {
        bestScore = compScore;
        bestFriend = users;
      }
      console.log(friend.name + "\t" + compScore);
    });

    console.log(bestFriend);
    res.json(bestFriend);
  });
};