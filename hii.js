// register
// send Email
// login
// user
// data

let register = (callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User Registered Successfully");
            resolve("Success");
        }, 2000)
    })

}

let sendEmail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("sendEmail Successfully");
            resolve();
        }, 5000)
    })

}
let login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
            resolve();
            console.log("login Failed");
        }, 2000)
    })

}
let user = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User login Successfully");
            resolve();
        }, 10000)
    })

}
let data = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data captured Successfully");
            resolve();
        }, 1000)
    })

}

//async and await

// async function authenticate(){
//     await register();
//     await sendEmail();
//     await login();
//     await user();
//     await data();
// }

// authenticate().then(()=>{console.log("ALL SET!!!!!!!!!!")})
// .catch((err)=>
// console.log(err))

//try and catch

async function authenticate(){

   try{
    const message   = await register();
    await sendEmail();
    await login();
    await user();
    await data();
    console.log(message)
   }   
   catch(err){
   console.log(err);
   throw new Error;
   }
}
authenticate().then(()=>{console.log("ALL SET!!!!!!!!!!")}).catch((err)=>{
    console.log(err)
})
