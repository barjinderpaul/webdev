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

// Adding properties in JS => Just add a new property with;
obj.new_property = "I am a value of new_property";
console.log(obj.new_property);

