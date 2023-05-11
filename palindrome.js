let palinndrome=(r1)=>{

    const splitvalue=r1.toString().split("");
    const revalue=splitvalue.reverse();
    const joinvalue=revalue.join("");
    if(r1==joinvalue){
      console.log("PALINDROME")
    }
    else{
      console.log("NOT");
    }
  }
  return palinndrome(123);