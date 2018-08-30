let aNombres = [ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan', 'Rosa' ]

/* for (let i = 0; i < aNombres.length; i++) {
    const item = aNombres[i]
    console.log(`El usuario ${i+1} se llama ${item}`)
} */

/* aNombres.forEach(
    function(item, i) { console.log(`El usuario ${i+1} se llama ${item}`)}
) 
 */

aNombres.forEach(
    (item, i) => console.log(`El usuario ${i+1} se llama ${item}`)
) 

console.log(`-----------1---------------`)



let aNumbers = [2,5,7,8,9]
aNumbers.forEach(
    (item) => {
        let cuadrado = item*item
        console.log(`El cuadrado de  ${item} es ${cuadrado}`)
    }
) 

console.log(`-----------2---------------`)


let aCuadrados = aNumbers.map(
    (item) => {return item*item}
)

// let aCuadrados = aNumbers.map(item => item*item)
console.log(aCuadrados);

console.log(`-----------3---------------`)

// map elimina el ultimo elemento  "pila filo"
let aNumbersClon = aNumbers.map(item => item)

aNumbersClon.pop()
console.log(aNumbersClon )
console.log(aNumbers);

console.log(`-----------4---------------`)


// filter da como resultado un boolean y toma los verdaderos, true
// aqui saca los items q son numeros pares
let aPares = aNumbers.filter(
    (item) => {return !(item % 2)}
)

console.log(aPares);
console.log(`-----------5---------------`)


/* let aPares = aNumbers.filter(item => !(item % 2))
 */


 

let aImpares = aNumbers.filter(
    (item) => {return !!(item % 2)}
)

console.log(aPares)
console.log(aImpares)
console.log(`-----------6---------------`)



let sonTodosPares = aNumbers.every(
    (item) => {return !(item % 2)}
)
console.log(sonTodosPares);
console.log(`-----------7---------------`)


let hayAlgunPar = aNumbers.some(
    (item) => {return !(item % 2)}
)
console.log(hayAlgunPar);
console.log(`-----------8---------------`)

let valorFinal = aNumbers.reduce((a,b) => a-b)
console.log(valorFinal);
console.log(`-----------9---------------`)

valorFinal = aNumbers.reduceRight((a,b) => a+b)
console.log(valorFinal);
console.log(`-----------10---------------`)
