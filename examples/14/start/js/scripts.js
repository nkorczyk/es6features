let numbers = [10, 20, 30, 40, 50];

// let first = numbers[0],
//     second = numbers[1];

// let [first, second] = numbers;
// let [first, second, , fourth] = numbers;

let first, second, fourth;

// let [first, second, , fourth] = numbers || [];
[first, second, , fourth] = numbers || [];

console.log(first, second, fourth);

let a = 1,
b = 2;

console.log(a, b);

[b, a] = [a, b];

console.log(a, b);
