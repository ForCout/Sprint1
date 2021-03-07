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
  let empleado = employees.find(item => item.id == id);

  return new Promise((resolve, reject) => {
    if (empleado != undefined) {
      resolve(empleado);
    } else {
      reject('Empleado no encontrado');
    }
    
    
  });
};


// Ejercicio 2 Nivel 2

let getSalario = (empleado) => {
  let salario = salaries.find(item => item.id == empleado.id);
  return new Promise((resolve, reject) => {
    if (salario != undefined) {
      resolve(salario.salary);
    } else {
      reject('El salario no ha sido encontrado')
    }
   
  });
};
 

//ejercicio 3 Nivel 2

getEmpleado(2)
  .then(empleado => {
    return getSalario(empleado)
  }).then(salario => console.log(salario));
 


// Nivel 3
getEmpleado(4)
  .then(empleado => {
    return getSalario(empleado)
  }).then(salario => console.log(salario))
  .catch(error => console.log(error))