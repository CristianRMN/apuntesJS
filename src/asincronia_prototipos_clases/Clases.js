class Persona{

    nombre;
    apellidos;
    edad;

    constructor(nombre, apellidos, edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    greet(){
        console.log("Mi nombre es: " + this.nombre +
        ", mi apellido es: " + this.apellidos +
        ", edad es: " + this.edad);
    }
}
const persona = new Persona("Alejandro", "Yañez messeguer", 20);
persona.greet();

class Persona2{
    #nombre;
    #apellidos;
    #edad;

    constructor(nombre, apellidos, edad){
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#edad = edad;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    setApellidos(apellidos){
        this.#apellidos = apellidos
    }

    setEdad(edad){
        this.#edad = edad;
    }

    get name(){
        return this.#nombre;
    }

    get apellidos (){
        return this.#apellidos;
    }

    get edad (){
        return this.#edad;
    }
}

const persona2 = new Persona2("Pepe", "Sanchez Flores", 30);
console.log(persona2.name);

//Herencia

