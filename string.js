let str='JavaScript, learn to see'
let node='welcome'

console.log(str.slice(0,11))//start, end return JavaScript,
console.log(str.substr(0,11)) //start ,length return JavaScript,
console.log(str.substring(0,11))//start,end
console.log(str.split(' ')) //['Javascript','learn','to','see']
console.log(str.indexOf('a')) //1
console.log(str.lastIndexOf('a')) //14
console.log(str.charAt(1)) //a
console.log(str.charCodeAt('a'))//74
console.log(str.codePointAt('a')) //74
console.log(node+str) //
console.log(str.includes('learn')) //true
// console.log(str.repeat('done'))
console.log(str.replace('JavaScript','Node')) //Node,learn to see
console.log(str.substr(0,5)) //JavaS
console.log(str.search('JavaScript')) //0
 
