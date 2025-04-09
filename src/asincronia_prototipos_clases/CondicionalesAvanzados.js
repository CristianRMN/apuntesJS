//condicional switch
let expresion = 'Lunes';

switch (expresion) {
  case 'Lunes':
    console.log('Lunes');
    break;
  case 'Marqueda':
    console.log('Marqueda');
    break;
  default:
    console.log('Sin nada');
}

//condicional ternario
let fruit = "orange";
let knowFruitls = new Set();
knowFruitls.add("Banana");
knowFruitls.add("orange");
knowFruitls.add("Manzana");
console.log(knowFruitls.has(fruit) ? "I got it" : "Nope")

//operadores relacionales
let fruit2 = "orange";
let allFruits = {orange:"Citric", Manzana:"Citric", Banana:"Drupe"};
console.log(fruit2 in allFruits); //usamos el in de una variable a un conjunto para ver si está o no

//instance of
let instancia = (new String("Cadena de texto") instanceof String);
console.log(instancia);