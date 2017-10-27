var friendData = require("../data/friends");

module.exports = function(app){

  app.get("/survey"), function(req,res){
    res.json(friends)
  }

  // app.post("/api/friends", function(req,res){
  //   friends.push(req.body);
  //   // res.json(true);
  //  });
  }
