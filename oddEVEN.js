const arrayy=[1,2,3,4,5,6,7,8,9];
arrayy.filter((num)=>{
    num%2==0? console.log("Even"):console.log("odd");
});





// const evenNumbers=[];
// const oddNumbers=[];

// arrayy.filter((num)=>{
//     num%2==0? evenNumbers.push(num): oddNumbers.push(num);
// });

// //using reduce for add numbers

// const { evenSum, oddSum } = arrayy.reduce((acc, curr) => {
//     curr % 2 === 0 ? acc.evenSum += curr : acc.oddSum += curr;
//     return acc;
//   }, { evenSum: 0, oddSum: 0 }); 

// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(evenSum);
// console.log(oddSum);

// // function isArmstrong(num) {
// //     const str = num.toString();
// //     const len = str.length;
// //     let sum = 0;
// //     for (let digit of str) {
// //       sum += Math.pow(parseInt(digit), len);
// //     }
// //     return sum === num;
// //   }
  
// //   // example usage
// //   console.log(isArmstrong(153)); // true
// //   console.log(isArmstrong(371)); // true
// //   console.log(isArmstrong(9474)); // true
// //   console.log(isArmstrong(9475)); // false
  


// const nums = [1.23, 4.56, 7.89, 2.34];


// const sum = nums.reduce((acc, curr) => acc + curr, 0);
// const roundedSum = sum.toFixed(2);

// console.log(roundedSum); 
