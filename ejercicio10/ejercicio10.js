/*
Crear una variable global que sea un array y crear dos funciones:
El primero debe agregar al array la información de un libro en forma de objeto.
El segundo debe imprimir el arreglo de objetos. 
De tal forma que se puedan mandar a llamar en la consola las funciones para agregar más información al arreglo o para imprimir todos los elementos del arreglo
*/
console.log('Ejercicio de la presentación');
//Corchetes []
let infoLibros = [];
let BookOne = {
    nombre : 'El Quijote',
    autor:'Cervantes'
}
let BookTwo = {
    nombre : 'Odisea',
    autor:'Homero'
}
//Metodos o funciones
//agregarLibros()
const agregarLibros = (book)=>{
    infoLibros.push(book);
}
//Metodos o funciones
const imprimirLibros = ()=>{
    console.log(infoLibros);
}
console.log('-----------');
imprimirLibros();// arreglo vacio
agregarLibros(BookOne);
imprimirLibros();// arreglo con 1 libro
agregarLibros(BookTwo);
imprimirLibros();// arreglo con 2 libros
agregarLibros({
    nombre : 'El infierno de dante',
    autor:'Dante'
});
imprimirLibros();// arreglo con 3 libros