
// Iteraciones
// for 
// while 
// do


function iterar () {
    for (let i = 0; i < 3; i++) {
        console.log(`Soy la vuelta ${i+1}`)
    }
}

function iterarInversa () {
    for (let i = 3; i > 0; i--) {
        console.log(`Soy la vuelta ${i}`)
    }
}

iterar()
iterarInversa()


/**
 * Función factorial ()
 * 
 * Producto de un número por todos los que le preceden
 * e.g. 5! = 5 * 4 * 3 * 2 * 1
 * e.g. 5! = 5 
 *      5! = 5!* 4 
 * 
 * 
 * * 3 * 2 * 1
 * 
 * e.g. 5! = 1 * 2 * 3 * 4 * 5
 * 
 * @param num: number
 * @return factorial: number 
 * 
 */

function factorial(num) {
    let factorial = 1
  
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
        
    }

    return(console.log(`El factorial de  ${num} es  ${factorial}`))
}

factorial(4)



function factorialreverse(num) {
    let factorial = 1
  
    for (let i = num; i>0; i--) {
        factorial = factorial * i
        
    }

    return(console.log(`El factorial inverso  de  ${num} es  ${factorial}`))
}

    factorialreverse(5)
// ------------------------------------------------------------
    // funcion que suma elementos de arreglo y da el total
 
function totalizar(aDatos) {
    let num = 0
    for (let i = 0; i < aDatos.length; i++) {
        num += aDatos[i];
    }
    return num
}

let aDatos = [2,3,5,7]
console.log(`El total es ${totalizar(aDatos)}`)
    