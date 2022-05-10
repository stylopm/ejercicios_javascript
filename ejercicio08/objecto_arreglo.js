console.log('Diferencia de Arreglos y objetos');
// Arreglo []
let arreglo = [1, 2, 4, '5***'];
// Objecto {}
let discoQueen = {
    nameDisc: 'Queen',
    date: new Date('1985-02-20'),
    price: 99.9,
    tracks: ['pista_1_Queen', 'pista_2_Queen', 'pista_3_Queen' ]
}
let discoCerati = {
    nameDisc: 'Cerati',
    date: new Date('1995-02-20'),
    price: 99.9,
    tracks: ['pista_1_Cerati', 'pista_2_Cerati', 'pista_3_Cerati' ]
}
let discoSalsa = {
    nameDisc: 'Salsa',
    date: new Date('2000-02-20'),
    price: 99.9,
    tracks: ['pista_1_Salsa', 'pista_2_Salsa', 'pista_3_Salsa' ]
}
let tiendaDiscos = [
    discoQueen, 
    discoCerati, 
    discoSalsa
]

console.log(`El numero de discos son ${tiendaDiscos.length}`);
// EMC6 funciones flechas () => { cuando hay mas de una acciones operaciones }
tiendaDiscos.forEach(
    (disco, index) => {
        console.log(`El disco número ${index + 1} es ${disco.nameDisc}`)
        disco.tracks.forEach(
            (pista) => console.log(pista)
        )
    }               
)