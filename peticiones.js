
// crear un usuario

/* var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer oBn0EtFHhBS0mwhHxLmKFPmBxpWfqJSH");

var raw = JSON.stringify({
  "email": "diegobarrionuevo11@gmail.com",
  "password": "12334djkf",
  "nombre": "diego",
  "apellido": "barrionuevo",
  "telefono": "+54 3512092387",
  "documento_de_identidad": 42052352,
  "estado": "insatisfecho"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://caupolican.admin.kevinroldankr2024chile.cl/items/Usuarios", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */



  // obtener un usuario

/*   var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer oBn0EtFHhBS0mwhHxLmKFPmBxpWfqJSH");
  
  var raw = JSON.stringify({});
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://caupolican.admin.kevinroldankr2024chile.cl/items/Usuarios/1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */

// Crear una compra (se agrega id del archivo de comprobante)

/* var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer oBn0EtFHhBS0mwhHxLmKFPmBxpWfqJSH");

var raw = JSON.stringify({
  "id_usuario": 2,
  "cantidad": 3,
  "monto": 89970.5,
  "comprobante": "73f52b2a-b30b-4fdc-af15-796d1952874c",   
  "codigo_de_referidos": "DiegoBarrionuevo",
  "estado_compra": "Nueva"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://caupolican.admin.kevinroldankr2024chile.cl/items/compras", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */

// -----------------------------------------------------------------

// hay que entender y ver la manera en que se cargan los archivos y asi recien desarrollar la subida de los mismos
// a la base de datos
