let stockProductos = [
  {id: 1, nombre: "AMD Ryzen 5 5600x", imagen:"/imagenes/Ryzen-5-5600x.png", categoria: "Procesadores", precio: 55000, stock: 7},
  {id: 2, nombre: "INTEL Core i5 10400F", imagen:"/imagenes/micro-intel-core-i5-10400f-0.jpg", categoria: "Procesadores", precio: 25000, stock: 1},
  {id: 3, nombre: "REDRAGON Zeus H510", imagen:"/imagenes/Redragon-Zeus-H510-3.jpg", categoria: "Auriculares", precio: 12000, stock: 0},
  {id: 4, nombre: "LOGITECH G203", imagen:"/imagenes/MOU454.jpg", categoria: "Mouse", precio: 4000, stock: 0},
  {id: 5, nombre: "RAZER Blackwidow V3", imagen:"/imagenes/razer-blackwidow-V3.jpg", categoria: "Teclados", precio: 14000, stock: 5},
  {id: 6, nombre: "HYPERX Pulsefire Surge", imagen:"/imagenes/hyperx-pulsefire-surge.jpg", categoria: "Mouse", precio: 7800, stock: 2},
  {id: 7, nombre: "Zotac 3070ti Trinity", imagen:"/imagenes/zotac-3070ti-trinity.jpg", categoria: "Placa de Video", precio: 215000, stock: 10},
  {id: 8, nombre: "MSI RX570 8GB", imagen:"/imagenes/msi-rx570.png", categoria: "Placa de Video", precio: 75000, stock: 3}
]

const productosStorage = (item, producto1) => {localStorage.setItem("item", producto1) };

for (const producto of stockProductos) {
  productosStorage("listaProductos", JSON.stringify(stockProductos))
}


