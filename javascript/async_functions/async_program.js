
// Will print infinite loop of 1;
let a = false;
while (!a) {
    console.log(1);
}
setTimeout(function(){
    a = true;
},1000)


// will still print infinte loop of 1; because the control will never be out of while loop;
let b = false;
setTimeout(function(){
    b = true;
},1000)
while (!b) {
    console.log(1);
}

