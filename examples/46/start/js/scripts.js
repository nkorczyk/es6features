// Mapy są podobne do obiektów, a Sety do tablic
// W mamach również mamy unikalność jak w Setach

let map = new Map();

// Metody: set, get, delete, clear, has i właściwość size

map.set("Jan", "Kowalski");
map.set("Anna", "Nowak");

console.log(map);

console.log(map.get("Anna"));

// W przypadku zwykłych obiektów klucz może być tylko stringiem, liczbą albo Symbole
// A w Mapie dowolny obiekt może być kluczem

let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak"
};

let age = new Map([[person1, 32], [person2, 22]]);

// age.set(person1, 32);
// age.set(person2, 22);

// Obiekty person1 i person2 nie zostały zmodyfikowane
// ale w mapie pod kluczem person1 mamy warość 32
// Czyli mogę sobie dodać dowolne dane do obietu nie modyikując tegop obiektu
// Są to tzw. metadane

console.log(age);
console.log(age.get(person1));

// Mapy mają w sobie iterator więc możemy po nich iterować

for (let obj of age) {
    console.log(obj);
}

// for (let obj of age) {
//     console.log(obj[1]);
// }

for (let [person, personAge] of age) {
    console.log(person);
    console.log(personAge);
}

for (let [person, personAge] of age.entries()) {
    console.log(person);
    console.log(personAge);
}

for (let value of age.values()) {
    console.log(value);
}

for (let value of age.keys()) {
    console.log(value);
}
