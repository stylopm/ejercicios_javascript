/*
Crear un método que permita agregar un nuevo valor 
a un objeto global y si ya existe esa propiedad, 
imprima un mensaje de que ya existe. Si no, que agregue la propiedad.
*/
console.log('Agregar un elemento a mi objecto');
//Variables globales
let saludos = {
    saludo: 'Hola!',
    despedida: 'Adiós!'
}
let respuesta_A = "Soy otra respuesta"
// (parametros)
const agregarNuevoValor = (variableObj, indice, valor) => {
    //variables locales
    if(variableObj.hasOwnProperty(indice)){
        console.log('Ya existe');
    } else {
        console.log('No existe');
        variableObj[indice] = valor;
        console.log(variableObj)
    }
}
//Invocar la nueva funcion llamada agregarNuevoValor
agregarNuevoValor(saludos, 'adios', 5891);
agregarNuevoValor(saludos, 'adios', 5891);
