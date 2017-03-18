$(document).ready(function(){
closer();

$('.show-input').click(function() {
  $('.show-input').toggleClass("hide");
  $('.task').toggleClass("hidden");
  $('.main ul').toggleClass('downed');
});



function closer(){
$('.close').click(function() {
  $(this).parent().remove();
});
}


$('#submit').click(function(e) {
  e.preventDefault();
  var task = $('#task-to-do').val();
  if(task===""){
    alert('Your task is empty');
  }
  else{
    $('ul').append('<li>'+task+'<button class="close">clear</button></li>');
    $('#task-to-do').val('');
      closer();
  }
})



});
