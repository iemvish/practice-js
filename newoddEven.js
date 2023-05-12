
const names = "my name is Rahul  Sharma";
let split = names.split('');
let newArr = []
for (let i = 0; i < split.length; i++) {
    if (split[i] === ' ') {
        newArr.push(split[i]);
    }
}

for (let j = 0; j < newArr.length; j++) {
    if (j % 2 == 0) {
        newArr[j] = " ODD ";
    }
    else {
        newArr[j] = " EVEN ";
    }
}

for (let k = 0, j = 0; k < split.length; k++) {
    if (split[k] === ' ') {
        split[k] = newArr[j];
        j++;
    }
}

let obj=split.join("");

console.log(obj);


// let text = "12345"
// let newtext=text.split('').pop();
// let arr=Object.assign([],newtext)
// word = newtext.padEnd(4,0);
// console.log(word)