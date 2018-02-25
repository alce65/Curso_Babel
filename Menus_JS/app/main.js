export class Main {
    constructor() {
        console.log("Main loaded")
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),
            eArticle : document.querySelector('article')
        }
        this.vista.aBtnsMenu.forEach( (item) => {
            item.addEventListener('click',this.menuItems.bind(this),false)
        })
        this.vista.eArticle.innerHTML = '<h2>INICIO</h2>'
    }

    menuItems(oEv) {
        oEv.preventDefault()
        console.log(`Pulsado ${oEv.target.id}`)
        console.dir(oEv.target.id)
        this.vista.eArticle.innerHTML = `<h2>${oEv.target.id.toUpperCase()}</h2>`
    }
}