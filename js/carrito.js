debugger ;

let ingresar_producto = confirm("¿Desea iniciar una compra y añadirlo a su carrito?") ;
// Carrito
const todos_los_productos = [] ;
// Array de productos existentes
const producto = [
    {id: 1, nombre: "Fernet Branca 750 ml", precio: 1600},
    {id: 2, nombre: "Vodka Smirnoff", precio: 1280},
    {id: 3, nombre: "Absolut vodka", precio: 3450},
    {id: 4, nombre: "Gin Larios", precio: 3100},
]

if(ingresar_producto){
    inicio_carrito() ;
}


// Inicio carrito
function inicio_carrito() {
    let lista = ""
    let finalizar_carrito = false ;

    while(!finalizar_carrito) {
        let nombre_producto = prompt("Ingrese nombre del producto que desee agregar al carrito") ;
        // Se pregunta si nombre_producto existe en producto
        const resultado = producto.find((el) => el.nombre === nombre_producto) ;

        if(resultado) {
            alert("El producto ingresado si existe, se añadirá a su carrito.") ;
            alert("Has añadido al carrito: "+nombre_producto) ;
            lista += "\n"+" - "+nombre_producto ;
            // Se agrega el producto al array del carrito
            todos_los_productos.push((resultado)) ;
            console.log(todos_los_productos) ;
        }else {
            alert("No se encontró el producto.") ;
        }
        if(nombre_producto === null){
            finalizar_carrito = true
        }
    }

    // Cuadro para confirmar la compra
    if (lista != "") {
        let respuesta_compra = confirm ("Desea finalizar la compra de los siguientes productos: "+lista) ;

        if(respuesta_compra) {
            alert("¡Gracias por comprar en nuestra tienda!") ;

        }else{
            alert ("Se canceló con exito su compra.") ;
            return quitar_producto() ;
        }
    }
}


// Se le preguntará al usuario si quiere quitar un producto y se mostrará en una alerta el producto quitado
function quitar_producto() {
    while(quitar_producto) {
        const producto_a_quitar = prompt("¿Desea quitar un producto de su carrito?") ;
        // Buscar el producto
        const producto_existente = todos_los_productos.find((el) => el.nombre === producto_a_quitar) ;

    // Si el producto se encuentra, se elimine del array del carrito
    if(producto_existente){
        const index_producto = todos_los_productos.indexOf(producto_a_quitar) ;
        todos_los_productos.splice(index_producto, ) ;
        alert(producto_a_quitar+" fue removido de su lista de compras.") ;
    }else{
        alert("El producto ingresado no existe.") ;
    }
    if (producto_a_quitar === null) {
        quitar_producto = false ;
    }
    }
}

