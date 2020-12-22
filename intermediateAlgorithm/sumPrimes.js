function sumPrimes(num) {
  let result = 0;

  function isPrime(number) {
    for(var i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number > 1;
  }

  for (let x = 1; x <= num; x++){
    if(isPrime(x)){
      result = result + x
    }
  }
    
  return result;
}

console.log(sumPrimes(4))