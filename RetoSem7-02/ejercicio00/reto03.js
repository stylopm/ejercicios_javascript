let addElement = (arreglo, element, maxSize) => {
    let found = arreglo.find(numero => numero === element);
    console.log(found);
    if (arreglo.length < maxSize && found === undefined) {
        console.log('caso 1');
        arreglo.push(element);
    } else if (arreglo.length >= maxSize && found === undefined) {
        console.log('caso 2');
        arreglo[arreglo.length - 1] = element;
    } else if ((arreglo.length >= maxSize) && (found != undefined)) {
        console.log('caso 3');
        arreglo.splice(arreglo.indexOf(element), 1);
        arreglo.push(element);
    } else {console.log('ningun escenario cumplido')}
}

arreglo = [23, 6, 86, 9, 0, 12];

addElement(arreglo, 2, 5);

console.log(arreglo);