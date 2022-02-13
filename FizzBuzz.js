    function fizzBuzz(numero){
      if (numero % 3 === 0 && numero % 5 === 0){
        return 'FizzBuzz' 
      }else if (numero % 5 === 0){
        return 'Buzz' 
      }else if (numero % 3 === 0){
        return 'Fizz' 
      }
      else{
        return'No es divisor de 3 ni de 5'
      }
    }
   console.log(fizzBuzz(15))
