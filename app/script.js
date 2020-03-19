$(document).ready(function() {
  var DELAY = 700;

  var nome = "Viagem para Paris"
  var valor = 6300
  var mes = 12
  var ano = 2020
  var salvar_automaticamente = true

  // Go to first content screen
  $(".tela1").show()

  // Go to another screen buttons
  $("#goto2").click(function() {
    nome = $("#nome").val();
    valor = parseInt($("#valor_total").val());
    mes = parseInt($("#mes").val());
    ano = parseInt($("#ano").val());

    var d = new Date();
    curr_m = d.getMonth() + 1;
    curr_y = d.getFullYear();

    if (nome.length == 0 || nome.length > 30) {
      alert("Insira um nome para o seu sonho com até 30 caracteres!")
      return
    }
    if (!Number.isInteger(valor) || valor < 1 || valor > 999999) {
      alert("Insira um valor para guardar entre 1 e 999.999!")
      return
    }
    if (ano == curr_y && mes <= curr_m) {
      alert("Insira uma data futura para o seu sonho!")
      return
    }
    
    $(".tela1").fadeOut(DELAY);
    $(".tela2").delay(DELAY).fadeIn(DELAY);

    tempo = (mes - curr_m) + 12 * (ano - curr_y)
    per_month = parseFloat(valor / tempo).toFixed(2);
    // $("#sonhoname").html(nome);
    $("#valor_mensal").html('R$ ' + per_month + ' por mês');
  });

  $("#goto1").click(function() {
    $(".tela2").fadeOut(DELAY);
    $(".tela1").delay(DELAY).fadeIn(DELAY);
  });

  $("#goto3").click(function() {
    salvar_automaticamente = true

    $(".tela2").fadeOut(DELAY);
    $(".tela3").delay(DELAY).fadeIn(DELAY);
  });
});
