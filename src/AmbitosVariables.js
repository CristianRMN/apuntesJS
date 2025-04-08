let name = "Armando"; // variable global

function printName(){
    let name2 = "Pepe" //variable local
    console.log(name);
    console.log(name2);
}

var year = 2001;
if(year > 2000){
    var resultado = "Estamos en el siglo 21"; // el var puede ser llamado fuera de los bloques if else
}
console.log(resultado);

printName();