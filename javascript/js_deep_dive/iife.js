// IIFE : Immediately Invoked Function Expression

//Invokes immediately when it is created;
(function(sayHello){
    console.log(`Hello`)
})();

// Benefits : can help us to create local scope without disrupting global scope;

(function() {
    let a = 10
    let b = a/5
    console.log(a+b)
})();

// console.log(a) //In global scope a does not exist;


(function(l){
    l("hello world")
})(console.log)