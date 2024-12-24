// Primitive

// 7 types : String, Number, boolean, Symbol, null, undefined, BigInt

const score = 110
const scorevalue = 110.9

const isLoggedIn = true
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// Reference (Non - Premitive)
// Array, Object, Fucntions

const hero = ['atom','minirals', 'hydro']
let obj = {
    'name': 'atom',
    'weight': 12,
}

const fun = function(){
    console.log("hello world");
    
}

// Stack(primitive), Heap (Non-Premitive)

let tubename = "atombom"
let anotherName = tubename
anotherName = 'yourName'
console.log(anotherName);
console.log(tubename);


let newObj = {
    'emailId': 'atom@goole.com',
    'password': 12345,
}

let newObj2 = newObj
newObj2.emailId = 'element@google.com'

console.log(newObj);
console.log(newObj2);


