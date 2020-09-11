let arr1=[5,12,8,13,144]

//Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
var found=arr1.find(a=>{
    return a>12
}) 
console.log(found) //13  return only one value greater then 12
//Creates a new array with all of the elements of this array for which the provided filtering function returns true.
var arrayFilter=arr1.filter(a=>{
    return a>12
})
console.log(arrayFilter) //[13,144] return the value which are greater then 12

//
var arrayMap=arr1.map(a=>{
    return a>12
})
console.log(arrayMap) //[ false, false, false, true, true]

//Creates a new array with the results of calling a provided function on every element in this array.
var arrMap=arr1.map(function(a){
    return a*2
})
console.log(arrMap)

//The every() method tests whether all elements in the array pass the test implemented by the provided function.
var arrevery=arr1.every(a=>{
    return a>12
})
console.log(arrevery,' in every') //false 

//The some() method tests whether at least one element in the array passes the test implemented by the provided function.
var arrsome=arr1.some(a=>{
    return a>12
})
console.log(arrsome) //true