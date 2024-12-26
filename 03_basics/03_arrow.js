
const users = {
    username: "nikal",
    price: 1999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        // this keyword is used to access current context.
        // console.log(this);
        
    }
}

// users.welcomeMessage()
// users.username = "cobalt"
// users.welcomeMessage()

// console.log(this);

// function pluto(){
//     const username = "atoms"
//     console.log(this.username);
    
// }
// pluto()


// const pluto = function (){
//     const username = "atoms"
//     console.log(this.username);
    
// }
// pluto()

const pluto = () => {
    const username = "atom"
    console.log(this.username);
    
}
// pluto()

// const addTwoNumber = (num1, num2) => {  // explicite return
//     return num1 + num2
// }

// const addTwoNumber = (num1, num2) => num1 + num2 // impilicite return
const addTwoNumber = (num1, num2) => ({username:"atoms"}) // impilicite return
console.log(addTwoNumber(3,6));
