let numbers = [12, 3, 9, 22, 11, 6];

// let max = Math.max(12, 3, 9, 22, 11, 6);
console.log(Math.max.apply(Math, numbers));

let max = Math.max(...numbers);

let someString = "Norbert";

console.log(...someString);

console.log(Math.max(100, ...numbers));

let numbers2 = [2, 33, 10].concat(numbers);

let numbers3 = [2, 33, 10, ...numbers, 1, 75];

console.log([...numbers3, ...numbers2, 100]);

let s = [...numbers2];

console.log([...numbers3, ...numbers2, 100, ..."Piotr"]);

function strToArray(string = "") {
    // return string.split("");
    return [...string];
}

console.log(strToArray("Norbert"));

function reverse(str = "") {
    return [...str].reverse().join("");
}

console.log(reverse("Norbert"));

let sentence = "My name is Norbert";

function reverseSentence(string = "") {
    return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseSentence(sentence));