const str = ["Rahul", "Sharma"];
let binary = str.map(s => s.split('').map(c => c.charCodeAt(0).toString(2)).join(' '));
let decimal = binary.map(s => s.split(' ').map(b => parseInt(b, 2)));
console.log(decimal);
console.log(binary);

