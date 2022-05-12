let juegos = []

let juego = {
    juego1 : {
    name:'One Piece',
    Dev: 'Bandai'
},
    juego2: {
        name: 'Elden Ring',
        Dev: 'FromSoftware'
    }
}
 const agregrarjuegos=(element)=>{
     juegos.push(element);
 }
const descargarjuego = ()=>{
    console.log(juegos)
}
console.log('--------');
descargarjuego();
agregrarjuegos(juego);
descargarjuego();
agregrarjuegos({
    name: 'Pokemon Go',
    dev: 'Niantic'
})
descargarjuego();



