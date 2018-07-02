/**
 * 
 * @param 'Dia de la semana' y  'hora'
 * @return mensaje--> Es "dia" y son las "hora", levantate
 * @return mensaje--> Es "dia" y son las "hora", estas tarde
 * @return mensaje--> Es "dia" y son las "hora", ya no vayas al curso
 * @return mensaje--> Es "dia" y son las "hora", es fin de semana *  * 
 */

 function prepara(dia, hora){
            switch (dia) {
                case '1':
                mensaje='Hoy es Lunes'
                break;
                case '2':
                mensaje='Hoy es martes'
                break;
                case '3':
                mensaje='Hoy es miercoles'
                break;
                case '4':
                mensaje='Hoy es Jueves'
                break;
                case '5':
                mensaje='Hoy es Viernes'
                break;
                case '6':
                mensaje='Hoy es Sabado'
                break;
                case '7':
                mensaje='Hoy es Domingo'
                break;
            
                default:
                    mensaje='Error de dia'
                    break;
            }
            
 }