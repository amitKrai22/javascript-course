const accountId = 12345 // lock the value or not ever change
let EmailId = "amit@gmail.com"
var EmailPassword = "23456"
accountCity = "varanasi"
let accountState

// accountId = 654332

console.log(accountId)
/*
prefer not to use var
because issue in block scope and functional scope
*/
console.table([accountId,EmailId,EmailPassword,accountCity, accountState])