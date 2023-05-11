// // // let calculate = (a,b,operation) => {
// // //     return operation(a,b)
// // // };

// // // let sum=(num1,num2)=>{
// // //     console.log(`the sum is :`)
// // //     return num1+ num2
// // // }
// // //  const sub=(a,b)=> a-b;
// // // console.log(calculate(10,50,sub))



// // let negative=(number)=>{
// //     return number<0

// // }
// // console.log(array.findIndex(negative))


// const array=("12345")
// let a1=[]

// for (let i =array.length-1 ; i >=0; i--) {
  
//     a1.push(array[i])
    
// }
// if(array==array){
//     console.log("PAlindrome");
//        }
//        else{
//            console.log("Not");
//        }

// console.log(array)


	function asynchronous_operational_method() {
	let first_promise = new Promise((resolve, reject) => resolve("Hello"));
	let second_promise = new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve(" GeeksforGeeks..");
		}, 1000);
	});
	let combined_promise = Promise.all([first_promise, second_promise]);
	return combined_promise;
	}
	
	async function display() {
	let data = await asynchronous_operational_method();
	console.log(data);
	}
	
	display();

