let isFirstPlayerTurn = true;

$("#js-start").on("click", function () {
  var scoreColumns = $(".column-one");
  scoreColumns.removeClass("column-three").find(".score").text("501");
  scoreColumns.eq(0).addClass("column-three");
});
// tell display to show the value
$(".num-pad__display").val("");
//jquery number pad to string the numbers together on the display
$(".num-pad__numeric").on("click", (e) => {
  console.log(e.target.innerHTML);
  const currentValue = $("#test").val();
  $("#test").val(currentValue + e.target.innerHTML);
  // $('.num-pad__display').val($('.num-pad__display').val() + (this).text());
});
//jquery the clear button
$(".num-pad__clear").on("click", function () {
  $(".num-pad__display").val("");
});
// to call delete button to reset to 0
$(".num-pad__delete").on("click", function () {
  var score = $(".num-pad__display").val();
  if (score) {
    score = score.toString().substring(0, score.length - 1);
    $(".num-pad__display").val(score);
  }
});
//submit the score on display to minus score from column
$(".num-pad__submit").on("click", function () {
  let score = $("#test").val();
  if (isFirstPlayerTurn) {
    let firstPlayerCurrentScore = parseInt($("#firstPlayerScore").text());
    $("#firstPlayerScore").text(firstPlayerCurrentScore - score);
    isFirstPlayerTurn = false;
  } else {
  let secondPlayerCurrentScore = parseInt($("#secondPlayerScore").text());
  $("#secondPlayerScore").text(secondPlayerCurrentScore - score);
  isFirstPlayerTurn = true;}
  //if a score is entered greater than 180 display an alert
   if(score > 180) {
       alert('Score cannot be higher than 180');
       return;
     }});
     //append 
  $("#num-pad__button").click(function () {
    $("#num-pad").append($(this).val());
  });
