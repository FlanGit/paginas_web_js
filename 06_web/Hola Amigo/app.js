function app () {
 
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector('#output')

    domNombre.addEventListener('input', leerDatos)
  domNombre.addEventListener('change', detectarChange ) 
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)

    function leerDatos() {
        console.log('Input detectado', domNombre.value )

        domOutput.innerHTML=`Hola, <strong>${domNombre.value}</strong>`

    }
    function detectarChange(){
    console.log('Changedetectado', domNombre.value)

    } 
    function saludar() {
        console.log('Hola amigo')
    }

    function borrar () {
        console.log('Aun no se borrar');
    }

}
document.addEventListener('DOMContentLoaded', app)