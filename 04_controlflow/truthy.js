// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [],{}, function(){}

const useremail = "atom@gpt.com"
if (useremail){
    console.log("user exist");
    
}
else{
    console.log("User not detected");
    
}

// Nullish coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 12

// console.log(val1);

//ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

