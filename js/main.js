//Productos
/*const contenedorProductos = document.getElementById('grid-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const carritoProd = document.getElementById('carritoProd')

let carrito = []

stockProductos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <img class="imagen" src=${producto.imagen} alt="">
  <h3>${producto.nombre}<h3>
  <p>Categoria: ${producto.categoria}</p>
  <p class="precioProducto">Precio: $ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
  `
  contenedorProductos.appendChild(div)

  const boton = document.getElementById (`agregar${producto.id}`)

  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id) 
  })

})

const agregarAlCarrito = (prodId) => {
  const item = stockProductos.find ((prod) => prod.id === prodId)
  carrito.push(item)
  actualizarCarrito()
  console.log(carrito)
}

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prod.id)
  const indice = carrito.indexOf(item)
  carrito.splice(indice,1)
  actualizarCarrito()
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""

  carrito.forEach((prod) => {
    const div = document.createElement('div')
    carritoProd.innerHTML =
    `<p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad: <span id="categoria">${prod.categoria}</span></p>
    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="das fa-trash-alt"></button>
    `
    contenedorCarrito.appendChild(div)
  })
}*/

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
    agregarAlCarrito(item.id) 
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


