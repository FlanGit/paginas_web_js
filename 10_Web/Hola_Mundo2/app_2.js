function main() {
    
   let oBtnSaludar= document.querySelector('#btnSaludar')
   let oBtnDespedir=document.querySelector('#btnDespedir')

   oBtnSaludar.addEventListener('click',saludar)
   oBtnDespedir.addEventListener('click', despedir)

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



