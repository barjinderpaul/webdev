/* basic program
function task (done) {
    console.log('doing some task')
    done();
}

task(function() {
    console.log("task was done")
})

console.log("we did a task")
*/

// setTimeout;

function done() {
    console.log(`Task done`)
}

// setTimeout(function,time in milliseconds)
setTimeout(done,1000);
// setTimeout calls the done function after the delay of 1s;
// setTimeout is an example of async function;

console.log(`we did a task`)


console.log(`origin example \n \n`)

function task( done ){
    console.log(`Doing task`)
    setTimeout(done,1000)
}
task(function(){
    console.log(`Task done`)
})
console.log(`we did a task`)