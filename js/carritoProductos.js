class CarritoProductos {

    // Recorre una estructura para mostrar los productos en la página
    inicio(){
        // Array de productos
        producto = [
            {
                "id": 1,
                "nombre": "Fernet Branca 750 ml",
                "precio": 1600,
                "stock": 10,
                "img": "card1.jpg",
                "destacado": 1
            },
            {
                "id": 2,
                "nombre": "Vodka Smirnoff 700 ml",
                "precio": 1280,
                "stock": 8,
                "img": "card2.jpg",
                "destacado": 1
            },
            {
                "id": 3,
                "nombre": "Absolut Vodka",
                "precio": 3450,
                "stock": 15,
                "img": "card3.jpg",
                "destacado": 1
            },
            {
                "id": 4,
                "nombre": "Gin Larios",
                "precio": 3100,
                "stock": 20,
                "img": "card4.jpg",
                "destacado": 1
            }
        ]
        // Filtramos aquellos productos destacados y luego lo cargamos en la página
        let productosDestacados = producto.filter(prod => prod.destacado == 1);
        this.cargarProductos (productosDestacados);
        
    }

    // Esta función se encarga de cargar los productos del DOM en la página
    cargarProductos(productos){
        const productosDiv = document.getElementById("productos");
        productosDiv.innerHTML = "";
        // Validamos si hay o no productos destacados
        if(productos.length === 0){
            this.mostrarProductosDestacados("No se han encontrado productos.");

        // Buscamos los productos que si están destacados
        }else{
            productos.forEach(producto => {
                let prod = document.createElement("div");
                prod.classList.add("col-xl-3", "col-md-6", "col-xs-12");
                prod.setAttribute("id", "row_"+producto.id)
                prod.innerHTML = `
                                <div class="card" style="">
                                    <img src="../img/${producto.img}" alt="Fernet Branca" width="240" height= "240">
                                </div>
                                <div class="card-body">
                                    <h3 class= textoCard>${producto.nombre}</h3>
                                </div>
                                <div class="">
                                    <p class="textoCard">$${producto.precio}</p>
                                    <a href="javascript:addCarrito(${producto.id})" class="boton">Agregar al carrito</a>
                                </div>`;

                productosDiv.appendChild(prod);
            });
        }
    }
    // Recibe el nuevo producto y se encarga de sumarlo al carrito
    añadirCarrito(producto) {
        carrito.push(producto);
        alert("Se agregó el producto a su carrito");

        this.actualizarCarrito();
    }

    // Actualizamos su contador
    actualizarContador() {
        let productosTotal = this.contadorProductos();
        let contadorCarrito = document.getElementById("badgeCarrito");
        contadorCarrito.innerHTML = productosTotal;
    }
    // Contamos la cantidad total de productos
    contadorProductos() {
        let contarProductos = 0;
        carrito.forEach( (producto)=>{
            contarProductos = contarProductos + parseInt(producto.cantidad);
        })

        return contarProductos;
    }
    // Mostramos el carrito
    mostrarCarrito(){
        let detalleCarrito = document.getElementById("productosCarrito");
        detalleCarrito.innerHTML = '';

        let total = 0;
        // Buscamos el producto y le creamos su respectiva caja
        carrito.forEach( (producto)=>{
            const productosCarrito = document.createElement("div");
            productosCarrito.classlist.add("row");
            
            total += parseInt(producto.precio);
            productosCarrito.innerHTML = `
                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                <img src="${producto.img}" width="80"/>
                            </div>

                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                ${producto.nombre}
                            </div>

                            <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                                $ ${producto.precio}
                            </div>

                            <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                                ${producto.cantidad}
                            </div>

                            <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                                <a href="javascript:eliminar(${producto.id})">
                                <i class="fa-solid fa-square-minus fa-2x"></i>
                                </a>
                            </div>`;
                // Agregamos todos los cambios
                detalleCarrito.appendChild(productosCarrito);
        })
        
        // Nuevo registro con el total a pagar
        let row = document.createElement("div");
        row.classlist.add("row");
        row.innerHTML = `   <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                                Total a pagar:
                            </div>
                            <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                                <b> $ ${total}</b>
                            </div>`;

        detalleCarrito.appendChild(row);
    }

    // Actualizamos el carrito con esta función
    actualizarCarrito() {
        this.actualizarContador();
        this.mostrarCarrito();
        // this.guardarCarrito();
    }

    // Mostramos si hay o no productos destacados
    mostrarProductosDestacados(mensaje) {
        const headerProductosDestacados = document.getElementById("productosDestacados");
        headerProductosDestacados.innerHTML = mensaje;
    }
}


