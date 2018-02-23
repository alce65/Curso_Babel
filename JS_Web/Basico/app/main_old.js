// Eventos al cargar la página
// document > DOMContentLoaded
// window -> load

(function () {
    document.addEventListener("DOMContentLoaded", main, false);
    // window.addEventListener("load", main, false);
})();


// Acceso al DOM


function main() {
    console.log("Documento cargado")
    console.dir(window)
    console.dir(document.querySelector('#btnSaludar'))
    console.dir(document.querySelector('#btnRegistrar'))
    document.querySelector('#btnSaludar').addEventListener("click",btnSaludar,false )
    document.querySelector('#btnRegistrar').addEventListener('click',btnRegistrar,false)
    document.querySelector('#btnGoogle').addEventListener('click', btnGoogle, false)
}
function btnSaludar() {
   alert("Hoal a todos")
}

function btnRegistrar() {
    let user
    user = window.prompt("Dime tu nombre",'Pepe')
}

function btnGoogle () {
    console.log(window.location.href)
    window.location.href= "https://www.google.com"
}




//document.getElementById("btn_1").onclick = btnEventClick;
// document.getElementById("btn_2").addEventListener("click", btnEventClick, false);