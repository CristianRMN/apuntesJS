let ayncAction = new Promise((resolve, reject) => {
   const RANDOM_RESULT = Math.random() < 0.5;
   if(RANDOM_RESULT){
       setTimeout(()=>{resolve("cumplida")}, 1000);
   }else{
       reject("incumplida");
   }
});

ayncAction.then(
    fullfilled => {
        console.log(fullfilled);
    },
    rejected => {
        console.log(rejected);
    }
)

/*
  El promises es -> Como un contenedor en el que pones 2 situaciones. resolve o reject.
  1. Pones una condicion, si se cumple, salta el resolve y si no salta el reject
  2. luego llamas a esa promise y en los parámetros del then, le pasas la funcion en caso de que se cumpla
  3. Si no se cumple le pasas el rejected
 */