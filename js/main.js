let carritoDeCompras = []

let contenedorProductos = document.getElementById('grid-productos')
let contenedorCarrito = document.getElementById('contenedor-carrito')
let contadorCarrito = document.getElementById('contadorCarrito')
let total = document.getElementById('precioTotal')

mostrarProductos()

//Logica Ecommerce
function mostrarProductos(){
  
  stockProductos.forEach(item =>{
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `
    <img class="imagen" src=${item.imagen} alt="">
    <h3>${item.nombre}<h3>
    <p>Categoria: ${item.categoria}</p>
    <p class="precioProducto">Precio: $ ${item.precio}</p>
    <button id="agregar${item.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    
  contenedorProductos.appendChild(div)
  const boton = document.getElementById (`agregar${item.id}`)
   boton.addEventListener('click', () => { 
    if (item.stock > 0) {
      agregarAlCarrito(item.id)
    }
    else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por el momento este articulo se encuentra sin stock!',
    })}
   })
  })
  
}

function agregarAlCarrito(id) {
  let encontrado = stockProductos.find(element => element.id === id)
  carritoDeCompras.push(encontrado)
  mostrarCarrito(encontrado)
  actualizarCarrito()
  
}

function mostrarCarrito(encontrado) {
  let div = document.createElement('div')
  div.className = 'productoEnCarrito'
  div.innerHTML = `
  <p>${encontrado.nombre}</p>
  <p>$ ${encontrado.precio}</p>
  <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
  `
  contenedorCarrito.appendChild(div)
}

function actualizarCarrito () {
  contadorCarrito.innerText = carritoDeCompras.length
  total.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.precio, 0)
}


