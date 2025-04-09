//bucle for
for(let i = 1; i < 11;i++){
    console.log("Numero del bucle: " + i);
}

//do while
let limit = 5;
do{
    console.log(limit--);
    console.log("Nuevo valor de limit: " + limit);
}while(limit > 0);

//while
let limit2 = 5;
while(limit2 > 0){
    console.log(limit2--);
}

//for in
let fruits = {A:"Orange", B:"Manzana", C:"Banana"};
for(let fruit in fruits){
    console.log(fruit);
}

//for of
let fruits2 = new Set()
fruits2.add("Banana");
fruits2.add("Platano");
for(let fruit of fruits2){
    console.log(fruit);
}
//break y continue, lo mismo que java