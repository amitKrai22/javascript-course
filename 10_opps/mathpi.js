// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// Advance Object

const Tea = {
    name: "Green-Tea",
    price: 240,
    isAvilable: true
}

// console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

Object.defineProperty(Tea, 'name', {writable:false, enumerable:false})

console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

for (let [key, value] of Object.entries(Tea)) {
    console.log(`${key} : ${value}`);
    
}
