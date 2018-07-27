function app () {

    // Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnComprobar = document.querySelector("#btnComprobar")
    let domOutput = document.querySelector('#output')

    // Defino los manejadores de eventos de algunos nodos
    domBtnComprobar.addEventListener('dblclick', Comprobar)
    domBtnComprobar.addEventListener('click', Comprobar)
    
    function Comprobar(ev) {

        if (ev.type === 'dblclick') {
            domOutput.innerHTML = "DBLCLICK no se debe usar"
            return
        }

        domOutput.innerHTML = ''
        if (!!domNombre.value) {
            domOutput.innerHTML = `El Rey <strong>${domNombre.value}</strong>`
            aRey = new Array 
            aRey = domNombre.value
        } 
    }
}
document.addEventListener('DOMContentLoaded', app)


