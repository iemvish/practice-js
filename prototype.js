// // Object.prototype.Gender="male";
// // Person={

// //   name:"Rahul",
// //   rollNo:22
  
// // };



// // console.log(Person)





// // let a = {
// //     value: 2
// //   };
  
// //   Number.prototype.rahul = function() {
// //     return a.value * 20;
// //   };
// //   console.log(a.value * (20).rahul());

// //   //second

  
// let a1 = {
//     value1:20,
//     value2:23
// };
//   Number.prototype.rahul = function() {
//     return this * 20;
//   };
//   for(let i=0;i<a1.length;i++){
//   if(a[i].value !== undefined){
//     console.log(a1[i].value1.rahul());
//   }
//   if(a[i].value1 !== undefined){
//     console.log(a1[i].value2.rahul());
//   }
  
// }

// // // //   //
// // //   let a1 = [
// // //     { value: 20 },
// // //     { value: 100 },
// // //     { value: 20 }
// // //   ];
  
// // //   Number.prototype.rahul = function() {
// // //     return this - 230;
// // //   };
  
// // //   for (let i = 0; i < a1.length; i++) {
// // //     console.log(a1[i].value.rahul());
   
// // //   }
  

// //   let b=101

// // let a = [  { value1: 10 },  { value1: 100 },  { value2: 20 }];

// // Number.prototype.rahul = function() {
// //   return this * b;
// // };

// // for (let i = 0; i < a.length; i++) {
// //   if (a[i].value1 !== undefined) {
// //     console.log(a[i].value1.rahul());
// //   }
// //   if (a[i].value2 !== undefined) {
// //     console.log(a[i].value2.rahul());
// //   }
// // }

  
// // // // String.prototype.ownLength=function(){
// // // //     return this.length+100;
// // // // }

// // // // let studentData={
// // // //     getFullName:function(){
// // // //         return "Your Full Name is" + this.firstName + " " + this.lastName },

// // // //     getAge:function(){
// // // //         return "Your Age is"+ this.age
// // // //     }    
// // // // }

// // // // let rahul ={
// // // //     firstName:"Rahul",
// // // //     lastName:"Sharma",
// // // //     age:22,
// // // //     address:"VPO BHUANA"
// // // // }

// // // // let ritik ={
// // // //     firstName:"Ritik",
// // // //     lastName:"Sharma",
// // // //     age:18,
// // // //     address:"VPO BHUANA"
// // // // }

// // // // rahul.__proto__=studentData;
// // // // ritik.__proto__=studentData;

// // // // function Car(make, model, year) {
// // // //     this.make = make;
// // // //     this.model = model;
// // // //     this.year = year;
// // // //   }
  
// // // //   Car.prototype.getDescription = function() {
// // // //     return this.make + " " + this.model + " " + this.year;
// // // //   };
  
// // // //   var myCar = new Car("Toyota", "Corolla", 2022);
// // // //   console.log(myCar.getDescription()); // Output: "Toyota Corolla 2022"
  

// // // // let myPrototype = {  greeting: "Hello",
// // // //     greet: function(name) {
// // // //       console.log(this.greeting + " " + name);
// // // //     }
// // // //   };
// // // //   // create a new object that inherits from the custom prototype
// // // //   let myObject = Object.create(myPrototype);
  
// // // //   // add a new property to the object
// // // //   myObject.name = "Rahul";
  
// // // //   // call the greet method on the object
// // // //   myObject.greet(myObject.name); 
  

// // // let myPrototype = {  
// // //     greeting: "Hello",
// // //     dear:"dear",

// // //     greet: function(name) {
// // //         console.log(`${this.greeting}  ${name} ${this.dear}`)
// // //     },
// // //     farewell: function(name) {
        
// // //       console.log(`Goodbye ${name} ${this.dear}`);
// // //     }
// // //   };
  
// // //   // create a new object that inherits from the custom prototype
// // //   let myObject = Object.create(myPrototype);
  
// // //   // add a new property to the object
// // //   myObject.name = "Rahul";
  
// // //   // call the greet method on the object
// // //   myObject.greet(myObject.name); 
  
// // //   // call the farewell method on the object
// // //   myObject.farewell(myObject.name);
  
// // // let animalPrototype = {
// // //   makeSound: function(sound) {
// // //     console.log(this.name + " says " + sound);
// // //   },
// // //   sleep: function() {
// // //     console.log(this.name + " is sleeping.");
// // //   }
// // // };




// // let dog = Object.create(animalPrototype);
// // dog.name = "Dog";
// // dog.makeSound("woof");
// // dog.sleep();

// // let cat = Object.create(animalPrototype);
// // cat.name = "Cat";
// // cat.makeSound("meow");
// // cat.sleep();



function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.makeSound = function(sound) {
    console.log(this.name + " says " + sound);
  };
  
  let dog = new Animal("Dog");
  dog.makeSound("woof");
  
  console.log(dog.__proto__ === Animal.prototype); 
  

  // Define a custom prototype method for arrays
Array.prototype.customLength = function() {
  // Your custom logic to calculate the "length" of the array
  return this.reduce(function(acc, val) {
    return acc + 1;
  }, 0);
};

// Example usage
let arr = [1, 2, 3, 4];
console.log(arr.customLength()); // Output: 4
