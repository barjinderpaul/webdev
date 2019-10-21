function fruit (color,taste){
    this.color = color;
    this.taste = taste;
}

let orange = new fruit("orange","sour");
let apple  = new fruit("red","sweet");

let mango = {
    color:"yellow",
    taste:"sweet"
}

console.log(orange)
console.log(apple)

// orange, apple and mango are all objects but orange and mango behave has objects of fruit class

console.log(mango)

console.log(typeof orange + " " +typeof mango)


// this
console.log(this);  //Empty object
function foo(){
    // console.log(this);
    console.log(this == global); //a special object in nodejs
    
}

foo(); //prints true
new foo(); // prints false;
// This happens because of autoboxing


//All global items/functions are present in global object;
//Only works in nodejs and not in browser;
//In browser, everything is present inside 'window';


function foo2() {
    this.p = "something"
    return 10;
} 

let o1 = foo2();
let o2 = new foo2();
console.log(o1)
console.log(o2) // return statement has no value when called with 'new' keyword, the box/object is returned when a function is called with 'new'
console.log(o1.p)
console.log(o2.p) 