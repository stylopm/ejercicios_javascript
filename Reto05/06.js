// Crear un método que imprima en consola los números del 1 al 100 tomando en cuenta
// lo siguiente:
// ● Si el número es múltiplo de 3, imprimirá ‘Fizz’.
// ● Si el número es múltiplo de 5, imprimirá ‘Buzz’.
// ● Si el número es múltiplo de 3 y de 5, imprimirá ‘FizzBuzz’.
// ● Si el número no es múltiplo de 3 ni de 5, imprimirá el número.
// fizzbuzz();
//

// function creandoArray(inicio, final) {
//   let resultado = new Array(final);
//   for (let i = 0; i < final; i++, ++inicio) {
//     resultado[i] = i+1;
//   }
//   return resultado;
// }
// let intervalo = creandoArray(0, 9);

// console.log(intervalo);
let  inicioDeCiclo=1;
let finDeCiclo =100  ;

for (let i = inicioDeCiclo; i <= finDeCiclo; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);   
} 

  
    
