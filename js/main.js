// DOM ACCESS DECLARATIONS
let productsGrid = document.getElementById('grid-productos') // productsGrid
let cartContainer = document.getElementById('contenedor-carrito') // productsContainer
let countCartBadge = document.getElementById('contadorCarrito') // countCartBadge
let totalCart = document.getElementById('precioTotal') // totalCart


// Store declarations
let cart = [] // cart
const products = [] // products



// Get data
async function getData () {
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=auricularesgamer&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}

getData()

// Render HTML Product
const templateProduct = (product) => {
  return `
    <div class="product">
      <img class="imagen" src=${product.thumbnail} alt="">
      <h3>${product.title}<h3>
      <p>Categoria: ${product.category_id}</p>
      <p class="precioProducto">Precio: $ ${product.price}</p>
      <p class="precioProducto">Stock: ${product.available_quantity}</p>
      <button class="boton-agregar" onclick='addToCart(${JSON.stringify(product)})'>Agregar <i class="fas fa-shopping-cart"></i></button>
    </div>
  `
}


// Add to cart
function addToCart(product) {
  // Check if has stock
  if(product.available_quantity > 0) {
    if(cart.find((prod) => prod.id === product.id)){
      // Update product quantities
      const indexProd = cart.findIndex((prod) => prod.id === product.id)
      // If product added quantity is minor to the stock
      if(cart[indexProd].added_quantity < cart[indexProd].available_quantity) {
        cart[indexProd] = {...cart[indexProd], added_quantity: cart[indexProd].added_quantity + 1}
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No tenemos mas stock de este producto!',
        })
      }
    } else {
      // Add product to cart
      cart.push({...product, added_quantity: 1})
    }
    // Cart DOM Update
    updateCart()
  }
  else {
    // Show non-stock alert
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por el momento este articulo se encuentra sin stock!',
    })
  }
}


// Show cart
const templateCart = (product) => {
  return `
    <div class="productoEnCarrito">
      <p>${product.title}</p>
      <p>$ ${product.price}</p>
      <div class="container-quantity">
        <button onclick='removeQuantity(${JSON.stringify(product.id)})'>-</button>
        <span>${product.added_quantity}</span>
        <button onclick='addQuantity(${JSON.stringify(product.id)})'>+</button>
      </div>
      <button class="boton-eliminar" onclick='deleteProductFromCart(${JSON.stringify(product.id)})'><i class="fas fa-trash-alt"></i></button>
    </div>
  `
}

// Render Cart Product
function renderCartProducts (){
  cartContainer.innerHTML = ""
  cart.forEach((cartProd) => {
    cartContainer.innerHTML += templateCart(cartProd)
  })
}

// Update cart
function updateCart () {
  let totalItems = 0
  for (let item in cart) {
    totalItems += cart[item].added_quantity;
  }
  countCartBadge.innerText = totalItems
  totalCart.innerText = cart.reduce((acc, product)=> acc + product.price * product.added_quantity, 0)
  // Cart DOM Update
  renderCartProducts()
}

// Delete Cart
function deleteProductFromCart (prodId) {
  const newCart = cart.filter((prod) => prod.id !== prodId )
  cart = newCart
  // Cart DOM Update
  updateCart()
}


function addQuantity(id){
  const indexProduct = cart.findIndex((prod) => prod.id === id)
  // If product added quantity is minor to the stock
  if(cart[indexProduct].added_quantity < cart[indexProduct].available_quantity){
    cart[indexProduct].added_quantity = cart[indexProduct].added_quantity + 1
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tenemos mas stock de este producto!',
    })
  }
  updateCart()
}
function removeQuantity(id){
  const indexProduct = cart.findIndex((prod) => prod.id === id)
  if(cart[indexProduct].added_quantity === 1) {
    deleteProductFromCart(id)
  } else {
    cart[indexProduct].added_quantity = cart[indexProduct].added_quantity - 1
  }
  updateCart()
}