// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

//let myCreateDate = new Date(2025,8,8)
//let myCreateDate = new Date(2025,8,8,5,3)
//let myCreateDate = new Date("2025-09-08")
let myCreateDate = new Date("09-08-2025")
//console.log(myCreateDate.toLocaleDateString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})

