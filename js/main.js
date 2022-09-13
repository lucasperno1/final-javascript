// DOM ACCESS DECLARATIONS
let productsGrid = document.getElementById('grid-productos') // productsGrid
let cartContainer = document.getElementById('contenedor-carrito') // productsContainer
let countCartBadge = document.getElementById('contadorCarrito') // countCartBadge
let totalCart = document.getElementById('precioTotal') // totalCart


// Store declarations
const localCart = JSON.parse(localStorage.getItem('cart'))
let cart = [] // cart
const products = [] // products


// Get data
async function getAuriculares () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=auricularesgamer&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    }) 
  }) 
}
async function getMouses () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=mousegamer&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}
async function getTeclados () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=tecladogamer&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}
async function getPerifericos () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=perifericospc&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}
async function getMousepad () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=mousepadgaming&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}
async function getHardware () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=componentespc&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}
async function getMotherboard () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=motherboard&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}
async function getMemoriasRam () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=memoriaram&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}
async function getPlacasDeVideo () {
  productsGrid.innerHTML = templateLoader()
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=placadevideo&limit=15')
  .then(res => {return res.json()})
  .then(data => {    
    // Insert data from ML
    productsGrid.innerHTML = ""
    data.results.forEach((result) => {
      productsGrid.innerHTML += templateProduct(result)
    })
  }) 
}


// Render Loader
const templateLoader = () => {
  return `
  <div class="col-12 loader">
    <h5>CARGANDO.....</h5>
  </div>
  `
}
// Render HTML Product
const templateProduct = (product) => {
  return `
    <div class="col-12">
      <div class="single-product">
        <div class="row">
          <div class="col-5 col-md-3">
            <img class="single-product_image" src=${product.thumbnail} alt="${product.title}">
          </div>
          <div class="col-7 col-md-9">
            <h3 class="single-product_title">${product.title}<h3>
            <p class="single-product_category">Categoria: ${product.category_id}</p>
            <div class="row align-items-center my-3">
              <div class="col-12 col-md-4">
                <div class="price-container">
                  <p class="precioProducto">Precio: $ ${product.price}</p>
                </div>
              </div>
              <div class="col-12 col-md-4 stock-container">
                <div class="stock-container">
                  <p class="precioProducto">Stock: ${product.available_quantity}</p>
                </div>
              </div>
            </div>
            <div class="actions-container">
              <div class="single-product_btn" onclick='addToCart(${JSON.stringify(product)})'>Agregar <i class="fas fa-shopping-cart"></i></div>
            </div>
          </div>
        </div>
      </div>
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
        localStorage.setItem('cart', JSON.stringify(cart))
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
      localStorage.setItem('cart', JSON.stringify(cart))
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
  localStorage.setItem('cart', JSON.stringify(cart))
  // Cart DOM Update
  updateCart()
}


function addQuantity(id){
  const indexProduct = cart.findIndex((prod) => prod.id === id)
  // If product added quantity is minor to the stock
  if(cart[indexProduct].added_quantity < cart[indexProduct].available_quantity){
    cart[indexProduct].added_quantity = cart[indexProduct].added_quantity + 1
    localStorage.setItem('cart', JSON.stringify(cart))
    
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
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  updateCart()
}

if(localCart){
  cart = localCart
  renderCartProducts()
  updateCart()
}
