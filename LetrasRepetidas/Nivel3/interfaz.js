function init() {
  var pantalla = document.getElementById("pantalla");
  var ejercicio1 = document.getElementById("ejercicio1");
  var ejercicio2 = document.getElementById("ejercicio2");
  var ejercicio3 = document.getElementById("ejercicio3");
  var ejercicio4 = document.getElementById("ejercicio4");
  var nivel2 = document.getElementById("nivel2");

  ejercicio1.onclick = function (e) {
    clear();
    let nombre = ["M", "O", "N", "C", "H", "O"];
    for (let letra of nombre) {
      pantalla.innerText += letra + "\n";
    }
  };
  ejercicio2.onclick = function (e) {
    clear();
    let nombre = ["M", "O", 1, "C", "H", "O"];
    let vocales = ["A", "E", "I", "O", "U"];
    let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let letra of nombre) {
      vocales.includes(letra)
        ? (pantalla.innerText =
            pantalla.innerText + `He encontrado la vocal ${letra}\n`)
        : numeros.includes(letra)
        ? (pantalla.innerText =
            pantalla.innerText +
            `Los nombres de personas no contienen el número: ${letra}\n`)
        : (pantalla.innerText =
            pantalla.innerText + `He encontrado la consonante ${letra}\n`);
    }
  };
  ejercicio3.onclick = function (e) {
    clear();
    let nombre = ["M", "O", "N", "C", "H", "O"];
    let map = new Map();

    for (let letra of nombre) {
      if (map.has(letra)) {
        contador = map.get(letra);
        contador += 1;
        map.set(letra, contador);
      } else {
        map.set(letra, 1);
      }
    }

    map.forEach(function (elemento, indice) {
      pantalla.innerText = pantalla.innerText + indice + ":" + elemento + "\n";
    });
  };

  ejercicio4.onclick = function (e) {
    clear();
    let nombre = ["M", "O", "N", "C", "H", "O"];
    let apellido = ["G", "R", "A", "N", "D", "E"];
    nombre.push('" "');
    let fullName = [].concat(nombre, apellido);
    pantalla.innerText = pantalla.innerText + fullName + "\n\n";
    fullName.forEach(function (elemento, indice) {
      pantalla.innerText = pantalla.innerText + indice + ":" + elemento + "\n";
    });
  };
  nivel2.onclick = function (e) {
    clear();
    var str =
      "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos\
      electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién \
      le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una \
      vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede \
      cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. \
      Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario \
      delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio \
      depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplos\
      ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio \
      también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos \
      proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, \
      las direcciones de correo electrónico que configura para el dominio lo tienen como parte del \
      dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES).\
      El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar\
      libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el \
      nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un \
      proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del \
      dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre\
      de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones\
      no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan \
      con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";

    buscaEmails(str);
  };
}
function buscaEmails(str) {
  str = str.split(" ");
  let patron = /((\(\w+@)|\w+@)/gi;
  let patron2 = /(\(|\).|:)/g;
  let lista = [];

  for (correo of str) {
    coincidencia = patron.test(correo);
    if (coincidencia) {
      correo = correo.replace(patron2, "");
      correo = correo.toLowerCase();
      if (lista.includes(correo))continue; 
        lista.push(correo);
    }
  }

  lista.forEach(function (elemento) {
    pantalla.innerText = pantalla.innerText + elemento + "\n";
  });
}

function clear() {
  pantalla.innerText = " ";
}
