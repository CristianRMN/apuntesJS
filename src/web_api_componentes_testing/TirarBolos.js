function ballThrow(){
    return new Promise((resolve, reject) => {
        const hits= Math.round(Math.random()*10);
        const time = Math.round(Math.random()*2000);

        if(hits > 0){
            setTimeout(() => resolve(hits), time);
        }else{
            setTimeout(() => reject(hits), time);
        }
    });
}

let turn = ballThrow();

turn.then(hits => {
        if(hits === 9){
            console.log('Strike');
        }
        else{
            console.log(`Hemos tirado ${hits} bolos`)
        }
    },
    fail => {
        console.error(`No has tirado nada!! ${fail}`)
    })

/**
 * Este codigo muestra un ejercicio de promises.
 * 1. con la primera funcion hacemos la tirada aleatoria de los bolos con un numero del 0 al 9.
 * 2. si los hits son más que 0, vamos al resolve
 * 3. si no vamos al reject
 * 4. hacemos una variable igual al resultado de la promise
 * 5. hacemos operaciones con la promise
 */

//otro ejercicio

/**
 * Simula que estás descargando un archivo desde un servidor. Usa una función que devuelva una Promise que:
 *
 * Tarde entre 1 y 3 segundos en completarse (aleatorio).
 *
 * A veces se complete correctamente y otras veces falle (por ejemplo, 30% de las veces falla).
 *
 * Si se completa bien, debe decir: "Archivo descargado exitosamente".
 *
 * Si falla, debe decir: "Error al descargar el archivo".
 *
 * 💡 Requisitos:
 * Usa setTimeout dentro de la Promise.
 *
 * Usa .then(), .catch() y .finally() para mostrar los mensajes en consola
 */

function downloadFiles(){
    return new Promise((resolve, reject) => {
        let randomNumber = Math.round(Math.random()*3) + 1;
        let time = Math.round(Math.random()*2000);

        if(randomNumber > 0){
            setTimeout(() => resolve(time), time);
        }
        else{
            setTimeout(() => reject(time), time);
        }
    })
}

let file = downloadFiles();

file.then(files => {
    if(files > 1){
        console.log("Hemos descargado todos los archivos!");
    }
    else{
        console.log(`Hemos descargado ${file} archivos!`);
    }
},
    fail => {
    console.error(`No hemos descargado nada!! ${fail}`)
    })