// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.sayHello = function () {
//     return this.firstName + " " + this.lastName;
// };

// function Employee(firstName, lastName, position) {
//     Person.call(this, firstName, lastName);
//     this.position = position;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sayHello = function () {
//     var name = Person.prototype.sayHello.call(this);

//     return "My name is " + name + " and I work as a " + this.position + ".";
// }

// var employee1 = new Employee("Jan", "Kowalski", "Developer");

// console.log(employee1.sayHello());
/////////////////////

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {

    // // default constructor
    // constructor(...args) {
    //     super(...args);
    // }

    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }

    sayHello() {
        let name = super.sayHello();

        return `My name is ${name} and I work as a ${this.position}.`;
    }
}

let employee1 = new Employee("Jan", "Kowalski", "Developer");
