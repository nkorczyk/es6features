let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49
};

let { firstName, lastName, age } = person;

// let info = "Imię: " + firstName + ", nazwisko: " + lastName + ", wiek: " + age + " lat.";

// let info = `Imię: ${true ? "Piotr" : "Paweł"}, nazwisko: ${lastName}, wiek: ${age} lat.`;
let info = `Imię: ${firstName}, nazwisko: ${lastName}, wiek: ${age} lat.`;

console.log(info);

let buttonText = "Wcisnij mnie";

// let template = "\
// <button class='btn'>\
//     <span>" + buttonText + "</span>\
// </button>";

let template = `
<button class='btn'>
    <span>${buttonText}</span>
</button>
`;

console.log(template);
