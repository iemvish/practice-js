// class Manager {
//     constructor(name, age, salary) {
//         this._name = name;
//         this._age = age;
//         this._salary = salary;
//     }

//     getSalary() {
//         console.log(`
//         Name: ${this._name}
//         Age: ${this._age}
//         Salary: ${this._salary}
        
//         Your current salary is ${this._salary}
//         `);
//     }

//     getSalaryIncrement() {
//         let totalSalary = this.getTotalSalary();
//         console.log(`
//         Name: ${this._name}
//         Age: ${this._age}
//         Salary: ${totalSalary} 
        
//         Your salary before increment ${this._salary}
//         an
//         Your salary after increment(6 months) ${totalSalary}`);
//     }
//     getTotalSalary() {
//         throw new Error("Prent cant inherit anything from child");
//     }


// }

// class Employee extends Manager {
//     constructor(name, age, salary) {
//         super(name, age, salary);
//     }

//     getTotalSalary() {
//         let ta = 1000;
//         let pa = 300;
//         let totalSalary = this._salary + ta + pa;
//         return totalSalary;
//     }

// }

// class Peon extends Employee {
//     constructor(name, age, salary) {
//         super(name, age, salary);
//     }

//     getTotalSalary() {
//         let ta = 500;
//         let pa = 100;
//         let totalSalary = this._salary + ta + pa;
//         return totalSalary;
//     }
// }

// let emp = new Manager("Ram", 54, 8000);

// emp.getSalary();



