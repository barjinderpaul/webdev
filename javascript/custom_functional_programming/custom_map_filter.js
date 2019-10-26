
let nums = [1,2,3,4,5]

// Custom map function
Array.prototype.myMap = function(callback) {
    let newNums = []
    for(let i=0;i<this.length;++i ){
        newNums.push(callback(this[i]))
    }
    return newNums
}

let newNums = nums.myMap((num)=>{
    return num*2
})

console.log(nums)
console.log(newNums)



// custom filter function
Array.prototype.myFilter = function(callback) {
    let filteredArray = []

    for(let i=0;i<this.length;++i) {
        if(callback(this[i])) {
            filteredArray.push(this[i])
        }
    }

    return filteredArray
}

let filteredNums = nums.myFilter( num => !(num&1) )
console.log(nums)

console.log(filteredNums)


// Converting post titles to url-slugs
let title = 'Winter is coming'
let urlSlug = title.split(' ').map(word => word.toLowerCase()).join('-')
console.log(urlSlug)