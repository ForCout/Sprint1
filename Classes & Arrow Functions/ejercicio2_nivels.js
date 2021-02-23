class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  decirNombre() {
   console.log(this.nombre)
  }
}

let p = new Persona('Moncho');
p.decirNombre();

