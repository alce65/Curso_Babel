let aDatos = new Array(12,34,56,12)
let aNombres = ["Pepe", "Juan", "Luis"]

console.log(aDatos)
console.log(aNombres)

console.log(typeof aDatos)
console.log(typeof aNombres)

console.log(aDatos.length)
console.log(aNombres.length)

aDatos.push(65)
console.log(aDatos)

// Procesamiento imperativo
let suma = 0;
for (let i = 0; i < aDatos.length; i++) {
    suma += aDatos[i];
}
console.log(suma)

// funciones declarativas
suma = 0;
aDatos = aDatos.map(item => ++item)
aDatos = aDatos.filter( item => {item > 50})
aDatos.forEach( item => suma += item)
console.log(suma)