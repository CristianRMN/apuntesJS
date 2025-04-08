
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("idButton").addEventListener("click", function(){
        let parrafo = document.getElementById("idText");
        if(parrafo.textContent.trim() !== ""){
            parrafo.textContent = "";
        }
        else{
            parrafo.textContent = "has rellenado el parrafo";
        }
    })
})
