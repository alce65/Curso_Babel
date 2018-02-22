const user = {
    nombre: "Pepe",
    apellidos: "Perez",
    edad : 23
}

// daria error user = {};

const mostrarA1 = pData1 => {
    pData1.genero="H"
    console.log(pData1)
}

mostrarA1(Object.assign({}, user))
// mostrarA1(JSON.parse(JSON.stringify(user)))
/// JSON.stringify(objeto) // string tipo JSON
// JSON.parse(string_tipo_JSON) // Objeto

console.log(user)