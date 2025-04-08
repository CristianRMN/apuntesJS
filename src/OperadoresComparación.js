//if else
console.log("Hola, bienvenido a la discoteca");
let edad = 18

if(edad >= 18){
    console.log("Muy bien, puedes pasar a la discoteca");
}else{
    console.log("Muy mal, vete niñato de mierda");
}

/**
 * Operadores de comparación
 *
 *
 * igualdad --> ==
 * igualdad estricta ===
 * desigualdad !=
 * desigualdad estricta !==
 * mayor que >
 * menor que <
 * mayor o igual a >=
 * menor o igual a <=
 */

//igualdad estricta

/*
5 === 5          true  (mismo valor y mismo tipo)
"5" === 5        false (valor igual, pero diferente tipo: string vs number)
true === 1       /false (true se puede convertir a 1, pero no son del mismo tipo)
*/

//desigualdad estricta
/*
"5" !== 5        // true  (mismo valor pero tipo distinto)
5 !== 5          // false (mismo valor y tipo)
true !== 1       // true  (aunque se parecen, no son el mismo tipo)

 */

//Operadores lógicos
/*
3 tipos:
- AND --> && Solo si las 2 expresiones son afirmativas
- OR || Una de las 2 expresiones es afirmativa
- ! Niega las expresiones
 */