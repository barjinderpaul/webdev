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




// Object inheritance
console.log(`Object inheritance`)
let a = {
    name : 'ABC',
    age:21
}

let b = Object.create(a)
let c = Object.create(b)

console.log(a)
console.log(b)
//Inherited properties of b
console.log(b.__proto__)

// Changing values of inherited properties does not affect the original values. However, there is a way to change the original values also; 
// What it does instead is creates a new property of the object; because the inherited properties are read only;
/* if the new property does not exist in the current object, it will look through the whole proto chain and if it finds the value there, it will read it.
    It is useful when we are writing a property with the inherited property in mind. 
    For example: If we want to create a value and it should be increment by 5 from the inherited value; JS will look through
                proto chain and if it finds it inherited it will take that value and apply the specific operation of incrementing by 5.
                Then, it will create a new property in the current object.
*/

// We can change the value of the proto itself but not the original place where it came from;
console.log('Original a')
console.log(a)
console.log('b proto')
console.log(b.__proto__)
b.__proto__.name = 'new name'
console.log('Original a after updating proto')
console.log(a)
console.log('b proto after updating b.__proto')
console.log(b.__proto__)


// Proto chain;
console.log(`Learning about proto chain`)
let obj1 = {
    name:'ABC Doet',
    age:20
}

let obj2 = Object.create(obj1) 
let obj3 = Object.create(obj2)

//directly inherited from obj1
console.log(obj2.__proto__)

// empty because obj2 is empty
console.log(obj3.__proto__)

// inherited from a
console.log(obj3.__proto__.__proto__)


// Checking if one object is prototype of another object;
//It checks whether obj2.__proto__ contains anything from obj1
console.log(obj1.isPrototypeOf(obj2))

console.log(obj1.isPrototypeOf(obj3))



//  Every primitive datatype has a __proto__ property from its parent Class;
// Such as any string will inherit __proto__ from String class;
let x = "randomstring"
console.log(x.__proto__)
console.log(x.__proto__ == String.prototype)

// Everything is inherited from Object.prototype except undefined;
console.log(Object.prototype.isPrototypeOf(String.prototype))



// Every default function in JS is inherited from Class_name.prototype.function_name;
console.log(Array.prototype.sort)
console.log(String.prototype.substr)


// Custom prototype example;
function Human(name,age) {
    this.name = name;
    this.age = age;
    this.isAdult = (age) => age>=18;
}

let h1 = new Human("John Sample",21)
let h2 = new Human("Sample John",23)
console.log(h1)
console.log(h2)

/* 
Our both objects h1 and h2 have isAdult function.
Every object that we will create will have this isAdult function. Each function will have it's memory allocated;
As the function's code is same for all the users, why do we have to include in every object?
Here .prototype comes into play : 
We can do like : 
Human.prototype.isAdult = (age) => age>=18
Now, what will happen is that, no object will have isAdult function but our Human will have a isAdult function and 
any object created with Human will automatically have isAdult function;
Writing the example with Human2 :
 */

function Human2(name, age) {
    this.name = name
    this.age = age
}
//works
Human2.prototype.isAdult = function(){return  (this.age) >=18; }

// does not seem to work
// Human2.prototype.isAdult = () => {return (this.age)>=18};

let h21 = new Human2("John sample",21)
let h22 = new Human2("Sample Joe",23)

console.log(h21)
console.log(h22)

//false
console.log(Human2.isPrototypeOf(h21))
// true
console.log(Human2.prototype.isPrototypeOf(h21))

console.log(h21.__proto__)
console.log(h22.__proto__)
console.log(h21.isAdult())