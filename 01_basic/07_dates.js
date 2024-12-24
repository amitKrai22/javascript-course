// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());


// let customDate = new Date(2024, 1, 14)
// console.log(customDate.toDateString());
// let customDate = new Date(2024,0,12,4,5)
let customDate = new Date("01-15-2024")
// console.log(customDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(customDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:'long'
}))







