const names = "my name is Vishal Rahul Sharma";
let split = names.split("");

let obj = Object.assign({}, split);
let newArr = [];

// for (let i = 0; i < split.length; i++) {
//     if (split[i] === ' ') {
//         newArr.push(split[i]);
//     }
// }
// console.log(newarr);



for (var key in obj) {
    if (obj[key] == " ") {
        if (key % 2 == 0) {
        
            obj[key] = "odd";
        }
        else {
            obj[key] = "even";
        }
        key++;

    }
}
for (let j = 0, key=0; j < obj.length; j++) {
    
        if (obj[key] === ' ') {
            split[k] = obj[key];
            j++;
        }
    
}

console.log(obj)


