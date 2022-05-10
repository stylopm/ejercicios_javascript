console.log('Diferencia de Arreglos y objetos');
// Arreglo []
let arreglo = [1, 2, 4, '5***'];
// Objecto {}
let discoQueen = {
    nameDisc: 'Queen',
    date: new Date('1985-02-20'),
    price: 99.9
}
let discoCerati = {
    nameDisc: 'Cerati',
    date: new Date('1995-02-20'),
    price: 99.9
}
let discoSalsa = {
    nameDisc: 'Salsa',
    date: new Date('2000-02-20'),
    price: 99.9
}
let tiendaDiscos = [
    discoQueen, 
    discoCerati, 
    discoSalsa
]

console.log(`El numero de discos son ${tiendaDiscos.length}`);
// tiendaDiscos.forEach(
//     function(disco){
//     console.log(`El disco es ${disco.nameDisc} 
//                  su precio es ${disco.price} 
//                  y fue lanzado el día ${disco.date}`);
//     }
// )
// EMC6 funciones flechas () => { cuando hay mas de una acciones operaciones }
tiendaDiscos.forEach(
    (disco, index) => 
    console.log(`El disco numero ${index + 1} es ${disco.nameDisc} 
                 su precio es ${disco.price} 
                 y fue lanzado el día ${disco.date}`)
               
)