console.log('Hola desde el ejemplo 03');
// Ejemplo de switch
let diaSemana = 1;
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
        // ? = if     
        // : = else
        (diaSemana === 6) ? console.log('Es sabado') : console.log('Es domingo') ;
        // if(diaSemana === 6){
        //     console.log('--------------');
        //     console.log('Es Sabado');
        //     console.log('--------------');
        // } else {
        //     console.log('--------------');
        //     console.log('Es domingo');
        //     console.log('--------------');
        // }
        console.log('día de descanso');
        break;
    default:
        console.log('Dia de la semana invalido');
        break;
}