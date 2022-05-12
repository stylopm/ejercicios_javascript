let calificaciones = [50, 60, 70, 80, 90];
const result = function(calificaciones){
    let suma = 0;
    calificaciones.forEach(
    function(calificacion) {
            suma = suma + calificacion;
        }
    )
 let promedio = suma / calificaciones.length;
 if (promedio>=70 ){
     console.log("Aprobo->"+promedio);
 } else {
     console.log("Reprobo->"+promedio)
 }
}

result(calificaciones);
