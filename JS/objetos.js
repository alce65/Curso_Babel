const oUserLit = {
    nombre: "Pepe",
    apellidos: "Perez",
    edad : 23,
    genero : "H",
    
}
oUserLit.saludar = function() {
    console.log (` Hola, soy ${this.nombre}`)
}


const oUserLit2 = {
    nombre: "Julia",
    apellidos: "Perez",
    edad : 23,
    genero : "M",
    
}
oUserLit2.saludar = function() {
    console.log (` Hola, soy ${this.nombre}`)  }


function User (nombre, apellidos, edad, genero) {
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = edad
    this.genero = genero
    ++User.prototype.numUsers
    // this.saludar
}
User.prototype.numUsers = 0
User.prototype.saludar =  function() {
        console.log (` Hola, soy ${this.nombre}
        ya somos ${this.numUsers}`)
    }


// Formas de invocacion
// mostrarA1()
// console.log()
// new User()
// call/apply



oUser1 = new User("Juan", "Lopez", 33, "H")
oUser1.saludar()

console.log(oUserLit)
console.log(typeof oUserLit)
console.log(oUser1)
console.log(typeof oUser1)

oUser2 = new User("Raquel", "Lopez", 31, "M")
oUser2.saludar()

oUserLit.saludar()
oUserLit2.saludar()

