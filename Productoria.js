/*Necesitamos una función productoria que reciba un array de números y devuelva su productoria. La productoria es el resultado de multiplicar todos sus elementos entre ellos.

Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.*/

function productoria(arrayDeNumeros){
  let resultado = 1;
for (i = 0; i < arrayDeNumeros.length; i++){
  let indiceArray = arrayDeNumeros[i];
     resultado = indiceArray * resultado
}
return resultado
}