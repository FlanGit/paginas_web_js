function main(){
    /** Definir los nodos del DOM(Modelo de Objeto del Documento)
      DOM es la representacion en forma de objeto javascript 
     de la estructura de html.
     */
    // Creamos el nodo del DOM (DOM es el conjunto de todos los nodos)
    let domNombre = document.querySelector('#nombre')



    // definir los manejadores de eventos

}



// Espera a que carge primero el DOM documeto
// Se queda vigilando al documento, 
// tiene dos parametros qué evento a vigilar que es 'DOMContentLoaded'
// y que funcion a disparar que la llamamos "main"  
document.addEventListener('DOMContentLoaded', main)