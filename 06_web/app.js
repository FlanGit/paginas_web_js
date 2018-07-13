function saludar() {
    console.log(`Hola Mundo`)
}
function despedida() {
    console.log(`Aburrrr`)
}

function main() {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
    
    document.querySelector('#btnDespedir')
    .addEventListener('click',despedida)

}

// window.addEventListener('load', main)
document.addEventListener('DOMContentLoaded', main)

/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */