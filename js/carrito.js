
let confirma_respuesta = confirm ("¿Desea iniciar una compra y añadirlo al carrito?") ;

if(confirma_respuesta){
    inicio_carrito() ;
}

// Inicio del carrito de compra
function inicio_carrito (){
    let lista = "" ;
    let finalizar_carrito = false ;

    while (!finalizar_carrito){
        let nombre_producto = prompt("Ingrese nombre del producto o comida que desee agregar al carrito") ;
        let producto = obtener_producto(nombre_producto) ;

        //Se muestra la lista de compras del usuario
        if (producto){
            alert("Usted eligió: "+producto) ;
            lista += "\n"+" - "+producto ;

        }else{
            //Si cancela la compra, se finaliza el carrito
            if (nombre_producto === null){
                finalizar_carrito = true ;
            }

            alert("Ingrese un producto o comida que desee") ;
        }
    }
    //Cuadro para confirmar la compra de productos
    if (lista != ""){
        let respuesta = confirm ("Desea finalizar la compra de los siguientes productos: "+lista) ;
        if (respuesta){
            alert("¡Gracias por comprar en nuestra tienda!") ;
        }else{
            alert("Se canceló con éxito su compra, se lo devolverá a la sección anterior.") ;
            return inicio_carrito() ;
        }
    }
}

//Elegir producto, comida o bebida a llevar
function obtener_producto (nombre_producto) {
    let producto ;

    switch(nombre_producto){
        
        case "Fernet Branca 750 ml" :
            producto = "Fernet Branca 750 ml"
            break ;
        case "Pizza Muzzarella" :
            producto = "Pizza Muzzarella"
            break ;
        case "Sándwiches napolitanos calientes" :
            producto = "Sándwiches napolitanos calientes"
            break ;
        case "Vodka Smirnoff 700 ml" :
            producto = "Vodka Smirnoff 700 ml"
            break ;
        default :
            producto = false ;
    }

    return producto ;
}