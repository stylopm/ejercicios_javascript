console.log("EjemploForEach");
let arreglo=[50,80,72,60,96];
let arregloDos=['juan','pedro',32,true]

arregloDos.forEach(
    function(Element,index){
        if(index === 0){
    console.log( 'El valor es '+Element);
    }
}
);