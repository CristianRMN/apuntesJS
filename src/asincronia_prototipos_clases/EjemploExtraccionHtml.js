class Vacaciones{
    #titulo;
    #descripcion;
    #precio;

    constructor(titulo, descripcion, precio){
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._precio = precio;
    }


    get titulo() {
        return this._titulo;
    }

    set titulo(value) {
        this._titulo = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    let titulo = document.querySelector("p.titulo").textContent;
    let descripcion = document.querySelector("p.desc").textContent;
    let precio = document.querySelector("p.price").textContent;

    const vaca = new Vacaciones(titulo, descripcion, precio);
    document.querySelector("button.boton").addEventListener("click", function (event) {
        document.getElementById("parrafoID").textContent = "Titulo: " + vaca.titulo + "\nDescripcion: " + vaca.descripcion + "\nPrecio: " + vaca.precio;
    })
    console.log(titulo);
    console.log(descripcion);
    console.log(precio);
})