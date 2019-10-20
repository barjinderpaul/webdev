
let arr = [6, 4, 9, 1, 7, 2, 14, 26, 35]
console.log(arr.sort()) //Cpnverts "number" to "string" and then sorts lexicographically;

// As we are passing a function as an argument to .sort(), this it makes it as a higher order function;

// Sorting ascending order
console.log(arr.sort((a, b) => {
    return a - b;
}))

// Sorting based on unit digit; - mod technique;
console.log(arr.sort((a, b) => {
    return a % 10 - b % 10;
}))

// Sorting based on unit digit; - string based technique
console.log(arr.sort((a, b) => {
    // console.log(a,b)
    a = a.toString();
    b = b.toString();
    let aLast = a[a.length - 1]
    let bLast = b[b.length - 1]
    return aLast - bLast;
}));


// Map function;

// What map does it is that it takes a function as an argument, and then it
// takes each item and passes it through that function and creates a new array
// of the same size;

let arr2 = [42, 13, 12, 4, 124, 2, 4, 1];
let arr3 = arr2.map((item) => {
    // console.log(item)
    return 100 - item;
})
console.log(arr3)

// squaring;
arr = [1, 2, 3, 4, 5]
let sqaured = arr.map((item) => item * item);
console.log(sqaured);
// OR;
function Square(item) {
    return item * item;
}
let squared2 = arr.map(Square);
console.log(squared2)


// Math.sqrt is also a function which takes a number and returns the square of the number;

let squareRoot = sqaured.map(Math.sqrt)
console.log(squareRoot);


// Filter function;
/*
    Creates an empty array;
    Iterates over the array on which it is applied;
    if the condition mentioned in the function is true, it is passed down to newly created array, else ignored;
    return the newly created array;
*/

arr = [01,12,23,4,5,16];
let greaterThanTen = arr.filter( (item) => {
    return item > 10;
})
console.log(greaterThanTen)

// Or;
function greaterThanTenFun(item) {
    return item > 10;
}

let greaterThanTen2 = arr.filter(greaterThanTenFun);
console.log(greaterThanTen2)

// Combining two filters;
function modWith2 (num) {
    return num%2 ? 0 : 1;
}
function modWith3 (num ){
    return num%3 ? 0 : 1;
}

arr = [1,2,3,4,12,24,32,36]
let twoAndThree = arr.filter(modWith2).filter(modWith3);
console.log(twoAndThree)

// Reduce function;
/* 
    What reduce does is that :
    it's argument function takes 2 arguments;
    first argument is called accumulator, it initially holds the first element of the array/data passed;
    it starts iterating the array/data from the second element;
    then, it applies the operation on accumulator(firstElement of data) and secondElement of data (if exists),
    and stores the result in accumulator and item is iterated to the next item of the array/data;
    This continue till the end of the array/data and at last accumulator is returned;
*/

arr = [1,2,3,4,5,6,7,8]
let sum = arr.reduce( (accum,item) => {
    return accum + item
})

console.log(sum)


// Combining map, filter and reduce;

arr = [1,2,3,4,5,6,7,8,9,12,24,4,6,36]
// arr = [6,6]
let productOfNumbersModedWhichModWith2and3 = arr.map(Square).filter(modWith3).filter(modWith2).reduce( (accum,item) => accum*item )
console.log(productOfNumbersModedWhichModWith2and3)

