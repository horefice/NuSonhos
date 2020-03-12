$(document).ready(function() {
  // Go to first content screen
  $(".tela1").show()

  // Go to another screen buttons
  $("#goto2").click(function() {
    $(".tela1").hide(1000);
    $(".tela2").show(1000);
  });
});
