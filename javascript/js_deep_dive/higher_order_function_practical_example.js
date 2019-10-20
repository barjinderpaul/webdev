

function createCounter (intValue, delta) {
    let val = intValue
    function counter() {
        val = val + delta;
        return val;
    }
    return counter;
}

// Value of val does not die because of closures;
// Till the fiveCount is in memory, it will retain the value of val;
// When we run fiveCount, only the inner function counter runs and not the ourer scope;
// So, when we call fiveCount() again and again, only the counter works, which increases the value by delta;

let fiveCount  = createCounter(5,5);
console.log(fiveCount());
console.log(fiveCount());
console.log(fiveCount());

