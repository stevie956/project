$('#js-start').on('click', function(){
    var scoreColumns = $('.column-one');
    scoreColumns.removeClass('column-three').find('.score').text('501');
    scoreColumns.eq(0).addClass('column-three')
})
// tell display to show the value 
$('.num-pad__display').val('');
//jquery number pad to string the numbers together on the display
$('.num-pad__button--numeric').on('click', function() {
    $('.num-pad__display').val($('.num-pad__display').val() + (this).text());
});
//jquery the clear button
$('.num-pad__button--clear').on('click', function() {
    $('.num-pad__display').val('');
});
// to call delete button to reset to 0
$('.num-pad__button--delete').on('click', function() {
    var score = $('.num-pad__display').val();
    if(score) {
      score = score.toString().substring(0, score.length - 1);
      $('.num-pad__display').val(score);
    }
  });
//submit the score on display to minus score from column
  $('.num-pad__button--submit').on('click', function() {
    var score = $('.num-pad__display').val();
// if a score is entered greater than 180 display an alert
    if(score > 180) {
        alert('Score cannot be higher than 180');
        return;
      }};