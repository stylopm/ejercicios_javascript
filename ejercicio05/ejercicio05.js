console.log('-------');
console.log('Manipulacion de Arreglos');
console.log('------')
let arreglo = [10,20,30];
console.log(arreglo);
arreglo.push(40,50);
arreglo.push(90);
arreglo.push(60);
console.log('*******');
console.log(arreglo.length);

for(let ciclo = 0; ciclo < arreglo.length; ciclo++){
    console.log('el valor es '+ arreglo[ciclo]);
}