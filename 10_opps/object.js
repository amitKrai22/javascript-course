function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++;
}

createUser.prototype.printMe = function(){
    console.log(`Price of coffee is ${this.price}`);
    
}

const coffee = new createUser("Bru", 240)
const code = createUser('javascript', 200)

coffee.printMe()

/* 
Here what happend behind the scene when new keyword is used

A new object is created: THe new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the protype property of the constructor function. This means that it has acess to properties and methods 
defined on the constructor prototype.

The constructor is called: The Constructor function is called with the specified arguments and this is bound to the newly crated object. If no explicit return value is
specified from the constructor, Javascript assumes this, the newly created object, to be the intened return value.

The new object is returned.*/