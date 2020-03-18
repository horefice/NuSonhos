$(document).ready(function() {
  var DELAY = 700;
  var nome = "Viagem para Paris"
  var valor = 6500
  var mes = 12
  var ano = 2020

  // Go to first content screen
  $(".tela1").show()

  // Go to another screen buttons
  $("#goto2").click(function() {
    $(".tela1").fadeOut(DELAY);
    $(".tela2").delay(DELAY).fadeIn(DELAY);

    nome = $("#nome").val();
    valor = parseFloat($("#valor_total").val());
    mes = parseInt($("#mes").val());
    ano = parseInt($("#ano").val());

    // $("#sonhoname").html(nome);
    var d = new Date();
    curr_m = d.getMonth() + 1;
    curr_y = d.getFullYear();
    tempo = (mes - curr_m) + 12 * (ano - curr_y)
    per_month = parseFloat(valor/tempo).toFixed(2);
    // $("#sonhoname").html(nome);
    $("#valor_mensal").html('R$ ' + per_month + ' por mês');
  });
});
