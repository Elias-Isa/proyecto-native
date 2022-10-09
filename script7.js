



const nombre_usuario ="Nico";
const pass_usuario = "1234";
const mail_usuario = "nico_martini@gmail.com";

let respuesta = confirm ("Desea registrarse en la pagina?") ;


if (respuesta) {


    pedir_datos();



}


function pedir_datos(){


    let nombre = prompt ("Ingrese su nombre");
    let mail = prompt ("Ingrese su email");
    let pass = prompt ("Ingrese su pass");

    if (nombre && mail && pass ){


        let validacion = validar_datos(nombre,mail);

        if (validacion){

                const usuario = new Usuario (nombre,mail,pass);
                usuario.mostrar_bienvenida();


        }else{


           pedir_datos();

        }



    }else{


        alert("Tenes que completar todos los datos") ;


    }


}


function validar_datos(nombre,mail){


    if (nombre === nombre_usuario){

        alert("ya existe ese nombre de usuario");
        return false;




    }


    if (mail === mail_usuario){

        alert("ya existe ese mail");
        return false;

    }

    return true ;

}





