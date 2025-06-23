// singleton - It will become a Singleton only if it is created uding the constructor. 
// Object.create

// Object literals  - Declare the object

const mySym = Symbol("key1")

const JsUser ={
    name : "vaibhav",
    "full name" : "Vaibhav Kulkarni",
    [mySym] : "mykey1",
    age : 23,
    location : "Pune",
    email : "vaibhavk@gmail.com",
    isLoggeIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

JsUser.email = "vaibhav@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "vaibhav@google.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}



JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
