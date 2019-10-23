function count(){
    let intitial = 1;
    function plus(){
        console.log(++intitial);
    }
    plus();
}

count()

// Closures;

function count2() {
    let init = 1;
    let incr = () => {
        console.log(++init)
    }
    return incr;
}

let c = count2()
c()
c()


// Some real life example;
// We want to know how many times a function query_db is called;

function query_db_count() {
    let counter = 1;
    let increment = () => console.log(`function query_db() called ${counter++} times`)
    return increment;
}

let query_db_counter = query_db_count();

function query_db(){
    console.log(`This is a query_db function`)
    // any code;
    query_db_counter();
}

for(let i=0;i<10;++i){
    query_db();
}

