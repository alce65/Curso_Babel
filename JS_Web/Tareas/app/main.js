
class Main {

    constructor() {
        this.user= {
            nombre: localStorage.getItem('nombre')
        }
        this.tarea = ""
        this.aTareas = JSON.parse(localStorage.getItem("tareas")) ? JSON.parse(localStorage.getItem("tareas")) : []
        this.vista = {
            btnReg:  document.querySelector('#btnRegistrar'),
            inNombre: document.querySelector('#nombre'),
            resultado: document.querySelector("#resultado"),
            inTarea: document.querySelector('#tarea'),
            btnAdd: document.querySelector('#btnAdd'),
            tareas: document.querySelector('#tareas')
        }
        this.vista.btnReg.addEventListener('click',this.btnRegistrar.bind(this),false)
        this.vista.btnAdd.addEventListener('click', this.btnAdd.bind(this), false)
        this._mostrarNombre()
        this._mostrarTareas()
    }

     _mostrarNombre () {
         if(this.user.nombre) {
            console.log(this.user.nombre)
            this.vista.resultado.innerHTML =`<p>Hola ${this.user.nombre}</p>`
            this.vista.resultado.classList.add("rojo")
         }
     }

    _mostrarTareas() {
         if(this.aTareas.length) {
            let lista;
            lista = "<ul>"
            this.aTareas.forEach(item=>lista+=`<li>${item}</li>`)
            lista += "</ul>"
            this.vista.tareas.innerHTML = lista
         }
     }

    btnRegistrar() {
        console.log(this.user.nombre)
         this.user.nombre = this.vista.inNombre.value
         localStorage.setItem("nombre",  this.user.nombre)
         this._mostrarNombre()
     }

     btnAdd() {

         this.tarea = this.vista.inTarea.value
         this.aTareas.push( this.tarea)
         localStorage.setItem("tareas", JSON.stringify(this.aTareas))
         this._mostrarTareas()
     }


}

// Eventos al cargar la página
// document > DOMContentLoaded
// window -> load

(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false)
})()