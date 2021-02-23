let funciones = [];
function cuenta() {
  for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
}

while (funciones.length < 10) {
  funciones.push(cuenta);
}

funciones.forEach(function (elemento) {
  elemento();
});

