$(document).ready(function() {
  var DELAY = 700;

  // Go to first content screen
  $(".tela1").show()

  // Go to another screen buttons
  $("#goto2").click(function() {
    $(".tela1").fadeOut(DELAY);
    $(".tela2").delay(DELAY).fadeIn(DELAY);
  });
});
