array=[10,15,2,5] 
arr1=[1,4]
let fruits=['kiwi','apple','mango','jackfruit']

console.log(array.push(20)) // return the new length of array
console.log(array) //[10,15,2,5,20]

console.log(array.pop()) // display the popped element
console.log(array)

console.log(array.concat(arr1)) // [ 10, 15, 2, 5, 1, 4 ]

//The fill() method fills the specified elements in an array with a static value.
// console.log(fruits.fill('grapes')) //[ 'grapes', 'grapes', 'grapes' ]

//Copy the first two array elements to the last two array elements:
console.log(fruits.copyWithin(2,0)) //[ 'kiwi', 'apple', 'kiwi', 'apple' ]
//modifies the original array



//The Array.from() method returns an Array object from any object with a length property or an iterable object.
console.log(Array.from('ABCD')) //[ 'A', 'B', 'C', 'D' ]


// let n=fruits.includes('kiwi')
// console.log( n)


// let fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits,'deep')
let n = fruits.includes("Mango");
console.log(n)

let l=fruits.indexOf('apple')
console.log(l,'in l')

console.log(fruits.join())
console.log(fruits)

console.log(array.reverse())  //[5, 2, 15, 10] modifies the original array
console.log(array.shift())  //removes the first item of array  5

//The slice() method returns the selected elements in an array, as a new array object.
console.log(array.slice(0,2)) //[2,15]

console.log(fruits.toString()) //kiwi,apple,kiwi,apple
console.log(fruits.unshift('mango')) //return new length
console.log(fruits)
console.log(fruits.values())