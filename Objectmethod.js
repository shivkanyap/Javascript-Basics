// The Object.create() method is used to create a new object and link it to the prototype of an existing object.

const job={
    position:"developer",
    type:"hourly",
    isAvailable:true,
    showDetails(){
        console.log(`The ${this.position} is ${this.type} and ${this.isAvailable}`)
    }

}
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);
const employe=Object.create(job)
employe.position="Testing"
employe.showDetails()

//keys of job 
const keys=Object.keys(job)
console.log(keys)

//values
const values=Object.values(job)
console.log(values)

//Object.entries() creates a nested array of the key/value pairs of an object.
const entry=Object.entries(job)
console.log(entry,'in entries')

const info=Object.assign(name,details)
console.log(info)

console.log(info.hasOwnProperty('job'))
 let a,b,rest

 [a,b]=[10,20]
 const [x,y]=[30,40]
 rest=[1,2,3]

 console.log(a)//10
 console.log(y)//40
 console.log(...rest,x,y) //1,2,3,30,40
 console.log(Object.getOwnPropertyNames(name)) //[ 'firstName', 'lastName', 'job', 'employer' ]

 //Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
 console.log(Object.getOwnPropertyNames(job)) //[ 'position', 'type', 'isAvailable', 'showDetails' ]

//  const entr = new Map([
//     ['foo', 'bar'],
//     ['baz', 42]
//   ]);
  
//   const obj = Object.fromEntries(entr);
  
//   console.log(obj);