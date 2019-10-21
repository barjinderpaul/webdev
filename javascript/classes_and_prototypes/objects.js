let x = {
    a:10,
    b:"ad",
    c:false,
    d:[1,2,3],
    e: {
        p:"add",
        q:true
    }
}

x.new_property = "new value"

console.log(x);

// this. is used to refer things inside the same object

let obj = {
    anNumber : 123,
    aString : "abc",
    aFunction : function(){
        return (this.anNumber + this.aString);
    }
}

console.log(obj.aFunction())