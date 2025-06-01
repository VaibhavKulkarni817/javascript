const accountId = 12345
let accountEmail = "vaibhav643@gmail.com"
var accountPassword = "1234"
accountCity = "Pune"
let accountState;


// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "233456"
accountCity = "Satara"


console.log(accountId);

/* 
Prefer not to use var
because of isuue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);