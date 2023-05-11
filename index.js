// // let name = "shivani"
// // String.prototype.lengthh = function (){
// // return this.length+1
// // }
// // let users = {
// //     getFullName : function (){
// //         return this.name+" "+this.lastName
// //      },
// //      getAge : function(){
// //         let age = new Date().getFullYear()-this.birth
// //         return age
// //     }
// // }

// const M = require("minimatch")

// // let student = {
// //     name : 'shivani',
// //     lastName: 'sharma',
// //     birth : 2000,
// //     // getAge: users.getAge
// //   }

// //   let teacher = {
// //     name : 'vishal',
// //     lastName: 'kumar',
// //     birth : 1999,
// //   }

// //   student.__proto__ = users
// // //   teacher.__proto__ = users

// // //   console.log(student)
// // //   console.log(teacher.getAge())


// let fnum = 2345
// result = 0
// while(fnum>0){
//     getlastnumber = fnum%10
//     result = result * 10 + getlastnumber
//     fnum = Math.floor(fnum / 10)
// }
// console.log(result)

// // let mynam = "mynameisshiavanisharma"
// // let count = 4
// // let store =""
// // for(let i=0 ; i<mynam.length; i++){
// //     store += mynam[i]
// //     if(i == count){
// //         store += " "
// //         count += 5
// //     }

// // }
// // console.log(store)

// // let arr= [1,7,98,5,43,200,41,88]
// // let sortarr = arr.sort(function(a, b){return b - a})
// // let maxnum = Math.max(...sortarr)
// // maxnum += 1
// // let maxindex = arr.indexOf(maxnum)
// // console.log(maxnum)

// // function findMaxNumber(arrayName,position){
// //     let maxnum
// //     let sortarr = arrayName.sort(function(a, b){return b - a})
// //     console.log("Array after sort: "+sortarr)
// //     maxnum = Math.max(...sortarr)
// //     for(let i=0; i<sortarr.length-1; i++){
// //         if(maxnum == sortarr[i])
// //         {
// //           console.log("Your "+position+" maximum number in array is: "+sortarr[i+position-1])
// //         }
// //     }

// // }
// // findMaxNumber(arr,1)

// // let arr = [1,2,0,2,4,0,4,2,0,1,5]
// // let store = []
// // const duplicated =[]
// // for(let i=0; i<arr.length; i++){
// //     if(store.includes(arr[i])){
// //         if(!duplicated.includes(arr[i]))
// //        duplicated.push(arr[i])
// //     }
// //    store.push(arr[i])

// // }
// // console.log(duplicated)


// // let arr = [2, 3, 4, 0, 0, 5, 4, 3, 2];
// //     let count = [];
// //     for (let num of arr) {
// //       if (num in count) {
// //         count[num] += 1;
// //       } else {
// //         count[num] = 1;
// //       }
// //     }
// //     for (let num in count) {
// //       if (count[num] === 1) {
// //         console.log(parseInt(num))
// //       }
// //     }
// //  return null; // if no unique number is found

// // let arr = ["apple","orange","kapil","vishal","newyork","maharastra","delhi"]
// // let max = arr[0];
// // let j=0;
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i].length > max.length){
// //         max=arr[i];
// //         j=i;
// //     }
// // }
// // console.log(max,j);

// // const sweetArray = [2, 3, 4, 5, 35]
// // // const sweeterArray = sweetArray.map(sweetItem => {
// // //     return sweetItem * 2
// // // })
// // const sweeterArray = sweetArray.filter(item =>{
// //          return item > 3
// // })

// // console.log(sweeterArray)

// // let arr = [1,9999,2,3,654,1000,66]
// // let res = arr.reduce(function (accumulator,currentValue,currentIndex,arr){
// //     if (currentValue > arr[accumulator]) {
// //         return currentIndex;
// //       } else {
// //         return accumulator;
// //       }
// // },0)
// // console.log(res)

// // let arr = [11,2,3,4]
// // let res = arr.reduce(function(acc,curV){
// //       return acc += curV
// // },2)
// // console.log(res)

// // check it palindrom or not

// // function palindrome(str){
// //       const splitvalue=str.toString().split('');
// //       console.log(splitvalue)
// //       const revalue=splitvalue.reverse();
// //       const joinvalue=revalue.join("");
// //       if(str == joinvalue){
// //           console.log("it is palidrome");
// //       }
// //       else{
// //           console.log("it is not palidrome");
// //       }
// //       }
// //       palindrome(123);

// // find length of last string
// // const str=" this is a ffmoggggon           ";
// // function findLen(value){
// //     let splitvalue=str.trim().split(' ').pop();
// //     console.log(splitvalue)
// //     console.log(splitvalue.length)
// // }
// // findLen(str)


// const Person = {
//       firstName: "vishal",
//       lastName: "kumar",
//       age: 24,
//       Address: "Mandi"
// }

// // function isPrime(n) {
// //       if(n<30){
// //             for (let j = 2; j <= 30; j++) {
// //                   for (let i = 2; i <= n; i++) { 
// //                     if(n % i === 0){
// //                     return "is Prime number"; }

// //                   else{
// //                   return "not a prime number"; }
// //                    } }
// //       }
// //       else{
// //             console.log("please enter  between 2 to 30")
// //       }

// //   }
// //   console.log(isPrime(10))
// // let arr = [1,3,5,6,7,9,10]
// // function findIndex(num){
// //       for(let i=0; i<arr.length; i++){
// //             if(arr.includes(num)){
// //             }
// //             else{
// //                   arr.push(num)
// //                   arr.sort((a,b)=>a-b)
// //             }
// //       }
// //       console.log(arr.indexOf(num))
// // }
// // findIndex(8)



// // Function to check prime number
// // function p(n) {	
// //       let i, flag = true;
// // 	// Getting the value form text
// // 	// field using DOM
// // 	n = parseInt(n)
// // 	for(i = 2; i <= n - 1; i++)
// // 		if (n % i == 0) {
// // 			flag = false;
// // 			break;
// // 		}		
// // 		// Check and display alert message
// // 	if (flag == true)
// // 		console.log(n + " is prime");
// // 	else
// // 		console.log(n + " is not prime");
// // }
// // p(2)


// // console.log("Prime number from 10 to 30")
// // for (var i = 2; i <= 30; i++) {                           
// //       var notPrime = false;
// //       for (var j = 2; j <= i/2; j++) {
// //           if (i%j===0) {
// //               notPrime = true;
// //           }
// //       }
// //       if (notPrime === false) {
// //                   console.log(i);
// //       }
// //   }

// // for(let i=2; i<=30; i++){
// //     let flag = false
// //     for(let j=2; j<=i/2; j++){
// //         if(i%j==0){
// //             flag = true
// //         }
// //     }
// //     if(flag == false){
// //         console.log(i)
// //     }
// // }


// // arr1 = [1,3]
// // arr4 = [2,3,4,1,7]

// // function concateArray(arr,arr2){
// // let arr3 = arr.concat(arr2)
// // arr3.sort((a,b)=>a-b)
// // // console.log(arr3)
// // store = []
// // for(let i=0; i<=arr3.length-1; i++){
// //       if(!store.includes(arr3[i])){
// //             store.push(arr3[i])
// //       }
// // }
// // console.log(store)}
// // concateArray(arr1,arr4)


// // let arr = [1,2,3,4,5,6]
// // function minMax(arr) {
// //     const res = []
// // 	let minNumber = Math.min(...arr)
// // 	let maxNumber = Math.max(...arr)
// // 	res.push(minNumber)
// //     res.push(maxNumber)
// // 	return res
// // }
// // console.log(minMax(arr))

// // function rev(n){
// //   let arr = n.split("") 
// //   let store = ""
// //   let store2 = ""
// //   for(let i=arr.length-1; i>=0; i--){
// //         store += arr[i]
// //   }
// //   let pass = store.split(' ')
// //   for(let i=pass.length-1; i>=0; i--){
// //     store2 += pass[i]
// //     store2 += " "
// // }
// //   console.log(store2)
// // }
// // rev("Vishal Kumar");

// // let arr = [1,3,4,5,0,1,2,3,2,1]
// // let res = arr.lastIndexOf(0)
// // arr.splice(res+1,0,55,66)
// // console.log(arr)

// // function checkPalindrome(str) {  
// //     // get the total length of the words   12 21 1221
// //     const len = str.length;  
  
// //     // Use for loop to divide the words into 2 half  
// //     for (let i = 0; i < len / 2; i++) {  
// //         // validate the first and last characters are the same  
// //         if (str[i] !== str[len - 1 - i]) {  
// //           console.log( 'It is not palindrome'); 
// //           return;
// //         }  
// //     }  
// //   // If they are not the same, then it is not a palindrome
// //   console.log( 'It is a palindrome'); 
// // }  
  
// // // take input of the string or number from the prompt  
// // const string = 1221 
  
// // const value = checkPalindrome(string);  

// // // log it's value in the console
// // console.log(value);     

// // let app = new Date()
// // let store = "Date "+app.getMonth()+" "+app.getFullYear()
// // const options = {
// //     year: 'numeric',
// //     month: 'numeric',
// //     day:  'numeric'
// // }
// // const fdate = app.toLocaleDateString('en-US', options)
// // console.log(fdate)


// // function findFactorial(number){
// // let fact = 1;
// //     for (i = 1; i <= number; i++) {
// //         fact *= i;
// //     }
// //     console.log(fact)
// // }
// // findFactorial(4)



// // program to generate fibonacci series up to n terms

// // function findFibonaci(number){
// // let n1 = 0, n2 = 1, nextTerm;
// // console.log('Fibonacci Series:');
// // for (let i = 1; i <= number; i++) {
// //     console.log(n1);
// //     nextTerm = n1 + n2;
// //     n1 = n2;
// //     n2 = nextTerm;
// // }}
// // findFibonaci(7)


// let str= "aabbcc"
// for(let i=0; i<str.length; i++){
//     a 
// }