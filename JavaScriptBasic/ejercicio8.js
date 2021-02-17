function calculadora(operador, valor1, valor2) {
  if (operador == "resta") {
    return valor1 - valor2;
  } else if (operador == "suma") {
    return valor1 + valor2;
  } else if (operador == "multiplicacion") {
    return valor1 * valor2;
  } else if (operador == "division") {
    if (valor2 == 0) {
      return "Introduzca otro divisor distinto a 0";
    } else {
      return valor1 / valor2;
    }
  } else {
    return "Introduzca un operador correcto";
  }
}
console.log(calculadora("division", 10, 0));
