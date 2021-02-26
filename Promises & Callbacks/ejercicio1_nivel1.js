function bienvenida() {
  let x = "si";
  return new Promise((resolve, reject) => {
    if (x == "si") {
      resolve(x);
    } else {
      reject(x);
    }
  });
}

bienvenida()
  .then((respuesta) => console.log('Bienvenida'))
  .catch((error) => console.log('Ciao'));
