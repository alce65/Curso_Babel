
class Main {

    constructor() {
        this.user= {
            nombre: ''
        }
        this.tarea = ""
        this.aTareas = []
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
    }

    btnRegistrar() {
        console.log(this.user.nombre)
         this.user.nombre = this.vista.inNombre.value
         console.log(this.user.nombre)
         this.vista.resultado.innerHTML =`<p>Hola ${this.user.nombre}</p>`
         this.vista.resultado.classList.add("rojo")
     }

     btnAdd() {
         let lista;
         this.tarea = this.vista.inTarea.value
         this.aTareas.push( this.tarea)
         lista = "<ul>"
         this.aTareas.forEach(item=>lista+=`<li>${item}</li>`)
         lista += "</ul>"
         this.vista.tareas.innerHTML = lista

     }

}

// Eventos al cargar la página
// document > DOMContentLoaded
// window -> load

(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false)
})()