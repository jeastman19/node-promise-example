'use strict'

var express = require("express"); 
var app = express();


// El párametro es solo para dar ejemplo
function miBusqueda(funciona) {
  let miPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      if (funciona) {
        resolve('Funcionó bien')
      } else {
        reject('Algo no está bien')
      }

    }, 1000)

  })
  return miPromesa

}

app.get('/funciona', (req, res) => {
  miBusqueda(true)
    .then((mensaje) => {
      res.send(mensaje)
    })
    .catch((mensaje) => {
      res.send(mensaje)
    })
})

app.get('/falla', (req, res) => {
  miBusqueda(false)
    .then((mensaje) => {
      res.send(mensaje)
    })
    .catch((mensaje) => {
      res.send(mensaje)
    })
})

var server = app.listen(3000, () => {
    console.log('Servidor ejecutando en el puerto 3000'); 
});
