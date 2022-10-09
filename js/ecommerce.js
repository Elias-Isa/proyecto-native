debugger ;

const user_comprador = "comprador" ;
const pass_comprador = "contraseña1234" ;

//Bienvenida al sitio web
let respuesta_login = confirm("Bienvenido a Native ¿Desea registrarse en la página?") ;

if (respuesta_login){
    solicitar_datos() ;
}

//Se le solicitan datos al usuario al loguearse
function solicitar_datos (){
    let usuario = prompt("Ingrese su usuario") ;
    let pass = prompt("Ingrese su contraseña") ;
    
    if (usuario && pass){
        let validar = validacion_datos (usuario) ;
        
        if(validar){
            const nombre = new Registro (usuario) ;
            nombre.mostrar_bienvenida() ;
            nombre.desactivar() ;
        }else{
            solicitar_datos() ;
        }
    }
}

//Se validan los datos ingresados del usuario
function validacion_datos (usuario){
    if(usuario === user_comprador){
        alert ("El usuario ingresado ya está en uso. Por favor, ingrese un nuevo usuario.") ;
        return false ;
    }
    return true ;
}

