/*Resulta que cuando hay que presentar ganancias mayores a $ 1.000 no se presentan junto con las rendiciones que veníamos haciendo, por lo cual vamos a necesitar darle una vuelta de tuerca mas a nuestra función de Sumatorias.
Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $ 1.000*/

function sumatoriaBajoImporte(unArray){
  let acumulatorio = 0
  for (i=0; i < unArray.length; i++){
      let indiceArray = unArray[i]
      if (indiceArray > 0 && indiceArray <= 1000){
          acumulatorio = acumulatorio + indiceArray
      }
  }
  return acumulatorio
  }