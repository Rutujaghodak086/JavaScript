//primative data type

//7types: String,Number,bigInt,boolean ,NUll,Undifine,symbol

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
//Referance (Non Primative)

// Array,Objects,Function

const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"Rutuja",
    age:22,
}

const myFunction=function (){
 console.log("Hello")
}
// console.log(typeof outsideTemp)
// console.log(typeof myFunction)
console.log(typeof anotherId)
console.log(typeof id)
myFunction()
