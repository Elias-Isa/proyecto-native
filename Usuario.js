class Usuario {

    constructor(nombre,mail,contraseña){


        this.nombre = nombre;
        this.contraseña = contraseña;
        this.mail = mail;
        this.activado = true ;


    }


    mostrar_bienvenida(){

        alert("Bienvenido "+this.nombre+ "\n"
        +"Su email es "+this.mail + "\n"
        +"Su estado es "+this.activado);


    }

    desactivar(){


        this.activado = false;

    }



}