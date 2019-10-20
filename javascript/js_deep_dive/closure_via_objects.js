// Closures;

// function createCounter(intVal, delta) {
//     let val = intVal;

//     let counter = {
//         incr : function() {
//             val+=delta;
//         },
//         decr : function () {
//             val-=delta;
//         },
//         show : function () {
//             console.log(`Value of val = ${val}`)
//         }
//     }

//     return counter;
// }

    function createCounter(intVal, delta) {
        let val = intVal;
        
        let counter = {
            incr : () => val+=delta,
            decr : () => val-=delta,
            show : () => console.log(`Value of val = ${val}`)
        }

        return counter;
    }


let a = createCounter(50,5);
a.show();
a.incr();
a.incr();
a.show();

console.log(typeof a)
console.log(typeof a.show)
console.log(typeof a.show())