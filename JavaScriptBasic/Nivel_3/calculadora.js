function init() {
  //variables
  var num1;
  var num2;
  var signo;
  var resultado = document.getElementById("resultado");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var c = document.getElementById("c");
  var igual = document.getElementById("igual");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var division = document.getElementById("division");
  var multiplicacion = document.getElementById("multiplicacion");
  var punto = document.getElementById("punto");

  //eventos

  uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
  };
  dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
  };
  tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
  };
  cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
  };
  cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
  };
  seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
  };
  siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
  };
  ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
  };
  nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
  };
  cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
  };
  punto.onclick = function (e) {
    if (resultado.textContent.includes(".")) {
      resultado.textContent == null;
    } else {
      resultado.textContent = resultado.textContent + ".";
    }
  };
  c.onclick = function (e) {
    clear();
  };
  suma.onclick = function (e) {
    num1 = resultado.textContent;
    signo = "suma";
    clear();
  };
  resta.onclick = function (e) {
    num1 = resultado.textContent;
    signo = "resta";
    clear();
  };
  division.onclick = function (e) {
    num1 = resultado.textContent;
    signo = "division";
    clear();
  };
  multiplicacion.onclick = function (e) {
    num1 = resultado.textContent;
    signo = "multiplicacion";
    clear();
  };
  igual.onclick = function (e) {
    num2 = resultado.textContent;
    clear();
    calculadora(signo, num1, num2);
    
  };
}
function clear() {
  resultado.textContent = "";
}
function resetear() {
  num1 = 0;
  num2 = 0;
  signo = "";
}

function calculadora(signo, num1, num2) {
  var res = 0;
  if (signo == "resta") {
    res = parseFloat(num1) - parseFloat(num2);
  } else if (signo == "suma") {
    res = parseFloat(num1) + parseFloat(num2);
  } else if (signo == "multiplicacion") {
    res = parseFloat(num1) * parseFloat(num2);
  } else if (signo == "division") {
    if (num2 == 0) {
      res = "Error";
    } else {
      res = parseFloat(num1) / parseFloat(num2);
    }
  }
  resetear();
  resultado.textContent = res;
}
