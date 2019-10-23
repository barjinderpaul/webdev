function Person (name, age) {
    this.name = name;
    this.age = age;
    return 10;

}

//creates an object of type Person
let p = new Person("John Doe",21)
console.log(p)
console.log(JSON.stringify(p))

let p2 = new Person("Sample Person",22)
console.log(p2)
console.log(JSON.stringify(p2))



// ES6 Classes;
// Works same as basic prototypes and object but there is a new syntax to write these.

class Person2 {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let per1 = new Person2('John Sample',21)
let per2 = new Person2()


console.log(per1)
//false
console.log(Person2.isPrototypeOf(per1))
//true
console.log(Person2.prototype.isPrototypeOf(per1))


console.log(per2)

// Comparing class way with prototype way
console.log(typeof Person + ' ' + typeof Person2)
// Both result in output = function; which simply means the internal working is same but only the way of writing is different.

// Inheritance;

// Super must be used before using this or returning anything.  
class Student extends Person2 {
    constructor(name,age,school) {
        super(  name,age)
        this.school = school
    }
}

let s = new Student('Sample John',32)
let s2 = new Student('John2 sample',21,'SAmple School')

console.log(s)
console.log(s2)

console.log(s.__proto__)
console.log(s.__proto__.__proto__)

console.log(Person2.prototype.isPrototypeOf(s)) //True because Student's object 's' has inherited properties of Person2
console.log(Student.prototype.isPrototypeOf(s)) //True because 's' is the Object of Student class.


// Practicing some more classes

class Car {
    constructor(name,model,type) {
        this.name = name
        this.model = model
        this.type = type
    }
}

class Honda extends Car {
    constructor(name,model,type,features) {
        super(name,model,type)
        this.features = features
    }

    show() {
        console.log(`Name = ${this.name}\nModel = ${this.model}\nType = ${this.type}`)
        console.log(`Features -`)
        this.features.map((feature)=>console.log(`${feature}`))
    }
}

let honda_city = new Honda('Honda City','vli','sedan',['Stylish','Good mileage','Fantastic Engine'])
console.log(honda_city)
console.log(honda_city.show())