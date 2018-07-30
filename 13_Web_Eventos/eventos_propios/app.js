function main() {

    document.querySelector('#btnPulsar')
        .addEventListener('click', pulsar)

    document.querySelector('main')
        .addEventListener('escribir', escribir)

        // bubbles, hace que el evento creado pueda burbujear y asi el padre puede hacer el evento
        // aqui el boton le dice al padre que lanze el evento escribir es decir que escriba el padre.
    function pulsar(oEv) {
        console.dir(oEv.target)
        oEv.target.dispatchEvent(new Event('escribir', {
            'bubbles': true,
          }))
    }
 
    function escribir(oEv) {
        console.dir(oEv)
        document.querySelector('#output').innerHTML = 
            "He recibido un evento 'escribir'"
    }
}


document.addEventListener('DOMContentLoaded', main)