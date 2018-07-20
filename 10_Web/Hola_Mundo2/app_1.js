function main() {
    let amigo ="Pepe"
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)

    document.querySelector('#btnDespedir').addEventListener('click', despedir)

    console.log(`Hola01 ${amigo}`)

    function saludar() {
        console.log(`Hola ${amigo}`)
    }
    function despedir() {
        console.log(`Aburr  ${amigo}`)
    }

}

(function () {
    window.addEventListener('load', main)
})()



