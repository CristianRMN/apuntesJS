//TIPOS DE DATOS NO PRIMITIVOS

/*
 Arrays:
 1. Almacenan datos de cualquier tipo
 2. Cada dato posee un índice
 3. Son redimensionales
 */

let user = ["Armando", "Calle principe", 123456789, "-", true];

console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);

/*
  Set -> Coleccion de elementos únicos
  1. ALmacenan datos de cualquier tipo
  2. Datos únicos, no se repiten
  3. Colección no indexada, pero es iterable
 */

//Declaramos el objeto Set y añadimos cosas a el
let misEdades = new Set();
misEdades.add(1); //metodo para añadir elementos, (add)
misEdades.add(2);
misEdades.add(3);
misEdades.add("Texto de ejemplo");
const objeto = {a:2, b:3, c:4};
misEdades.add(objeto);


//metodo has -> Nos permite saber si un elemento está o no en el set, nos devuelve true o false
var resultado = misEdades.has(objeto);
console.log(resultado);

//metodo size -> Nos permite saber el tamaño del set
console.log("El tamaño del set es de: " + misEdades.size)

//metodo delete, elimina un elemento del set
misEdades.delete(2);
console.log(misEdades.has(2));

/*
  Map -> Coleccion de elementos indexados por clave
  1. Admite cualquier tipo de dato
  2. Se mantiene en orden de inserccion
  3. Es iterable y los elementos accesibles mediante su identificador, es la clave
  4. Las claves de un Map pueden ser de cualquier tipo
 */

//metodo set para añadir
const mapEjemplo = new Map();
mapEjemplo.set("Carlos", 20);
mapEjemplo.set("Alejandro", 44);
mapEjemplo.set("Veronica", 12);

//metodo get para obtener el valor por la clave
console.log(mapEjemplo.get("Carlos"));

mapEjemplo.set("Carlos", 33);// con esto sustituímos al valor anterior
console.log(mapEjemplo.get("Carlos")); // ahora saldrá 33 como valor


//metodo size -> Saber el tamaño del Map
console.log("El tamaño del Map es de: " + mapEjemplo.size);

//metodo delete -> Metodo para eliminar del map. Eliminamos por clave
mapEjemplo.delete("Carlos");
let estaCarlos = mapEjemplo.get("Carlos");
if(!estaCarlos){
    console.log("Carlos ha sido eliminado jeje");
}
else{
    console.log("Carlos no está eliminado")
}

/*
Object
1. Admite cualquier tipo de dato
2. No mantiene el orden de inserccion, se ordenan automáticamente
3. No es iterable y los elementos son accesibles mediante su propiedad, su clave
4. Las claves de un Object no pueden ser de cualquier tipo. Solo String
 */

let client = {name:"Armando", company:"OpenWebinars"};
console.log("Nombre del cliente: " + client.name); //accedemos al nombre del cliente
console.log("Compañía del cliente: " + client.company); //accedemos a la compañia del cliente

/*
 Weakset -> Colección de elementos únicos
 1. Solo almacenan objetos
 2. Los datos son únicos, nunca se repiten
 3. Colección no indexada, pero se puede iterar
 */

let visitados = new WeakSet();
let usuario1 = {nombre:"Alejandro"};
let usuario2 = {nombre:"Veronica"};
visitados.add(usuario1); //solo podemos añadir objetos al weakset, nada más que objetos. Lo hacemos con el add
visitados.add(usuario2);

if (visitados.has(usuario1)) { //el has sirve para saber si el objeto está en el weakset
    console.log("Visitados tiene a " + usuario1.nombre);
}

visitados.delete(usuario1); //con delete, eliminamos objetos del weakset

/*
 WeakMap -> Coleccion de elementos indexados por clave
 1. Admite cualquier tipo de dato
 2. Se mantiene el orden de inserccion
 3. Es iterable y los elementos accesibles mediante sy identificador, su clave
 4. Las claves de un Map, deben de ser objetos
 */

let wm = new WeakMap();

let jugadorMap1 = {DeclanRice:"Jesucritos"};
let jugadorMap2 = {Vinicius:"Manco"};

wm.set(jugadorMap1, "Jugador del arsenal");
wm.set(jugadorMap2, "Jugador del madrid");

console.log(wm.get(jugadorMap1)); // con el get me devuelve el valor de la clave del weakMap

if(wm.has(jugadorMap2)){ //con el has preguntamos si está una clave para obtener un valor
    console.log(wm.get(jugadorMap2));
}

wm.delete(jugadorMap2); //eliminamos una clave del weakMap

/*
Date -> Representa el tiempo en un momento en concreto
1. Minimo, 1 de enero de 1970
2. La fecha que almacena es justo la del momento de creación del objeto
 */

let currentDate = new Date();
console.log(currentDate);