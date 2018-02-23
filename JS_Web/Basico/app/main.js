
class Main {
    constructor() {

        // Añadir bind(this)
        // document.addEventListener("DOMContentLoaded",  this.defineListeres.bind(this), false);
        document.addEventListener("DOMContentLoaded", () => {this.defineListeres()}, false);
    }

    defineListeres() {
        console.log("Documento cargado")
        console.dir(window)
        console.dir(document.querySelector('#btnSaludar'))
        console.dir(document.querySelector('#btnRegistrar'))
        console.log(this)
        document.querySelector('#btnSaludar').addEventListener("click",this.btnSaludar,false )
        document.querySelector('#btnRegistrar').addEventListener('click',this.btnRegistrar,false)
        document.querySelector('#btnGoogle').addEventListener('click', this.btnGoogle, false)
    }

    btnSaludar() {
        alert("Hoal a todos")
     }
     
     btnRegistrar() {
         let user
         user = window.prompt("Dime tu nombre",'Pepe')
     }
     
     btnGoogle () {
         console.log(window.location.href)
         window.location.href= "https://www.google.com"
     }
}

// Eventos al cargar la página
// document > DOMContentLoaded
// window -> load

(function () {new Main()})();