// Primitive Datatype 

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id===anotherId);


const bigNumber = 243276437666788789n


// Reference Datatype (Non primitive)

// Array, Objects, Functions

const heros = ["shaktimen","nagraj","doga"];
let myObj = {
    name:"Vaibhav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros );
