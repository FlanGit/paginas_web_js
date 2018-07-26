// ---------ejemplo de localStorage--------------------------------------------------
if (localStorage.numVisitas) {
    // Existe numVisitas en localStorage
    localStorage.numVisitas++
} else {
    // No existe numVisitas en localStorage
    localStorage.numVisitas = 1
} 
console.log(' localStorage Visitas número', localStorage.numVisitas)

// ------------ejemplo de sessionStorage-----------------------------------------------
if (sessionStorage.numVisitas) {
    // Existe numVisitas en localStorage
    sessionStorage.numVisitas++
} else {
    // No existe numVisitas en localStorage
    sessionStorage.numVisitas = 1
} 
console.log(' sessionStorage Visitas número', sessionStorage.numVisitas)

// -----------------------------------------------------------
// Como sería SI FUERA SINCRONO
// data = navigator.geolocation.getCurrentPosition()
// console.log(data)

navigator.geolocation.getCurrentPosition(
     (data) => { console.log(data)},
    (error) => {console.log(error)} 
) 