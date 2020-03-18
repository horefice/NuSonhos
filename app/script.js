$(document).ready(function() {
  var DELAY = 700;

  // Go to first content screen
  $(".tela1").show()

  // Go to another screen buttons
  $("#goto2").click(function() {
    $(".tela1").fadeOut(DELAY);
    $(".tela2").delay(DELAY).fadeIn(DELAY);
    nome = $("#namme").val();
    valor = parseFloat($("#valor").val());
    mes = parseInt($("#Mes").val());
    ano = parseInt($("#Ano").val());

    $("#sonhoname").html(nome);
    var d = new Date();
    curr_m = d.getMonth() + 1;
    curr_y = d.getFullYear();
    tempo = (mes - curr_m) + 12*(ano - curr_y)
    per_month = parseFloat(valor/tempo).toFixed(2);
    // $("#sonhoname").html(nome);
    $("#flay").html('R$ ' + per_month + ' por mês');

  });
});
