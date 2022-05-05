console.log('------');
console.log('Manipulación de Arreglos');
console.log('-----');
let arreglo = [10, 20, 30];
// push metodo que agrega un nuevo elemento al arreglo al
// final del mismo
arreglo.push(50);
arreglo.push(60);
arreglo.push(70);
console.log('********');
console.log(arreglo);
console.log('--------');
// length nos trae el tamaño de nuestro arreglo
// nos trea el numero de posiciones que tiene el arreglo
for(let ciclo = 0; ciclo < arreglo.length; ciclo++){
    console.log( 'El valor es ->'+arreglo[ciclo]);
}
///// Metodos o funciones 
//    sinonimo de acciones