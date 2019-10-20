// Checking data types;
console.log('Checking data types');
console.log(typeof 12); //"number"
console.log(typeof 1.1);    //number
console.log(typeof "12");   //string
console.log(typeof true);   //boolean
console.log(typeof [1,2,3]); //considered as object
console.log(typeof null);   //considered as object;
console.log(typeof undefined);  //undefined

console.log(`\nchecking whether typeof 10 === "number" or not`)
if(typeof 12 === "number"){
    console.log('True');
}
else{
    console.log('false');
}

// Max Integer and Min Integer in JS
console.log(`MAX SAFE INTEGER = ${Number.MAX_SAFE_INTEGER}`);
console.log(`MIN SAFE INTEGER = ${Number.MIN_SAFE_INTEGER}`);
console.log(`MAX VALUE = ${Number.MAX_VALUE} `);
console.log(`MIN VALUE = ${Number.MIN_VALUE}`);

// Objects in JS :
console.log(`\nObjects in JS :`)
let obj = {
    it_is_called_property : "this_is_value_of_property",
    i_can_have_any_value : 12,
    i_can_have_any_value2 : "I am string"
}
console.log(obj.it_is_called_property); //"this_is_value_of_property"

let obj2 = {
    it_is_called_property : "this_is_value_of_property",
    i_can_have_any_value : 12,
    i_can_have_any_value2 : "I am string",
    nested_obj : {
        i_am_object_inside_object : "Another string"
    }
}
console.log(obj2.nested_obj.i_am_object_inside_object);

// Adding properties in JS object => Just add a new property with;
obj.new_property = "I am a value of new_property";
console.log(obj.new_property);

//Deleting properties in JS object => with keyword 'delete';
console.log('Deleting property of an object');
delete obj.new_property;
console.log(obj);
console.log(obj.new_property); //will return undefined;

// Checking equality
console.log(1 == "1");
console.log(1 === "1");
console.log(1 + "1" == 1); //false
console.log(1 + "1" == 11); //true, because 11 is automatically typecasted to "11"
console.log(1 + "1" == "11"); //true
console.log("11" - 1 == 1); //false, because "11"-1 returns 10;
console.log([] == ""); //true
console.log([] == 0); //true  [] can be typecasted to "" and vice versa;
console.log("" == 0); //true
console.log({} + []); //Try in REPL; will return 0
console.log([] + {}); //Try in REPL; will return '[object Object]'


//+ operator; typecasts the argument on the right side of +
console.log("1");   //String
console.log(+"1");  //Number
console.log(+[]);  //Number = 0
console.log(+{});   //NaN


console.log();
// BASIC FUNCTIONS in JS;
function increment(x){
    return x+1;
}

console.log(increment(10));
console.log(increment('Hello')); //return Hello1; due to automatic conversion of "number" to "string";

function increment2(x){
    if(typeof x === "number"){
        return x+1;
    }
    else{
        return "Argumnent passed in not a number";
    }
}

console.log(increment2('hello'));

function decrement(x){
    x--;
}

let checkingReference = 10;
console.log(`Before decrementing ${checkingReference}`);
decrement(checkingReference);
console.log(`After decrementing ${checkingReference}`);
console.log(`Not passed by reference`);

// Strings in JS;
//Split in JS;
let url = "https://www.youtube.com/watch?v=asdas13asd"
console.log(url.split('?'));
console.log(url.split('='));

//Getting video part from URL;
console.log(url.split('=')[1]);

//1d arrays;
let arr = [1,2,3,4];
console.log(arr.join("-"));

//2d Arrays;
let arr2d = [[1,2],[2,3],[3,4]];
console.log(arr2d[1][1]);

// Scopes in JS;
console.log()
var x = 10;
function foo() {
    x += 1;
}
foo();
console.log(x);

console.log()

// No change to 'y' declared outside function
var y = 10;
function foo2(){
    var y = 20;
    y+=1;
    console.log(y);
}
foo2();
console.log(y);

console.log();

// Example showing var does not allow block scoping;

var z = 10;
function foo3(){
    var z = 20;
    z+=1;
    console.log("Line 149 " + z);
    if(true){
        var z = 30;
        z+=1;
        console.log("line 153 " + z );
    }
    console.log("line 155 "+ z);
}
foo3();
console.log("line 158 " + z);


console.log()

// checking scope of const;

const m = 10;
function foo4(){
    const m = 20;
    console.log(`Line 170 - ${m}`);
    if(true){
        const m = 30;
        console.log(`Line 173 ${m}`);
    }
    console.log(`Line 175 - ${m}`);
}

foo4();
console.log(`Line 177 ${m}`);
