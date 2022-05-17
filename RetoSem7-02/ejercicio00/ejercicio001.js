/* Crear un método que reciba como parámetros un arreglo de números, un número para agregarlo al arreglo y un tamaño máximo del arreglo:
addElement(array, element, masSize)
Se debe considerar lo siguiente:

Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, agregar al nuevo elemento al final.addElement([1,2,3,4], 10, 5) [1,2,3,4,10]
Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, el nuevo elemento debe reemplazar el último elemento del arreglo.addElement([1,2,3,4], 10, 4) [1,2,3,10]
Si el elemento ya existe en el arreglo, se debe desplazar el elemento del arreglo al final.addElement([1,2,3,4], 2, 5) // [1,3,4,2] */

//Se declaran las variables
let arrayNumbers = [1, 2, 3, 4];
let addNumber = 0;
let masSize = 0;
const addElement = (arrayNumbers, addNumber, masSize) => {
  //Se crea una lista teniendo como maximo la variable massSize

  for (let i = arrayNumbers.length; i < masSize; i++) {
   
    if (arrayNumbers.indexOf(addNumber) === -1) {
      //Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, agregar al nuevo elemento al final.addElement([1,2,3,4], 10, 5) [1,2,3,4,10]
      if (i < masSize) {
        arrayNumbers.push(addNumber);
      }
    } //Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, el nuevo elemento debe reemplazar el último elemento del arreglo.addElement([1,2,3,4], 10, 4) [1,2,3,10]
    else if (arrayNumbers.indexOf(addNumber) > -1) {
        // Si el elemento ya existe en el arreglo, se debe desplazar el elemento del arreglo al final.addElement([1,2,3,4], 2, 5) // [1,3,4,2] 
      if (i === masSize) {
        arrayNumbers.splice(masSize, addNumber);
      }
    }
  }

  console.log(arrayNumbers);
};
// masSize =  Number(prompt('¿Cúantos números quieres que tenga tu lista?'));
// addNumber =  Number(prompt('¿Qué número deseas agregar a tu lista?'));
masSize = 8;
addNumber = 10;
addElement(arrayNumbers, addNumber, masSize);
// verPaddElementares(arrayNumbers, addNumber, masSize);
