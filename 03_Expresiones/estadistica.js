function media (a, b, c) {
    return (a + b + c) / 3
}

function mediaArray(aDatos) {
    let suma = 0
    for (let i = 0; i < aDatos.length; i++) {
        // suma += aDatos[i];
        suma = suma + aDatos[i]
    }
    return suma / aDatos.length
}

// toma los parametros y lo asigna a traves de arguments como 0:2, 1:4, 2:6, 3:8, 4: 12
function mediaArg() {
    let suma = 0
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]
    }
    return suma / arguments.length
}

// toma muchos elementos en los parametros y se lo asigna a  aDatos 
function mediaSpread(...aDatos) {
    let suma = 0
    for (let i = 0; i < aDatos.length; i++) {
        suma += aDatos[i];
    }
    return suma / aDatos.length
}


// recoge el primer elemento y se lo asigna a "Varianza" y los demas a aDatos[].
function calculaEstadisticos(operacion,...aDatos) {}

/* console.log(media(2, 4, 6))*/

console.log(mediaArray([2,4,6, 8, 12])) 
console.log(mediaArg(2,4,6,8,12))
console.log(mediaSpread(2,4,6,8,12))

console.log(calculaEstadisticos('varianza',2,4,6,8,12))