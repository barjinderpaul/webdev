// Variables;
let a = 10;
var b = 20; //var is old;
const c = 30; //const variables cannot be used;

// functions
function greet(name){
    console.log(`Hello ${name}`);
}

greet('xyz');

// Arrays
let arr = [1,2,3,4,5];

// Traversing arrays;
console.log('For loop');
for (let i = 0;i<arr.length;++i){
    console.log(arr[i]);
}

console.log('for-of loop');
for(let val of arr){
    console.log(val);
}

console.log(`for-in loop`);
for(let index in arr){
    console.log(arr[index]);
}

console.log('While loop');
let i=0;
while(i<arr.length){
    console.log(arr[i]);
    ++i;
}

console.log('Do while');
i=0;
do {
   console.log(arr[i]); 
   ++i;
} while (i<arr.length);



// Strings
let str = "This is a string";
console.log(str);
let str2 = 'This is javscript\'s string';
console.log(str2);

// @ts-ignore
let name = 'xyz';
let str3 = `This is the ES6 string format and ${name} is using it.`;
console.log(str3);

let str4 = `This is line \nThis is a new line`;
console.log(str4);

// String methods
let example = "This is a new string";

// 1. length of string;
console.log(example.length);

// 2. Finding strings in strings;
let key = 'is';
console.log(example.indexOf(key)); //First occurence of key;

console.log(example.indexOf(key,example.indexOf(key)+1)); //second occurence of key;
// Generic function;
let startIndexingFrom = 3;
console.log(example.indexOf(key,startIndexingFrom));    //second occurence;

// last index of key;
let key2 = 'i';
let lastIndexFrom = 13;
console.log(example.lastIndexOf(key2));
console.log(example.lastIndexOf(key2,lastIndexFrom));

// checking if string contains a specific key;
let key3 = 'machine';
if(example.indexOf(key3)===-1){
    console.log('Not found!');
}
else{
    console.log('Found');
}

// 3. Extracting strings from strings;
let example2 = "This is an example string";

// slice()
let smallStr = example2.slice(4,10);    //starting index, ending index(optional)
console.log(smallStr);

// substring()
let anotherSmallStr = example2.substring(4,10); //starting index, ending index;
console.log(anotherSmallStr);

// substr()
let diffSmallStr = example2.substr(1,3); //starting index, count of indices to get;
console.log(diffSmallStr);

// Difference between slice() and substr() ->
// slice() can take negative indices as well whereas substr() cannot;
// Remember : slicing always work from left to right(==>) whether indices are -ve;
// substr(starting_index, length_of_indices) also takes negative indices;


// ARRAYs
let array = [1,2,3,4,5];
console.log(array);

let hetroArray = ['xyz',281,12.2];
console.log(hetroArray);
console.log(typeof(hetroArray));

// for-of loop;
console.log(`for-of loop`);
for (let val of hetroArray){
    console.log(val);
}

// for-in loop;
console.log(`for-in loop`);
for (let index in hetroArray){
    console.log(hetroArray[index]);
}

// Methods on arrays;

let fruits = ['apple','mango'];

// 1. push; inserts item at end of array
fruits.push('watermelon');
console.log(fruits);

// 2. pop; removes item from the end of array;
let popped = fruits.pop();
console.log(popped);

// 3. shift; removes the first item from the array;
fruits.shift();
console.log(fruits);

// 4. unshift; adds element to the first position in the array;
fruits.unshift('melon');
console.log(fruits);

// We can also add/remove multiple elements to/from from the array respectively.
// multiple push example;
fruits.push('kiwi','orange','grapes','apple','watermelon');
console.log(fruits);

// Changing data in array; Data manipulation in arrays;

// continuing with fruits array;
console.log(fruits);

// 1. slice() ; returns a particular section of the array;
console.log(fruits.slice(0,4)); //original fruits array does not get changed.

// 2. splice(); returns and removes elements from the array
console.log(`Original array = ${fruits}`);
console.log(fruits.splice(0,3)); //starting_index, number_of_items to be spliced;
console.log(`After splicing ${fruits}`);

// removing and adding elements with splice, basically replacing;
fruits.splice(0,2,'melon','mango'); //adds from the starting_index;
console.log(fruits);

// 3. concat() ;  concats elements to the end of array; does not permanently pushes elements in arrays; Thus non-destructive in nature;
console.log(`Original array = ${fruits}`);
console.log(fruits.concat('xyzFruit'));
console.log(`After using concat, ${fruits} remains same`);

// if we want to permanently add elements with concat;

console.log(`Original fruits array = ${fruits}`);
fruits = fruits.concat(['another','one another']);
console.log(`Now fruits has become ${fruits}`);