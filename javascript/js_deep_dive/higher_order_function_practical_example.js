

function createCounter (intValue, delta) {
    let val = intValue
    function counter() {
        // console.log(`Value of val = ${val}`)
        val = val + delta;
        return val;
    }
    return counter;
}

// Value of val does not die because of closure scope;
// Till the fiveCount is in memory, it will retain the value of val;
// When we run fiveCount, only the inner function counter runs and not the ourer scope;
// So, when we call fiveCount() again and again, only the counter works, which increases the value by delta;

let fiveCount  = createCounter(5,5);
console.log(fiveCount());
console.log(fiveCount());
console.log(fiveCount());



function createTimeStamps(timeStampsArr, currentTimeStamp){
    let currTime = currentTimeStamp;
    function pushTimeStamp() {
        timeStampsArr.push(timeStampsArr[timeStampsArr.length-1]+currTime);
        return timeStampsArr;
    }
    return pushTimeStamp;
}

let timeStamps = []
timeStamps.push(Date.now())


let seeTimeStamps = createTimeStamps(timeStamps,Date.now());

console.log(seeTimeStamps())
console.log(seeTimeStamps())
console.log(seeTimeStamps())