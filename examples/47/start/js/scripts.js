let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak"
};

let age = new WeakMap([[person1, 32], [person2, 22]]);

console.log(age);

preson1 = null;

console.log(age);

const Person = (function () {
    
    const privateDate = new WeakMap();
    
    return class Person {
        constructor(firstName, lastName) {
            privateDate.set(this, {
                firstName,
                lastName
            });
        }
        
        sayHello () {
            let data = privateDate.get(this);

            return `${data.firstName} ${data.lastName}`;
        }
    };
})();

let person3 = new Person("Jan", "Kowalski");

// console.log(person3.firstName); // teraz firstName i lastName są prywatne
console.log(person3.sayHello());

person3 = null;
