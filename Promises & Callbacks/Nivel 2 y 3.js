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

//Ejercicio 1 Nivel 2

let getEmpleado = (id) => {
  let empleado = employees.find((item) => item.id == id);

  return new Promise((resolve, reject) => {
    resolve(empleado);
  });
};
getEmpleado(1).then((empleado) => console.log(empleado.name));

// Ejercicio 2 Nivel 2

let getSalario = (empleado) => {
  let salario = salaries.find((item) => item.id == empleado.id);
  return new Promise((resolve) => {
    resolve(salario.salary);
  });
};

getSalario(employees[0]).then((salario) => console.log(salario));

//ejercicio 3 Nivel 2

getEmpleado(2)
  .then((empleado) => {
    console.log(empleado.name);

    return empleado.id;
  })
  .then((empleado) => {
    console.log(salaries[empleado - 1].salary);
  });

// Nivel 3

getEmpleado(4)
  .then((empleado) => {
    console.log(empleado.name);
    return empleado.id;
  })
  .then((empleado) => {
    console.log(salaries[empleado - 1].salary);
  })
  .catch(() => console.log("El empleado que busca no se encuentra"));
