let inputName = document.querySelector(".saluda");
let buttonSaluda = document.querySelector(".boton");

buttonSaluda.addEventListener("click", function (event) {
    if(inputName.value !== "") {
        alert("Un saludo para: " + inputName.value);
        inputName.value = "";
    }
})

