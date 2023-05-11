// const arr=[11,2,11,22,10,9,2]
// let printDuplicates=[]
// let printUnDuplicate =[]
// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = i+1; j < arr.length; j++) {
//       if (i !== j && arr[i] === arr[j]) {
//         isDuplicate=true;
//         printDuplicates.push(arr[i])
//         break;
//       }
//     }
//     if (!isDuplicate) {
//         printUnDuplicate.push(arr[i])
//     }
//   }
//   console.log("duplicate array are",printDuplicates)
//   console.log("Unduplicate array are",printUnDuplicate)


const arr=[11,2,11,10,9,2]
for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = i+1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      if (!isDuplicate) {
        console.log(arr[i]);
      }
      isDuplicate = true;
    }
  }
}
