


// let output=str.map(rev=> rev.split('').reverse().join('')).reverse();
// console.log(output)

// let bin=str.map(b=>b.split('').map(c=>c.charCodeAt(0).toString(2)));
// console.log(bin)


// //binary

// let binary = str.map(s => s.split('').map(c => c.charCodeAt(0).toString(2)).join(' '));
// console.log("Binary Numbers are",binary);

// let decimal =  binary .map(s => s.split(' ').map(b => parseInt(b, 2)));
// console.log(decimal);

// //improved version
// let decimal1 = str.map(s => s.split('').map(c => parseInt(c.charCodeAt(0).toString(2), 2)));
// console.log("New Imporve Version are",decimal1);

// //with function

let str=["Rahul", "Sharma","Ritik"];

let binaryAndASCII = str.map(s => s.split('').map(c => {
    let binary = c.charCodeAt(0).toString(2);
    let ascii = c.charCodeAt(0);
    return { binary, ascii };
  }));

  // console.log(binaryAndASCII)

  console.log(Object.assign({},binaryAndASCII))

  
  

