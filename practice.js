// //armstrong 

// let armstrong = (num) => {
//     let sum = 0
//     let str = num.toString().split('');
//     let multiply = str.map((item) => item * item * item);
//     for (let i = 0; i < multiply.length; i++) {
//         sum = sum + multiply[i]
//     }
//     console.log((sum === num) ? "ARMSTRONG" : "NOT ARMSTRONG")
// }
// armstrong(153)

// //palindrome                12321=> 12321
// let palindrome = (num) => {

//     let output = []
//     let str = num.toString().split('');
//     console.log(str);
//     for (let i = str.length - 1; i >= 0; i--) {
//         output.push(str[i]);
//     }
//     let outputString = Number(output.join(''));
//     console.log(outputString == num ? "PALINDROME" : "NOT PALINDROME");
// }
// palindrome(12321)



// //sorting ascding and descending both

// let sorting = (num) => {

//     for (let i = 0; i < num.length; i++) {
//         let x
//         for (let j = i + 1; j < num.length; j++) {
//             if (num[i] > num[j]) {
//                 x = num[i];
//                 num[i] = num[j]
//                 num[j] = x
//             }
//         }

//     }
//     return num;
// }
// console.log(sorting([1, 2, 3, 1, 5, 3, 44, 12, 32, 11]))



// // print only unique numbers in duplicate array

// let uniqueValue = (num) => {

//     nonduplicasee = []
//     duplicasee = []


//     for (let i = 0; i < num.length; i++) {
//         isDuplicate = false
//         for (let j = 0; j < num.length; j++) {
//             if (i != j && num[i] === num[j]) {
//                 isDuplicate = true;
//                 nonduplicasee.push(num[i])
//                 // console.log(num[i])
//                 break;

//             }
//         }
//         if (!isDuplicate) {
//             duplicasee.push(num[i])
//         }
//     }
//     console.log(duplicasee)
//     return nonduplicasee


// }

// console.log(uniqueValue([1, 1, 2, 2, 3, 4, 1, 1, 1, 1, 5, 6, 99, 7]));

//star 1 22 333 4444 55555 1 212 32123 4321234

// let pyra = (num) => {





//     return num;
// }
// console.log(pyra([5]))
// let num = 5;
// let rows = " ";
// let count=1;    
// for (let i = 0; i<num; i++) {
  
// //   rows+=" "
//     for (let j = 1; j < num-i; j++) {
//         rows +=""
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         rows += count
//         count++;
//     }
//     rows+=" \n "
// }
//     console.log(rows)



let minMax=(num)=>{

    minValue = Math.max(...num);

    return minValue;
}
console.log(minMax([1,2,3,4,5,1,2,3,88,111,11]))

