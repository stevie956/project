// create form
const form = `
<form id="CreateGame">
<h1>Create A Game</h1>
    <div class="form-group">
    <div class="form-group">
    <label for="matchId"></label>
    <input type="text" class="form-control" id="matchId" placeholder="Enter match Id" name="matchId">
  </div>
    <div class="form-group">
    <label for="name">PlayerOne</label>
    <input type="text" class="form-control"  placeholder="Enter a players name" name="playerOne">
    </div>
    <label for="name">Nationality</label>
    <input type="text" class="form-control"  placeholder="Enter a players nationality" name="nationalityOne">
    </div>
    <div class="form-group">
    <div class="form-group">
    <label for="name">PlayerTwo</label>
    <input type="text" class="form-control"  placeholder="Enter a players name" name="playerTwo">
    </div>
    <label for="name">Nationality</label>
    <input type="text" class="form-control"  placeholder="Enter a players nationality" name="nationalityTwo">
    </div>
    <button type="submit" id="create-match" class="btn btn-primary">Let's Play!</button>
    <button type="button" id="update-match" class="btn btn-primary">Update Game</button>
    <button type="button" id="delete-match" class="btn btn-primary">Delete Game</button>
</form>
`;
//creating a get req
function createGameForm() {
  /*const matchResponse = $.ajax({
    type: "GET",
    url: "/match/create",
  });
  console.log("Get req working!");*/

  // Event listener for the create button
  $(document).on("submit", "#CreateGame", async (e) => {
    e.preventDefault();
    // Construct body
    const requestBody = {
      nameOne: $("input[name='playerOne']").val(),
      nationalityOne: $("input[name='nationalityOne']").val(),
      nameTwo: $("input[name='playerTwo']").val(),
      nationalityTwo: $("input[name='nationalityTwo']").val(),
    
    };
    // Make a post request to the server to create a game
    const response = await $.ajax({
      type: "POST",
      url: "/api/match/create",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
   
    console.log("match created");
    // Create a pop up alert in the UI to inform the user that game was created
    window.alert("Game Created!");
   });

  // Event listener to for Update Match Button
  $(document).on("click", "#update-match", async (e) => {
    e.preventDefault();

    // Construct body by extracting info from the form
    const requestBody = {
      nameOne: $("input[name='playerOne']").val(),
      nationalityOne: $("input[name='nationalityOne']").val(),
      nameTwo: $("input[name='playerTwo']").val(),
      nationalityTwo: $("input[name='nationalityTwo']").val(),
    };

    // Make a PATCH request to the server to update a game
    const response = await $.ajax({
      type: "PATCH",
      url: `/api/match/update-match/${$("#matchId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });

    // Create a pop up alert in the UI to inform the user that game was updated
    window.alert("Match Updated!");
  });

  // Event listener to for Submit score Button
  $(document).on("click", "#score-submit", async (e) => {
    e.preventDefault();

    // Construct body by extracting info from the form
    const requestBody = {
      score: $("#point").val()
   };

    // Make a POST request to the server to update score
    const response = await $.ajax({
      type: "POST",
      url: `/api/match/score/${$("#matchId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody)
  
    });



    // Make a POST request to the server to update score
    const response2 = await $.ajax({
      type: "GET",
      url: `/api/match/scores/${$("#matchId").val()}`,
      contentType: "application/json"
    });

    var scoreHist_p1 = "";
    var scoreHist_p2 = "";

    for (var i = 0; i < response2.length; i++)
    {
      if (i % 2 == 1)
      {
        scoreHist_p2 += response2[i].score + "<br/>";
      }
      else
      {
        scoreHist_p1 += response2[i].score + "<br/>";
      }
    }
    //console.log(scoreHist);
    $('#p1_score_history')[0].innerHTML = scoreHist_p1;
    $('#p2_score_history')[0].innerHTML = scoreHist_p2;


  });

  // listener for a delete game
  $(document).on("click", "#delete-match", async (e) => {
    e.preventDefault();

    // Make a delete request to the server to delete match
   const response = await $.ajax({
    type: "DELETE",
    url: `/api/match/delete-match/${$("#matchId").val()}`,
    contentType: "application/json",
    });
    console.log("match deleted");
    // Create a pop up alert in the UI to inform the user that the match was deleted
    window.alert("Match Deleted!");
  });
  return form;
};

export default createGameForm;
