 let aprobadas=[50, 80, 100, 69, 70, 10]; // [80, 100, 70]

let aprobadasTwo=[90, 90, 50, 45, 100, 80]; // [90, 90, 100, 80]

  const result=  aprobadas.filter(function(notas){
      if(notas > 50 ){
          return true
      }   
});
console.log(result);
const resultado= aprobadasTwo.filter(function(notasTwo){
    if(notasTwo > 50){
        return 1
    }
})
console.log(resultado);