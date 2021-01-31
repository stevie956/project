// create form
const form = `
<form id="CreateGame">
<h1>Create A Game</h1>
    <div class="form-group">
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
