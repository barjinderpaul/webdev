// With prototypes, we can emulate inheritance in JS;

let p = {
    a:10
}

let q = Object.create(p);
q.b = 20;

let r = Object.create(q);
r.c = 30;

console.log(p)
console.log(q)
console.log(r)

// R contains objects of q and q contains object of p;
// Thus R contains object of p as well similar to inheritance in cpp/java.
// This all happens when we create an object with Object.create(object);
// Whenever, we use Object.create(), it creates a field __proto__ inside our new object,
// which contains the contents of the parent object.

// We cannot change value of p or q by r;
// If we try to change the value, we do COW (copy on write), which basically means that we are 
// just creating a local copy in our current object
console.log(r.__proto__ === q)
console.log(r.__proto__.__proto__ === p)
console.log(r.__proto__)

console.log(q.__proto__ === p)
console.log(q.__proto__)

console.log(p.__proto__) //empty



// Playing with prototypes;



// We cannot change value of p or q by r;
// If we try to change the value, we do COW (copy on write), which basically means that we are 
// just creating a local copy in our current object

q.a = q.a + 1   //this does not change the value of p.a but it just creates a property 'a' in q with value q.a(from __proto__)+1 (because __proto__ is read only)
console.log(`Checking`)
console.log(q.__proto__)
console.log(r.__proto__)    //Will inherit both b:20 and a:11 from q
console.log(q)  // {b:20,a:11} a:11 because in line 45, we created another property of q
console.log(r)
console.log(r.a)
console.log(q.a)
console.log(p.a)





function Person (name,age) {
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
    this.age = age;
    this.isAdult = () => age>=18;
}

let person1 = new Person("John Doe", 21);
console.log(person1)

function Personal (gender){
    this.gender = gender
}


let person1Gender = Object.create(person1)
// console.log(person1Gender.__proto__)

// person1Gender = new Personal("Male")

// Check how to combine new with proto

person1Gender.gender = "Male"
console.log(person1Gender)
console.log(person1Gender.__proto__)
