console.log('Ejemplo Filter');
let arreglo=[50,80,40,60,96];
console.log(arreglo);
let arregloDos = arreglo.filter(
    function(value, index){
        //and && or || 
        return (value > 50 || index === 2);
    }
)
console.log('--->');
console.log(arregloDos);