console.log('Hola desde el ejemplo 03');
// Ejemplo de switch
let diaSemana = 6;

switch (diaSemana) {
    //( diaSemana===1 )
    case 1:
        console.log('-----');
        console.log('Lunes');
        break;
    case 2:
        console.log('*******');
        console.log('Martes');
        break;
    case 3:
        console.log('///////');
        console.log('Miercoles');
        break;
    case 4:
        console.log('|||||||');
        console.log('Juevs');
        break;
    case 5:
        console.log('^^^^^^^');
        console.log('Viernes');
        break;
    case 6://Sabado
    case 7://Domingo
        if(diaSemana === 6){
            console.log('Es Sabado');
        } else {
            console.log('Es domingo');
        }
        console.log('día de descanso');
        break;
    default:
        console.log('Dia de la semana invalido');
        break;
}