class Collection extends Array {
    constructor(...args) {
        if (args.length === 1) {
            super(1);
            this[0] = args[0];
        } else {
            super(...args);
        }
    }
}

let col1 = new Collection(10);
console.log(col1);

let col = new Collection(10, 20, 30);

console.log(col);

let colPart = col.splice(0, 1);

console.log(colPart);
console.log(colPart instanceof Collection);
