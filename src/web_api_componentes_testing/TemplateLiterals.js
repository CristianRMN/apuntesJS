//Templates
let nombre = "Juan";
let edad = 25;

//template literal
let fraseTemplate = `hola ${nombre}, tu edad es de ${edad}`;
console.log(fraseTemplate);

//mensaje de cadena multilinea
let mensaje = `hola, este es un
mensaje de varias lineas
sin usar salto de linea`;
console.log(mensaje);

//interporalizacion
let variable1 = 10;
let variable2 = 5;

let resultado = `El resultado de ${variable1} + ${variable2} es de ${variable1 + variable2}`;
console.log(resultado);
