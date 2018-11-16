let firstName = "Jan",
    lastName = "Kowalski";

let person = {
    firstName,
    lastName, 
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person);
console.log(person.getFullName());

let object = {
    toString() {
        return "Super";
    }
};

console.log("" + object);

let fnName = "getFullName";

let person2 = {
    firstName,
    lastName,
};

person2[fnName] = function () {
    return this.firstName + " " + this.lastName;
}

console.log(person2.getFullName());

let person3 = {
    firstName,
    lastName,
    [fnName + 1]: "Witaj",
    [fnName]() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person3.getFullName());