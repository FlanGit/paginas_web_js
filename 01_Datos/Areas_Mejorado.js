function calcularCirculo(radio) {
    return Math.PI*radio*radio
}

function calcularCircunf(diametro) {
    return Math.PI*diametro
}


function mostrarCirculo(radio, circulo) {
    /*  let mensaje = 'El area del circulo de radio '
     mensaje += radio
     mensaje += ' es '
     mensaje += circulo */
     let mensaje = `
     Resultado: 
     El area del circulo de radio ${radio} es ${circulo}`
     console.log(mensaje)
 }
 function mostrarCircunf(diametro, circunferencia) {
     let mensaje = `
     Resultado: 
     El area de la circunferencia con diametro ${diametro} es ${circunferencia}`
     console.log(mensaje)
 }


function main() {
    let radio = 3
    let diametro = radio * 2

    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(diametro, calcularCircunf(diametro))
    radio = 7


    diametro = radio * 2
    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(diametro))      
}

main()