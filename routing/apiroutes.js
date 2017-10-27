var friendData = require("../data/friends");

module.exports = function(app){

//  app.get("/api/new", function (req, res){
//    res.json(friends)

// });

  app.post("/api/new", function(req,res){
    // console.log(req.body)
    friends.push(req.body);
    // res.json(req.body);
 });

  }

  // app.post("/api/friends", function(req,res){
  //   friends.push(req.body);
  //   // res.json(true);
  //  });
 
