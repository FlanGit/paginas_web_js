/**
 * Función saludar
 * 
 * Hola chaval -> <18
 * Hola colega -> <30
 * Buenos dias -> <70
 * Saludos, maestro
 * 
 */


function pantalla(mensaje){
        console.log( mensaje)
}
function probar(edad){
    if (edad <18){
        mensaje="Hola chaval"
    }else if(edad <30){
        mensaje="Hola colega"
    }else if(edad <70){
        mensaje="Buenos dias"
    }else {mensaje="saludo maestro"}
   
    pantalla(mensaje)
}



probar(17),
probar(19),
probar(31),
probar(70),
probar(85)