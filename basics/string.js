const name ="Vaibhav"
const repoCount = 100

//console.log(name+ repoCount + " value");

console.log(`My name is ${name} and Count is ${repoCount}`)

// ` backtick
// use for string inter pollation


const gameName = new String('vaibhav-vk')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('b'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne= "     Vaibhav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vaibhav.com/vaibhav%20kulkarni"
console.log(url.replace('%20', '-'))


console.log(url.includes('vaibhav'));

console.log(gameName.split('-'));

