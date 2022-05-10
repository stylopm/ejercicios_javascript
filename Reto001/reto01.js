/* Mostrar todos los números impares que hay entre dos números.impares(2, 10) /3, 5, 7, 9 */
var num1 = parseInt(prompt("Introduzca el primer número"));
var num2 = parseInt(prompt("Introduzca el segundo número"));
 
console.log("Los números impares que existen entre " + num1 + " y " + num2 + " son: ");
 
 
for (var i = num1; i < num2; i++) {
    if (i % 2 != 0) {
        console.log(+i);
    }
}