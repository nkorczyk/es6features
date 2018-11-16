// let person = {
//     firstName: "Jan",
//     lastName: "Kowalski",
//     sayHello: () => {
//         return this.firstName + " " + this.lastName;
//     }
// };

let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    // sayHello: function () {
    //     setTimeout(function () {
    //         console.log(this.firstName + " " + this.lastName);
    //     }.bind(this), 2000);
    // }
    // sayHello() {
    //     setTimeout(() => {
    //         console.log(this.firstName + " " + this.lastName);
    //     }, 2000);
    // }
    sayHello() {
        console.log(this.firstName + " " + this.lastName);
    }
};

person.sayHello.call({
    firstName: "Anna",
    lastName: "Nowak"
});

document.querySelector("#button-07").onclick = function(event) {
    console.log(event.target === this);
};

let Person = (firstName) => {
    this.firstName = firstName;
};

console.log(Person.prototype);

let person1 = new Person("Anna");
