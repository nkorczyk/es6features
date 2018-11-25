let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak"
};

let person3 = person1;

let s = new WeakSet();

s.add(person1);
s.add(person2);

// WeakSet nnie jest iteratorem. Nie możemy iterować po dodanych do niego obiektach
// Do WeakSet nie możemy dodawać wartości prymitywnych.
// Mogą to być tylko obiekty

// s.add("Piotr");

// Nie możemy na nim użyć size wiec ne wiemy ile w nim jest elementów
// Mamy trzy metody: add, delete i has

person1 = null; // W tym momencie nie ma juz person1 w pamięci
// JavaScriptowy GC usuwa ten obiekt
// Dodatkowo usunie go również z naszego WeakSetu
console.log(s);
console.log(s.has(person1));

console.log(s.has(person3));
person3 = null;

// -----------------------------

const people = new WeakSet();

class Person {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;

        people.add(this);

    }

    sayHello() {

        if (!people.has(this)) {
            throw new TypeError("Person.prototype.sayHello wywołana na niekompatybilnym obiekcie");
        }

        return `${this.firstName} ${this.lastName}`;

    }
}

let person4 = new Person("Jan", "Kowalski");

console.log(person4.sayHello());

person4 = null;

let person5 = {
    firstName: "Anna",
    lastName: "Nowak"
};

console.log(Person.prototype.sayHello.call(person5));
