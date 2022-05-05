console.log("Ejemplo forEach");
let arreglo=[50,80,72,60,96];
let arregloDos=['Hola','Juan',60,true];
let arregloTres=['a','b','c'];

//forEach es un metodo que recorre mi arreglo como si fue un for 

arregloDos.forEach(
    function(value, index, array){
        console.log('El valor del elemento es '+ value+ ' el indice es '+ index+ '---->'+array);
    }
);