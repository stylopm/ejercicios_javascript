console.log("Arreglos segunda parte");
let arreglo=[50,80,72,60,96];
console.log('antes-------');
console.log(arreglo);
///.splice(num de localizacion en la lista,0 para cuando vas a poner un numero en la loc. y recorrer el num 
///de localizacion previo en adelante y 1 para eliminar el valor en la loc. ,
/// (opcional)lo que se agregara en la posicion seleccionada)
arreglo.splice(2,1,99);
console.log('despues------');
console.log(arreglo);