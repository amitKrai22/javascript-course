// Function & Parameter

function myname(){
    console.log('c');
    console.log('a');
    console.log('r');
    console.log('b');
    console.log('o');
    console.log('n');
    
}
// myname()

//function addTwoNumber(num1, num2){
   // console.log(num1 + num2);
//}

function addTwoNumber(num1, num2){
    // console.log(num1 + num2);
    return num1+num2
    
}
let result = addTwoNumber(3,4)
// console.log("Result: ", result);

function userDetails(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} is just logged in`
}

// console.log(userDetails("atoms"));

function calculatecartamount(val1, ...rate){
    return rate
}

// console.log(calculatecartamount(200,300,500,2000));

const user = {
    username: "atoms",
    price: 100,
}

function courseUser(details){
    console.log(`User name of this course is ${details.username} and price of course is ${details.price}`);
    
}
// courseUser(user)
// courseUser({
//     username:'hydogen',
//     price: 299,
// })

const myNewArr = [200,400,100]
function getArr(arr){
    return arr[1]
}
console.log(getArr(myNewArr));

