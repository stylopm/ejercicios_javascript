let discoqueen= {
    namedisc: 'queen',
    date: new Date('1985-02-20'),
    price: 99.99,
    tracks: ['pista_1_queen,pista_2_queen,pista_3_queen']
}

let discocerati= {
    namedisc: 'cerati',
    date: new Date('1985-02-20'),
    price: 99.99,
    tracks: ['pista_1_cerati,pista_2_cerati,pista_3_cerati']
}

let discosalsa= {
    namedisc: 'salsa',
    date: new Date('1985-02-20'),
    price: 99.99,
    tracks: ['pista_1_salsa,pista_2_salsa,pista_3_salsa']
}
let tiendadiscos= [discocerati,discoqueen,discosalsa]
console.log('-------');
console.log(tiendadiscos);
tiendadiscos.forEach(
    function(element){
    console.log('El nombre del disco es ' + element.namedisc);
    console.log('La fecha del disco ' + element.date);
    console.log('El precio del disco es ' + element.price);
    element.tracks.forEach(
        function(track){
            console.log('las pistas son: ' + track)
        }
    )
}
)

///funciones flecha
tiendadiscos.forEach(
    (element) => {
    console.log('El nombre del disco es ' + element.namedisc);
    console.log('La fecha del disco ' + element.date);
    console.log('El precio del disco es ' + element.price);
}
)