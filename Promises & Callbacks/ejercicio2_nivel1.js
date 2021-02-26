let bienvenida = (decision, callback) => {
  callback(decision);
};
let resultado = (opcion) =>
  opcion == "si" ? console.log("Bienvenido") : console.log("Adiós");

bienvenida("si", resultado);
bienvenida("no", resultado);
