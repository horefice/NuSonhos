$(document).ready(function() {
  var DELAY = 700;

  var nome = "Viagem para Paris"
  var valor_total = 7000
  var mes = 1
  var ano = 2021
  var mensal = 700
  var icone = "&#128132"
  var saldo = 8000.00
  var valor_sonho = 0

  // Go to first content screen
  $(".tela0").show()

  $("#goto1").click(function() {
    $(".tela0").fadeOut(DELAY);
    $(".tela1").delay(DELAY).fadeIn(DELAY);
  });

  // Go to another screen buttons
  $("#goto2").click(function() {
    nome = $("#nome").val();
    valor_total = parseInt($("#valor_total").val());
    mes = parseInt($("#mes").val());
    ano = parseInt($("#ano").val());

    var d = new Date();
    curr_m = d.getMonth() + 1;
    curr_y = d.getFullYear();

    if (nome.length == 0 || nome.length > 30) {
      alert("Insira um nome para o seu sonho com até 30 caracteres!")
      return
    }
    if (!Number.isInteger(valor_total) || valor_total < 1 || valor_total > 999999) {
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
    mensal = parseFloat(valor_total / tempo).toFixed(2);
    // $("#sonhoname").html(nome);
    $("#valor_mensal").html('R$ ' + mensal + ' por mês');

    saldo = parseFloat(valor_total * 1.5).toFixed(2);
  });

  $(".btn-toolbar .btn-group .btn").click(function(elem) {
    icone = elem.currentTarget.innerText
  })

  $("#goto1").click(function() {
    $(".tela2").fadeOut(DELAY);
    $(".tela1").delay(DELAY).fadeIn(DELAY);
  });

  $("#goto3").click(function() {
    $("#icone").html(icone);
    $("#saldoText").html(saldo);
    $("#paraCompletar").html("Faltam <b>R$"+Math.max(0, valor_total-valor_sonho).toFixed(2).toString()+"</b> para você completar seu sonho '"+nome+"'!");

    var img = document.createElement("img");
    img.src = "./assets/moneybag.png";
    document.getElementById("saldoDiv").ondragstart = function(e) {
      e.dataTransfer.setDragImage(img, 0 , 0);
    }
    document.getElementById("nusonho").ondragstart = function(e) {
      e.dataTransfer.setDragImage(img, 0 , 0);
    }

    $("#nusonho, #saldoDiv").on("dragover", function(e) {
      e.preventDefault();
    });

    $("#nusonho").on("drop", function(e) {
      e.preventDefault();
      if (parseFloat(saldo) < parseFloat(mensal)) return

      saldo -= parseFloat(mensal)
      valor_sonho += parseFloat(mensal)

      $("#saldoText").html(parseFloat(saldo).toFixed(2));
      $("#nusonho .progress-bar").css("width", Math.max(5, 100*valor_sonho/valor_total).toString()+"%");
      $("#paraCompletar").html("Faltam <b>R$"+Math.max(0, valor_total-valor_sonho).toFixed(2).toString()+"</b> para você completar seu sonho '"+nome+"'!");
    })
    $("#saldoDiv").on("drop", function(e) {
      e.preventDefault();
      if (parseFloat(valor_sonho) < parseFloat(mensal)) return

      saldo += parseFloat(mensal)
      valor_sonho -= parseFloat(mensal)

      $("#saldoText").html(parseFloat(saldo).toFixed(2));
      $("#nusonho .progress-bar").css("width", Math.max(5, 100*valor_sonho/valor_total).toString()+"%");
      $("#paraCompletar").html("Faltam <b>R$"+Math.max(0, valor_total-valor_sonho).toFixed(2).toString()+"</b> para você completar seu sonho '"+nome+"'!");
    })

    $(".tela2").fadeOut(DELAY);
    $(".tela3").delay(DELAY).fadeIn(DELAY);
  });
});
