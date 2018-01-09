var path = require("path");

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    app.get("/", function(req, res) {
      // res.send("Welcome to the Star Wars Page!")
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
      // res.send("Welcome to the Star Wars Page!")
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // Get all Friends
    app.get("/api/friends", function(req, res) {
      res.json();
    });
  
  };
