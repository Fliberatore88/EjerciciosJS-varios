/*Necesitamos una función masMenos que reciba un array y devuelva otro con los siguientes tres números:

En la primera posición, la fracción de números que son positivos
En la segunda posición, la fracción de números que son cero
En la última posición, la fracción de números que son negativos
Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que hay 50% de positivos, 25% de ceros, y 25% de negativos.*/

function masMenos(unArray){
  let arrayCalculo = []
  let numerosPositivos = 0
  let numerosCero = 0
  let numerosNegativos = 0
  for (i=0; i < unArray.length; i++){
      let indexDelArray = unArray[i]
      if (indexDelArray > 0){
        numerosPositivos = numerosPositivos + 1
         }else if (indexDelArray === 0){
           numerosCero = numerosCero + 1
         }else if (indexDelArray < 0){
           numerosNegativos = numerosNegativos + 1
         }
}
arrayCalculo.push(numerosPositivos / unArray.length)
arrayCalculo.push(numerosCero / unArray.length)
arrayCalculo.push(numerosNegativos / unArray.length)
return arrayCalculo
}