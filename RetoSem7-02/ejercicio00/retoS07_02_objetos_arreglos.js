/* 2.Determinar si un elemento existe dentro de un array.
busquedaArray([1, ‘hola’, ‘adiós’, 4, 100], ‘hola’) // Se encontró el elemento */

 const contenidos = [ 1, 'hola', 'adios', 4, 100];

   
    contenidos.find ( function (encuentra) {
        if (encuentra === 4 ){
            console.log ('se encontro')
        }

    })