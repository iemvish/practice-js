// // const arr=[3,1,5,7,1,3,4,5];
// // const str=["RAhul","Rahul","rahul","Ritik"]

// // let output= arr.sort((a,b)=>b-a)
// // let output1=str.sort()

// // console.table(output)
// // console.table(output1)

// // //
// let x
// const user = [
//     { firstname: "akshay", lastName: "Sharma", age: 33, marks:50 },
//     { firstname: "Rahul", lastName: "Sharma", age: 72,marks:70},
//     { firstname: "Rahul", lastName: "kumar", age: 72 ,marks:60},
//     { firstname: "Ramesh", lastName: "Sharma", age: 44 ,marks:60},
//     { firstname: "Golu", lastName: "Sharma", age: 66,marks:60 },
// ];

// for(let i=0;i<user.length;i++){
//     for(let j=0;j<i;j++){
//         if(user[i].age<user[j].age)
//          x = user[i].age;
//          user[i].age=user[j].age;
//          user[j].age=x 
//         }
// }
// console.log(user)


// // let sorting=user.sort((a,b) => b.age - a.age )
// // console.table(sorting)



// // const arr=[1,2,3,4,5,6];

// // function binary(x){
// //     return x.toString(2);
// // }
// // console.log(arr.map(binary))


// // let input = [2,3,8,1,4,5,9,7,6];
// // let input1 = [2,3,8,1,4,5,9,7,6];
// // let merge=[...input,...input1]

// // for(let i=0;i<=merge.length;i++){
// //     for(j=0;j<i;j++){
// //         if(merge[i]<merge[j]){
// //             let x=merge[i];
// //             merge[i]=merge[j];
// //             merge[j]=x;
// //         }
// //     }
// // }

// // console.log(merge)


let x;
const user = [{ firstname: "akshay", lastName: "Sharma", age: 33, marks: 50 },
{ firstname: "Rahul", lastName: "Sharma", age: 72, marks: 70 },
{ firstname: "Rahul", lastName: "kumar", age: 72, marks: 60 },
{ firstname: "Ramesh", lastName: "Sharma", age: 44, marks: 60 },
{ firstname: "Golu", lastName: "Sharma", age: 66, marks: 60 },];

for (let i = 0; i < user.length; i++) {
    for (let j = 0; j < i; j++) {
        if (user[i].marks > user[j].marks) {
            x = user[i].marks;
            user[i].marks = user[j].marks;
            user[j].marks = x;
        }
    }
}

console.log(user);
