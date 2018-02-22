// SOLO en ES6
// Esto es de "mentirijillas"

class User {
    // static numUsers

    constructor  (nombre, apellidos, edad, genero) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.genero = genero
        // ++numUsers
    }
        saludar () {
            console.log (` Hola, soy ${this.nombre}
            ya somos muchos`)
            // ${User.numUsers}
        }
}

class Alumno extends User {
    constructor(nombre, apellidos, edad, genero, curso) {
        super(nombre, apellidos, edad, genero)
        this.curso = curso
    }

    saludar () {
        console.log (` Hola, soy ${this.nombre}
        ya somos muchos alumnos`)
        // ${User.numUsers}
    }
}

oUser1 = new User("Juan", "Lopez", 33, "H")
oUser1.saludar()
console.log(oUser1)

oAlumno1 = new Alumno ("Juan", "Lopez", 33, "H", "Angular")
oAlumno1.notas = [9, 8, 10]
oAlumno1.saludar()
console.log(oAlumno1)

oAlumno2 = new Alumno ("Luis", "Gomez", 33, "H", "Angular")
console.log(oAlumno2)