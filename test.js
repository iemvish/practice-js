// // // // let duplicate = (arr) => {
// // //     const arr = [1,1,2]
// // //     for (let i = 0; i < arr.length-1; i++) {
// // //         for (let j = 0; j < i; j++) {
// // //             if ((arr[i] == arr[j]) && (i != j)){

// // //                 console.log("UnDuplicate value are",arr[j+1])
// // //             }
// // //         }
// // //     }

// // // // }


// // // //second-proggram

// // // // let arr = [1, 4, 11, 3, 4]
// // // // let arr1 = [5, 6, 7]

// // // // let MergeArray = []

// // // // for (let i = 0; i < arr.length; i++) {
// // // //     MergeArray.push(arr[i]);
// // // // }

// // // // for (let j = 0; j < arr1.length; j++) {
// // // //     MergeArray.push(arr1[j]);
// // // // }

// // // // let sorts = MergeArray;
// // // // let n = sorts.length - 1;

// // // // for (let i = 0; i < n; i++) {
// // // //     let minimunvalue = i;

// // // //     for (let j = i + 1; j < n; j++) {
// // // //         if (sorts[j] < sorts[minimunvalue]) {
// // // //             minimunvalue = j
// // // //             console.log(minimunvalue)
// // // //         }
// // // //         let temp = sorts[i];
// // // //         sorts[i] = sorts[minimunvalue];
// // // //         sorts[minimunvalue] = temp;
// // // //     }
// // // // }
// // // // console.log(sorts)


// let arr = [1, 1, 2, 3, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;

//   // Check if the current element is a duplicate
//   for (let j = 0; j < arr.length; j++) {
//     if (i !== j && arr[i] === arr[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }

//   // Print the element if it is not a duplicate
//   if (!isDuplicate) {
//     console.log(arr[i]);
//   }
// }

// let rows=""
// let pyra=(num)=>{
//     for (let i = 0; i <=num; i++) {
//         rows= " ";
//         for (let j = 0; j <num-i; j++) {
//             rows += "";
//         }
//         for (let k = 0; k < 2 * i-1; k++) {
//            rows+=i
//         }
//         console.log(rows);

//     }
   
    
// }
// pyra(5)

// const a=[1,2,3,4,5,6,7,8,9]
// let sum=1
// for(let i=0;i< a.length;i++){
//     sum = sum * a[i]
// }
// console.log(sum)

const arr=[39.42,49.256,50.3946,7,9,25.675]
sum=1
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
// let sum12=sum.toFixed(2)
console.log(sum.toFixed)