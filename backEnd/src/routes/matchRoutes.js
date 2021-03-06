const express = require("express");
const matchModel = require("../models/matchModel");
const scoreModel = require("../models/scoreModel");

// Create a route to handle score routes
const router = express.Router();

// Add a health check for score routes
router.get("/_health", (request, response) => {
    console.log("session:", request.session);
    response.send("routes work ok");
});
//create a game
router.post("/create", (request, response) => {
    const requestBody = request.body;
    matchModel.create(requestBody).then((data) => {
        console.log(data);
        response.send("Match has been created");
    });

});

router.post("/score/:matchId", (request, response) => {
      const score = {score: request.body.score, matchId: request.params.matchId}
      scoreModel.create(score).then((data) => {
          response.send(data);
      });
});
// get scores
router.get("/scores/:matchId", (request, response) => {
    scoreModel.find({matchId: request.params.matchId})
      .then((scores) => {
        response.send(scores);
        console.log("Score added");
      })
      .catch((error) => {
        console.log("error:", error);
        response.status(500).send("cannot load scores");
      });
  });
  //update a match route
 router.patch("/update-match/:matchId", (request, response) => {
    matchModel.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
      upsert: true,
    })
      .then((data) => {
        response.send(data);
        console.log("Update successful!");
      })
      .catch(() => {
        console.log("Something went wrong!!");
        response.status(404).send("match not found!!");
      });
  });

  // delete route
router.delete("/delete-match/:matchId", (request, response) => {
  matchModel.findByIdAndDelete(request.params.matchId)
    .then((data) => {
      response.send(data);
      console.log("Delete successful!");
    })
    .catch(() => {
      console.log("Something went wrong!!");
      response.status(404).send("match not found!!");
    });
});

module.exports = router;
