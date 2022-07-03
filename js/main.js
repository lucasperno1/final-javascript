function sumaPrecios (precio1, precio2) {
  const total = precio1 + precio2
  alert(total)
}

function errorFunction() {
  return alert("El precio ingresado es igual a 0")
}

for (let index = 0; index < 1; index++) {
  // pide precio del primero producto
  const precio1 = prompt("Ingresa el precio del primer producto")
  // pide precio del segundo producto
  const precio2 = prompt("Ingresa el precio del segundo producto")

  // chequea si el precio 1 y precio 2 son diferentes a 0 y ejecuta la funcion de suma
  // sino ejecuta la funcion de alertar
  if(+precio1 !== 0 && +precio2 !== 0) {
    sumaPrecios(+precio1, +precio2)
  } else {
    errorFunction()
  }
}