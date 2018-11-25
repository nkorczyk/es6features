let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak"
};

let s = new Set();

// metody: add, delete, has, clear
s.add("Piotr");
s.add("Anna");

console.log(s.size);

// W secie dane muszą być unikalne
s.add("Piotr");
console.log(s.size);

s.delete("Piotr");

console.log(s.has("Anna"));

s.clear(); // czyści set

console.log(s);

let s2 = new Set([person1, person2]);
console.log(s2);
console.log(s2.has(person1));

s2.forEach(value => console.log(value));

for (let value of s2) {
    console.log(value);
}

let numbers = [1, 2, 1, 0, 3, 5, 1];

function removeDuplicates(arr) {
    return[...(new Set(arr))];
}

console.log(removeDuplicates(numbers));
