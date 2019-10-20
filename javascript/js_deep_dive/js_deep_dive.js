function greeter(){
    console.log("Hello!");

}

let helloSayer = greeter;   //Function can be stored in another function.
console.log(helloSayer == greeter);

greeter();
helloSayer();


// Creating individual files for each topic from now on.