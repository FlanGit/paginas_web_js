function saludar() {
    console.log(`Hola Mundo`)
}
function despedida() {
    console.log(`Aburrrr`)
}

function main() {
    //buscar selector
    let oBtnSaludar = document.querySelector('#btnSaludar')
    let oBtnDespedir = document.querySelector('#btnDespedir')
    
    oBtnSaludar.addEventListener('click',saludar)
    oBtnDespedir.addEventListener('click',despedida)

}

// window.addEventListener('load', main)
document.addEventListener('DOMContentLoaded', main)

/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */