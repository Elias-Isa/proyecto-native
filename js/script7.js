
//Se solicita datos de la persona
// let apellido = prompt("Por favor, ingrese su apellido") ;
// let nombre = prompt("Ahora ingrese su nombre") ;
// alert("Su apellido es : "+ apellido + "\n" + "Su nombre es: " +nombre);

// let anioActual = "2022" ;
// let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento")) ;


// let calculo = anioActual - anioNacimiento ;

// alert("Su año de nacimiento es: "+calculo) ;


//Se pide un numero a través del prompt, en caso de ser mayor a 500, se mostrará una alerta

// let numero = parseInt(prompt("Ingrese un número")) ;

// if (numero <= 500) {
//     alert ("El numero ingresado es: " +numero+ " y es menor o igual a 500") ;
// }else {
//     alert ("El numero ingresado es: " +numero+ " y es mayor a 500") ;
// }

//Pedimos un texto por alerta y si es igual a "Hola", se muestra un mensaje en alerta
// let texto = prompt("Ingrese un texto") ;

// if (texto == "Hola") {
//     alert ("El texto ingresado es: "+texto) ;
// }else {
//     alert("El texto ingresado es: "+texto+ " y es distinto de 'Hola' ");
// }

//Pedir un numero y ver si está entre 10 y 50, de ser así, mostrar una alerta

// let numero1 = parseInt(prompt("Ingrese un número para comparar")) ;
// let numero2 = parseInt(prompt("Ingrese otro número")) ;

// if (numero1 >= 10 && numero2 <= 50) {
//     alert("Los numeros ingresados que están entre 10 y 50 son: "+numero1+ " y "+numero2) ;
// }else {
//     alert("Los numeros ingresados NO están entre 10 y 50 y son: "+numero1+ " y "+numero2) ;
// }


//pedir un numero 10 veces mediante prompt y sumarle otro en cada repetición, mostrar el resultado por consola u alert usando for

// let numero1 = parseInt(prompt("Ingrese un número que sera sumado en cada iteración")) ;
// let suma = 0 ;
// for (let i = 0; i < 10; i++) {
//     let numero2 = parseInt(prompt("Ingrese un numero para sumar")) ;
//     suma = numero1 + numero2 ;
//     console.log(suma) ;
// }

//pedir un texto por consola, concatenar un valor en cada iteracion realizando una salida por resultado hasta que se ingrese "ESC"

// let texto = prompt("Ingrese un texto") ;
// let resultado = texto ;
// let textoConcatenar = " " ;

// while(textoConcatenar != 'ESC') {
//     textoConcatenar = prompt("Ingrese un texto para concatenar al inicial") ;
//     resultado = resultado + " " + textoConcatenar ;
//     console.log(resultado) ;
// }


//Pedir un numero y mostrar con alerta el mensaje "hola" la cantidad de veces del valor del numero 
let numero1 = parseInt(prompt("Ingrese un numero para repetir el mensaje")) ;

for (let i = 1; i <= numero1; i++) {
    alert("Hola") ;
}