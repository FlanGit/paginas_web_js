function saludar() {
    console.log(`Hola Mundo`)
}
function despedida() {
    console.log(`Aburrrr`)
}
function fondoRojo() {
    console.log(`ROJO`);
    $('body').css('background', '#FF0000');
    $('h1').css('color', '#FFFFFF');

}
function fondoAzul() {
    console.log(`AZUL`);
    $('body').css('background', '#0000FF');
    $('h1').css('color', '#FFFFFF');

}


function main() {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
    
    document.querySelector('#btnDespedir')
    .addEventListener('click',despedida)


    document.querySelector('#btnRojo')
    .addEventListener('click',fondoRojo)
    
    document.querySelector('#btnAzul')
    .addEventListener('click',fondoAzul)

}

// window.addEventListener('load', main)
document.addEventListener('DOMContentLoaded', main)

/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */