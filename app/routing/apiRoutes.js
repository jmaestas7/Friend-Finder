var path = require("path");
var users = require("../data/friends.js");
var fs = require("fs");


module.exports = function(app) {

  app.post("/api/new", function(req, res) {

    var newFriend = req.body;
    console.log(newFriend);

    var bestFreind = "";
    var bestScore = 50;

    //get abs
    users.forEach(function(friend) {
      var compScore = 0;
      
      //computes the score
      for (var i = 0; i < freind.scores.length; i++) {
        compScore += Math.abs(freind.scores[i] - newFriend['scores[]'][i]); 
      }

      if (compScore < bestScore) {
        bestScore = compScore;
        bestFreind = freind;
      }
      console.log(Freind.name + "\t" + compScore);
    });

    console.log(bestFreind);
    res.json(bestFreind);
  });
};