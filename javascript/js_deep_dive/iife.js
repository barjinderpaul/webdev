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
})(console.log);


(function(print){
    print("Hello world print")
})(console.log)


// For loop set timeout with iife;
// Will print 10, 10 times;
// can be solved by iife as well as using let
for (var i=0;i<10;++i){
    setTimeout(function(){
        console.log(i)
    },100)
}

// Solving with iife;

for(var i=0;i<10;i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        },100)
    })(i)
}

// Solving with let;
for(let i=0;i<10;i++){
    setTimeout(() => {
        console.log(i)
    }, 100);
}

// solving for es5 users;
for(var i=0;i<10;i++){
    setTimeout(console.log,100,i)
}