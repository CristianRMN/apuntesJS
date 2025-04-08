//Funciones
var nombre = "Pepe";

function returnNombre(nombre) {
    return nombre;
}

function printNombre(nombre) {
    console.log("Mi nombre es: " + nombre);
}

console.log("Mi nombre: " + returnNombre(nombre));
nombre = "Federico";
printNombre(nombre);

//funciones con parámetros
function suma(numero1, numero2){
    return numero1 + numero2;
}

console.log("La suma sin parámetros inicializados es: " + suma(200, 210))

//funciones con parámetros inicializados
function sumaConParámetrosInicializados(numero1 = 100, numero2 = -20){
    return numero1 + numero2;
}
var resultado = sumaConParámetrosInicializados()

console.log("Resultado de suma con parámetros inicializados: " + resultado)

//hosting en funciones

/**
 * Puedes declarar la funcion abajo y llamarla arriba sin problemas
 */
console.log(saludo());
function saludo(){
    return "Un saludo";
}

//Funciones anónimas
/*
 Simplemente declaramos una variable igual a una función que nos devuelve un valor.
 Luego la podemos llamar como una funcion normal y corriente
 */
let division = function(num1, num2){
    return num1 / num2;
}

console.log("El resultado de la division es: " + division(10, 2))

//funciones como parámetros
/*
 Primero creamos una funcion normal y corriente
 Luego llamamos a esa funcion en otra funcion como parámetro
 */
function compararionEdades(edad1, edad2){
    if(edad1 > edad2){
        console.log(edad1 + " es mayor que " + edad2);
    }
    else if(edad1 < edad2){
        console.log(edad1 + " es menor que " + edad2);
    }
    else{
        console.log("Ambas edades son iguales");
    }
}

function getEdades(edad1, edad2, callBack){
    callBack(edad1, edad2);
}

getEdades(10, 2, compararionEdades);

//funciones autoinvocadas
(function (name, year){
    console.log(name + " - " + year);
})("Armando", 2023)

!function (name, year){
    console.log(name + " - " + year);
}("Armando", 2023)