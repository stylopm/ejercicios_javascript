console.log("Arreglos segunda parte");
let arreglo=[50,80,72,60,96];
console.log('Antes--------------');
console.log(arreglo);
// Eliminar la posicion 2
//arreglo.splice(2,1);
// No eliminar y colocar un nuevo valor
// arreglo.splice(2,0,99);
// Si eliminar y colocar un nuevo valor
arreglo.splice(2,1,99);
console.log('Despues--------------');
console.log(arreglo);