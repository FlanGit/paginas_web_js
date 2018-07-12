function esPali(texto) {

    
    let result = false
    // comparacion
    if (texto.split(' ').join('').toUpperCase() === texto.split(' ').join('').split('').join('|').split('|').reverse().join('').toUpperCase()) {
        result = true
    }

    //console.log(frase);
    //console.log(aDatos)
    //console.log(aClon)
    //console.log(alReves)

    return result
}

function prueba() {
    let texto = 'Hola'
    console.log(esPali(texto)) // false
    texto = 'Hola, no soy palindromo'
    console.log(esPali(texto)) // false
    texto = 'La ruta nos aporto otro paso natural'
    console.log(esPali(texto)) // true
    texto = 'Dabale arroz a la zorra el abad'
    console.log(esPali(texto)) // true
}

prueba()