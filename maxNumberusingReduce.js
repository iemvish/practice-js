
// const user = [
//     { firstname: "akshay", lastName: "Sharma", age: 33, marks:50 },
//     { firstname: "Rahul", lastName: "Sharma", age: 72,marks:70},
//     { firstname: "Rahul", lastName: "kumar", age: 72 ,marks:60},
//     { firstname: "Ramesh", lastName: "Sharma", age: 44 ,marks:60},
//     { firstname: "Golu", lastName: "Sharma", age: 66,marks:60 },
// ];




// let output= user.reduce(function(acc,curr){
//     if(acc[curr.age>30]){
//         acc[curr.age]= ++acc[curr.age]
//     }

// },)
// console.log(output)







const users = [
    { firstname: "akshay", lastName: "Sharma", age: 33, marks: 50 },
    { firstname: "Rahul", lastName: "Sharma", age: 72, marks: 70 },
    { firstname: "Rahul", lastName: "kumar", age: 72, marks: 60 },
    { firstname: "Ramesh", lastName: "Sharma", age: 44, marks: 60 },
    { firstname: "Golu", lastName: "Sharma", age: 66, marks: 60 },
  ];
  
  const countUsersAbove30 = users.reduce(function(acc, curr) {
    if (curr.age > 30) {
      acc[curr.age]=++acc[curr];
    }
    return acc;
  }, 0);
  
  console.log(countUsersAbove30); // output: 4
  