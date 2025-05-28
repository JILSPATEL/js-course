//Primitives
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score=100
const scoreVal=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);
// const bigNumber = 3456543576654356754n


// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj={
    name:"jils",
    age:22,
}

const myFunction=function(){
    console.log("Hello");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//stack(primitive),heap(non-primitive)

let myName="Jils"
let anotherName=myName
anotherName="Patel"
console.log(myName);
console.log(anotherName);

let userOne={
    email:"abc123@gmail.com",
    upi:"abc123@upi"
}
let userTwo=userOne

userTwo.email="xyz123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
