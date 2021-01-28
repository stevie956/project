// create form
const form = `
<form>
<h1>Create A Game</h1>
    <div class="form-group">
    <div class="form-group">
    <label for="name">PlayerOne</label>
    <input type="text" class="form-control" id="name" placeholder="Enter a players name" name="Player One">
    </div>
    <label for="name">Nationality</label>
    <input type="text" class="form-control" id="name" placeholder="Enter a players nationality" name="NationalityOne">
    </div>
    <div class="form-group">
    <div class="form-group">
    <label for="name">PlayerTwo</label>
    <input type="text" class="form-control" id="name" placeholder="Enter a players name" name="Player Two">
    </div>
    <label for="name">Nationality</label>
    <input type="text" class="form-control" id="name" placeholder="Enter a players nationality" name="NationalityTwo">
    </div>
    <button type="button" id="create-player"  class="btn btn-primary">Create Player One</button>
    <button type="button" id="create-player"  class="btn btn-primary">Create Player Two</button>
</form>
`;
// Construct body
const requestBody = {
    name: $("#name").val(),
    nationality: $("#nationality").val(),
    matchId: $("#matches").val(),
  };
  // Make a post request to the server to create a game
  const response = await $.ajax({
    type: "POST",
    url: "/match/create",
    contentType: "application/json",
    data: JSON.stringify(requestBody),
  });

    // Create a pop up alert in the UI to inform the user that fruit was created
    window.alert("Game Created!");

    return form;

    export default createGameForm;
