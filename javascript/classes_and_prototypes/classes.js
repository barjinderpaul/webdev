// JS emulates classes but does not comes close to actually implementing classes like c++,java do;

function Person(name, age){
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
    this.age = age;
    this.isAdult = () => age>=18;

}
let person1 = new Person("John Doe",21)
console.log(person1)
console.log(person1.isAdult())


// Emulating private, public members;
function Person2(name, age){
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
    let mAge = age;
    this.isAdult = () => mAge>=18;
}

let person2 = new Person2("John Doe",21)
console.log(person2) // person2 does not have 'age' variable now; all other fields in object are public fields
console.log(person2.isAdult())