let discoQueen = {
    'nameDisc': 'Queen',
    'date': new Date('1985-02-20'),
    'price': 99.9,
    'tracks': ['pista_1_Queen', 'pista_2_Queen', 'pista_3_Queen']
};

let discoCerati = {
    'nameDisc': 'Cerati',
    'date': new Date('1985-02-20'),
    'price': 99.9,
    'tracks': ['pista_1_Cerati', 'pista_2_Cerati', 'pista_3_Cerati']

};
let discoSalsa = {
    'nameDisc': 'Salsa',
    'date': new Date('1985-02-20'),
    'price': 99.9,
    'tracks': ['pista_1_Salsa', 'pista_2_Salsa', 'pista_3_Salsa']
};

let tiendaDeDiscos = [discoQueen, discoCerati, discoSalsa]
let reemplazar = (arreglo, posicion, nuevoNombreDisco) => {
    arreglo[posicion].nameDisc = nuevoNombreDisco;
}
reemplazar(tiendaDeDiscos, 1, 'Test');
console.log(tiendaDeDiscos)