// const hidden = Symbol("hidden");

// (function() {
//     const hidden = Symbol.for("hidden");
// })();

const hidden = Symbol.for("hidden");

let person = {
    [hidden]: "123jkasdKhasdf$901-123",
    getSecret() {
        return this[Symbol.for("hidden")];
    }
};

console.log(Symbol.keyFor(hidden));

console.log(Object.getOwnPropertyNames(person));

console.log(Object.getOwnPropertySymbols(person));

let abc = Object.getOwnPropertySymbols(person);
