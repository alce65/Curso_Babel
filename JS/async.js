// Asincronia

// Eventos de usuario
// Datos del servidor
// Temporización

let x = 12
setTimeout(
    () => {
        console.log("Hola asincrono")
        x =2*x
        console.log(x)
        }, 1000)


// En ES6

const consulta = function () {
    return new Promise ( (resolve, reject) => {
    setTimeout (() => {resolve("Todo OK")}, 2000)
    })
}

let resultados = 
consulta().then( (res) => {console.log(res)})

