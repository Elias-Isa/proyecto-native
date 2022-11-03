// Variables globales que incluyen array de carrito y array de productos
let carrito = [];
let producto = [];

let gestor;
const carritoClave = "carrito";

// Escuchar los eventos del DOM cargado
document.addEventListener("DOMContentLoaded", ()=>{

    // Cargo el carrito con local storage, si no hay nada dentro del carrito, queda en un array vacío
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    gestor = new CarritoProductos();
    gestor.inicio();
})

// Añadimos el contenido del producto al carrito
function addCarrito (id) {
    let prod = document.getElementById("row_"+id);
    let producto = new Producto (id,
        prod.querySelector("h3").textContent,
        prod.querySelector(".textoCard").textContent.substring(1,6),
        prod.querySelector("img").src
        )

gestor.añadirCarrito(producto);

}