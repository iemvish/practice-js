// function sumAllPrimes(num) {
//     let total = 0;
  
//     function checkForPrime(i) {
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     for (let i = 2; i <= num; i++) {
//       if (checkForPrime(i)) {
//         total += i;
//       }
//     }
//     console.table (total);
//   }
//   sumAllPrimes(30)

console.table("Prime number from 10 to 30")
for (var i = 2; i <= 30; i++) {                           
      var notPrime = false;
      for (var j = 2; j <= i/2; j++) {
          if (i%j===0) {
              notPrime = true;
          }
      }
      if (notPrime === false) {
                  console.table(i);
      }
  }


//   let primeNumber = (num) => {

//     if (num == 1) {
//         console.log(`${num} is not a prime number not composite number`)

//     }
//     else if (num < 1) {
//         console.log(`${num} is not a prime number`)
//     }
//     else {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 var res = (`${num} is not prime number`)
//                 break;
//             }
//             else {
//                 var res = (`${num} is prime number`)
//             }
//         }
//         console.log(res)

//     }
// }
// primeNumber(105);