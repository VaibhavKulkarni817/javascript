// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["skatiman","Oggy", "Bhim"]

const myArr2 = new Array(1,2,3,4)

//console.log(myArr[1]);

// Array Methods
 
// myArr.push(6)         // Add The values in Array
// myArr.push(7) 
// myArr.pop()       // remove the last value of Array  

//myArr.unshift(9)     // add the value in front of Array
//myArr.shift()          // Delete the first number of Array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice , splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2)
