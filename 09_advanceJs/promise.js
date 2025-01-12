const promiseOne = new Promise(function(resolve, reject){
    // DO asyn task
    // DB call, cryptography, Network
    setTimeout(function(){
        console.log('Asyn task is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('Task Resolved')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asyn Task2 is complete')
        resolve()
    },1000)
}).then(function(){
    console.log('Asyn2 consumed');
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "coffee", email: "coffee@someone.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"Atom", email:"atom@someexample.com"})
        } else {
            reject('Error : Something went wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log('Tell me task are resolved or rejected'))

//
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"Javascript" , password:"321"})
        } else {
            reject('Js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()



//async function getAllUser(params) {
//    try {
//        const response = await fetch("https://jsonplaceholder.typicode.com/users")
//        const data = await response.json()
//        console.log(data);
//    } catch (error) {
//        console.log("E:", error);
//        
//    }
//        
//}
//
//getAllUser()


fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console('E:', error)
})