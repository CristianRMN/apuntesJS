//Tipado dinámico, vale tanto para let como para var

let isActive = "1";
console.log("El valor de isActive es de: ", typeof isActive);

isActive = true;
console.log("El valor de isActive es de: ", typeof isActive);

isActive = 1;
console.log("El valor de isActive es de: ", typeof isActive);

var edad = "1";
console.log("El valor de edad es de: ", typeof edad);

edad = true;
console.log("El valor de edad es de: ", typeof edad);

edad = 1;
console.log("El valor de edad es de: ", typeof edad);

//casteo
let city = "Madrid"
console.log("El valor de city es: " + typeof city);
city = Boolean(city);
console.log("El valor de city es: " + typeof city);
console.log(city);

let currentYear = "2023";
currentYear = Number(currentYear);
console.log("El valor de currentYear es: " + currentYear);
currentYear = Boolean(currentYear);
console.log("El valor de currentYear es: " + currentYear);
currentYear = String(currentYear);
console.log("El valor de currentYear es: " + currentYear);
currentYear = null
console.log("El valor de currentYear es: " + currentYear);
currentYear = undefined
console.log("El valor de currentYear es: " + currentYear);


/**
 * Explicación del tipo de coerción:
 * De String a Number:
 *
 * currentYear = Number(currentYear): Aquí tienes un string "2023". Al convertirlo a un número, JavaScript interpreta que "2023" es un número válido, así que currentYear se convierte en el número 2023.
 *
 * Si el string no tiene un valor numérico válido (como "abc", "hello", o una cadena vacía ""), el resultado de la conversión será NaN (Not a Number).
 *
 * let invalidString = "abc";
 * invalidString = Number(invalidString); // NaN
 * console.log(invalidString); // NaN
 * De Number a Boolean:
 *
 * currentYear = Boolean(currentYear): Cuando conviertes un número a booleano, JavaScript hace una conversión basada en la "regla de falsedad":
 *
 * Cualquier número distinto de 0 se convierte en true.
 *
 * El número 0 se convierte en false.
 *
 * Así que, en el caso de 2023, como es un número distinto de 0, se convierte en true.
 *
 * Ejemplo:
 *
 * let num = 0;
 * num = Boolean(num); // false
 * console.log(num); // false
 * De Boolean a String:
 *
 * currentYear = String(currentYear): Si conviertes un valor booleano a un string, JavaScript simplemente convierte el valor booleano a su representación como texto:
 *
 * true se convierte en la cadena "true".
 *
 * false se convierte en la cadena "false".
 *
 * Ejemplo:
 *
 * let bool = true;
 * bool = String(bool); // "true"
 * console.log(bool); // "true"
 * De null o undefined a otro tipo:
 *
 * currentYear = null: Si asignas null a una variable, esta variable no tiene valor, lo cual puede producir resultados inesperados si se utiliza en operaciones.
 *
 * currentYear = undefined: undefined significa que la variable no ha sido inicializada o que no tiene un valor asignado. Al convertirlo a otros tipos:
 *
 * De undefined a Number: se convierte en NaN.
 *
 * De undefined a Boolean: se convierte en false.
 *
 * De undefined a String: se convierte en la cadena "undefined".
 *
 * Ejemplo:
 *
 * let a = undefined;
 * console.log(Number(a)); // NaN
 * console.log(Boolean(a)); // false
 * console.log(String(a)); // "undefined"
 */