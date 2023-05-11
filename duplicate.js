// // let arr = ['A', 'A', 'A', 'A', 'A']

// // console.log(
// //   arr.fill('B', 1, 4)
// // )

// // // 

// // const a=("jsdfbdsjfb")

// // // console.log(a.split(''))
// // console.log(Object.assign({},a))

// // let a=20.6
// // b=30.05
// // // console.log(parseFloat(a)+ parseInt(b))
// // // console.log(a+b)
// // console.log(Math.ceil(a)+ Math.ceil(b))

// var secTime = 60;
// var computeMinutes = Math.floor(secTime/60);
// var result = secTime % 60;
// console.log("The converted minutes are:", computeMinutes + " minutes " + result + " seconds.")


// let a,b
// function findminutes(seconds){

//     a= Math.floor(seconds/60);
//     b=seconds % 60

//     console.log(a)
//     console.log(b)


// }
// findminutes(100)



// function to check if a number is an Armstrong number
function isArmstrong(num) {
  let sum = 0;
  const str = num.toString();
  const len = str.length;

  // iterate over each digit of the number
  for (let i = 0; i < len; i++) {
    const digit = parseInt(str[i]);
    sum += Math.pow(digit, len);
  }

  // check if the sum of the cubes of digits is equal to the original number
  return sum === num;
}

// example usage
console.log(isArmstrong(153)); // true
console.log(isArmstrong(370)); // true
console.log(isArmstrong(371)); // true
console.log(isArmstrong(407)); // true
console.log(isArmstrong(1634)); // true
console.log(isArmstrong(8208)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(9475)); // false
