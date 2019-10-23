// setTimeout()
function sayHello() {
    console.log("Hello world from setTimeout")
}

setTimeout(sayHello,1000)
setTimeout(sayHello,1000)

// setInterval : runs the function after every time_delay;
// it keeps calling the function untill it is cancelled;
// setInterval(sayHello,1000)

// cancelling setInterval;

// setInterval function returns an id;
//to cancel the setInterval

let runCount=0;
function print(){
    runCount++;
    if(runCount>5){
        clearInterval(intervalId);
    }
    console.log(`Hello world;`)
}

let intervalId = setInterval(print,1000)



