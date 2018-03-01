class AppSample extends HTMLElement  {
    constructor () {
        super()
        console.log("Creado el componente")
        const oImport = document.querySelector('link[rel="import"]').import;
        console.log(oImport)
        const elem = oImport.querySelector('#temp1')
        //const elem = document.querySelector('#temp1')
        console.log(elem)
        let shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = elem.innerHTML

        let boton = shadow.querySelector("#saludar")
        boton.addEventListener("click", this.saludar.bind(this))
    }

    saludar() {
        console.log("Hola")
    } 
}

customElements.define('app-sample', AppSample)
