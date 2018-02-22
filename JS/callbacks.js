function main(mostrar) {
    const user = {
        nombre: "Pepe",
        apellidos: "Perez",
        edad : 23
    }
    // Salida usando template string
    mostrar(`
        El usuario es 
        ${user.nombre} ${user.apellidos}`)
}

function enMayusculas(pDato = "No se tu nomnbre") {
    // typeof pDato === string ? pDato : "No se tu nomnbre"
    console.log(pDato.toUpperCase())
}
function enMinusculas(pDato = "No se tu nomnbre") {
    console.log(pDato.toLowerCase())
}

// main(enMayusculas)
//nmain(enMinusculas)

main(pDato => console.log(pDato.toLowerCase()))

