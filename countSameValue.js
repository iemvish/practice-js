let rows = ""
function fullPyramid(n) {


    // for (let i = 0; i <= n; i++) {
    //     rows = " "
    //     for (let j = 0; j <= n - i; j++) {

    //         rows += " "
    //     }
    //     for (let k = 0; k <= 2 * i - 1; k++) {
    //         rows += "1 "
    //     }
    //     console.log(rows)
        
    // }
    // for (let i = n; i >= 0; i--) {
    //     rows = " "
    //     for (let j = 0; j <= n - i; j++) {

    //         rows += " "
    //     }
    //     for (let k = 0; k <= 2 * i - 1; k++) {
    //         rows += "1 "
    //     }
    //     console.log(rows)
        
    // }


    for(let i=0;i<=n;i++){
        rows =""
       for(let j=0;j<=n-i;j++){
        rows+= j%2==0? '0':'1';
       }
       for(let k=0;k<=2*i-1;i++){
        rows+=" "
       }
    }



}
fullPyramid(5)
