function basica(x){
 
}

let y 
basica(y)


// funciones multiparametros desconocidos
// recoge en un array todos los parametros

function miFuncion(...z){
    console.log('Hola' + z[0]+ z[1]+ z[2])
    console.log('Hola' + arguments[0]+ z[1]+ z[2])
}

let x = 21
miFuncion(x)
miFuncion(x,56)
miFuncion(x,56,89)


