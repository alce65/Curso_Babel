class Usuario {
    constructor(nombre, apellido, direccion) {
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
    }
    saludar () {
        console.log(`Hola soy ${this.nombre}`)
    }
}

usuario1 = {
    nombre : "Pepe",
    apellido : "Perez",
    direccion : "c/ Pez"
}

usuario2 = {
    nombre : "Luis",
    apellido : "Lopez",
    direccion : "c/ Ranas"
}

usuario3 = new Usuario("Juan", "Gomez")

console.dir(usuario1)
console.dir(usuario2)
console.dir(usuario3)
usuario3.saludar()