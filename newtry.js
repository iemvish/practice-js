let newArr = [1234, 5678, 1234, 4312]
let b;
let sum = 0;
let output = newArr.toString().split("");
for (let i = 0; i < output.length; i++) {
    if (output[i] == ',') {
        continue
    }
    b = output[i];
    console.log(b)
    if (b % 2 === 0) {
        for (let j = 0; j < b.length; j++) {
            const digit = b[j];
            console.log("bgfdhgg",digit);
            if (digit % 2 === 0) { 
                sum += digit;
            }
        }
    }
}
// console.log(sum);





