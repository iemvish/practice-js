let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3, 4]
let c = []
for (let i = 0; i < a.length; i++) {
if(a[i]=== undefined || b[i]===undefined){
    c.push(0)   
}
else
    c.push(a[i] + b[i])
}
console.log(c)