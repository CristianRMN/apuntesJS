document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".test").addEventListener("click", function (event) {
        event.stopPropagation();
        alert("click en el boton");
    })
})


document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Menu contextual esta intervenido");
})

window.addEventListener("click", function (event) {
    console.log("Hemos hecho click en la ventana de la web");
})