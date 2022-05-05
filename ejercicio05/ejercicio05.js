console.log('Arreglos')

var x = [];

//push Agregamos un elementos al final del arreglo


x.push(1);
x.push(2);
x.push(3);
x.push(4);
// x[3] = 34;
//pop Elimina el último elemento del arreglo
//x.pop(1);
// unshift(valor) -> Agregar un elemento al inicio del arregl
//x.unshift(5);
//shift()-> Elimina un elemento al inicio del arreglo
//x.shift();
//splice(posición, cuantos?, elementos?) -> Agrega o elimina un elemento indicando una posición 
x.splice(1, 2, 99)

console.log(x);

// console.log(x);
// console.log(x.length);

// for (let i = 0; i < x.length; i++) {
//     console.log("El valor es " + x[i])
// } 

// //El método forEach() ejecuta la función indicada una vez por cada elemento del array.
// x.forEach(
//     element => console.log("Desde el foreach "+element)
// );

// x.forEach(
//     function(element){
//         console.log("Desde el foreach "+element)
//     }
// );

// //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// const roots = x.map(function(num) {
//     return Math.sqrt(num);
// });


// console.log(roots);

// // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// // El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);