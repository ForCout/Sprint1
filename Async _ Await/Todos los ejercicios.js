 let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

//Ejercicio 1 Nivel 1

let getEmpleado = (id) => {
  const empleado = employees.find((item) => item.id == id);
  return new Promise((resolve) => {
    resolve(empleado.name);
  });
};

getEmpleado(2).then((empleado) => console.log(empleado));

let getSalario = (empleado) => {
  const salario = salaries.find((item) => item.id == empleado.id);
  console.log(salario.salary);
};

getSalario(employees[1]);

//Ejercicio 2 Nivel 1

async function salario(id) {
  const empleado = await employees.find((item) => item.id == id);
  const sueldo = await salaries.find((item) => item.id == empleado.id);
  console.log(empleado.name, sueldo.salary);
}

salario(1); 

//Nivel 2

function saludo(nombre) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Te saludo pasado 2 segundos ${nombre}`);
    }, 2000);
  });
}

async function miSaludo(nombre) {
  const a = await saludo(nombre);
  return a;
}
miSaludo("Moncho").then((saludo) => console.log(saludo));

// Nivel 3

function saludo2(nombre) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Te saludo pasado 2 segundos ${nombre}`);
    }, 3000);
  });
}

async function miSaludo2(nombre) {
  try {
    hhh;
    const a = await saludo(nombre);
    console.log(a);
  } catch (e) {
    console.log("Se ha producido un error ",e);
  }
}
miSaludo2("Moncho");
