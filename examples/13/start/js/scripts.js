let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49
};

// let firstName = person.firstName,
//     lastName = person.lastName,
//     age = person.age;

// console.log(firstName, lastName, age);

function getData() {
    return null;
}

// let { firstName, lastName, age } = getData() || {};
// let { firstName: fName, lastName, age } = getData() || {};
//let { firstName, lastName, age, job } = person;


let firstName, lastName, age;

({ firstName: fName, lastName, age } = person);

// console.log(firstName, lastName, age);
console.log(fName, lastName, age);
