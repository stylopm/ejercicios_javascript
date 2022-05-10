console.log("EjemploFilter");
let arreglo=[50,80,40,72,60,96];
console.log(arreglo);
let arregloDos = arreglo.filter(
    function(value,index){
        return(value>70 || index===2);
    }
)
 console.log("----->");
 console.log(arregloDos);
