//Escribí una función factorial, la misma debe recibir un número y calcular el factorial del mismo.

//El factorial de un número n es el resultado de multiplicar todos los números enteros positivos menores o iguales que n.

function factorial(numero){
  let calculo = 1;
 for(i=1; i <= numero; i++){
     calculo = i * calculo 
  }
  return calculo
}
