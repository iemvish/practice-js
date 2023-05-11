let str = "My name is Rahul Sharma";
let even = [];
let odd = [];

for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    even += str[i] + " ";
  } else {
    odd += str[i] + " ";
  }
}
console.log("Even characters: " + even);
console.log("Odd characters: " + odd);
