function calculadora(operador, valor1, valor2) {
  if (operador == "resta") {
    return valor1 - valor2;
  } else if (operador == "suma") {
    return valor1 + valor2;
  } else if (operador == "multiplicacion") {
    return valor1 * valor2;
  }
}
