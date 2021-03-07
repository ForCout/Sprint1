function bienvenida() {
  let x = "si";
  return new Promise((resolve, reject) => {
    
    if (x == "si") {
      resolve(x);
    } else {
      reject('La respuesta no ha sido la deseada');
    }
  });
}

bienvenida()
  .then(respuesta => console.log(respuesta,'Bienvenida'))
  .catch(error => console.log(error,'Ciao'));
