//Generadores
function* generadoresNumeros(limite){
    for(let i =0; i<limite;i++){
        yield i;
    }
}

var generador = generadoresNumeros(10);
console.log(generador.next().value);

