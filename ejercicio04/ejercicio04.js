console.log('Ejemplos de ciclo For');
let inicio = 1;
let fin = 10;
let stop = 5;

for (let ciclos = inicio; ciclos <= fin; ciclos++){
    console.log('numero es igual a ' + ciclos);
    if (ciclos === stop ){ break; }
}
const multiplicacion = function(tabla, number) {
    return tabla * number;
}

let cicloDos = 1;
while (cicloDos <= 10) {
    console.log('El ciclo es ' + cicloDos);
    // cicloDos++;
    cicloDos = cicloDos+1;
}
/////////////////////////////////////////
// funciones
console.log( 'Invocación de funciones '  );
console.log( multiplicacion(45, 9)  );
console.log( '-----------------'  );
////////////////////////////////////////////
///
let inicioTabla = 20;
let finTabla = 30;
let tablaRecorrido = 5;
for (let ciclos = inicioTabla; ciclos <= finTabla; ciclos++){
    console.log( tablaRecorrido+"*"+ciclos+"="+multiplicacion(tablaRecorrido, ciclos));
}


let lado = 5;
const areaCuadrado = function(lado){
    return lado * lado;
}
console.log('el area del cuadrado es ' + areaCuadrado(lado));