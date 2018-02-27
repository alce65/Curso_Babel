class AppSample extends HTMLElement  {
    constructor () {
        super()
        console.log("Creado el componente")
        const oImport = document.querySelector('link[rel="import"]').import;
        console.log(oImport)
        const elem = oImport.querySelector('#temp1')
        //const elem = document.querySelector('#temp1')
        console.log(elem)
        this.attachShadow({mode: 'open'}).innerHTML = elem.innerHTML
    }
}

customElements.define('app-sample', AppSample)
