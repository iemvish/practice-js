// arr=[1,2,3,4,5,6,7,8]

// let arr1=arr.pop();

// console.log(arr1)


let odd=[]
let even=[]
let oddEven=(num)=>{

    oddEven.foreach((x)=>x%2==0 ? odd.push(x): even.push(x))
}

oddEven(100)