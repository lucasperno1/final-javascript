// Productos
class producto {
  constructor(nombre, imagen,categoria, precio){
    this.nombre = nombre;
    this.imagen = imagen;
    this.categoria = categoria;
    this.precio = precio;
  }
}

const producto1 = new producto("AMD Ryzen 5 5600x", "/imagenes/Ryzen-5-5600x.png","Componentes", 35000 );
const producto2 = new producto("INTEL Core i5 10400F", "/imagenes/micro-intel-core-i5-10400f-0.jpg","Componentes", 30000);
const producto3 = new producto("REDRAGON Zeus H510", "/imagenes/Redragon-Zeus-H510-3.jpg","Perifericos", 6500);
const producto4 = new producto("LOGITECH G203", "/imagenes/MOU454.jpg","Perifericos", 8300);
const producto5 = new producto("RAZER Blackwidow V3", "/imagenes/razer-blackwidow-V3.jpg","Periféricos", 12500);
const producto6 = new producto("MSI RX570 8GB", "/imagenes/msi-rx570.png","Componentes", 62000);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
const gridProductos = document.getElementById("grid-productos");

for(const product of productos) {
  const {nombre, imagen, categoria, precio} = product
  gridProductos.innerHTML += 
  `<div class="product-card" >
    <h1>${nombre}</h1>
    <img class="imagen" src=${imagen} alt="">
    <p>Categoria :${categoria}</p>
    <p>Precio :${precio}</p>
    <button>Comprar</button>
  </div>`
  
}