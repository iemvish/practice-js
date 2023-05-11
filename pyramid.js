let rows=" "
let pyra=(num)=>{
    for (let i = 0; i <=num; i++) {
        rows= " ";
        for (let j = 0; j <num-i; j++) {
            rows += " ";
        }
        for (let k = 0; k < 2 * i-1; k++) {
           rows+=k%2
        }
        console.log(rows);
    rows=""

    }
   
    
}
pyra(5)