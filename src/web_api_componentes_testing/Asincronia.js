function twoSecondStop(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        }, 2000);
    })
}


async function init(){
    console.log("Initializando...");
    await twoSecondStop();
    console.log("Ejecucion finalizada...");
}

console.log("Ejecucion Iniciada");
init();

function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nombre: "Laura", edad: 29 });
        }, 1500);
    });
}

async function mostrarUsuario() {
    console.log("📡 Pidiendo datos...");
    const usuario = await obtenerUsuario();
    console.log("👤 Usuario:", usuario);
}

mostrarUsuario();
