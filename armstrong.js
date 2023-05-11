let arm = (num) => {
let sum=0
    let str = num.toString();
    let spl = str.split('');

    let news = spl.map((item) => item * item * item);

    for(let i=0;i< news.length;i++){
        sum +=news[i]
    }
   
    if (sum == num) {
        console.log("Armstrong")
    }
    else {
        console.log("Not Armstrong")
    }
}
arm(371)