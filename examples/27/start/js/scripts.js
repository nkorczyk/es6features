const hidden = Symbol("ściśle tajne");
// const hidden2 = Symbol("ściśle tajne");

let person = {
    [hidden]: "123asdf*=asdf33##a12"
};

console.log(person);
// console.log(person.hidden);

// for (key in person) {
//     console.log(key);
// }

// console.log(person[hidden]);

const FORMAT = Symbol("format()");

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return this[FORMAT](`${this.firstName} ${this.lastName}`);
    }

    [FORMAT](text) {
        return text.toUpperCase();
    }
}

let person1 = new Person("Jan", "Kowalski");

console.log(person1.sayHello());
