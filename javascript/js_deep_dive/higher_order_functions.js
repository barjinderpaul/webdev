
// Higher Order function - taking function as an argument
function getFirstName(fullName) {
    return fullName.split(" ")[0];
}

function greet (findName, fullName) {
    let firstName = findName(fullName);
    console.log(`First name = ${firstName}`);
}

greet(getFirstName,"ABC World");


// Higher order function - return function

function createGreetings(name) {
    let firstName = name.split(" ")[0];
    function greet(){
        console.log(`Hello ${firstName}`);
    }
    return greet;
}

let ABCgreeter = createGreetings("ABC World")
let XYZgreeter = createGreetings("XYZ World")

ABCgreeter()
XYZgreeter()