function mostrar1 (pData) {
   
    /* console.log(pData) */
    console.log(nombre)

    // if (true) 
    {
        let localEdad = 23
        const AÑO = 2018
        console.log(localEdad)
        // AÑO++
        console.log(AÑO) 
    
    }
    // console.log(localEdad)
    // console.log(AÑO) 

}

/* var oDatos1 = new Object()
var oDatos2 = {} */

var mostrar2 = function(pData1, pData2) {
    console.log(pData1, pData2)
    // console.log(localEdad) -> raria error
}

// ARROW FUNCTION (ES6)

var mostrarA2 = (pData1, pData2) => {
    console.log(pData1, pData2)
}

var mostrarA1 = pData1 => console.log(pData1, pData2)


var nombre ="Pepe"
var apellidos = "Perez"

mostrar1(nombre)
mostrar2(nombre, apellidos)

console.log(typeof mostrar1)

