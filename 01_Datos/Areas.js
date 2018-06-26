main()

function main() {
    let radio = 2
    let circulo = calcularCirculo(radio)
    mostrar(circulo)

        radio = 3
        circulo = calcularCirculo(radio)
    mostrar(circulo) 
}

function mostrar(circulo){
   console.log(' el area del circulo es ', circulo)
}

function calcularCirculo(radio){
       let circulo
       circulo = Math.PI*radio*radio
       return circulo
        
}
