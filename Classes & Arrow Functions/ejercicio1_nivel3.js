function Persona(nombre) {
  this.nombre = nombre;
  console.log(`La persona creada se llama ${nombre}`);

  Persona.prototype.saludo = function () {
    console.log(this.nombre + " te saluda");
  };
}

let persona1 = new Persona("Moncho");
let persona2 = new Persona("Federico");
let persona3 = new Persona("Juan");
persona1.saludo();
persona2.saludo();
persona3.saludo();
