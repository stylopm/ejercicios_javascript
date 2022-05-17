/* Crear un arreglo con objetos yd eterminar si existe un valor determinado en las propiedades
de los objeto */

//Se declara el arreglo y se guardan los mangas en el arreglo
let infoMangas = [
    {nombre: 'Dragon Ball Super', autor: 'Akira Toriyama'},
    {nombre: 'Shingeki no kyojin', autor: 'Hajime Isayama'},
    {nombre: 'Naruto', autor: 'Masashi Kishimoto'},
    {nombre: 'Yugioh', autor: 'Kazuki Takahashi, Akira Itō'},
];
//Se declara la funcion/metodo para ver si el valor de un objeto ya existe dentro de un arreglo
const busquedaObjeto = (infoMangas, datoBuscador) =>{
    //Para saber si existe el valor de un objeto dentro de un array declaro un objeto y con el metodo
    //.find le digo que vaor es el que quiero que encuentre
    let manga = infoMangas.find(manga=> manga.nombre === datoBuscador ||
        manga.autor === datoBuscador);
    if(manga != null){
        console.log(`Si existen los datos del autor: ${manga.nombre} y su obra ${manga.autor}`);
    }else{
        console.log(`No existen los datos de dicho manga/mangaka`);
    }
}

busquedaObjeto(infoMangas, 'Hajime Isayama');

