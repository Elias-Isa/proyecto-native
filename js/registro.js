class Registro {
    constructor(usuario,pass){
        this.usuario = usuario ;
        this.pass = pass ;
        this.activado = true
    }

    mostrar_bienvenida(){
        alert("Bienvenido a Native "+this.usuario+ "\n"
        +"Su estado es "+ this.activado) ;
    }
    desactivar(){
        this.activado = false;
    }

}