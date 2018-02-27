export class Main {
    constructor() {
        console.log("Main loaded")
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),
            eMain : document.querySelector('main'), 
            aImports: document.querySelectorAll('link[rel="import"]'),
            oImports: {}
        }
        // Manejador de eventos del menu
        this.vista.aBtnsMenu.forEach( (item) => {
            item.addEventListener('click',this.menuItems.bind(this),false)
        })
        // el array de selectores de los templates se convierte en un objeto
        // con claves el title de los templates y valores los propios elementos
        this.vista.aImports.forEach( (elem)  => {
            this.vista.oImports[elem.title]=elem.import
        })
        console.log(this.vista.oImports)
        this._cargarTemplate('inicio')
    }

    menuItems(oEv) {
        oEv.preventDefault()
        console.log(`Pulsado ${oEv.target.id}`)
        if (!this.vista.oImports[oEv.target.id]) {
            // Si no existe template
            this.vista.eMain.innerHTML = `
            <article>
                <h2>${oEv.target.id.toUpperCase()}</h2>
            </article>`
        } else {
            this._cargarTemplate(oEv.target.id )
        }
    }

    _cargarTemplate (id) {
        // Se selecciona el import adecuado segun su nombre (title)
        const IMPORT = this.vista.oImports[id]
        console.log(IMPORT)
        // del import se selecciona el template que contiene
        const ELEM = IMPORT.querySelector(`#${id}`)
        console.log(`#${id}`)
        console.log(ELEM)
        // el HTML del elemnto se añade en el punto adecuado
        this.vista.eMain.innerHTML = ELEM.innerHTML
    }

}