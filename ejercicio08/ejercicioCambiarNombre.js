
var discoPop = {
    nameDisc: 'Pop',
    date: new Date ('1997-03-01'),
    price: 1000,
    tracks: ['pista_1_Pop','pista_2_Pop','pista_3_Pop']
}

var discoMetal = {
    nameDisc: 'Metal',
    date: new Date ('2000-04-21'),
    price: 1000,
    tracks: ['pista_1_Metal','pista_2_Metal','pista_3_Metal']
}

var discoSalsa = {
    nameDisc: 'Salsa',
    date: new Date ('1990-11-11'),
    price: 1000,
    tracks: ['pista_1_Salsa','pista_2_Salsa','pista_3_Salsa']
}

// Crear una funcion que me cambie el valor del nombre
// del cualquier disco que yo quiera en mi arreglo

/* cambiarNombre(posicionArreglo, nuevoNombreDisco);
// Crear una funcion que me cambie el valor del nombre
// del cualquier disco que yo quiera en mi arreglo

 */
let tiendDiscos = [discoPop,discoMetal, discoSalsa];
let posicionArreglo = parseInt(prompt('¿Qué disco quieres modificar su nombre?'));
let nuevoNombreDisco = prompt('¿Qué nombre le quieres poner?'); 

// posicionArreglo = Number (posicionArreglo);

const cambiarNombre =  (positionDisc, nuevoNombreDisco) => {
    tiendDiscos.forEach(
        (disco,index)=>{
            if(positionDisc === index){
                disco.nameDisc = nuevoNombreDisco;
                console.log(disco);
            }
        }   
    )
}
cambiarNombre(posicionArreglo, nuevoNombreDisco);
console.log(tiendDiscos);

/* tiendDiscos.forEach(
    (disco,index)=>{
        let {nameDisc, date, price, tracks}= disco;
        console.log(`El disco numero ${index + 1}  ${nameDisc}`);
        tracks.forEach(
            (pista) => console.log(pista)
        )
    }   
)
 */
