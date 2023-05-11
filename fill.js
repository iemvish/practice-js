// var array = ['A', 'A', 'A', 'A', 'A'],
//     stars = 2;


// console.log(...array);

// array = array.map((v, i) => i < stars ? 'B' : 'R');

// console.log(...array);
// Define an array of numbers to be sorted
let myArray = [5, 2, 8, 1, 9, 3];

// Get the length of the array
let n = myArray.length;

// Perform n iterations of the sorting algorithm
for (let i = 0; i < n; i++) {
  // Assume the array is already sorted from index 0 up to i
  // Find the index of the smallest element in the unsorted portion of the array
  let minIndex = i;
  for (let j = i+1; j < n; j++) {
    if (myArray[j] < myArray[minIndex]) {
      minIndex = j;
    }
  }
  // Swap the smallest element with the first element of the unsorted portion of the array
  [myArray[i], myArray[minIndex]] = [myArray[minIndex], myArray[i]];
}

// Print the sorted array
console.log(myArray);
