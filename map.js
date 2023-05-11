const arr=[1,2,3,4,5,6,7,8];


function binary(x){
    x.toString(2);
}

console.log(arr.map((x)=>{return x.toString(2)}));
console.log(arr.map((x) =>x.toString(2)));

console.log(arr.map(binary));
