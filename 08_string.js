let name="hello" + "Word";
console.log(name)

const firstName="Rutuja"
const repoCount=50;

console.log(firstName + repoCount + " Value")

console.log(`Hello my name is ${firstName} and my repo count is ${repoCount}`);

const gameName=new  String('BATMIANT-AN')
// console.log(gameName.length)
// console.log(typeof gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('B'));

// const newString= gameName.substring(0,4)
// console.log(newString)

const anotherString=gameName.slice(2,-5)
console.log(anotherString)

const newStringOne ="   Rutuja   "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimStart())
console.log(newStringOne.trimEnd())

const url="https://rutuja.com/rutuja%20ghodake"
console.log(url.replace('%20','_'))

console.log(url.includes('rutuja'))   //true
console.log(url.includes('rutik'))  //false

console.log(gameName.split('_'))
