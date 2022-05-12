console.log('Agregar un elemento a mi objeto');
let saludos= {
    saludo: 'Hola',
    despedida: 'adios'
}

const agregarNuevoValor = (variableobj,indice,valor) => {
    
    if (!variableobj.hasOwnProperty(indice)){
        variableobj[indice] = valor;
    } else {
        console.log('Ya existe');
    }
}
 agregarNuevoValor(saludos, 'adios', 5891);
