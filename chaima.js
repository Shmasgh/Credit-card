function arrayManipulation(array) {
    return array.reverse().filter(x=> Number.isInteger(x)).map(x=> x*2)
}


// [1,2,3,4,5,6,7,8,9,10,"a","b","c"] => [20,18,16,14,12,10,8,6,4,2]
// You have to use map function
// You have to use filter function

var array = [1,2,3,4,5,6,7,8,9,10,"a","b","c"]

console.log(arrayManipulation(array))