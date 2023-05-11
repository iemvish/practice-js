function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function findPrimesInRange(start, end) {
    if (start < 2) {
      start = 2;
    }
    
    let primes = [];
    
    // Loop through all the numbers in the range
    for (let i = start; i <= end; i++) {
      // Check if the current number is prime using the isPrime function
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
    return primes;
  }
  
  // Example usage
  console.log(findPrimesInRange(1, 20)); 
  