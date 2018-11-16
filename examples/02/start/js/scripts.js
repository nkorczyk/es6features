(function () {

    // let firstName = "Jan";
    
    // console.log(firstName);
    
    // if (true) {
    //     let lastName = "Kowalski";
    //     console.log(lastName);
    // }
    
    // let lastName = "Kowalski";
    
    // console.log(typeof lastName);
    
    // var lastName = "Kowalski";

    let fns = [];

    for (let i = 0; i < 10; i++) {
        fns.push(function () {
            console.log("Value of i is: " + i);
        });
    }

    fns.forEach(function (fn) {
        fn();
    });


    const person = {
        firstName: "Jan",
        lastName: "Kowalski"
    }

    person.firstName = "Maria";

    console.log(person);
})();