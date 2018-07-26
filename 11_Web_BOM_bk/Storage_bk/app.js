if (localStorage.numVisitas) {
    // Existe numVisitas en localStorage
    localStorage.numVisitas++
} else {
    // No existe numVisitas en localStorage
    localStorage.numVisitas = 1
} 
console.log('Visita número', localStorage.numVisitas)

<<<<<<< HEAD
/* De esta manera  no se puede hacer ya que no devuelve nada por ser muy rapido
Esto seria si fuera SINCRONO
    data = navigator.geolocation.getCurrentPosition()
    console.log(data) */

=======
// Como sería SI FUERA SINCRONO
// data = navigator.geolocation.getCurrentPosition()
// console.log(data)
>>>>>>> b8e2a22940da7b6b758a9a4399f40f16e59b7ad9

navigator.geolocation.getCurrentPosition(
     (data) => { console.log(data)},
    (error) => {console.log(error)} 
) 