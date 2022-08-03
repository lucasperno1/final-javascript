let stockProductos = [
  {id: 1, nombre: "AMD Ryzen 5 5600x", imagen:"/imagenes/Ryzen-5-5600x.png", categoria: "Procesadores", precio: 55000},
  {id: 2, nombre: "INTEL Core i5 10400F", imagen:"/imagenes/micro-intel-core-i5-10400f-0.jpg", categoria: "Procesadores", precio: 25000},
  {id: 3, nombre: "REDRAGON Zeus H510", imagen:"/imagenes/Redragon-Zeus-H510-3.jpg", categoria: "Auriculares", precio: 12000},
  {id: 4, nombre: "LOGITECH G203", imagen:"/imagenes/MOU454.jpg", categoria: "Mouse", precio: 4000},
  {id: 5, nombre: "RAZER Blackwidow V3", imagen:"/imagenes/razer-blackwidow-V3.jpg", categoria: "Teclados", precio: 14000},
  {id: 6, nombre: "MSI RX570 8GB", imagen:"/imagenes/msi-rx570.png", categoria: "Placa de Video", precio: 75000}
]

const productosStorage = (item, producto1) => {localStorage.setItem("item", producto1) };

for (const producto of stockProductos) {
  productosStorage("listaProductos", JSON.stringify(stockProductos))
}


