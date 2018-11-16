// let getName = function () {
//     return "Jan";
// };

// let getName = () => "Jan";

// let getName = function (kid) {
//     if (kid) {
//         return "Jaś";
//     } else {
//         return "Jan";
//     }
// }

// let getName = kid => {
//     if (kid) {
//         return "Jaś";
//     } else {
//         return "Jan";
//     }
// };

let getName = kid => kid ? "Jaś" : "Jan";

// let getObject = function () {
//     return {
//         firstname: "Jan"
//     }
// };

let getObject = () => ({firstname: "Jan"});

// function args() {
//     console.log(arguments);
// }


function getArgs() {
    let args = () => {
        console.log(arguments);
    }

    args();
}

// let args = () => {
//     console.log(arguments);
// }

getArgs(1, 2, 3);

 
let arr = [10, 22, 12, 4, 0, 67, 34];

// let gt20 = arr.filter(function(value) {
//     return value > 20;
// });

let gt20 = arr.filter(value => value > 20);
