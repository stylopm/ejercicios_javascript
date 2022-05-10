 let ordenar=[1, 2, 45, 5, 6, 3, 1, 8]; // [1, 1, 2, 3, 5, 6, 8, 45]
 let ordenartow=[100, 5, 5, 8, 3, 7, 8]; // [3, 5, 5, 7, 8, 8, 100]

 const result=ordenar.sort(function (firt,second){
     if (firt > second){
         return 1
     }else {
       return -1
     }
 })

 console.log(result)
/////

 const resultadoTwo=ordenartow.sort((a,b) => a-b )

 console.log(resultadoTwo)
 