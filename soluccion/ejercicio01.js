let objeto = {
    saludo: "Hola!",
    despedida: "Adiós!",
}

const agregarNuevoValor = (objetoFuncion, indice, valor) => {
    if (!objetoFuncion.hasOwnProperty(indice)) {
        objetoFuncion[indice] = valor;
        console.log(objetoFuncion);
    } else {
        console.log('ya existe este index');
    }
}

agregarNuevoValor(objeto, 'despedida', 'Este es el valor');